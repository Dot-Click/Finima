import React from "react";
import { Drawer } from "@mantine/core";
const DrawerComponent = ({ content, opened, close, position, size = "md" }) => {
  return (
    <Drawer
      opened={opened}
      onClose={close}
      title="Authentication"
      overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      size="xl"
    >
      {/* Drawer content */}
      <p>hello</p>
      {/* {content} */}
    </Drawer>
  );
};

export default DrawerComponent;
