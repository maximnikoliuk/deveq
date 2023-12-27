import React, { useEffect } from 'react';
import './landing.scss';
import {Box, Container, Stack, Typography} from "@mui/material";

function LandingPage() {
  return (
      <>
        <Container className='logo-container' maxWidth>
          <Box
              display="flex"
              justifyContent="center"
              alignItems="flex-end"
              style={{
                height: '100%'
              }}
          >
            <Stack
                direction='column'
                spacing={8}
                p={'24px'}
            >
              <Typography variant="h1">
                DevEQ
              </Typography>
              <Typography variant="h1">
                SKILLS for the AI AGE
              </Typography>
              <Typography variant="h6">
                Forging tomorrow, unseen.
              </Typography>
            </Stack>
          </Box>
        </Container>
        <Container className='info-container' maxWidth>
          <Typography p={'24px'} variant="h6">
            Go to form
          </Typography>
        </Container>
      </>
  )
}

export default LandingPage;