import React from "react";
import Notifiaction from "../common/Notifiaction";
import ProfileMenu from "../common/ProfileMenu";

const Navbar = () => {
  return (
    <div className="bg-white flex justify-between items-center py-3 px-6  border-b border-slate-100">
      <p className="text-2xl font-semibold font-outfit text-zinc-800">
        Today Activity
      </p>
      <div className="flex gap-4 items-center">
        <Notifiaction />
        <ProfileMenu />
      </div>
    </div>
  );
};

export default Navbar;
