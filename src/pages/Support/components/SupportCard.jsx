import {
  Box,
  Flex,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const SupportCard = ({ leftcomponent, title, icon, text }) => {
  const color = useColorModeValue("black", "white");
  const iconColor = useColorModeValue("p.purple", "black.60");

  return (
    <Flex
      mt={title === "Contact Us" && "5.5rem"}
      mb={title === "Live Chat" && "2rem"}
      gap={6}
      flexDir={{ base: "column", lg: "row" }}
    >
      <Stack color={color} maxW="380px">
        <Icon as={icon} boxSize={6} color={iconColor} />
        <Text color={color} as="h1" textStyle="h1" fontWeight="medium">
          {title}
        </Text>
        <Text textStyle="h6" fontSize="sm" color="black.60">
          {text}
        </Text>
      </Stack>
      <Box w="full" maxW="550px">{leftcomponent}</Box>
    </Flex>
  );
};

export default SupportCard;
