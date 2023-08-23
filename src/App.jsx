import { Box } from "@mui/material";
import "./App.css";
import TaskTable from "./features/Table/TaskTable";
import AddTaskForm from "./features/Form/AddTaskForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Filter from "./features/Table/Filter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Box>
              <Filter
                filterField="status"
                options={[
                  { value: "all", label: "All" },
                  { value: "complete", label: "Complete" },
                  { value: "active", label: "Active" },
                  { value: "not-started", label: "Not started" },
                ]}
              ></Filter>
              <TaskTable />
              <AddTaskForm></AddTaskForm>
            </Box>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
