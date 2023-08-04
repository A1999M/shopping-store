import React from "react";
import { motion } from "framer-motion";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

export default function PaymentItems({ item, index }) {
  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            // x: 150,
            y: 50,
          },
          show: (index) => ({
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              type: "spring",
              delay: index * 0.15,
              damping: 10,
              stiffness: 110,
            },
          }),
        }}
        initial="hidden"
        animate="show"
        custom={index}
        exit={{ x: 150, opacity: 0 }}
        className="wrapperPaymentCartItem"
      >
        <div className="wrapperPaymentItemImg">
          <img src={item.imageSrc} alt={item.name} />
        </div>
        <div className="wrapperPaymentItemDetails">
          <p className="PaymentItemName">{item.name}</p>
          <p className="PaymentItemCount">
            count product <span>{item.count}</span>{" "}
          </p>
          <p className="deliveryPaymentItem">
            <LocalShippingIcon style={{ color: "#444242" }} />
            <span className="zeroCost">Zero cost shipping.</span>
          </p>
        </div>
        <div className="wrapperPaymentItemPrice">
          <p className="pricePaymentItem">
            total price <span>${item.totalPrice}</span>
          </p>
        </div>
      </motion.div>
    </>
  );
}
