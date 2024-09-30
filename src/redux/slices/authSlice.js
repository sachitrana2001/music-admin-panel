"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: null,
};

const authSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    loginSuccessful: (state, { payload }) => {
      state.token = payload || "";
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { loginSuccessful } = authSlice.actions;
export default authSlice.reducer;
