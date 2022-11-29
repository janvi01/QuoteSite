import { VStack } from "@chakra-ui/react";
import React from "react";
import CategoryList from "../Components/CategoryList";
import Front from "../Components/Front";
import "../style.css";

function Home(props) {
  return (
    <div>
      <VStack justify="center">
        <Front name={props.name} />
        <CategoryList />
      </VStack>
    </div>
  );
}
export default Home;
