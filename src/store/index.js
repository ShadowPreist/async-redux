import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./reducer/todo";

const store = configureStore({
  reducer: {todo : toDoReducer}
})

export default store;