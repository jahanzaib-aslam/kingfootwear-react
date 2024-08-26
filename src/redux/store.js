import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import rootReducer from "./rootReducers";

const store = configureStore({
  reducer: authSlice,
});

export default store;
