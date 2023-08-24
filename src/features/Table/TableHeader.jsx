import { TableCell, TableHead, TableRow } from "@mui/material";
// import Filter from "./Filter";

function TableHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell sx={{ width: 10 }} align="left">
          #
        </TableCell>
        <TableCell align="center">Task</TableCell>
        <TableCell sx={{ minWidth: 50 }} align="center">
          Status
        </TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
}

export default TableHeader;
