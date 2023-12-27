import React, { useState } from "react";
import {Container, Typography, Box, Stack, TextField, Button} from "@mui/material";
import { useParams } from "react-router-dom";
import templatesList from '../../json/templatesList.json';
import "./form.scss";
import { api } from "../../chatGpt/chatApi";

function Form() {
  const { id } = useParams();
  const templates = templatesList.templates;
  const currentTemplate = templates[id > 0 ? id -1 : id];
  const [promt, setPromt] = useState('');

  const sendPromt = async () => {
    const fullPromt = currentTemplate.email.replace("%Email%", promt);
    const testPpomt = `
  Generate 2 questions for quiz to check English level.
  Provide output in the form of JSON array. Each item is an object with 
  "question"(string) and "options" property(array).
  Each optio property contains 2 answers.`;
    const res = await api.sendMessage(testPpomt);
    console.log(res, 'resp');
  };

  return (
    <Container className="form-container" maxWidth>
      <Typography variant="h6" pt={"24px"}>
        Current template
      </Typography>
      <Typography variant="body1">{currentTemplate.email}</Typography>
      <Typography variant="h5" p={"24px"}>
        Insert your promt
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        pb={"24px"}
      >
        <TextField
            variant='outlined'
            label='Promt'
            placeholder='Leave your promt...'
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
          <Button disabled={!promt} variant="contained" size="small" onClick={() => {
            sendPromt();
          }}>Send</Button>
        </Stack>
      </Box>

    </Container>
  )
}

export default Form;