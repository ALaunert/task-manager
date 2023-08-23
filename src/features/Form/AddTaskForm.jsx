import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { showForm } from "../Form/taskFormSlice";
import TaskForm from "./TaskForm";

function AddTaskForm() {
  const showAddForm = useSelector((state) => state.taskForm.showAddForm);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(showForm());
  }

  return (
    <>
      <Box
        sx={{
          mt: 2,
          borderRadius: 3,
          height: 20,
          backgroundColor: "#eee",
          display: "flex",
          alignItems: "center",
          p: 2,
          gap: 3,
        }}
      >
        {showAddForm ? (
          <TaskForm />
        ) : (
          <Button
            sx={{ minWidth: 100, marginX: "auto" }}
            variant="contained"
            size="small"
            onClick={handleClick}
          >
            Add task
          </Button>
        )}
      </Box>
    </>
  );
}

export default AddTaskForm;
