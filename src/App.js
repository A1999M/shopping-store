import React, { useEffect, useLayoutEffect, useState } from "react";
import Home from "./pages/Home";
import LocomotiveScroll from "locomotive-scroll";
import BlogDetails from "./pages/BlogDetails";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import items from "./context/items";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  const [menItems, setMenItems] = useState();
  const [womenItems, setWomenItems] = useState();
  let location = useLocation();

  useLayoutEffect(() => {
    const locoScroll = new LocomotiveScroll();
  });

  useEffect(() => {
    // fetch men items

    fetch("http://localhost:8000/men")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMenItems(data);
      })
      .catch((err) => {
        console.warn(err);
      });

    // fetch women items

    fetch("http://localhost:8000/women")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWomenItems(data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  return (
    <>
      <NavBar />
      {menItems && womenItems && (
        <items.Provider
          value={{
            menItems,
            setMenItems,
            womenItems,
            setWomenItems,
          }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:blogId" element={<BlogDetails />} />
          </Routes>
        </items.Provider>
      )}
    </>
  );
}
