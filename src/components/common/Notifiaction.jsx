import { Button, Menu } from "@mantine/core";
import { BellRing } from "lucide-react";
import React from "react";

const Notifiaction = () => {
  return (
    <div>
      <Menu shadow="md" width={200} position="bottom-start">
        <Menu.Target>
          <BellRing size={24} strokeWidth={2} />
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

export default Notifiaction;
