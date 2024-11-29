import { Drawer } from "@mantine/core";
const DrawerComponent = ({ content, opened, close, position, size = "md" }) => {
  return (
    <Drawer
      position={position}
      opened={opened}
      onClose={close}
      m={0}
      style={{ margin: 0 }}
      // title="Authentication"
      overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      size={size}
      withCloseButton={false}
    >
      {content}
    </Drawer>
  );
};

export default DrawerComponent;
