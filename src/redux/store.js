import { configureStore, combineReducers } from "@reduxjs/toolkit";
import sliceResult from "./sliceResult";

export const store = configureStore({
  reducer: combineReducers({
    result: sliceResult
  }),
  devTools: true,
});