import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Offers() {
  let scopeRef = useRef();
  let leftOfferRef = useRef();
  let rightOfferRef = useRef();
  let titleRef = useRef();
  let descRef = useRef();

  let titleLeftOffer = useRef();
  let descLeftOffer = useRef();
  let btnLeftOffer = useRef();

  let titleLRightOffer = useRef();
  let descLRightOffer = useRef();
  let btnLRightOffer = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.set(leftOfferRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        backgroundSize: "125%",
      });
      gsap.set(rightOfferRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        backgroundSize: "125%",
      });
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

      let revealTl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          endTrigger: decodeURI.current,
          start: "center 80%",
          end: "end 0%",
        },
      });

      revealTl.to(titleRef.current, {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        duration: 1,
        ease: "Expo.easeOut",
      });
      revealTl.to(
        descRef.current,
        {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          y: 0,
          duration: 1,
          ease: "Expo.easeOut",
        },
        "<0.3"
      );

      let tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: leftOfferRef.current,
          start: "center 85%",
          end: "bottom 0%",
          id: "trigger1",
        },
      });
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: rightOfferRef.current,
          start: "center 85%",
          end: "bottom 0%",
          id: "trigger2",
        },
      });

      tl1.to(leftOfferRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        backgroundSize: "100%",
        duration: 2,
        ease: "Expo.easeOut",
      });
      tl1.to(
        titleLeftOffer.current,
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
        descLeftOffer.current,
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
        btnLeftOffer.current,
        {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.8,
          ease: "Expo.easeOut",
        },
        "<0.25"
      );

      tl2.to(rightOfferRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        backgroundSize: "100%",
        duration: 2,
        ease: "Expo.easeOut",
        delay: 0.4,
      });
      tl2.to(
        titleLRightOffer.current,
        {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          y: 0,
          duration: 1,
          ease: "Expo.easeOut",
        },
        "<0.4"
      );
      tl2.to(
        descLRightOffer.current,
        {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          y: 0,
          duration: 1,
          ease: "Expo.easeOut",
        },
        "<0.1"
      );
      tl2.to(
        btnLRightOffer.current,
        {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.8,
          ease: "Expo.easeOut",
        },
        "<0.25"
      );
    }, scopeRef);

    return () => {
      ctx.revert();
    };
  });

  let handlerLImageHoverEnter = () => {
    gsap.to(document.querySelector(".wrapperLeftOffer"), {
      backgroundSize: "115%",
      duration: 1,
      ease: "Expo.easeOut",
    });
  };
  let handlerLImageHoverLeave = () => {
    gsap.to(document.querySelector(".wrapperLeftOffer"), {
      backgroundSize: "100%",
      duration: 1,
      ease: "Expo.easeOut",
    });
  };
  let handlerRImageHoverEnter = () => {
    gsap.to(document.querySelector(".wrapperRightOffer"), {
      backgroundSize: "115%",
      duration: 1,
      ease: "Expo.easeOut",
    });
  };
  let handlerRImageHoverLeave = () => {
    gsap.to(document.querySelector(".wrapperRightOffer"), {
      backgroundSize: "100%",
      duration: 1,
      ease: "Expo.easeOut",
    });
  };

  return (
    <>
      <div ref={scopeRef} className="container-fluid px-5 offersContainer">
        <div className="row">
          <div className="col-12">
            <p ref={titleRef} className="titleOffers">
              EXCLUSIVE OFFER!
            </p>
            <p ref={descRef} className="descOffers">
              UNBOX YOUR HAPPINESS WITH PANDORA
            </p>
          </div>
        </div>
        <div className="row mt-3rem">
          <div className="col-6">
            <div
              onMouseEnter={handlerLImageHoverEnter}
              onMouseLeave={handlerLImageHoverLeave}
              className="wrapperLeftOffer"
              ref={leftOfferRef}
            >
              <p ref={titleLeftOffer} className="titleLeftOffer">
                MEN’S WEAR
              </p>
              <p ref={descLeftOffer} className="descLeftOffer">
                Big Sale 50% Off
              </p>
              <button ref={btnLeftOffer} className="shopLeftOffer">
                shop now
              </button>
            </div>
          </div>
          <div className="col-6">
            <div
              onMouseEnter={handlerRImageHoverEnter}
              onMouseLeave={handlerRImageHoverLeave}
              className="wrapperRightOffer"
              ref={rightOfferRef}
            >
              <p ref={titleLRightOffer} className="titleRightOffer">
                FLASH SALE
              </p>
              <p ref={descLRightOffer} className="descRightOffer">
                Upto 60% Discount
              </p>
              <button ref={btnLRightOffer} className="shopRightOffer">
                shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}