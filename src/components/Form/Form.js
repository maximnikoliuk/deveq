import React from 'react';
import { Container, Typography } from "@mui/material";

function Info() {
  return (
    <Container className='info-container' maxWidth>
      <Typography p={'24px'} variant="h6">
        Go to form
      </Typography>
    </Container>
  )
}

export default Info;