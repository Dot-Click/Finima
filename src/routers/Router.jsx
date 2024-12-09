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
import Settings from "../pages/Settings";
import AdminRoute from "./AdminRoute";

const Router = () => {
  // use protected routes for authenticated users (i.e: UserRoute & AdminRoute or make more if you've to)..

  return (
    <Routes>
      {/* Default Layout routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="/dashboard" element={<AdminRoute Component={Home} />} />
        <Route
          path="/dashboard/employee-management"
          element={<AdminRoute Component={EmployeeManagement} />}
        />
        <Route
          path="/dashboard/employee-activity/:id"
          element={<AdminRoute Component={EmployeeActivity} />}
        />
        <Route
          path="/dashboard/payroll"
          element={<AdminRoute Component={Payroll} />}
        />
        <Route
          path="/dashboard/today-activity"
          element={<AdminRoute Component={TodayActivity} />}
        />
        <Route
          path="/dashboard/settings"
          element={<AdminRoute Component={Settings} />}
        />
      </Route>

      {/* Auth routes */}
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email/:email" element={<VerifyEmail />} />
        <Route path="/reset-password/:email/:otp" element={<ResetPassword />} />
      </Route>

      {/* Not found page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
