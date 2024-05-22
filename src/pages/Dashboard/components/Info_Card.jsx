import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Tag, Text, useColorModeValue } from "@chakra-ui/react";

const Info_Card = ({ bg, color, imgUrl, text, tagText, inverted }) => {
  const bg_2 = useColorModeValue("p.purple", "#14142e");

  return (
    <CustomCard
      bg={inverted ? bg_2 : bg}
      bgImage={imgUrl}
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Tag
        bg={!inverted ? "p.purple" : "white"}
        color={inverted ? "p.purple" : "white"}
        borderRadius="full"
      >
        {tagText}
      </Tag>
      <Text
        textStyle="h5"
        color={inverted ? "white" : color}
        mt="4"
        fontWeight="medium"
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default Info_Card;
