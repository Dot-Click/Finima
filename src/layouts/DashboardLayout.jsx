import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/layout/SideBar";
import Navbar from "../components/layout/Navbar";
import { useDisclosure } from "@mantine/hooks";

const DashboardLayout = () => {
  const [opened, { toggle }] = useDisclosure();
  console.log(opened);

  return (
    <div className="flex bg-periwinkle-50 ">
      <div
        className={
          opened
            ? "w-28 transition-all duration-700"
            : "w-1/4 transition-all duration-700"
        }
      >
        <SideBar toggle={toggle} opened={opened} />
      </div>
      {/* <h2>Default Layout</h2> */}
      <div className="w-full max-h-screen ">
        <Navbar />
        <div className="p-6 h-[90vh] overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
