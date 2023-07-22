import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./BlogDetails.scss";

export default function BlogDetails() {
  let scopeRef = useRef();
  let [inViewDesc, setInViewDesc] = useState(false);
  let { blogId } = useParams();
  let [currentBlog, setCurrenBlog] = useState();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      let unOrderItems = gsap.utils.toArray(".unorderBlogDetailsItems");
      let orderItems = gsap.utils.toArray(".orderBlogDetailsItems");

      unOrderItems.forEach((item) => {
        gsap.set(item, {
          opacity: 0,
          clipPath: "inset(0% 0% 100% 0%)",
          y: 30,
        });
      });
      orderItems.forEach((item) => {
        gsap.set(item, {
          opacity: 0,
          clipPath: "inset(0% 0% 100% 0%)",
          y: 30,
        });
      });
      gsap.set(".titleUnOrder", {
        opacity: 0,
        clipPath: "inset(0% 0% 100% 0%)",
        y: 30,
      });
      gsap.set(".titleOrder", {
        opacity: 0,
        clipPath: "inset(0% 0% 100% 0%)",
        y: 30,
      });

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".titleUnOrder",
          start: "center 70%",
          end: "bottom 0%",
        },
      });
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".titleOrder",
          start: "center 75%",
          end: "bottom 0%",
        },
      });

      tl.to(".titleUnOrder", {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        duration: 1,
        ease: "Expo.easeOut",
      });
      unOrderItems.forEach((item) => {
        tl.to(
          item,
          {
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
            duration: 1,
            ease: "Expo.easeOut",
          },
          "<0.1"
        );
      });

      tl2.to(".titleOrder", {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        duration: 1,
        ease: "Expo.easeOut",
        delay: 0.3,
      });
      orderItems.forEach((item) => {
        tl2.to(
          item,
          {
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
            duration: 1,
            ease: "Expo.easeOut",
          },
          "<0.1"
        );
      });
    }, scopeRef);

    return () => {
      ctx.revert();
    };
  });

  useLayoutEffect(() => {
    fetch(`http://localhost:8000/blogItems/?id=${blogId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCurrenBlog(data[0]);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  let variants = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeOut",
      },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  let descInView = () => {
    setInViewDesc(true);
  };

  return (
    <>
      <AnimatePresence mode="wait" initial="true">
        {currentBlog && (
          <motion.div
            ref={scopeRef}
            variants={variants}
            initial="hidden"
            animate="animate"
            exit="exit"
            className="container-fluid"
          >
            <div className="row">
              <div className="col-12">
                <h1 className="newsTitle text-center fs-1 mt-5">NEWS</h1>
              </div>
            </div>
            <div className="row blogDetails">
              <div className="col-2">
                <p className="categury">categury</p>
              </div>
              <div className="col-10">
                {/* header blog */}
                <div className="headerBlogDetail">
                  <p className="titleBlogDetail">{currentBlog.title}</p>
                  <p className="currentData">AUGUST 12, 2022</p>
                  <img
                    className="imageBlogDetails"
                    src={currentBlog.src}
                    alt={currentBlog.title}
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
                  <div className="unorderedListBlogDetail">
                    <p className="titleUnOrder">Sample Unordered List</p>
                    <ul className="unorderBlogDetails">
                      <li className="unorderBlogDetailsItems">
                        Loremous tempor ullamcorper iaculis.
                      </li>
                      <li className="unorderBlogDetailsItems">
                        Pellentesque vitae neque mollis urna mattis laoreet.
                      </li>
                      <li className="unorderBlogDetailsItems">
                        Divamus sit amet purus justo.
                      </li>
                      <li className="unorderBlogDetailsItems">
                        Proin molestie egestas orci ac suscipit risus posuere.
                      </li>
                    </ul>
                  </div>
                  <div className="orderedListBlogDetail">
                    <p className="titleOrder">Sample Ordered List</p>
                    <ol type="1" className="orderBlogDetails">
                      <li className="orderBlogDetailsItems">
                        Loremous tempor ullamcorper iaculis.
                      </li>
                      <li className="orderBlogDetailsItems">
                        Pellentesque vitae neque mollis urna mattis laoreet.
                      </li>
                      <li className="orderBlogDetailsItems">
                        Divamus sit amet purus justo.
                      </li>
                      <li className="orderBlogDetailsItems">
                        Proin molestie egestas orci ac suscipit risus posuere.
                      </li>
                    </ol>
                  </div>
                  <Link className="blogDetailsBackBtn" to="/">
                    <span className="backIconBlogDetils">&#8592;</span>
                    Back to home
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
