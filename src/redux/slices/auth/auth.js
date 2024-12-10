import { createSlice } from "@reduxjs/toolkit";
import { login, forgotPassword, resetPassword, logout, me } from "./thunks";
import { toast } from "sonner";
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
    // Both login pending state handlers can be written separately
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(me.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Login action handlers
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload; // Save user data
        toast.success("Login successfully");
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store error message
        toast.error(action.payload || "Whoops! something went wrong");

        // errorMessage(state.error); // Optionally display the error
      })
      // Forgot action handlers
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload; // Save user data
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store error message
        toast.error(action.payload);

        // errorMessage(state.error); // Optionally display the error
      })
      // reset password action handlers
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload; // Save user data
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store error message
        toast.error(action.payload);
      })
      // logout action handlers
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload; // Save user data
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store error message
        // errorMessage(state.error); // Optionally display the error
      })
      // me action handlers
      .addCase(me.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload; // Save user data
      })
      .addCase(me.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store error message
        // errorMessage(state.error); // Optionally display the error
      });
  },
});

export const { actions, reducer } = authSlice;
export default reducer;
