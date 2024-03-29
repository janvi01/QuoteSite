import {
  Box,
  Stack,
  IconButton,
  Spacer,
  VStack,
  Spinner,
  Flex,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

function SingleQuote({ user, quotelist }) {
  const homebgtoggle = useColorModeValue("home", "homeothermode");
  const [text, settext] = useState("");
  const [loading, setloading] = useState(false);
  const [quotes, setquotes] = useState([]);
  const { cat } = useParams();
  useEffect(() => {
    const api_url = "https://quotable.io/quotes?tags=" + cat;
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        setquotes(data.results);
        setloading(true);
      });
  }, [cat]);

  const addQuotes = async (text) => {
    if (user) {
      await setDoc(doc(db, "quotes", user.uid), {
        quotes: [...quotelist, text],
      });
      console.log(quotes);
      console.log(text);
      settext("");
    } else {
      alert("Please login first");
    }
  };

  return (
    <div>
      {loading ? (
        <div className={homebgtoggle}>
          <VStack spacing="48px" p={[2, 6, 8]} pt={8}>
            {quotes.map((item, key) => {
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
                    {item.content}
                  </Box>
                  <Spacer />
                  <HStack>
                    <Box pr={2} fontStyle="italic" color="black">
                      ~{item.author}
                    </Box>
                    <IconButton
                      icon={<BsFillHeartFill />}
                      colorScheme="pink"
                      onClick={() => {
                        settext(quotes[key]);
                        addQuotes(text);
                      }}
                    ></IconButton>
                    <a
                      className="twitter-share-button"
                      href={`https://twitter.com/intent/tweet?text=${item.content}+~+${item.author}`}
                    >
                      <IconButton
                        icon={<FaTwitter />}
                        colorScheme="twitter"
                      ></IconButton>
                    </a>
                  </HStack>
                </Stack>
              );
            })}
          </VStack>
        </div>
      ) : (
        <div className={homebgtoggle}>
          <Flex justify="center">
            <Spinner m={16} size="xl" color="teal" />
          </Flex>
        </div>
      )}
    </div>
  );
}

export default SingleQuote;
