import {
  Box,
  Container,
  Flex,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const bg = useColorModeValue("gray.200", "gray.700");

  return (
    <Flex bg={bg}>
      <Box display={{ base: "none", lg: "flex" }}>
        <SideNav />
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow="1" ms={{ base: "", lg: "16rem" }}>
        <TopNav title={title} onOpen={onOpen} />
        <Container mt="6" px="4" maxW="65rem">
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
