import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../services/hooks";

const AdminRoute = ({ Component }) => {
  const isAuthenticated = useAuth();
  console.log(isAuthenticated);

  // const role = UseGetRole();
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  } else {
    return <Component />;
    // if (role === "admin") {
    // } else {
    //   return <Navigate to="/not-found" />;
    // }
  }
};

export default AdminRoute;
