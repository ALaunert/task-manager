import { TableCell, TableRow } from "@mui/material";
import { useSelector } from "react-redux";

import TaskForm from "./TaskForm";

function AddTaskForm() {
  const showAddForm = useSelector((state) => state.taskForm.showAddForm);

  return (
    // <>
    //   <Box
    //     sx={{
    //       borderRadius: 3,
    //       backgroundColor: "#fff",
    //       display: "flex",
    //       alignItems: "center",
    //       gap: 3,
    //     }}
    //   >
    //     {showAddForm && <TaskForm />}
    //   </Box>
    // </>
    <>
      {showAddForm && (
        <TableRow>
          <TableCell colSpan={4}>
            <TaskForm />
          </TableCell>
        </TableRow>
      )}
    </>
  );
}

export default AddTaskForm;
