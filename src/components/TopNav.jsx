import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaBars, FaRegUserCircle } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";

const TopNav = ({ title, onOpen }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("white", "gray.800");

  return (
    <Box
      px="4"
      bg={bg}
      position="fixed"
      w={{ base: "100%", lg: "75%", xl: "85%" }}
      zIndex={100}
    >
      <HStack maxW="62.5rem" h="16" justify="space-between" mx="auto">
        <Icon
          display={{ base: "flex", lg: "none" }}
          cursor="pointer"
          onClick={onOpen}
          as={FaBars}
        />
        <Heading fontWeight="medium" fontSize="28px">
          {title}
        </Heading>
        <Stack flexDir="row" gap="4" align="center">
          <Button onClick={toggleColorMode} borderRadius={1000} px="13px">
            {colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
          </Button>
          <Menu>
            <MenuButton pt="1">
              <Icon as={FaRegUserCircle} fontSize="35px" />
            </MenuButton>
            <MenuList>
              <Link>
                <MenuItem>Logout</MenuItem>
              </Link>
              <Link to="/support">
                <MenuItem>Support</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Stack>
      </HStack>
    </Box>
  );
};

export default TopNav;
