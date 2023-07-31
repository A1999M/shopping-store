import { gsap } from "gsap";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { cartActions } from "../../store/cartSlice";
import { useLayoutEffect } from "react";
import "./ShoppingCart.scss";

export default function CartItems({ item }) {
  let dispatch = useDispatch();
  useLayoutEffect(() => {
    let elms = document.querySelectorAll(".cartItems");

    if (elms) {
      elms.forEach((elm, index) => {
        gsap.to(elm, {
          opacity: 1,
          x: 0,
          duration: 1.8,
          ease: "Elastic.easeOut",
          delay: (index + 1) * 0.28,
        });
      });
    }
  }, []);

  return (
    <>
      <motion.div
        initial="false"
        exit={{ opacity: 0, x: -100 }}
        className="row px-5 cartItems"
      >
        <div className="col-5">
          <div className="wrapperCartDetails">
            <div className="wrapperCartImg">
              <img src={item.imageSrc} alt={item.name} />
            </div>
            <div className="wrapperMoreAboutCart">
              <p className="cartItemName">{item.name}</p>
              <div className="wrapperDeliveryFeatures">
                <span className="shippingDiscuont">35% shipping discount</span>
                <span className="merchantDiscuont">25% merchant discount</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2">
          <p className="cartItemPrice">${item.price}.00</p>
        </div>
        <div className="col-3">
          <div className="wrapperQuantityBtns">
            <div class="cartCountBtns">
              <span
                onClick={() => dispatch(cartActions.increment(item.id))}
                class="increment"
              >
                +
              </span>
              <span class="choosenProCount">{item.count}</span>
              <span
                onClick={() => {
                  if (item.count >= 2) {
                    dispatch(cartActions.decrement(item.id));
                  }
                }}
                style={
                  item.count == 1
                    ? { cursor: "no-drop" }
                    : { cursor: "pointer" }
                }
                class="decrement"
              >
                −
              </span>
            </div>
            <span
              onClick={() => {
                dispatch(cartActions.removeCartItems(item.id));
              }}
              class="material-symbols-outlined removeBtn"
            >
              delete
            </span>
          </div>
        </div>
        <div className="col-2">
          <p className="totalPriceCart">${item.totalPrice}.00</p>
        </div>
      </motion.div>
    </>
  );
}
