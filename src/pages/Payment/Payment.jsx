import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import PaymentStepper from "./PaymentStepper";
import AllPayForms from "./AllPayForms";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import PaymentItems from "./PaymentItems";
import Footer from "../../components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import Check from "../../svg/Check.json";
import Error from "../../svg/Error.json";
import MuiBreadCrumb from "./MuiBreadCrumb";
import "./Payment.scss";
import "./responsivePayment.scss";

export default function AddInformation() {
  let cartItems = useSelector((state) => state.shoppingCart.basket);
  let [size, setSize] = useState(window.innerWidth);
  let [activeNumber, setActiveNumber] = useState(0);
  let [showModal, setShowModal] = useState(false);
  let [hasOrder, setHasOrder] = useState(false);
  let totalPrice = useRef(0);

  let handleResize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  if (cartItems) {
    cartItems.forEach((item) => {
      totalPrice.current += item.totalPrice;
    });
  }

  let [billing, setBilling] = useState(true);
  let [contact, setContact] = useState(false);
  let [payment, setPayment] = useState(false);

  let handleClosePayModal = () => {
    setHasOrder(true);
    setShowModal(false);
    document.querySelector(".paymentOverlay").style.opacity = 0;
    setTimeout(() => {
      document.querySelector(".paymentOverlay").style.display = "none";
    }, 300);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showModal && !hasOrder && (
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                scale: 0.7,
              },
              show: {
                opacity: 1,
                scale: 1,
                transition: {
                  when: "beforeChildren",
                  type: "spring",
                },
              },
              exit: {
                opacity: 0,
                top: "33%",
              },
            }}
            initial="hidden"
            animate="show"
            exit="exit"
            className="wrapperPayModal"
          >
            <Lottie
              style={{ width: "40%", margin: "0 auto" }}
              animationData={Check}
              loop={false}
            />
            <motion.p
              initial={{ opacity: 0, y: 35, clipPath: "inset(0% 0% 100% 0%)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ type: "spring", delay: 0.3 }}
              className="titlePayModal"
            >
              Thanks For your order
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 35, clipPath: "inset(0% 0% 100% 0%)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ type: "spring", delay: 0.4 }}
              className="descPayModal"
            >
              Your order is confirmed and will be delivered shortly.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", delay: 0.5 }}
              className="payModalCloseBtn"
              onClick={handleClosePayModal}
            >
              close
            </motion.button>
            <motion.button
              className="backPayBtn"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", delay: 0.6 }}
              onClick={handleClosePayModal}
            >
              <Link
                onClick={handleClosePayModal}
                to="/"
                className="backPayLink"
              >
                back to home
              </Link>
            </motion.button>
          </motion.div>
        )}
        {showModal && hasOrder && (
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                scale: 0.7,
              },
              show: {
                opacity: 1,
                scale: 1,
                transition: {
                  when: "beforeChildren",
                  type: "spring",
                },
              },
              exit: {
                opacity: 0,
                top: "33%",
              },
            }}
            initial="hidden"
            animate="show"
            exit="exit"
            className="wrapperPayModal"
          >
            <Lottie
              style={{ width: "29%", margin: "0 auto" }}
              animationData={Error}
              loop={false}
            />
            <motion.p
              initial={{ opacity: 0, y: 35, clipPath: "inset(0% 0% 100% 0%)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ type: "spring", delay: 0.3 }}
              className="titlePayModal"
            >
              Your order has already been registered
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", delay: 0.5 }}
              className="payModalCloseBtn"
              onClick={handleClosePayModal}
            >
              close
            </motion.button>
            <motion.button
              className="backPayBtn"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", delay: 0.6 }}
              onClick={handleClosePayModal}
            >
              <Link
                onClick={handleClosePayModal}
                to="/"
                className="backPayLink"
              >
                back to home
              </Link>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="paymentOverlay"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, x: -150 }}
        className="container-fluid paymentContainer"
      >
        <div className="row paymentRow">
          <div
            className={
              size > 1060
                ? "col-12 mb-4 mt-3 ms-3"
                : "col-12 col-md-10 mb-4 mt-3 ms-3"
            }
          >
            <MuiBreadCrumb
              setActiveNumber={setActiveNumber}
              activeNumber={activeNumber}
              setBilling={setBilling}
              setContact={setContact}
              setPayment={setPayment}
            />
          </div>
          <div className={size > 1060 ? "col-7" : "col-12 col-md-10"}>
            <PaymentStepper activeNumber={activeNumber} />
            <AllPayForms
              activeNumber={activeNumber}
              setActiveNumber={setActiveNumber}
              billing={billing}
              setBilling={setBilling}
              contact={contact}
              setContact={setContact}
              payment={payment}
              setPayment={setPayment}
              setShowModal={setShowModal}
              size={size}
            />
          </div>
          {size >= 1060 && (
            <div className="col-5 d-none d-lg-block bgCartItemPayment">
              {cartItems &&
                cartItems.map((item, index) => {
                  return <PaymentItems index={index} item={item} />;
                })}
              <div className="wrapperPaymentSubtotal">
                <p className="paymentSubtotalTitle">Subtotal</p>
                <p className="paymentSubtotalPrice">${totalPrice.current}</p>
              </div>
              <div className="wrapperPaymentShipping">
                <p className="paymentShippingTitle">Shipping</p>
                <p className="paymentShippingPrice">Free</p>
              </div>
              <div className="wrapperPaymentTotalPrice">
                <p className="paymentTotalPriceTitle">total</p>
                <p className="paymentTotalPricePrice">${totalPrice.current}</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
