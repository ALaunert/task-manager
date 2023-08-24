/* eslint-disable no-unused-vars */
import Button from "@mui/material/Button";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./taskTableSlice";
import TableHeader from "./TableHeader";
import TaskItem from "./TaskItem";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const StyledTableContainer = styled(TableContainer)`
  max-width: 100%;
`;

function TaskTable() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const filter = searchParams.get("status");
  useEffect(
    function () {
      searchParams.set("status", "all");
      setSearchParams(searchParams);
      dispatch(fetchTasks());
    },
    [dispatch]
  );
  const tasks = useSelector((state) => state.taskTable.tasks);

  const displayedTasks =
    filter === "all" ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <StyledTableContainer component={Paper} elevation={12}>
      <Table>
        <TableHeader />
        <TableBody>
          {tasks.length === 0 ? (
            <TableRow>
              <TableCell align="center" colSpan={4}>
                Please add new task
              </TableCell>
            </TableRow>
          ) : (
            displayedTasks.map((task) => (
              <TaskItem key={task.task} task={task} />
            ))
          )}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}

export default TaskTable;
