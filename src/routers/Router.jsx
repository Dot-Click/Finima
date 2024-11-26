import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import NotFound from "../pages/NotFound";
import ForgotPassword from "../components/auth/ForgotPassword";
import VerifyEmail from "../components/auth/VerifyEmail";
import ResetPassword from "../components/auth/ResetPassword";
import DashboardLayout from "../layouts/DashboardLayout";
import EmployeeManagement from "../pages/EmployeeManagement";
import EmployeeActivity from "../pages/EmployeeActivity";
import Payroll from "../pages/Payroll";
import TodayActivity from "../pages/TodayActivity";

const Router = () => {
  // use protected routes for authenticated users (i.e: UserRoute & AdminRoute or make more if you've to)..

  return (
    <Routes>
      {/* Default Layout routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Home />} />
        <Route
          path="/dashboard/employee-management"
          element={<EmployeeManagement />}
        />
        <Route
          path="/dashboard/employee-activity"
          element={<EmployeeActivity />}
        />
        <Route path="/dashboard/payroll" element={<Payroll />} />
        <Route path="/dashboard/today-activity" element={<TodayActivity />} />
      </Route>

      {/* Auth routes */}
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>

      {/* Not found page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
