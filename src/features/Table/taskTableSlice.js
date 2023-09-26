/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSearchBar: false,
  tasks: [],
};

export const taskTableSlice = createSlice({
  name: "taskTable",
  initialState,
  reducers: {
    showSearch: (state) => {
      state.showSearchBar = !state.showSearchBar;
    },
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

export const { saveTasks, fetchTasks, deleteTask, updateTask, showSearch } =
  taskTableSlice.actions;
export default taskTableSlice.reducer;
