import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { FaArrowTrendUp, FaCircleMinus, FaCirclePlus } from "react-icons/fa6";

const PriceSection = ({ bg, color }) => {
  const timeStamps = ["7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];

  return (
    <CustomCard bg={bg} color={color}>
      <Flex
        justify="space-between"
        align="start"
        flexDir={{ base: "column", sm: "row" }}
      >
        <Stack>
          <HStack color={color} fontSize="sm">
            <Text>Current Price</Text>
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
              <HStack fontWeight="medium" color="green.500">
                <Icon as={FaArrowTrendUp} />
                <Text fontSize="sm">22 %</Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack my={{ base: "10px", md: "" }}>
          <Button leftIcon={<Icon as={FaCirclePlus} />}>Buy</Button>
          <Button leftIcon={<Icon as={FaCircleMinus} />}>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded" my="8px">
        <Flex justify={{ base: "start", sm: "end" }}>
          <TabList
            bg={bg === "white" ? "black.5" : "gray.700"}
            p="3px"
            borderRadius="5"
          >
            {["1H", "1D", "1M", "1Y"].map((item) => (
              <Tab
                key={item}
                _selected={{ bg: bg, color: color }}
                fontSize="sm"
                px="8px"
                py="6px"
                borderRadius="4"
              >
                {item}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel p="0px">
            <Image src="graph.svg" my="20px" width="100%" />
            <HStack justify="space-between">
              {timeStamps.map((item) => (
                <Text key={item} fontSize="sm" color={color}>
                  {item}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>four!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
