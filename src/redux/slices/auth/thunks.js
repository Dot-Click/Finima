import { createAsyncThunk } from "@reduxjs/toolkit";
import custAxios from "../../../configs/axiosConfig";
import Cookies from "js-cookie";
export const login = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      // custAxios.defaults.withCredentials = true;
      const res = await custAxios.post(
        "/auth/login",
        {
          email: payload?.email,
          password: payload?.password,
        },
        {
          withCredentials: true, // Ensures credentials (cookies) are sent with this request
        }
      );

      if (res?.data?.success === true) {
        Cookies.set("user_id", res?.data?.user?._id);
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

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const res = await custAxios.get("/auth/logout");
      if (res?.data?.success === true) {
        Cookies?.remove("user_id");

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

export const me = createAsyncThunk(
  "auth/me",
  async (_, { rejectWithValue }) => {
    try {
      // custAxios.defaults.withCredentials = true;
      const res = await custAxios.get("/auth/me", {
        withCredentials: true,
      });
      if (res?.data?.success === true) {
        console.log(res);

        return res.data; // Return data (e.g., user info, token, etc.)
      } else {
        return rejectWithValue("Something went wrong");
      }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Not logged in");
    }
  }
);
