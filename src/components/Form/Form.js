import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import templatesList from "../../../public/templatesList.json";
import "./form.scss";
import { api } from "../../chatGpt/chatApi";
import { useDispatch } from "react-redux";
import { setResult } from "../../redux/sliceResult";

function Form() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [promt, setPromt] = useState("");

  const { templates, responseStructure } = templatesList;

  let currentTemplateIndex = +id - 1;
  const currentTemplate = templates[currentTemplateIndex] ?? {};

  useEffect(() => {
    if (typeof +id !== "number" || +id < 1 || isNaN(+id)) {
      navigate("/forms/1");
    }

    if (+id > templates.length) {
      navigate(`/forms/${templates.length}`);
    }
  }, []);

  const sendPromt = async () => {
    try {
      const populatedInstructions = currentTemplate?.instructions?.replace(
        "%Email%",
        promt
      );
      const fullPrompt = `${populatedInstructions} \n ${currentTemplate.criteria} \n ${responseStructure}`;

      const res = await api.sendMessage(fullPrompt);

      const parsedResult = JSON.parse(res?.text);
      if (parsedResult?.table) {
        dispatch(setResult(parsedResult.table));
        navigate("/result");
      }
    } catch (e) {
      console.log(e, "Error");
    }
  };

  return (
    <Container className="form-container" maxWidth>
      <Typography variant="h6" pt={"24px"}>
        Current template:
      </Typography>
      <Typography variant="body1">{currentTemplate?.title}</Typography>
      <Typography variant="h5" p={"24px"}>
        Insert your promt
      </Typography>
      <Box component="form" noValidate autoComplete="off" pb={"24px"}>
        <TextField
          variant="outlined"
          label="Promt"
          placeholder="Leave your promt..."
          multiline
          minRows={3}
          fullWidth
          value={promt}
          onChange={(e) => setPromt(e.target.value)}
        />
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          mt={2}
        >
          <Button
            disabled={!promt}
            variant="contained"
            size="small"
            onClick={() => {
              sendPromt();
            }}
          >
            Send
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

export default Form;
