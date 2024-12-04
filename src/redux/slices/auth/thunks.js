import { createAsyncThunk } from "@reduxjs/toolkit";
import custAxios from "../../../configs/axiosConfig";

export const login = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await custAxios.post("/auth/login", {
        email: payload?.email,
        password: payload?.password,
      });
      console.log(res);

      if (res?.data?.success === true) {
        return res.data; // Return data (e.g., user info, token, etc.)
      } else {
        return rejectWithValue("Login failed");
      }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

// Async action for registration
export const register = createAsyncThunk(
  "auth/register",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await custAxios.post("/auth/register", payload);
      if (res?.data?.success === true) {
        return res.data; // Return data (e.g., user info, token, etc.)
      } else {
        return rejectWithValue("Registration failed");
      }
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);
