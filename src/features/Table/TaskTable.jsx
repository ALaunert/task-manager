/* eslint-disable no-unused-vars */
import Button from "@mui/material/Button";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./taskTableSlice";
import TableHeader from "./TableHeader";
import TaskItem from "./TaskItem";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function TaskTable() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(
    function () {
      dispatch(fetchTasks());
    },
    [dispatch]
  );
  const tasks = useSelector((state) => state.taskTable.tasks);
  const filter = searchParams.get("status");
  const displayedTasks =
    filter === "all" ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <TableContainer component={Paper} elevation={12}>
      <Table>
        {/* sx={{ minWidth: 720 }} */}
        <TableHeader />
        <TableBody>
          {displayedTasks.map((task) => (
            <TaskItem key={task.task} task={task} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TaskTable;