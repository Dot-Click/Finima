import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/layout/SideBar";
import Navbar from "../components/layout/Navbar";
import { useDisclosure } from "@mantine/hooks";

const DashboardLayout = () => {
  const [opened, { toggle }] = useDisclosure();
  const [openedSidebar, { open, close }] = useDisclosure(true);

  return (
    <div className="flex bg-periwinkle-50 ">
      <div
        className={` ${openedSidebar ? "w-[300px]" : "w-0"}${
          opened
            ? "w-28 transition-all duration-700"
            : "w-1/4 transition-all duration-700"
        }
        
        } `}
      >
        <SideBar
          toggle={toggle}
          opened={opened}
          openedSidebar={openedSidebar}
          close={close}
        />
      </div>
      {/* <h2>Default Layout</h2> */}
      <div className="w-full max-h-screen ">
        <Navbar openedSidebar={openedSidebar} open={open} />
        <div className="p-6 h-[90vh] overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
