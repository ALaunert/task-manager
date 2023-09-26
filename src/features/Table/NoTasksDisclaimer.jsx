import { TableCell, TableRow } from "@mui/material";

function NoTasksDisclaimer() {
  return (
    <TableRow>
      <TableCell align="center" colSpan={4}>
        Please add new task
      </TableCell>
    </TableRow>
  );
}

export default NoTasksDisclaimer;
