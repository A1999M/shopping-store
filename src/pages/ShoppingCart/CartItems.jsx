import { gsap } from "gsap";
import "./ShoppingCart.scss";
import { useLayoutEffect } from "react";

export default function CartItems() {
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
  });

  return (
    <>
      <div className="row px-5 cartItems">
        <div className="col-5">
          <div className="wrapperCartDetails">
            <div className="wrapperCartImg">
              <img
                src="https://pandora-fashi.myshopify.com/cdn/shop/products/yoga_hoodie1.jpg?v=1660552869&width=990"
                alt="Men Regular Fit Yoga hoodie"
              />
            </div>
            <div className="wrapperMoreAboutCart">
              <p className="cartItemName">Men Regular Fit Yoga hoodie</p>
              <div className="wrapperDeliveryFeatures">
                <span className="shippingDiscuont">35% shipping discount</span>
                <span className="merchantDiscuont">25% merchant discount</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2">
          <p className="cartItemPrice">$690.00</p>
        </div>
        <div className="col-3">
          <div className="wrapperQuantityBtns">
            <div class="cartCountBtns">
              <span class="increment">+</span>
              <span class="choosenProCount">1</span>
              <span class="decrement">−</span>
            </div>
            <span class="material-symbols-outlined removeBtn">delete</span>
          </div>
        </div>
        <div className="col-2">
          <p className="totalPriceCart">$651.00</p>
        </div>
      </div>
    </>
  );
}
