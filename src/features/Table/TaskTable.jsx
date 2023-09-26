import {
  Paper,
  Table,
  TableBody,
  // TableCell,
  // TableRow,
  TableContainer,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./taskTableSlice";
import TableHeader from "./TableHeader";
import TaskItem from "./TaskItem";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import NoTasksDisclaimer from "./NoTasksDisclaimer";

import AddTaskForm from "../Form/AddTaskForm";
import TableFooter from "./TableFooter";

const StyledTableContainer = styled(TableContainer)`
  max-width: 100%;
`;

function TaskTable() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("status");
  const search = searchParams.get("search");
  const tasks = useSelector((state) => state.taskTable.tasks);
  const showAddForm = useSelector((state) => state.taskForm.showAddForm);
  useEffect(
    function () {
      searchParams.set("status", "all");
      setSearchParams(searchParams);
      dispatch(fetchTasks());
    },
    [dispatch]
  );

  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((task) => task.status === filter);

  const searchTasks =
    search !== null
      ? filteredTasks.filter((task) => task.task.includes(search))
      : filteredTasks;
  const displayedTasks = search ? searchTasks : filteredTasks;
  return (
    <StyledTableContainer component={Paper} elevation={12}>
      <Table>
        <TableHeader />
        <TableBody>
          {tasks.length === 0 ? (
            <NoTasksDisclaimer />
          ) : (
            displayedTasks.map((task) => (
              <TaskItem key={task.task} task={task} />
            ))
          )}
          {showAddForm && <AddTaskForm />}
          <TableFooter />
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}

export default TaskTable;
