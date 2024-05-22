import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import TransactionTable from "./components/TransactionTable";

const TransactionPage = () => {
  const bg = useColorModeValue("white", "gray.800");
  document.title = "Transaction - Crypto Dashboard";

  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];

  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mt="5.5rem" mb="3">
        <Button leftIcon={<Icon as={FaDownload} />}>Export CSV</Button>
      </Flex>
      <Card bg={bg} mb="2rem" borderRadius="16">
        <Tabs>
          <TabList pt="4" px="4" display="flex" justifyContent="space-between">
            <HStack>
              {tabs.map((item) => (
                <Tab key={item.name} display="flex" gap="2" pb="5"> 
                  {item.name}
                  <Tag colorScheme="gray" borderRadius="full">
                    ({item.count})
                  </Tag>
                </Tab>
              ))}
            </HStack>
            <InputGroup maxW="200px">
              <InputLeftElement pointerEvents="none">
                <Icon as={CiSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>
          </TabList>
          <TabPanels>
            {tabs.map((item) => (
              <TabPanel key={item.name}>
                <TransactionTable />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default TransactionPage;
