import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/layout/SideBar";
import Navbar from "../components/layout/Navbar";
import { useDisclosure } from "@mantine/hooks";
import { useLocation } from "react-router-dom";
import custAxios from "../configs/axiosConfig";
const DashboardLayout = () => {
  const location = useLocation();
  const [opened, { toggle }] = useDisclosure();
  const [openedSidebar, { open, close }] = useDisclosure(true);

  const foo = async () => {
    const res2 = await custAxios.get("/auth/me");
    console.log(res2);
  };
  useEffect(() => {
    foo();
    close();
  }, [location?.pathname]);

  return (
    <div className="flex bg-periwinkle-50 ">
      <div
        className={` ${openedSidebar ? "w-[300px]" : "w-0"}${
          opened
            ? "w-28 transition-all duration-700"
            : "w-[300px] xl:w-[20vw] transition-all duration-700"
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
      <div
        className={` ${
          opened
            ? "xl:w-[91vw] transition-all duration-700"
            : "xl:w-[80vw] xl:transition-all xl:duration-700"
        } w-full transition-all duration-700  max-h-screen `}
      >
        <Navbar openedSidebar={openedSidebar} open={open} />
        <div className="p-4 2xl:p-6 h-[86vh] xl:h-[90vh] overflow-auto custom-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
