/* eslint-disable no-unused-vars */
import "./App.css";
import TaskTable from "./features/Table/TaskTable";
import AddTaskForm from "./features/Form/AddTaskForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Filter from "./features/Table/Filter";
import { Box } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Box>
              <TaskTable />
            </Box>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
