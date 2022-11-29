import { VStack, Text, Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { ReactComponent as Endsvg1 } from "../Assets/endsvg1.svg";
import { ReactComponent as Endsvg2 } from "../Assets/endsvg2.svg";

function About() {
  return (
    <VStack>
      <Text
        m="8"
        color="teal"
        className="sanstext"
        fontSize="2xl"
        fontWeight="semibold"
        width="50%"
        textAlign="center"
      >
        Are you one who gets motivated by the meaningful lines?
        <br />
        You are at the right place then. <br />
        <br />
        QuoteSite helps you to find list of quotes based on different categories
        of your wish.
      </Text>
      <Box w="50%">
        {useColorModeValue(<Endsvg2 width="100%" />, <Endsvg1 width="100%" />)}
      </Box>
    </VStack>
  );
}

export default About;
