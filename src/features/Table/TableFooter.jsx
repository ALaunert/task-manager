import { TableRow } from "@mui/material";

import FilterCell from "./FilterCell";
import SearchCell from "./SearchCell";
import AddTaskCell from "./AddTaskCell";

function TableFooter() {
  return (
    <TableRow>
      <AddTaskCell />
      <SearchCell />
      <FilterCell />
    </TableRow>
  );
}

export default TableFooter;
