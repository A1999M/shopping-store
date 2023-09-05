import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Star from "../../components/Star";

export default function BestProItems({ item }) {
  let [inView, setInView] = useState(false);
  let [deviceSize, setDeviceSize] = useState(window.innerWidth);
  let wrapperProRef = useRef();

  let handleResize = () => {
    setDeviceSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let handlerEnterView = () => {
    setInView(true);
    wrapperProRef.current.style.visibility = "visible";
  };
  let handlerLeaveView = () => {
    setInView(false);
    wrapperProRef.current &&
      (wrapperProRef.current.style.visibility = "hidden");
  };

  return (
    <div ref={wrapperProRef} className="wrapperBestProItem">
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
          viewport={{ once: false, amount: "some" }}
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
        scrollbar={{ draggable: true }}
        viewport={{ once: false, amount: "some" }}
        transition={{
          type: "tween",
          duration: 0.7,
          ease: "easeOut",
          delay: 0.4,
        }}
        className="rateBestProItem"
      >
        <Star deviceSize={deviceSize} />
        <Star deviceSize={deviceSize} />
        <Star deviceSize={deviceSize} />
        <Star deviceSize={deviceSize} />
        <Star deviceSize={deviceSize} />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        onViewportEnter={handlerEnterView}
        onViewportLeave={handlerLeaveView}
        viewport={{ once: false, amount: "some" }}
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
        viewport={{ once: false, amount: "some" }}
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
          viewport={{ once: false, amount: "some" }}
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
  );
}
