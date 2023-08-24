// import { Box } from "@mui/material";
import "./App.css";
import TaskTable from "./features/Table/TaskTable";
import AddTaskForm from "./features/Form/AddTaskForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Filter from "./features/Table/Filter";
import { styled } from "@mui/material/styles";
import { blue, green, red } from "@mui/material/colors";
const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    backgroundColor: red[500],
  },
  [theme.breakpoints.up("sm")]: {
    backgroundColor: blue[500],
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: green[500],
  },
}));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Root>
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
            </Root>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
