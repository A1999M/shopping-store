import { motion } from "framer-motion";
import "./header.scss";

export default function Header() {
  let imageVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  return (
    <>
      <div className="container-fluid heroHeader">
        <div className="row px-0">
          <div className="col-12 p-0">
            <motion.div
              variants={imageVariant}
              initial="hidden"
              animate="show"
              transition={{ type: "tween", duration: 0.6 }}
              className="wrapperHeader"
            >
              <div
                data-scroll
                data-scroll-speed="0.3"
                className="wrapperHeroHeaderFeatures"
              >
                <p className="titleHeroHeader">TRENDS IN FASHION</p>
                <p className="offerHeroHeader">
                  20% DISCOUNT IN ALL WOMEN'S FASHION...
                </p>
                <button className="btnHeroHeader">
                  shop now <span>&#8594;</span>{" "}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
