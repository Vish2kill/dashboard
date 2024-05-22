import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import Transactions from "./components/Transactions";
import Info_Card from "./components/Info_Card";

const Dashboard = () => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");

  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat (1,1fr)",
          xl: "repeat(2,1fr)",
        }}
        gap="6"
        mt="5.5rem"
        mb="6"
      >
        <GridItem colSpan={{ base: 1, xl: 2 }}>
          <PortfolioSection bg={bg} color={color} />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection bg={bg} color={color} />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions bg={bg} color={color} />
        </GridItem>
        <GridItem colSpan={1}>
          <Info_Card
            bg={bg}
            color={color}
            imgUrl="dot_bg.svg"
            text=" Learn more about Loans - Keep your Bitcoin, access it's value without selling it"
            tagText="Loan"
            inverted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Info_Card
            bg={bg}
            color={color}
            imgUrl="grid_bg.svg"
            text=" Learn more about our real states, mortgage, and corporate account services"
            tagText="Contact"
            inverted={true}
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
