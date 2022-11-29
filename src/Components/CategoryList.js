import React, { useState } from "react";
import {
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Flex,
  Box,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { ListData } from "./ListData";
import { Link } from "react-router-dom";

function CategoryList() {
  const [searchterm, setsearchterm] = useState("");
  return (
    <div>
      <VStack className="sanstext">
        <Text
          color="teal"
          className="sanstext"
          fontSize="4xl"
          fontWeight="semibold"
          m="12"
        >
          Categories
        </Text>
        {/* Searchbar */}
        <InputGroup mt={16} w={["70%", "60%", "50%"]}>
          <InputLeftElement
            pointerEvents="none"
            children={<AiOutlineSearch />}
          />
          <Input
            boxShadow="dark-lg"
            placeholder="Search Category"
            onChange={(e) => {
              setsearchterm(e.target.value);
            }}
          />
        </InputGroup>
        {/* Display list on being searched */}
        <Flex
          direction={["column", "row"]}
          spacing="96px"
          justify="center"
          wrap="wrap"
          w="100%"
        >
          {ListData.filter((val) => {
            if (searchterm === "") return val;
            else if (val.main.toLowerCase().includes(searchterm.toLowerCase()))
              return val;
            else return 0;
          }).map((val, key) => {
            return (
              <Box
                boxSize="500px"
                m={16}
                key={key}
                bgImage={val.imageurl}
                shadow="dark-lg"
                textAlign="center"
                bgRepeat="no-repeat"
              >
                <Link to={`/singlequote/${val.category}`}>
                  <Button
                    mt="70%"
                    variant="solid"
                    size="lg"
                    fontWeight="bold"
                    letterSpacing="wider"
                  >
                    {val.main}
                  </Button>
                </Link>
              </Box>
            );
          })}
        </Flex>
      </VStack>
    </div>
  );
}

export default CategoryList;
