import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import taskTableReducer from "./features/Table/taskTableSlice";
import taskFormReducer from "./features/Form/taskFormSlice";

export const store = configureStore({
  reducer: { taskTable: taskTableReducer, taskForm: taskFormReducer },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
