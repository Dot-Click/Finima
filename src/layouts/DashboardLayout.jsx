import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/layout/SideBar";
import Navbar from "../components/layout/Navbar";

const DashboardLayout = () => {
  return (
    <div className="flex bg-periwinkle-50 ">
      <div className="w-1/5">
        <SideBar />
      </div>
      {/* <h2>Default Layout</h2> */}
      <div className="w-5/6">
        <Navbar />
        <div className="p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
