import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const ContactCard = ({ bg, color, iconColor }) => {
  return (
    <Card p="6" borderRadius="1rem" bg={bg} flexGrow={1}>
      <Stack spacing={5}>
        <Text color={color} fontSize="sm" fontWeight="medium">
          You will recieve response within 24 hours of time of submit.
        </Text>
        <HStack
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: 4, md: "auto" }}
        >
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input type="text" placeholder="Enter First Name" />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input type="text" placeholder="Enter Last Name" />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Email adress</FormLabel>
          <Input type="email" placeholder="Enter Email Address" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea type="text" placeholder="Enter Message" />
        </FormControl>
        <Checkbox>
          <Text fontSize="xs">
            I agree with
            <Box as="span" color={iconColor}>
              Terms & Conditions.
            </Box>
          </Text>
        </Checkbox>
        <Stack>
          <Button fontSize="sm">Send a Message</Button>
          <Button fontSize="sm" colorScheme="gray">
            Book a Meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
