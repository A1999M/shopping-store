import { useRef, useLayoutEffect, useEffect } from "react";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import { gsap } from "gsap";
import { motion } from "framer-motion";
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
    return () => {
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
      >
        {allBasketItems ? (
          <div ref={scopeRef} className="container-fluid">
            {/* header  */}
            <div className="row px-5">
              <div className="col-12 px-0">
                <div className="shoppingCartContainer">
                  <div className="headerShoppingCart">
                    <p className="titleHeaderCart">your shopping cart</p>
                  </div>
                </div>
              </div>
            </div>
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
                  <Link
                    to="/addInformation"
                    className="shoppingCartCheckOutBtn"
                  >
                    check out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>your shopping cart is empty</p>
        )}
      </motion.div>
    </>
  );
}

export default ShoppingCart;
