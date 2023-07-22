import { useContext, useEffect, useRef } from "react";
import items from "../../context/items";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import BestProItems from "./BestProItems";

export default function BestProducts() {
  let scopeRef = useRef();
  let titleRef = useRef();
  let descRef = useRef();
  let wrapperBestPro = useRef();
  let { menItems, womenItems } = useContext(items);

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

      let horizontalElement = gsap.utils.toArray(".horizontalElement");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          endTrigger: descRef.current,
          start: "center 80%",
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

      let scrollTween = gsap.to(horizontalElement, {
        xPercent: -90 * (horizontalElement.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: wrapperBestPro.current,
          start: "center 55%",
          end: "+=1500",
          pin: true,
          id: "horizontalTrigger",
          snap: 1 / (horizontalElement.length - 1),
          scrub: 1.5,
          // markers: {
          //   startColor: "#ffd000",
          //   endColor: "#ff0000",
          //   fontSize: "25px",
          // },
        },
      });
    }, scopeRef);

    return () => {
      ctx.revert();
    };
  });

  let bestProducts = [
    menItems[5],
    womenItems[5],
    menItems[7],
    womenItems[9],
    menItems[8],
    womenItems[8],
    menItems[10],
    womenItems[6],
    menItems[6],
    womenItems[7],
    menItems[9],
    womenItems[10],
  ];

  return (
    <>
      <div
        ref={scopeRef}
        className="container-fluid bestProducts overflow-hidden px-5"
      >
        <div className="row mb3rem">
          <div className="col-12">
            <p ref={titleRef} className="titleBestProducts">
              BEST PRODUCTS
            </p>
            <p ref={descRef} className="descBestProducts">
              Our most popular products
            </p>
          </div>
        </div>
        <div ref={wrapperBestPro} className="wrapperBestProducts">
          {bestProducts &&
            bestProducts.map((pro, index) => {
              return <BestProItems key={index} item={pro} />;
            })}
        </div>
      </div>
    </>
  );
}
