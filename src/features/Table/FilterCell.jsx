import { TableCell } from "@mui/material";
import Filter from "./Filter";

function FilterCell() {
  return (
    <TableCell sx={{ padding: 1 }} colSpan={2}>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "complete", label: "Complete" },
          { value: "active", label: "Active" },
          { value: "not-started", label: "Not started" },
        ]}
      />
    </TableCell>
  );
}

export default FilterCell;
