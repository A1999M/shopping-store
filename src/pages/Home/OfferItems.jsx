import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function OfferItems({ title, desc, bgImge, index }) {
  let OfferItemRef = useRef();
  let titleOfferItem = useRef();
  let descOfferItem = useRef();
  let btnOfferItem = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
    let ctx = gsap.context(() => {
      let offerItems = [...document.querySelectorAll(".wrapperOfferItem")];

      offerItems.forEach((item) => {
        gsap.set(item, {
          clipPath: "inset(100% 0% 0% 0%)",
          backgroundSize: "125%",
        });
        let tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "center 85%",
            end: "bottom 0%",
            id: "trigger1",
          },
        });

        tl1.to(item, {
          clipPath: "inset(0% 0% 0% 0%)",
          backgroundSize: "100%",
          duration: 2,
          ease: "Expo.easeOut",
        });
        tl1.to(
          item.querySelector(".titleOfferItem"),
          {
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
            duration: 1,
            ease: "Expo.easeOut",
          },
          "<0.4"
        );
        tl1.to(
          item.querySelector(".descOfferItem"),
          {
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
            duration: 1,
            ease: "Expo.easeOut",
          },
          "<0.1"
        );
        tl1.to(
          item.querySelector(".shopBtnOfferItem"),
          {
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.8,
            ease: "Expo.easeOut",
          },
          "<0.25"
        );
      });
    }, OfferItemRef);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  let handlerLImageHoverEnter = (e) => {
    let itemIndex = e.target.getAttribute("data-index");
    gsap.to(document.querySelectorAll(".wrapperOfferItem")[itemIndex - 1], {
      backgroundSize: "115%",
      duration: 1,
      ease: "Expo.easeOut",
    });
  };
  let handlerLImageHoverLeave = () => {
    gsap.to(document.querySelectorAll(".wrapperOfferItem")[index - 1], {
      backgroundSize: "100%",
      duration: 1,
      ease: "Expo.easeOut",
    });
  };

  return (
    <div
      onMouseEnter={handlerLImageHoverEnter}
      onMouseLeave={handlerLImageHoverLeave}
      className="wrapperOfferItem"
      data-index={index}
      style={{ backgroundImage: `url(${bgImge})` }}
      ref={OfferItemRef}
    >
      <p ref={titleOfferItem} className="titleOfferItem">
        {title}
      </p>
      <p ref={descOfferItem} className="descOfferItem">
        {desc}
      </p>
      <button ref={btnOfferItem} className="shopBtnOfferItem">
        shop now
      </button>
    </div>
  );
}
