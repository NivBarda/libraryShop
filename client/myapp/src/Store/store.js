import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./adminReducer";

const store = configureStore({
  reducer: {
    admin:adminSlice.reducer
  },
});

export default store;
