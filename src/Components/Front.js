import React from "react";
import {
  Stack,
  Box,
  Heading,
  useColorModeValue,
  VStack,
  Button,
} from "@chakra-ui/react";
import { ReactComponent as Readdarksvg } from "../Assets/reading.svg";
import { ReactComponent as Readlightsvg } from "../Assets/readinglight.svg";

function Front() {
  return (
    <Stack direction={["column", "row"]} p={[8, 12, 16]}>
      <VStack>
        <Heading as="h2" mt={16}>
          "The biggest adventure you can take is to live the life of your
          dreams" ✨
          <br />
          <br /> <i>~Oprah Winfrey</i>
          <br />
          <br />
          <Button size="lg">Get Started</Button>
        </Heading>
      </VStack>
      <Box>
        {useColorModeValue(
          <Readlightsvg width="100%" />,
          <Readdarksvg width="100%" />
        )}
      </Box>
    </Stack>
  );
}

export default Front;
