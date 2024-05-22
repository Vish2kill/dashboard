import React, { Fragment } from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SiBitcoinsv } from "react-icons/si";
import { HiCurrencyRupee } from "react-icons/hi2";

const Transactions = ({ bg, color }) => {
  const transaction = [
    {
      id: 1,
      icon: HiCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.00",
      timeStamp: "2022-06-09 7:06 AM",
    },
    {
      id: 2,
      icon: SiBitcoinsv,
      text: "BTC Sell",
      amount: "- 12.4697946 BTC",
      timeStamp: "2022-05-27 7:06 AM",
    },
    {
      id: 3,
      icon: HiCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.00",
      timeStamp: "2022-06-09 7:06 AM",
    },
  ];

  return (
    <CustomCard bg={bg} color={color} h="full">
      <Text fontSize="sm" color="black.80" mb="4">
        Recent Transactions
      </Text>
      <Stack spacing="4">
        {transaction.map((item, index) => (
          <Fragment key={item.id}>
            {index !== 0 && (
              <Divider bg={bg === "white" ? " black.10" : "gray.600"} />
            )}
            <Flex gap="4">
              <Grid
                placeItems="center"
                bg={bg === "white" ? "black.5" : "gray.700"}
                boxSize={10}
                borderRadius={5}
              >
                <Icon as={item.icon} />
              </Grid>
              <Flex
                justify="space-between"
                w="full"
                align={{ base: "start", sm: "center" }}
                flexDir={{ base: "column", sm: "row" }}
              >
                <Stack spacing="0">
                  <Text textStyle="h6" color={color}>
                    {item.text}
                  </Text>
                  <Text fontSize="sm" color="black.40">
                    {item.timeStamp}
                  </Text>
                </Stack>
                <Text textStyle="h6" color={color}>
                  {item.amount}
                </Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button mt="6" w="full" colorScheme="gray">
        View All
      </Button>
    </CustomCard>
  );
};

export default Transactions;
