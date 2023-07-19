import { useState, useContext, useEffect } from "react";
import items from "../../context/items";
import TrendCollectionItem from "./TrendCollectionItem";
import { motion } from "framer-motion";
import "./home.scss";

export default function TrendCollection() {
  let { menItems, womenItems } = useContext(items);
  let [trendItems, setTrendItems] = useState();
  const [bestSeller, setBestSeller] = useState(true);
  const [arrivals, setArrivals] = useState(false);
  const [topTrebding, setTopTrending] = useState(false);

  useEffect(() => {
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

  return (
    <>
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
              <button onClick={handlerSeller} className="sellerTCollection">
                best sellers
              </button>
              <button onClick={handlerArrivals} className="arrivalsTCollection">
                new arrivals
              </button>
              <button onClick={handlerTrend} className="topTCollection">
                top trending
              </button>
            </div>
          </div>
        </div>
        {/* better seller section */}
        {bestSeller && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ type: "tween", duration: 0.6 }}
            className="row"
          >
            {trendItems &&
              trendItems.map((item) => {
                return <TrendCollectionItem key={item.id} item={item} />;
              })}
          </motion.div>
        )}
        {/* arrivals section */}
        {arrivals && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ type: "tween", duration: 0.6 }}
            className="row"
          >
            {menItems &&
              menItems.map((item, index) => {
                if (index < 8) {
                  return <TrendCollectionItem key={item.id} item={item} />;
                } else {
                  return null;
                }
              })}
          </motion.div>
        )}
        {/* top trending section */}
        {topTrebding && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ type: "tween", duration: 0.6 }}
            className="row"
          >
            {womenItems &&
              womenItems.map((item, index) => {
                if (index < 8) {
                  return <TrendCollectionItem key={item.id} item={item} />;
                } else {
                  return null;
                }
              })}
          </motion.div>
        )}
      </div>
    </>
  );
}
