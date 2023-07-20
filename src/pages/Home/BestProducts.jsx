import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import items from "../../context/items";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import BestProItems from "./BestProItems";

export default function BestProducts() {
  let scopeRef = useRef();
  let wrapperBestPro = useRef();
  let { menItems, womenItems } = useContext(items);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let horizontalElement = gsap.utils.toArray(".horizontalElement");

    let ctx = gsap.context(() => {
      let scrollTween = gsap.to(horizontalElement, {
        xPercent: -100 * (horizontalElement.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: wrapperBestPro.current,
          start: "center center",
          end: "+=1500",
          pin: true,
          id: "horizontalTrigger",
          snap: 1 / (horizontalElement.length - 1),
          scrub: 1.5,
          markers: {
            startColor: "#ffd000",
            endColor: "#ff0000",
            fontSize: "25px",
          },
        },
      });
    }, scopeRef);

    return () => {
      ScrollTrigger.getById("horizontalTrigger").kill();
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
            <p className="titleBestProducts">BEST PRODUCTS</p>
            <p className="descBestProducts">Our most popular products</p>
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
