import React from "react";
import {
  Button,
  HStack,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { CgDanger } from "react-icons/cg";
import { Link } from "react-router-dom";

const NotFound = () => {
  const bg = useColorModeValue("gray.300", "gray.800");
  const color = useColorModeValue("black", "white");

  return (
    <HStack bg={bg} color={color} w="100%" h="100vh" justifyContent="center">
      <Stack
        w="20rem"
        py="7"
        bg={color === "black" ? "gray.400" : "gray.700"}
        borderRadius={10}
        justifyContent="center"
        align="center"
      >
        <Icon as={CgDanger} fontSize="50px" />
        <Text fontSize="30px">Page Not Found</Text>
        <Link to="/">
          <Button mt="2">Go Home</Button>
        </Link>
      </Stack>
    </HStack>
  );
};

export default NotFound;
