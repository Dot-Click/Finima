import { createSlice } from "@reduxjs/toolkit";
import { getEmployee, addEmployee, activateDeactivateEmployee } from "./thunks";
const initialState = {
  employees: [],
  loading: false,
  error: null,
};
const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    // Additional reducers can be added here if needed
  },
  extraReducers: (builder) => {
    // Both getEmployee and register pending state handlers can be written separately
    builder
      .addCase(getEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(activateDeactivateEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // getEmployee action handlers
      .addCase(getEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload.data; // Save user data
      })
      .addCase(getEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store error message
        // errorMessage(state.error); // Optionally display the error
      })
      // addEmployee action handlers
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.loading = false;
        // Save user data
      })
      .addCase(addEmployee.rejected, (state, action) => {
        state.loading = false;
        // Store error message
        // errorMessage(state.error); // Optionally display the error
      })
      // activateDeactivateEmployee action handlers
      .addCase(activateDeactivateEmployee.fulfilled, (state, action) => {
        state.loading = false;
        // Save user data
      })
      .addCase(activateDeactivateEmployee.rejected, (state, action) => {
        state.loading = false;
        // Store error message
        // errorMessage(state.error); // Optionally display the error
      });
  },
});

export const { actions, reducer } = employeeSlice;
export default reducer;
