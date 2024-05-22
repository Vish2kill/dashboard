import React from "react";
import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { FaInfoCircle } from "react-icons/fa";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";

const PortfolioSection = ({ bg, color }) => {
  return (
    <HStack
      justify="space-between"
      bg={bg}
      borderRadius="xl"
      p="5"
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
      spacing={{
        base: 5,
        xl: 0,
      }}
    >
      <HStack
        spacing={{
          base: 4,
          xl: 16,
        }}
        align={{
          base: "flex-start",
          xl: "start",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack
            color={bg === "white" ? "black.80" : "gray.500"}
            fontSize="sm"
          >
            <Text>Total Portfolio Value</Text>
            <Icon as={FaInfoCircle} cursor="pointer" />
          </HStack>
          <Text textStyle="h4" fontWeight="medium" color={color}>
            ₹ 1,12,312.24
          </Text>
        </Stack>
        <Stack>
          <HStack
            color={bg === "white" ? "black.80" : "gray.500"}
            fontSize="sm"
          >
            <Text>Wallet Balances</Text>
          </HStack>
          <HStack
            spacing={{
              base: 3,
              sm: 4,
            }}
            align={{
              base: "flex-start",
              sm: "start",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle="h4" fontWeight="medium" color={color}>
                22.6636999
              </Text>
              <Tag colorScheme="gray">BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle="h4" fontWeight="medium" color={color}>
                ₹ 1,300.00
              </Text>
              <Tag colorScheme="gray">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <HStack
        align={{
          base: "flex-start",
          sm: "start",
        }}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Button leftIcon={<Icon as={BiDownArrowAlt} />}>Deposit</Button>
        <Button leftIcon={<Icon as={BiUpArrowAlt} />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
