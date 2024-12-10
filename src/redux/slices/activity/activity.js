import { createSlice } from "@reduxjs/toolkit";
import { getSingleEmployeeActivity } from "./thunks";
const initialState = {
  activity: null,
  loading: false,
  error: null,
};
const activitySlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Additional reducers can be added here if needed
  },
  extraReducers: (builder) => {
    // Both login and register pending state handlers can be written separately
    builder
      .addCase(getSingleEmployeeActivity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // Login action handlers
      .addCase(getSingleEmployeeActivity.fulfilled, (state, action) => {
        state.loading = false;
        state.activity = action.payload; // Save user data
      })
      .addCase(getSingleEmployeeActivity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store error message
        // errorMessage(state.error); // Optionally display the error
      });
  },
});

export const { actions, reducer } = activitySlice;
export default reducer;
