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

      if (res?.data?.success === true) {
        localStorage.setItem("user", JSON.stringify(res?.data?.user));
        return res.data; // Return data (e.g., user info, token, etc.)
      } else {
        return rejectWithValue("Login failed");
      }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await custAxios.post("/auth/forgotPassword", payload);
      if (res?.data?.success === true) {
        console.log(res);

        return res.data; // Return data (e.g., user info, token, etc.)
      } else {
        return rejectWithValue("Something went wrong");
      }
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "OTP send failed"
      );
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await custAxios.post("/auth/resetPassword", payload);
      if (res?.data?.success === true) {
        console.log(res);

        return res.data; // Return data (e.g., user info, token, etc.)
      } else {
        return rejectWithValue("Something went wrong");
      }
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Password didn't updated"
      );
    }
  }
);
