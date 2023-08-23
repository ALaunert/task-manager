/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAddForm: false,
  tasks: [
    // {
    //   id: "23",
    //   task: "Do the dishes",
    //   status: "active",
    // },
    // {
    //   id: "45",
    //   task: "Mop the floor",
    //   status: "active",
    // },
    // {
    //   id: "15",
    //   task: "Make the bed",
    //   status: "complete",
    // },
  ],
};

export const taskTableSlice = createSlice({
  name: "taskTable",
  initialState,
  reducers: {
    fetchTasks: (state) => {
      state.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    },
    saveTasks: (state) => {
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      // return {
      //   ...state,
      //   tasks: state.tasks.filter((task) => task.id !== action.payload),
      // };
    },
    updateTask: (state, action) => {
      // state.tasks = JSON.parse(localStorage.getItem("tasks"));
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task.status === "not-started") {
        task.status = "active";
        return;
      }
      if (task.status === "active") {
        task.status = "complete";
        return;
      }
    },
  },
});

export const { saveTasks, fetchTasks, deleteTask, updateTask } =
  taskTableSlice.actions;
export default taskTableSlice.reducer;
