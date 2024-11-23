import { Avatar, Menu } from "@mantine/core";
import { ChevronDown } from "lucide-react";
import React from "react";

const ProfileMenu = () => {
  return (
    <div>
      <Menu shadow="md" width={200} position="bottom-start">
        <Menu.Target>
          <div className="flex items-center border border-slate-300 w-20 rounded-full p-2">
            <Avatar color="dark">ZA</Avatar>
            <ChevronDown size={20} strokeWidth={2} />
          </div>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item>Settings</Menu.Item>
          <Menu.Item>Messages</Menu.Item>
          <Menu.Item>Gallery</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
