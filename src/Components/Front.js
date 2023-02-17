import React from "react";
import {
  Stack,
  Box,
  Heading,
  useColorModeValue,
  VStack,
  Button,
  Text,
} from "@chakra-ui/react";
import { ReactComponent as Readdarksvg } from "../Assets/reading.svg";
import { ReactComponent as Readlightsvg } from "../Assets/readinglight.svg";
import { Link } from "react-router-dom";

function Front(props) {
  return (
    <VStack borderBottom="solid" p="8">
      <VStack pt={8} mt={16}>
        <Text
          color="teal"
          className="sanstext"
          fontSize="4xl"
          fontWeight="semibold"
        >
          QUOTE OF THE DAY
        </Text>
        <hr width="70%" color="black" size="20px" />
      </VStack>
      <Stack direction={["column", "row"]} p={[6, 8, 8]}>
        <VStack>
          <Heading as="h2" mt={16}>
            "The biggest adventure you can take is to live the life of your
            dreams" ✨
            <br />
            <br /> <i>~Oprah Winfrey</i>
            <br />
            <br />
            <Link to="/categories">
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme={"red"}
                bg={"teal"}
                _hover={{ bg: "teal.400" }}
              >
                Login
              </Button>
            </Link>
          </Heading>
        </VStack>
        <Box>
          {useColorModeValue(
            <Readlightsvg width="100%" />,
            <Readdarksvg width="100%" />
          )}
        </Box>
      </Stack>
      <Text
        color="teal"
        className="sanstext"
        fontSize="3xl"
        fontWeight="semibold"
        mt="4"
      >
        Welcome👋 {props.name}
      </Text>
    </VStack>
  );
}

export default Front;
