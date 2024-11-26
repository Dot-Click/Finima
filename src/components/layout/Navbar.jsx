import React from "react";
import Notifiaction from "../common/Notifiaction";
import ProfileMenu from "../common/ProfileMenu";
import { Burger, Divider, Tooltip } from "@mantine/core";
import { useLocation } from "react-router-dom";

const Navbar = ({ openedSidebar, open }) => {
  const location = useLocation();

  if (location.pathname?.split("/")[3]?.split("-")?.length === 2) {
    var routeName = location.pathname?.split("/")[3]?.split("-");
  } else if (location.pathname?.split("/")[2]) {
    var routeName = location.pathname?.split("/")[2]?.split("-");
  } else {
    var routeName = location.pathname?.split("/")[1]?.split("-");
  }
  return (
    <div className="bg-white flex justify-between items-center py-3 px-6  border-b border-slate-100">
      <div className="flex items-center gap-2">
        <Burger
          opened={openedSidebar}
          onClick={open}
          className="block xl:hidden"
        />
        <Tooltip label={routeName}>
          <p className="text-2xl font-semibold font-outfit text-zinc-800 line-clamp-1 capitalize">
            {routeName?.length > 1
              ? `${routeName[0]} ${routeName[1]}`
              : `${routeName[0]}`}
          </p>
        </Tooltip>
      </div>
      <div className="flex gap-4 items-center">
        <Notifiaction />

        <Divider orientation="vertical" className="my-2" />

        <ProfileMenu />
      </div>
    </div>
  );
};

export default Navbar;
