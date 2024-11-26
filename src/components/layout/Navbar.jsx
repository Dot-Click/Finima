import React from "react";
import Notifiaction from "../common/Notifiaction";
import ProfileMenu from "../common/ProfileMenu";
import { Burger, Divider, Tooltip } from "@mantine/core";

const Navbar = ({ openedSidebar, open }) => {
  return (
    <div className="bg-white flex justify-between items-center py-3 px-6  border-b border-slate-100">
      <div className="flex items-center gap-2">
        <Burger
          opened={openedSidebar}
          onClick={open}
          className="block xl:hidden"
        />
        <Tooltip label="Today Activity">
          <p className="text-2xl font-semibold font-outfit text-zinc-800 line-clamp-1">
            Today Activity
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
