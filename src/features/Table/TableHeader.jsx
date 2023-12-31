import { TableCell, TableHead, TableRow } from "@mui/material";
import styled from "styled-components";
// import Filter from "./Filter";

const StyledTableCell = styled(TableCell)`
  @media (min-width: 350px) {
    width: 200px;
  }
  @media (min-width: 600px) {
    width: 350px;
  }
  @media (min-width: 900px) {
    width: 550px;
  }
`;

const StyledHeaderText = styled.p`
  margin: 0;
  font-size: 1.25rem;
  color: #444;
  letter-spacing: 2px;
`;

function TableHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell colSpan={4} align="center">
          <StyledHeaderText>THINGS TO DO</StyledHeaderText>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ width: 5, padding: 0 }} align="center">
          #
        </TableCell>
        <StyledTableCell align="center">Task</StyledTableCell>
        <TableCell sx={{ width: 30 }} align="center">
          Status
        </TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
}

export default TableHeader;
