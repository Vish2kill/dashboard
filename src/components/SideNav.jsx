import {
  Box,
  HStack,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { MdDashboard, MdOutlineSupportAgent } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const location = useLocation();
  const isActive = (link) => {
    return location.pathname === link;
  };

  const NavLinks = [
    {
      icon: <MdDashboard />,
      name: "Dashboard",
      link: "/",
    },
    {
      icon: <GrTransaction />,
      name: "Transactions",
      link: "/transaction",
    },
  ];
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");
  const link_bg = useColorModeValue("gray.200", "gray.700");
  const link_col = useColorModeValue("#696969", "#d6d6d6");

  return (
    <Stack
      justifyContent="space-between"
      boxShadow={{ base: "none", lg: "xl" }}
      w={{ base: "full", lg: "16rem" }}
      height="100vh"
      bg={bg}
      position={{ base: "", lg: "fixed" }}
      zIndex={{ base: "", lg: 1000 }}
    >
      <Box>
        <Heading as="h1" fontSize="20px" pt="5" textAlign="center">
          @Vishal-Singh
        </Heading>
        <Box mt="6" mx="3">
          {NavLinks.map((item, index) => (
            <Link key={index} to={item.link}>
              <HStack
                py="3"
                px="4"
                cursor="pointer"
                color={isActive(item.link) ? link_col : color}
                bg={isActive(item.link) ? link_bg : "transparent"}
                _hover={{ bg: link_bg, color: color }}
                borderRadius="10px"
              >
                {item.icon}
                <Text fontSize="16px" fontWeight="medium">
                  {item.name}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="3" mb="6">
        <Link to="/support">
          <HStack
            py="3"
            px="4"
            cursor="pointer"
            color={isActive("/support") ? link_col : color}
            bg={isActive("/support") ? link_bg : "transparent"}
            _hover={{ bg: link_bg, color: color }}
            borderRadius="10px"
          >
            <MdOutlineSupportAgent />
            <Text fontSize="16px" fontWeight="md">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default SideNav;
