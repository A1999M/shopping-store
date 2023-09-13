import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import SplitText from "../../plugins/SplitText";
import "./BlogDetails.scss";
import "./responsiveBlog.scss";

export default function BlogDetails() {
  let scopeRef = useRef();
  let titleRef = useRef();
  let dataRef = useRef();
  let imageRef = useRef();
  let titleUnOrderRef = useRef();
  let titleOrderRef = useRef();
  let blogDetailsBackBtnRef = useRef();
  let [inViewDesc, setInViewDesc] = useState(false);
  let { blogId } = useParams();
  let [currentBlog, setCurrenBlog] = useState();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    gsap.registerPlugin(SplitText);
    let splitTitle = new SplitText(titleRef.current, { type: "words" });

    gsap.to(splitTitle.words, {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      stagger: 0.05,
      perspective: 0,
      x: 0,
      duration: 1.2,
      ease: "Expo.easeOut",
    });
    gsap.to(dataRef.current, {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      x: 0,
      duration: 1,
      ease: "Expo.easeOut",
      delay: 0.35,
    });
    gsap.to(imageRef.current, {
      clipPath: "inset(10% 0% 10% 0%)",
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "Expo.easeOut",
      delay: 0.2,
    });
  }, []);

  useEffect(() => {
    fetch(`https://ecommerce-database-xi.vercel.app/blogItems/?id=${blogId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCurrenBlog(data[0]);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [blogId]);

  let descInView = () => {
    setInViewDesc(true);
  };

  let unOrderVariants = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        when: "beforeChildren",
        staggerChildren: 0.15,
        delayChildren: 0,
      },
    },
  };
  let unOrderCHilds = {
    initial: {
      opacity: 0,
      y: 30,
      clipPath: "inset(0% 0% 100% 0%)",
    },
    animate: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        type: "spring",
      },
    },
  };
  let orderVariants = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        when: "beforeChildren",
        delay: 0.5,
        staggerChildren: 0.15,
        delayChildren: 0,
      },
    },
  };
  let orderCHilds = {
    initial: {
      opacity: 0,
      y: 30,
      clipPath: "inset(0% 0% 100% 0%)",
    },
    animate: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        type: "spring",
      },
    },
  };

  return (
    <>
      {currentBlog && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          ref={scopeRef}
          className="container-fluid blogDetailsContainer"
        >
          <div className="row blogDetails">
            <div className="col-12">
              {/* header blog */}
              <div className="headerBlogDetail">
                <p ref={titleRef} className="titleBlogDetail">
                  {currentBlog.title}
                </p>
                <p ref={dataRef} className="currentData">
                  AUGUST 12, 2022
                </p>
                <img
                  className="imageBlogDetails"
                  src={currentBlog.src}
                  alt={currentBlog.title}
                  ref={imageRef}
                />
              </div>
              {/* body blog */}
              <div className="bodyBlogDetail">
                <motion.p
                  onViewportEnter={descInView}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    inViewDesc ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ type: "tween", duration: 0.5 }}
                  viewport={{ once: true, amount: "all" }}
                  className="descBlogDetail"
                >
                  {currentBlog.description}
                </motion.p>
                <motion.div
                  variants={unOrderVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.3 }}
                  className="unorderedListBlogDetail"
                >
                  <motion.p ref={titleUnOrderRef} className="titleUnOrder">
                    Sample Unordered List
                  </motion.p>
                  <ul className="unorderBlogDetails">
                    <motion.li
                      variants={unOrderCHilds}
                      className="unorderBlogDetailsItems"
                    >
                      Loremous tempor ullamcorper iaculis.
                    </motion.li>
                    <motion.li
                      variants={unOrderCHilds}
                      className="unorderBlogDetailsItems"
                    >
                      Pellentesque vitae neque mollis urna mattis laoreet.
                    </motion.li>
                    <motion.li
                      variants={unOrderCHilds}
                      className="unorderBlogDetailsItems"
                    >
                      Divamus sit amet purus justo.
                    </motion.li>
                    <motion.li
                      variants={unOrderCHilds}
                      className="unorderBlogDetailsItems"
                    >
                      Proin molestie egestas orci ac suscipit risus posuere.
                    </motion.li>
                  </ul>
                </motion.div>
                <motion.div
                  variants={orderVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.3 }}
                  className="orderedListBlogDetail"
                >
                  <p ref={titleOrderRef} className="titleOrder">
                    Sample Ordered List
                  </p>
                  <ol type="1" className="orderBlogDetails">
                    <motion.li
                      variants={orderCHilds}
                      className="orderBlogDetailsItems"
                    >
                      Loremous tempor ullamcorper iaculis.
                    </motion.li>
                    <motion.li
                      variants={orderCHilds}
                      className="orderBlogDetailsItems"
                    >
                      Pellentesque vitae neque mollis urna mattis laoreet.
                    </motion.li>
                    <motion.li
                      variants={orderCHilds}
                      className="orderBlogDetailsItems"
                    >
                      Divamus sit amet purus justo.
                    </motion.li>
                    <motion.li
                      variants={orderCHilds}
                      className="orderBlogDetailsItems"
                    >
                      Proin molestie egestas orci ac suscipit risus posuere.
                    </motion.li>
                  </ol>
                </motion.div>
                <Link
                  ref={blogDetailsBackBtnRef}
                  className="blogDetailsBackBtn"
                  to="/"
                >
                  <span className="backIconBlogDetils">&#8592;</span>
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
