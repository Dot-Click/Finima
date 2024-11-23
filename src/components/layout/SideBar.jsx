import React from "react";
import Logo from "../common/Logo";
import { Divider } from "@mantine/core";
import { sideMenu } from "../../data/data";
import { Link } from "react-router-dom";
import { ChevronLeft, LogOut } from "lucide-react";

const SideBar = () => {
  return (
    <div className="bg-white p-3  border-r border-slate-100 h-screen flex flex-col justify-between">
      <div>
        <div className="flex justify-center">
          <Logo isRedirectable />
        </div>
        <div className="flex items-center justify-center my-2">
          <Divider w={"100%"} />
          <p className="flex items-center cursor-pointer">
            <ChevronLeft size={28} strokeWidth={1.25} />
            Minimize
          </p>
        </div>
        <div>
          {sideMenu?.map((item, i) => {
            return (
              <Link
                key={i}
                className=" my-2 flex items-center gap-2  p-2 hover:bg-zinc-800 rounded-lg hover:text-white"
              >
                {item?.icon} {item?.name}
              </Link>
            );
          })}
        </div>
      </div>
      <Link className=" my-2 flex items-center gap-2  p-2 hover:bg-zinc-800 rounded-lg hover:text-white">
        <LogOut size={28} strokeWidth={1.25} /> Logout
      </Link>
    </div>
  );
};

export default SideBar;
