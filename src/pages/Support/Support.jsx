import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import SupportCard from "./components/SupportCard";
import { Stack, useColorModeValue } from "@chakra-ui/react";
import ContactCard from "./components/ContactCard";
import { IoMdMail } from "react-icons/io";
import { BiSolidMessageRounded } from "react-icons/bi";
import Info_Card from "../Dashboard/components/Info_Card";

const Support = () => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");
  const iconColor = useColorModeValue("p.purple", "black.60");
  document.title = "Support - Crypto Dashboard";

  return (
    <DashboardLayout title="Support">
      <Stack spacing="40px">
        <SupportCard
          title="Contact Us"
          text="Have a question or just want to know more? Feel free to react out to us."
          icon={IoMdMail}
          leftcomponent={
            <ContactCard bg={bg} color={color} iconColor={iconColor} />
          }
        />
        <SupportCard
          title="Live Chat"
          text="Don't have time to wait for the answer? Chat with us now. Fell free to react out to us."
          icon={BiSolidMessageRounded}
          leftcomponent={
            <Info_Card
              bg={bg}
              color={color}
              imgUrl="grid_bg.svg"
              text="Learn more about our real states, mortgage, and corporate account services"
              tagText="Contact"
              inverted={true}
            />
          }
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
