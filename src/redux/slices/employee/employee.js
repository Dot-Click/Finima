import { createSlice } from "@reduxjs/toolkit";
import {
  getEmployee,
  addEmployee,
  updateEmployee,
  getSingleEmployee,
  activateDeactivateEmployee,
  getPayroll,
} from "./thunks";
import { toast } from "sonner";
// import { successMessage } from "../../../services/helpers/index";
const initialState = {
  employees: [],
  singleEmployee: {},
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
      .addCase(updateEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSingleEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(activateDeactivateEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPayroll.pending, (state) => {
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
        toast.success("Account created successfully");
      })
      .addCase(addEmployee.rejected, (state, action) => {
        state.addUpdateLoading = false;
      })
      // updateEmployee action handlers
      .addCase(updateEmployee.fulfilled, (state, action) => {
        state.loading = false;
        toast.success("Account updated successfully");
      })
      .addCase(updateEmployee.rejected, (state, action) => {
        state.loading = false;
      })
      // getSingleEmployee action handlers
      .addCase(getSingleEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.singleEmployee = action.payload;
      })
      .addCase(getSingleEmployee.rejected, (state, action) => {
        state.loading = false;
      })
      // activateDeactivateEmployee action handlers
      .addCase(activateDeactivateEmployee.fulfilled, (state, action) => {
        state.loading = false;
        toast.success(
          `${action?.payload?.data?.name}'s account ${
            action?.payload?.data?.isActive ? "Activated" : "Deactivated"
          }`
        );
      })
      .addCase(activateDeactivateEmployee.rejected, (state, action) => {
        state.loading = false;
        toast.success(state.error || "Whoops! something went wrong");
      })
      // getPayroll action handlers
      .addCase(getPayroll.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(getPayroll.rejected, (state, action) => {
        state.loading = false;
        toast.error(state.error || "Whoops! something went wrong");
      });
  },
});

export const { actions, reducer } = employeeSlice;
export default reducer;
