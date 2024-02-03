import { combineReducers } from "@reduxjs/toolkit";
import { exampleSlice } from "./slices/example-slice";

export const reducers = combineReducers({
  exampleReducer: exampleSlice.reducer,
});
