import { createSlice } from "@reduxjs/toolkit";
import { getAllPatient, postUser, signIn } from "./authThunk";
const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  patients: [],
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(postUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postUser.fulfilled, (state, { payload }) => {
        localStorage.setItem("token", payload.token);
        state.token = payload.token;
      })
      .addCase(getAllPatient.fulfilled, (state, { payload }) => {
        state.patients = payload;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        localStorage.setItem("adminToken", payload.token);
        state.token = payload.token;
      });
  },
});
