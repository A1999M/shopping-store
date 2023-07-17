import React, { useLayoutEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import TrendCollection from "./TrendCollection";
import "./home.scss";

export default function Home() {
  useLayoutEffect(() => {
    const locoScroll = new LocomotiveScroll({
      lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.1,
        duration: 1.2,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 0.8,
        touchMultiplier: 2,
        normalizeWheel: true,
      },
    });
    locoScroll.start();
  });

  return (
    <>
      <NavBar />
      <Header />
      <TrendCollection />
    </>
  );
}
