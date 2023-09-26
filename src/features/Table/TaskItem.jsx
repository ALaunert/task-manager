/* eslint-disable react/prop-types */
import {
  Button,
  Chip,
  Menu,
  MenuItem,
  TableCell,
  TableRow,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch } from "react-redux";
import { deleteTask, saveTasks, updateTask } from "./taskTableSlice";
import { useState } from "react";
import styled from "styled-components";

const StyledTableCell = styled(TableCell)`
  @media (min-width: 350px) {
    width: 200px;
  }
  @media (min-width: 600px) {
    width: 350px;
  }
  @media (min-width: 900px) {
    width: 600px;
  }
`;

function TaskItem({ task }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  function handleDelete() {
    setAnchorEl(null);
    dispatch(deleteTask(task.id));
    dispatch(saveTasks());
  }
  function handleUpdate() {
    setAnchorEl(null);
    dispatch(updateTask(task.id));
    dispatch(saveTasks());
  }
  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <TableRow key={task.task}>
      <TableCell>{task.id}</TableCell>
      <StyledTableCell>{task.task}</StyledTableCell>
      <TableCell align="center">
        <Chip
          label={task.status === "not-started" ? "not started" : task.status}
          color={
            task.status === "active"
              ? "primary"
              : task.status === "complete"
              ? "success"
              : "error"
          }
        />
      </TableCell>
      <TableCell align="center" size="medium">
        <Button
          sx={{ minWidth: 25 }}
          id={task.id}
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MoreVertIcon fontSize="small" />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleDelete}>Delete</MenuItem>
          {task.status !== "complete" && (
            <MenuItem onClick={handleUpdate}>Update status</MenuItem>
          )}
        </Menu>
      </TableCell>
    </TableRow>
  );
}

export default TaskItem;
