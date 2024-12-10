import { createAsyncThunk } from "@reduxjs/toolkit";
import custAxios from "../../../configs/axiosConfig";

export const getSingleEmployeeActivity = createAsyncThunk(
  "activity/employee/:id",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await custAxios.get(`activity/employee/${payload?.id}`, {
        params: { ...payload },
      });

      if (res?.data?.success === true) {
        return res.data; // Return data (e.g., user info, token, etc.)
      } else {
        return rejectWithValue("Whoops! something went wrong");
      }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);
