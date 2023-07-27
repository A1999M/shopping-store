import { useRef, useLayoutEffect } from "react";
import CartItems from "./CartItems";
import { gsap } from "gsap";
import "./ShoppingCart.scss";

function ShoppingCart() {
  let scopeRef = useRef();

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
    return () => ctx.revert();
  });

  return (
    <>
      <div ref={scopeRef} className="container-fluid">
        {/* header  */}
        <div className="row">
          <div className="col-12">
            <div className="shoppingCartContainer">
              <div className="headerShoppingCart">
                <p className="titleHeaderCart">your cart</p>
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
        <CartItems />
        <CartItems />
        <CartItems />
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
                <p className="shoppingCartTotalPrice">$1520.00</p>
              </div>
              <p className="taxesShippingTitle">
                taxes and shipping calculated at checkout
              </p>
              <button className="shoppingCartCheckOutBtn">check out</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
