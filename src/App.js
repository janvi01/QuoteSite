import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import SingleQuote from "./Pages/SingleQuote";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/singlequote/:cat">
          <SingleQuote />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
