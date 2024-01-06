import React from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Container,
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  TableCell,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import "./result.scss";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Result({ emailText, perfectEmailText }) {
  const navigate = useNavigate();
  const rows = useSelector((state) => state.result.gptResult);

  return (
    <Container className="result-container" maxWidth>
      <Box className="result-box" pt={"24px"}>
        <Button
          variant="outlined"
          onClick={() => {
            navigate("/form");
          }}
        >
          Back to form
        </Button>
      </Box>
      <Typography variant="h6" pt={"24px"}>
        Your email:
      </Typography>
      <Typography variant="body1">{emailText}</Typography>
      <Typography variant="h6" pt={"24px"}>
        Result
      </Typography>
      <Box pb={"24px"}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Criteria</StyledTableCell>
                <StyledTableCell align="right">Rank</StyledTableCell>
                <StyledTableCell align="right">Description</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.criteria}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.rank}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.description}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Typography variant="h6" pt={"24px"}>
        An ideal email:
      </Typography>
      <Typography variant="body1">{perfectEmailText}</Typography>
    </Container>
  );
}

export default Result;
