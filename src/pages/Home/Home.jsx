import React, { useLayoutEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import "./home.scss";

export default function Home() {
  useLayoutEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 0.7,
        touchMultiplier: 2,
        normalizeWheel: true,
      },
    });
  });

  return (
    <>
      <NavBar />
      <Header />
    </>
  );
}
