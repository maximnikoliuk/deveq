import React from "react";
import { Button, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./info.scss";

function Info() {
  const navigate = useNavigate();
  return (
    <Container className="info-container" maxWidth>
      <Box p={"24px"}>
        <Button
            variant="outlined"
            onClick={() => {
              navigate("/forms/1")
            }}
        >
          Go to form
        </Button>
      </Box>
    </Container>
  )
}

export default Info;