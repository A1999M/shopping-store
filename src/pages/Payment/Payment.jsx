import React from "react";
import { motion } from "framer-motion";
import "./Payment.scss";

export default function Payment() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container-fluid"
      >
        <div className="row">
          <div className="col-6">
            <p>hello everyone</p>
          </div>
          <div className="col-6"></div>
        </div>
      </motion.div>
    </>
  );
}
