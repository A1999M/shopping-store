import { useRef, useLayoutEffect, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import EmpityCart from "../../svg/EmpityCart.json";
import Lottie from "lottie-react";
import SplitText from "../../plugins/SplitText";
import Footer from "../../components/Footer";
import "./ShoppingCart.scss";

function ShoppingCart() {
  let allBasketItems = useSelector((state) => state.shoppingCart.basket);
  let scopeRef = useRef();

  var productTotalPrice = 0;
  allBasketItems.forEach((item) => {
    productTotalPrice = item.totalPrice + productTotalPrice;
  });

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline();

      tl.from(".titleTotalPrice", {
        opacity: 0,
        clipPath: "inset(0% 0% 100% 0%)",
        y: 30,
        duration: 1,
        ease: "Expo.easeOut",
        delay: 0.2,
      });
      tl.from(
        ".titleQuantity",
        {
          opacity: 0,
          clipPath: "inset(0% 0% 100% 0%)",
          y: 30,
          duration: 1,
          ease: "Expo.easeOut",
        },
        "<0.2"
      );
      tl.from(
        ".titlePrice2",
        {
          opacity: 0,
          clipPath: "inset(0% 0% 100% 0%)",
          y: 30,
          duration: 1,
          ease: "Expo.easeOut",
        },
        "<0.2"
      );
      tl.from(
        ".titleProCartDetails",
        {
          opacity: 0,
          clipPath: "inset(0% 0% 100% 0%)",
          y: 30,
          duration: 1,
          ease: "Expo.easeOut",
        },
        "<0.2"
      );
    }, scopeRef);
    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(SplitText);

      let tl = gsap.timeline();

      let splitDesc = new SplitText(document.querySelector(".descEmptyCart"), {
        type: "lines",
      });

      tl.to(document.querySelector(".titleEmptyCart"), {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        perspective: 0,
        duration: 0.7,
        ease: "Expo.easeOut",
      });
      tl.from(
        splitDesc.lines,
        {
          opacity: 0,
          clipPath: "inset(0% 0% 100% 0%)",
          y: 30,
          stagger: 0.1,
          perspective: 200,
          duration: 1,
          ease: "Back.easeOut",
        },
        "<0.2"
      );
    }, document.querySelector(".scope"));
    return () => {
      ctx.revert();
      localStorage.removeItem("userCart");
      localStorage.setItem("userCart", JSON.stringify(allBasketItems));
    };
  });

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="scope"
      >
        {allBasketItems.length > 0 ? (
          <div ref={scopeRef} className="container-fluid">
            {/* header  */}
            {/* <div className="row px-5">
              <div className="col-12 px-0">
                <div className="shoppingCartContainer">
                  <div className="headerShoppingCart">
                    <p className="titleHeaderCart">cart</p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* cart items  */}
            <div className="row px-5 cartDetailTitles">
              <div className="col-5">
                <div className="titleProCartDetails">product</div>
              </div>
              <div className="col-2">
                <p className="titlePrice2">price</p>
              </div>
              <div className="col-3">
                <p className="titleQuantity">quantity</p>
              </div>
              <div className="col-2">
                <p className="titleTotalPrice">total</p>
              </div>
            </div>
            {allBasketItems.map((item, index) => {
              return <CartItems key={index} item={item} />;
            })}
            {/* footer of cart  */}
            <div className="row mt-5 px-5">
              <div className="col-4 mr-auto">
                <p className="orderSpecialTitle">order special instructions</p>
                <textarea
                  className="orderSpecial"
                  name="orderSpecial"
                  id="orderSpecial"
                  cols="50"
                  rows="6"
                  draggable="false"
                ></textarea>
              </div>
              <div className="col-6 ms-auto">
                <div className="checkOutShoppingCart">
                  <div className="wrapperSubTotalPrice">
                    <p className="shoppingCartTotalPriceTitle">total Price</p>
                    <p className="shoppingCartTotalPrice">
                      ${productTotalPrice}
                    </p>
                  </div>
                  <p className="taxesShippingTitle">
                    taxes and shipping calculated at checkout
                  </p>
                  <Link to="/payment" className="shoppingCartCheckOutBtn">
                    check out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="container emptyCart">
              <div className="row">
                <div className="col-6 ps-5">
                  <p className="titleEmptyCart">your shopping cart is empty</p>
                  <p className="descEmptyCart">
                    You have not chosen a product for your cart yet. Return to
                    the home page and pick a product.
                  </p>
                  <motion.button
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", delay: 0.6 }}
                    className="emptyCartBtn"
                  >
                    back to home
                  </motion.button>
                </div>
                <div className="col-6">
                  <Lottie
                    style={{ width: "100%", margin: "0 auto" }}
                    animationData={EmpityCart}
                    loop={true}
                    autoPlay={true}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </motion.div>
      <Footer />
    </>
  );
}

export default ShoppingCart;
