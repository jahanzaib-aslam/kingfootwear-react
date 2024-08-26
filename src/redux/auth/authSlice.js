import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";
import { APICore } from "@/api/apiCore";

const api = new APICore();

const initialState = api.getLoggedInUser;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const updatedUser = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
        token: action.payload.token,
      };

      return updatedUser;
    },
    logout: (state, action) => {
      state = initialState;
    },
    register: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.token = action.payload.token;
    },
    update: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.token = action.payload.token;
    },
    user: (state, action) => {
      return state;
    },
  },
});

export const { login, logout, register, user, update } = authSlice.actions;

export default authSlice.reducer;
