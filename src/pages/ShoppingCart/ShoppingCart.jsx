import { useRef, useLayoutEffect, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import EmpityCart from "../../svg/EmpityCart.json";
import Lottie from "lottie-react";
import SplitText from "../../plugins/SplitText";
import "./ShoppingCart.scss";
import "./responsiveShoppingCart.scss";

function ShoppingCart() {
  let allBasketItems = useSelector((state) => state.shoppingCart.basket);
  let [size, setSize] = useState(window.innerWidth);
  let scopeRef = useRef();

  var productTotalPrice = 0;
  allBasketItems.forEach((item) => {
    productTotalPrice = item.totalPrice + productTotalPrice;
  });

  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
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
    }, scopeRef.current);
    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    let handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
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
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
            {/*  */}
            <div className="row cartDetailTitles">
              <div className="col-9 col-sm-5">
                <div className="titleProCartDetails">product</div>
              </div>
              {size >= 768 && (
                <div className="col-1 col-md-2">
                  <p className="titlePrice2">price</p>
                </div>
              )}
              {size > 576 && (
                <div className="col-4 col-md-3">
                  <p className="titleQuantity">quantity</p>
                </div>
              )}
              <div className="col-3 col-sm-2">
                <p className="titleTotalPrice">total</p>
              </div>
            </div>
            {/*  */}
            {allBasketItems.map((item, index) => {
              return <CartItems size={size} key={index} item={item} />;
            })}
            {/* footer of cart  */}
            <div className="row checkOutRow">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", delay: 0.4 }}
                className="col-12 col-sm-6 orderBox"
              >
                <p className="orderSpecialTitle">order special instructions</p>
                <textarea
                  className="orderSpecial"
                  name="orderSpecial"
                  id="orderSpecial"
                  cols="50"
                  rows="6"
                  draggable="false"
                ></textarea>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", delay: 0.3 }}
                className="col-12 col-sm-6 checkOutBox"
              >
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
              </motion.div>
            </div>
          </div>
        ) : (
          <>
            <div className="container emptyCart">
              <div className="row">
                <div className="col-12 text-center text-md-start col-md-6 ps-0 ps-md-5 ">
                  <p className="titleEmptyCart">your shopping cart is empty</p>
                  {size < 768 ? (
                    <p className="descEmptyCart">
                      looks like you haven't added anything to your cart yet
                    </p>
                  ) : (
                    <p className="descEmptyCart">
                      You have not chosen a product for your cart yet. Return to
                      the home page and pick a product
                    </p>
                  )}
                  <motion.button
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", delay: 0.6 }}
                    className="emptyCartBtn"
                  >
                    back to home
                  </motion.button>
                </div>
                <div className="col-12 order-first order-md-last col-md-6">
                  <div className="wrapperLottie">
                    <Lottie
                      style={{ width: "100%", margin: "0 auto" }}
                      animationData={EmpityCart}
                      loop={true}
                      autoPlay={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </>
  );
}

export default ShoppingCart;
