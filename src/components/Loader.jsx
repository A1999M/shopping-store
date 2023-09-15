import Lottie from "lottie-react";
import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import items from "../context/items";
import groovyWalkAnimation from "../assets/svg/loader.json";

export default function Loader() {
  let { isLoader } = useContext(items);
  return (
    <AnimatePresence mode="wait">
      {isLoader.items2 && (
        <motion.div
          key={isLoader.items2}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="wrapperLoader bg-dark"
        >
          <Lottie animationData={groovyWalkAnimation} loop={1} />;
        </motion.div>
      )}
    </AnimatePresence>
  );
}
