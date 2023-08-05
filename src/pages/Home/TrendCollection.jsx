import { useState, useContext, useEffect, useRef } from "react";
import items from "../../context/items";
import TrendCollectionItem from "./TrendCollectionItem";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ToastContainer } from "react-toastify";
import { ScrollTrigger } from "gsap/all";
import "./home.scss";

export default function TrendCollection() {
  let sellerRef = useRef();
  let arrivalsRef = useRef();
  let topTRef = useRef();
  let { menItems, womenItems } = useContext(items);
  let [trendItems, setTrendItems] = useState();
  const [bestSeller, setBestSeller] = useState(true);
  const [arrivals, setArrivals] = useState(false);
  const [topTrebding, setTopTrending] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
    let ctx = gsap.context(() => {
      gsap.set(document.querySelector(".titleTrendCollection"), {
        opacity: 0,
        y: 30,
        clipPath: "inset(0% 0% 100% 0%)",
      });
      gsap.set(document.querySelector(".descCollection"), {
        opacity: 0,
        y: 30,
        clipPath: "inset(0% 0% 100% 0%)",
      });
      gsap.set(sellerRef.current, {
        opacity: 0,
        y: 20,
        clipPath: "inset(0% 0% 100% 0%)",
      });
      gsap.set(arrivalsRef.current, {
        opacity: 0,
        y: 20,
        clipPath: "inset(0% 0% 10% 0%)",
      });
      gsap.set(topTRef.current, {
        opacity: 0,
        y: 20,
        clipPath: "inset(0% 0% 100% 0%)",
      });

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.querySelector(".titleTrendCollection"),
          start: "center 85%",
          end: "bottom 0%",
          id: "trigger1",
        },
      });
      tl.to(document.querySelector(".titleTrendCollection"), {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1,
        ease: "Expo.easeOut",
      });
      tl.to(
        document.querySelector(".descCollection"),
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "Expo.easeOut",
        },
        "<0.25"
      );
      tl.to(
        sellerRef.current,
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          // duration: 1,
          // ease: "Expo.easeOut",
        },
        "<0.1"
      );
      tl.to(
        arrivalsRef.current,
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          // duration: 1,
          // ease: "Expo.easeOut",
        },
        "<0.1"
      );
      tl.to(
        topTRef.current,
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          // duration: 1,
          // ease: "Expo.easeOut",
        },
        "<0.1"
      );
    });

    if (menItems && womenItems) {
      let trends = [
        menItems[0],
        womenItems[2],
        menItems[6],
        womenItems[3],
        womenItems[8],
        menItems[3],
        womenItems[11],
        menItems[5],
      ];
      setTrendItems(trends);
    }

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  let handlerSeller = () => {
    setBestSeller(true);
    setArrivals(false);
    setTopTrending(false);
  };
  let handlerArrivals = () => {
    setBestSeller(false);
    setArrivals(true);
    setTopTrending(false);
  };
  let handlerTrend = () => {
    setBestSeller(false);
    setArrivals(false);
    setTopTrending(true);
  };

  let hoverEndSeller = () => {
    if (!bestSeller) {
      gsap.to(sellerRef.current, {
        borderColor: "rgba(0, 0, 0, 0)",
        duration: 0.35,
      });
    }
  };
  let hoverStartSeller = () => {
    if (!bestSeller) {
      gsap.to(sellerRef.current, {
        borderColor: "#000",
        duration: 0.35,
      });
    }
  };

  let hoverStartArrivals = () => {
    if (!arrivals) {
      gsap.to(arrivalsRef.current, {
        borderColor: "#000",
        duration: 0.35,
      });
    }
  };
  let hoverEndArrivals = () => {
    if (!arrivals) {
      gsap.to(arrivalsRef.current, {
        borderColor: "rgba(0, 0, 0, 0)",
        duration: 0.35,
      });
    }
  };

  let hoverStartTopTRef = () => {
    if (!topTrebding) {
      gsap.to(topTRef.current, {
        borderColor: "#000",
        duration: 0.35,
      });
    }
  };
  let hoverEndTopTRef = () => {
    if (!topTrebding) {
      gsap.to(topTRef.current, {
        borderColor: "rgba(0, 0, 0, 0)",
        duration: 0.35,
      });
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container-fluid px-5">
        <div className="row">
          <div className="col-12">
            <p className="titleTrendCollection">TRENDY COLLECTION</p>
            <p className="descCollection">Fashion As Unique As You Are.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="wrapperTrendCollectionCategory">
              <button
                ref={sellerRef}
                onMouseEnter={hoverStartSeller}
                onMouseLeave={hoverEndSeller}
                style={
                  bestSeller
                    ? { borderColor: "#000" }
                    : { borderColor: "rgba(0, 0, 0, 0)" }
                }
                onClick={handlerSeller}
                className="sellerTCollection"
              >
                best sellers
              </button>
              <button
                ref={arrivalsRef}
                onMouseEnter={hoverStartArrivals}
                onMouseLeave={hoverEndArrivals}
                style={
                  arrivals
                    ? { borderColor: "#000" }
                    : { borderColor: "rgba(0, 0, 0, 0)" }
                }
                onClick={handlerArrivals}
                className="arrivalsTCollection"
              >
                new arrivals
              </button>
              <button
                ref={topTRef}
                onMouseEnter={hoverStartTopTRef}
                onMouseLeave={hoverEndTopTRef}
                style={
                  topTrebding
                    ? { borderColor: "#000" }
                    : { borderColor: "rgba(0, 0, 0, 0)" }
                }
                onClick={handlerTrend}
                className="topTCollection"
              >
                top trending
              </button>
            </div>
          </div>
        </div>
        {/* better seller section */}
        <AnimatePresence mode="wait">
          {bestSeller && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={bestSeller}
              className="row"
            >
              {trendItems &&
                trendItems.map((item, index) => {
                  return (
                    <TrendCollectionItem
                      index={index}
                      key={item.id}
                      item={item}
                    />
                  );
                })}
            </motion.div>
          )}
          {/* arrivals section */}
          {arrivals && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              className="row"
            >
              {menItems &&
                menItems.map((item, index) => {
                  if (index < 8) {
                    return (
                      <TrendCollectionItem
                        index={index}
                        key={item.id}
                        item={item}
                      />
                    );
                  } else {
                    return null;
                  }
                })}
            </motion.div>
          )}
          {/* top trending section */}
          {topTrebding && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              key={bestSeller}
              className="row"
            >
              {womenItems &&
                womenItems.map((item, index) => {
                  if (index < 8) {
                    return (
                      <TrendCollectionItem
                        index={index}
                        key={item.id}
                        item={item}
                      />
                    );
                  } else {
                    return null;
                  }
                })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
