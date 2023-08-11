import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Star from "../../components/Star";

export default function BestProItems({ item }) {
  let [inView, setInView] = useState(false);

  let handlerEnterView = () => {
    setInView(true);
  };
  let handlerLeaveView = () => {
    setInView(false);
  };

  return (
    <div className="horizontalElement">
      <div className="wrapperBestProItem">
        <div className="wrapperImgBestProItem">
          <motion.img
            initial={{ scale: 2.5, clipPath: "inset(0% 0% 0% 100%)" }}
            animate={
              inView
                ? { scale: 1, clipPath: "inset(0% 0% 0% 0%)" }
                : { scale: 2.5, clipPath: "inset(0% 0% 0% 100%)" }
            }
            onViewportEnter={handlerEnterView}
            onViewportLeave={handlerLeaveView}
            viewport={{ once: false, amount: "all" }}
            transition={{ type: "tween", duration: 1, ease: "easeOut" }}
            className="imgBestProItem"
            src={item.image1}
            alt={item.name}
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          onViewportEnter={handlerEnterView}
          onViewportLeave={handlerLeaveView}
          viewport={{ once: false, amount: "all" }}
          transition={{
            type: "tween",
            duration: 0.7,
            ease: "easeOut",
            delay: 0.4,
          }}
          className="rateBestProItem"
        >
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          onViewportEnter={handlerEnterView}
          onViewportLeave={handlerLeaveView}
          viewport={{ once: false, amount: "all" }}
          transition={{
            type: "tween",
            duration: 0.7,
            ease: "easeOut",
            delay: 0.2,
          }}
          className="namePro"
        >
          {item.name.slice(0, 26)}...
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          onViewportEnter={handlerEnterView}
          onViewportLeave={handlerLeaveView}
          viewport={{ once: false, amount: "all" }}
          transition={{
            type: "tween",
            duration: 0.7,
            ease: "easeOut",
            delay: 0.3,
          }}
          className="pricePro"
        >
          $ {item.price}.00
        </motion.p>
        <Link to={`/posts/${item.id}`}>
          <motion.button
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            onViewportEnter={handlerEnterView}
            onViewportLeave={handlerLeaveView}
            viewport={{ once: false, amount: "all" }}
            transition={{
              type: "tween",
              duration: 0.7,
              ease: "easeOut",
              delay: 0.4,
            }}
            className="bestProBtn"
          >
            more details
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
