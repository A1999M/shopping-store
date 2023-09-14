import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import BlogItems from "./BlogItems";

export default function LatestBlogs() {
  let [bItems, setBItems] = useState(null);
  let titleRef = useRef(null);
  let descRef = useRef(null);
  let scopeRef = useRef(null);

  useLayoutEffect(() => {
    fetch("https://ecommerce-database-xi.vercel.app/blogItems")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBItems(data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.set(titleRef.current, {
        opacity: 0,
        clipPath: "inset(0% 0% 100% 0%)",
        y: 30,
      });
      gsap.set(descRef.current, {
        opacity: 0,
        clipPath: "inset(0% 0% 100% 0%)",
        y: 30,
      });
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          endTrigger: descRef.current,
          start: "bottom 80%",
          end: "bottom 0%",
        },
      });

      tl.to(titleRef.current, {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        duration: 1,
        ease: "Expo.easeOut",
      });
      tl.to(
        descRef.current,
        {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          y: 0,
          duration: 1,
          ease: "Expo.easeOut",
        },
        "<0.2"
      );
    }, scopeRef.current);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <>
      <div ref={scopeRef} className="container-fluid latestBlogs">
        <div className="row">
          <div className="col-12">
            <p ref={titleRef} className="titleBlog">
              OUR LATEST BLOG
            </p>
            <p ref={descRef} className="descBlog">
              The freshest and most exciting news
            </p>
          </div>
        </div>
        <div className="row justify-content-center blogRow">
          {bItems && (
            <>
              <BlogItems index="0" blogItems={bItems[0]} />
              <BlogItems index="1" blogItems={bItems[1]} />
              <BlogItems index="2" blogItems={bItems[2]} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
