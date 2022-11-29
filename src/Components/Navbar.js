import {
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsMoon, BsSun } from "react-icons/bs";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { BsFillHeartFill } from "react-icons/bs";

function Navbar(props) {
  const { toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error.mesage);
      });
  };
  return (
    <div
      style={{
        width: "100%",
        position: "sticky",
        top: 0,
        backgroundColor: useColorModeValue("#ffffff", "#1a202c"),
      }}
    >
      <HStack
        justify="space-between"
        h="10"
        pr={[4, 4, 10]}
        pl={[4, 4, 10]}
        p={7}
        borderBottomWidth="thin"
        className="sanstext"
      >
        <Link to="/">
          <HStack>
            <Text color="teal" fontWeight="extrabold" fontSize="2xl">
              "Quote"
            </Text>
            <Text fontWeight="bold" fontSize="2xl">
              Site
            </Text>
          </HStack>
        </Link>
        <HStack spacing="24px">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/categories">Categories</Link>
        </HStack>
        <HStack>
          {!props.name ? (
            <Link to="/signup">
              <Button colorScheme="teal">Login/Signup</Button>
            </Link>
          ) : (
            <>
              <Link to="/liked">
                <IconButton
                  icon={<BsFillHeartFill />}
                  colorScheme="pink"
                ></IconButton>
              </Link>
              <Button colorScheme="teal" onClick={logout}>
                Logout
              </Button>
            </>
          )}
          <IconButton
            icon={useColorModeValue(<BsMoon />, <BsSun />)}
            colorScheme="teal"
            onClick={toggleColorMode}
          ></IconButton>
        </HStack>
      </HStack>
    </div>
  );
}

export default Navbar;
