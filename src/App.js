import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import SingleQuote from "./Pages/SingleQuote";
import Footer from "./Components/Footer";
import CategoryList from "./Components/CategoryList";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { auth } from "../src/firebase";
import LikedQuotes from "./Pages/LikedQuotes";

function App() {
  const url = window.location.pathname.split("/").pop();
  const [userName, setuserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) setuserName(user.displayName);
      else setuserName("");
    });
  }, [url]);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar name={userName} />
        <Routes>
          <Route path="/" element={<Home name={userName} />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/liked" element={<LikedQuotes />} />
          <Route path="/singlequote/:cat" element={<SingleQuote />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
