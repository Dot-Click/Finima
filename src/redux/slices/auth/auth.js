import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./thunks";
const initialState = {
  value: null,
  loading: false,
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Additional reducers can be added here if needed
  },
  extraReducers: (builder) => {
    // Both login and register pending state handlers can be written separately
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Login action handlers
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload; // Save user data
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store error message
        // errorMessage(state.error); // Optionally display the error
      })
      // Register action handlers
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload; // Save user data
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store error message
        // errorMessage(state.error); // Optionally display the error
      });
  },
});

export const { actions, reducer } = authSlice;
export default reducer;
