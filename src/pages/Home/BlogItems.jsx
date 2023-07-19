import { Link } from "react-router-dom";
import { useRef } from "react";
import { gsap } from "gsap";

export default function BlogItems({ blogItems }) {
  let imageRef = useRef();
  let titleRef = useRef();
  let descRef = useRef();
  let btnRef = useRef();

  let hover = () => {
    gsap.to(imageRef.current, {
      filter: "grayscale(1)",
      scale: 1.1,
      duration: 1.5,
      ease: "Expo.easeOut",
    });
    gsap.to(titleRef.current, {
      color: "#044b61",
      duration: 0.5,
    });
  };
  let leave = () => {
    gsap.to(imageRef.current, {
      filter: "grayscale(0)",
      scale: 1,
      duration: 1.5,
      ease: "Expo.easeOut",
    });
    gsap.to(titleRef.current, {
      color: "#000",
      duration: 0.5,
    });
  };

  let hoverBtn = () => {
    gsap.to(btnRef.current, {
      backgroundColor: "#044b61",
      scaleX: 0.95,
      duration: 0.35,
    });
  };
  let leaveBtn = () => {
    gsap.to(btnRef.current, {
      backgroundColor: "#000",
      scaleX: 1,
      duration: 0.35,
    });
  };

  return (
    <>
      <div className="col-4">
        <div
          onMouseEnter={hover}
          onMouseLeave={leave}
          className="wrapperBlogItem"
        >
          <div className="wrpperBlogImg">
            <img
              ref={imageRef}
              src={blogItems.littleSrc}
              alt={blogItems.title}
            />
          </div>
          <div className="wrapperBodyBlog">
            <p ref={titleRef} className="titleBlogItem">
              {blogItems.title}
            </p>
            <p ref={descRef} className="descBlogItem">
              {blogItems.description}
            </p>
            <Link
              onMouseEnter={hoverBtn}
              onMouseLeave={leaveBtn}
              ref={btnRef}
              className="blogReadMore"
              to="/blog/:id=1"
            >
              read more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
