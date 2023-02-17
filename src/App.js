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
import { auth, db } from "../src/firebase";
import LikedQuotes from "./Pages/LikedQuotes";
import { doc, getDoc } from "firebase/firestore";

function App() {
  const url = window.location.pathname.split("/").pop();
  const [userName, setuserName] = useState("");
  const [User, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setuserName(user.displayName);
        setUser(user);
      } else {
        setuserName("");
        setUser(null);
      }
    });
  }, [url]);

  const [quoteslist, setquoteslist] = useState([]);
  useEffect(() => {
    if (User) {
      const docRef = doc(db, "quotes", User.uid);
      const getQuotes = async () => {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data().quotes);
          setquoteslist(docSnap.data().quotes);
        } else {
          console.log("no doc exist");
        }
      };
      getQuotes();
    }
  }, [User]);

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
          <Route
            path="/liked"
            element={<LikedQuotes quotelist={quoteslist} />}
          />
          <Route
            path="/singlequote/:cat"
            element={<SingleQuote user={User} quotelist={quoteslist} />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
