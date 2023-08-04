import { useEffect, useLayoutEffect, useState } from "react";
import Home from "./pages/Home";
import LocomotiveScroll from "locomotive-scroll";
import Payment from "./pages/Payment";
import BlogDetails from "./pages/BlogDetails";
import { AnimatePresence } from "framer-motion";
import ProductionDetails from "./pages/ProductionDetails";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "./store/cartSlice";
import { ShoppingCart } from "./pages/ShoppingCart";
import NavBar from "./components/NavBar";
import items from "./context/items";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  const [menItems, setMenItems] = useState();
  let dispatch = useDispatch();
  const [womenItems, setWomenItems] = useState();
  const [cartCountShow, setCartCountShow] = useState(0);
  let [show, setShow] = useState(false);
  let location = useLocation();

  useLayoutEffect(() => {
    let cartItems = JSON.parse(localStorage.getItem("userCart"));

    if (!cartItems) {
      setCartCountShow(0);
    } else {
      setCartCountShow(cartItems.length);
      dispatch(cartActions.setCartItems(cartItems));
    }

    let locoScroll = new LocomotiveScroll();
  }, [show]);

  useEffect(() => {
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
      {menItems && womenItems && (
        <items.Provider
          value={{
            menItems,
            setMenItems,
            womenItems,
            setWomenItems,
            show,
            setShow,
            cartCountShow,
            setCartCountShow,
          }}
        >
          <NavBar />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.key}>
              <Route path="/" element={<Home />} />
              <Route path="/blog/:blogId" element={<BlogDetails />} />
              <Route path="/posts/:productId" element={<ProductionDetails />} />
              <Route path="/shopping-cart" element={<ShoppingCart />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
          </AnimatePresence>
        </items.Provider>
      )}
    </>
  );
}
