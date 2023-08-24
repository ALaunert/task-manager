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
function TableHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell sx={{ width: 10 }} align="left">
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
