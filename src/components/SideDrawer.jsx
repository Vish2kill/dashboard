import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorModeValue,
} from "@chakra-ui/react";
import SideNav from "./SideNav";

const SideDrawer = ({ isOpen, onClose }) => {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} bg={bg}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <SideNav />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
