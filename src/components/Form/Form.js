import React, { useState } from "react";
import {Container, Typography, Box, Stack, TextField, Button} from "@mui/material";
import { useParams } from "react-router-dom";
import templatesList from '../../json/templatesList.json';
import "./form.scss";

function Form() {
  const { id } = useParams();
  const templates = templatesList.templates;
  const currentTemplate = templates[id > 0 ? id -1 : id];
  const [promt, setPromt] = useState('');

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

          }}>Send</Button>
        </Stack>
      </Box>

    </Container>
  )
}

export default Form;