import React from "react";
import {
  Box,
  Stack,
  IconButton,
  Spacer,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { BsFillHeartFill } from "react-icons/bs";

function LikedQuotes({ quotelist }) {
  return (
    <VStack spacing="48px" p={[2, 6, 8]} pt={8}>
      {quotelist.map((item, key) => {
        return (
          <Stack
            direction={["column", "row"]}
            w="80%"
            key={key}
            bgColor="whiteAlpha.600"
            shadow="dark-lg"
            p={4}
          >
            <Box fontWeight="bold" color="black">
              {item}
            </Box>
            <Spacer />
            <HStack>
              <Box pr={2} fontStyle="italic" color="black">
                author
              </Box>
              <IconButton
                icon={<BsFillHeartFill />}
                colorScheme="pink"
              ></IconButton>
            </HStack>
          </Stack>
        );
      })}
    </VStack>
  );
}

export default LikedQuotes;
