import { createAsyncThunk } from "@reduxjs/toolkit";
import custAxios from "../../../configs/axiosConfig";

export const getEmployee = createAsyncThunk(
  "employee/get",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await custAxios.get("/employee", {
        params: payload,
      });

      if (res?.data) {
        return res.data; // Return data (e.g., user info, token, etc.)
      } else {
        return rejectWithValue("Whoops! something went wrong");
      }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const addEmployee = createAsyncThunk(
  "employee/add",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await custAxios.post("/employee", payload);
      console.log(res);
      if (res?.data) {
        return res.data; // Return data (e.g., user info, token, etc.)
      } else {
        return rejectWithValue("Employee didn't added");
      }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const updateEmployee = createAsyncThunk(
  "employee/update",
  async (payload, { rejectWithValue }) => {
    console.log(payload);

    try {
      const res = await custAxios.put(`/employee/${payload?.id}`, payload);

      if (res?.data) {
        return res.data; // Return data (e.g., user info, token, etc.)
      } else {
        return rejectWithValue("Employee didn't updated");
      }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const getSingleEmployee = createAsyncThunk(
  "employee/single",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await custAxios.get(`/employee/${payload}`);

      if (res?.data) {
        return res.data; // Return data (e.g., user info, token, etc.)
      } else {
        return rejectWithValue("Employee didn't updated");
      }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const activateDeactivateEmployee = createAsyncThunk(
  "employee/activateDeactivate",
  async (payload, { rejectWithValue }) => {
    console.log(payload);
    try {
      const res = await custAxios.get(
        `/employee/activateDeactivate/${payload}`
      );
      console.log(res);
      if (res?.data) {
        return res.data; // Return data (e.g., user info, token, etc.)
      } else {
        return rejectWithValue("Request failed");
      }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const getPayroll = createAsyncThunk(
  "employee/payroll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await custAxios.get(`/payroll`);

      if (res?.data) {
        return res.data; // Return data (e.g., user info, token, etc.)
      } else {
        return rejectWithValue("Payroll not found");
      }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);
