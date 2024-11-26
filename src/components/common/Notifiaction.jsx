import { Button, Menu } from "@mantine/core";
import { BellRing } from "lucide-react";
import React from "react";

const Notifiaction = () => {
  return (
    <div>
      <Menu shadow="md" width={200} position="bottom-start">
        <Menu.Target>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              fill="#7B7B8B"
              d="m20 18.067-.228-.206a9.8 9.8 0 0 1-1.685-2.008 8.8 8.8 0 0 1-.906-3.298V9.17a7.5 7.5 0 0 0-1.803-4.909 7.2 7.2 0 0 0-4.532-2.46V.914a.93.93 0 0 0-.263-.647.886.886 0 0 0-1.267 0 .93.93 0 0 0-.262.647v.898a7.2 7.2 0 0 0-4.482 2.478 7.5 7.5 0 0 0-1.78 4.878v3.386a8.8 8.8 0 0 1-.906 3.298A9.8 9.8 0 0 1 .228 17.86L0 18.067V20h20z"
            ></path>
          </svg>
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
