import { Button, TableCell } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { showForm } from "../Form/taskFormSlice";
function AddTaskCell() {
  const dispatch = useDispatch();
  function handleAddClick() {
    dispatch(showForm());
  }
  return (
    <TableCell sx={{ padding: 1 }}>
      <Button
        sx={{ padding: 0.5, minWidth: 25 }}
        variant="contained"
        size="small"
        onClick={handleAddClick}
      >
        <AddIcon fontSize="small" />
      </Button>
    </TableCell>
  );
}

export default AddTaskCell;
