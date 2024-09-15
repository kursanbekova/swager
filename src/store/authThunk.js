import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../config/axiosInstance";

export const postUser = createAsyncThunk(
  "auth/getUser",

  async (value, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        "http://ec2-3-68-183-137.eu-central-1.compute.amazonaws.com/api/auth/signUp",
        value
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",

  async (value, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/api/auth/signIn", value);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllPatient = createAsyncThunk(
  "auth/getAllPatient",

  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/api/users/patients");
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
