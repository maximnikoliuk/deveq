import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Stack,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./form.scss";
import { postPrompt } from "../../api/prompt";
import { useDispatch } from "react-redux";
import { setResult } from "../../redux/sliceResult";

function Form({ setEmailText, setPerfectEmailText }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [promt, setPromt] = useState("");
  const [template, setTemplate] = useState(1);
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getJson = async () => {
      const response = await fetch("/templatesList.json");
      const json = await response.json();
      setJsonData(json);
    };
    getJson();
  }, []);

  const { templates, responseStructure } = jsonData ?? {};

  let currentTemplateIndex = template - 1;
  const currentTemplate = templates ? templates[currentTemplateIndex] : {};

  const sendPromt = async () => {
    setLoading(true);
    try {
      //for displaying on result page
      setEmailText(promt);
      setPerfectEmailText(currentTemplate?.perfectEmail);

      const populatedInstructions = currentTemplate?.instructions?.replace(
        "%Email%",
        promt
      );
      const fullPrompt = `${populatedInstructions} \n ${currentTemplate.criteria} \n ${responseStructure}`;
      const res = await postPrompt(fullPrompt);
      setLoading(false);
      const tableData = res?.result?.table;
      if (tableData) {
        dispatch(setResult(tableData));
        navigate("/result");
      }
    } catch (e) {
      setLoading(false);
      console.log(e, "Error");
    }
  };

  return (
    <Container className="form-container" maxWidth>
      <Typography variant="h6" pt={"24px"} pb={"12px"}>
        Current template:
      </Typography>
      <FormControl size="small" sx={{ minWidth: 175 }}>
        <InputLabel id="template-label">Template</InputLabel>
        <Select
          labelId="template-label"
          value={template}
          label="Template"
          onChange={(e) => {
            setTemplate(+e.target.value);
          }}
        >
          {templates?.map((t) => (
            <MenuItem key={`tmpl-${t.id}`} value={t.id}>
              {t.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography variant="h5" p={"24px"}>
        Insert your promt
      </Typography>
      <Box component="form" noValidate autoComplete="off" pb={"24px"}>
        <TextField
          variant="outlined"
          label="Text"
          placeholder="Leave your text..."
          multiline
          minRows={3}
          fullWidth
          value={promt}
          onChange={(e) => setPromt(e.target.value)}
        />
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          mt={2}
        >
          {loading ? <CircularProgress sx={{ marginBottom: "12px" }} /> : ""}
          <Button
            disabled={!promt || loading}
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
