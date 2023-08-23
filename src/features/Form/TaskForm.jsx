import { Box, Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTask, showForm } from "../Form/taskFormSlice";
import { useState } from "react";
import { fetchTasks } from "../Table/taskTableSlice";

function TaskForm() {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  function handleClick() {
    dispatch(showForm());
  }
  function handleSumbit() {
    setIsEmpty(false);
    if (!taskText) {
      setIsEmpty(true);
      return;
    }
    dispatch(addTask(taskText));
    dispatch(fetchTasks());
  }

  return (
    <Box sx={{ width: "100%" }}>
      <form
        onSubmit={handleSumbit}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 10,
        }}
      >
        <TextField
          type="text"
          size="small"
          placeholder="Please enter your task"
          fullWidth={true}
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          onSubmit={handleSumbit}
          error={isEmpty}
          label={isEmpty && "the field is empty"}
          InputLabelProps={{ shrink: true }}
          inputProps={{
            sx: {
              "&::placeholder": {
                color: "grey",
              },
            },
          }}
        ></TextField>
        <Box sx={{ display: "flex", height: "100%", gap: 1 }}>
          <Button
            sx={{ minWidth: 80, marginX: "auto" }}
            variant="contained"
            size="small"
            onClick={handleSumbit}
          >
            Confirm
          </Button>
          <Button
            sx={{ minWidth: 80, marginX: "auto" }}
            variant="contained"
            size="small"
            onClick={handleClick}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default TaskForm;
