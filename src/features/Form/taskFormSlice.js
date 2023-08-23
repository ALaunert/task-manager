import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAddForm: false,
};

export const taskFormSlice = createSlice({
  name: "taskForm",
  initialState,
  reducers: {
    showForm: (state) => {
      state.showAddForm = !state.showAddForm;
    },
    addTask: (state, action) => {
      const currentTasks =
        localStorage.getItem("tasks") === null
          ? null
          : JSON.parse(localStorage.getItem("tasks"));
      const newTasks = currentTasks
        ? [
            ...currentTasks,
            {
              id: Math.round(Math.random() * 1000).toString(),
              task: action.payload,
              status: "not-started",
            },
          ]
        : [
            {
              id: Math.round(Math.random() * 1000).toString(),
              task: action.payload,
              status: "not-started",
            },
          ];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      state.showAddForm = false;
    },
  },
});

export const { showForm, addTask } = taskFormSlice.actions;
export default taskFormSlice.reducer;
