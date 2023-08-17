import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import OfferItems from "./OfferItems";

export default function Offers() {
  let scopeRef = useRef();
  let titleRef = useRef();
  let descRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
    let ctx = gsap.context(() => {
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
    }, scopeRef);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

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
        <div className="row">
          <div className="col-12 col-md-6">
            <OfferItems
              title="MEN’S WEAR"
              desc="Big Sale 50% Off"
              index="1"
              bgImge="https://pandora-fashi.myshopify.com/cdn/shop/files/offer-bg-1.png?v=1681792772&width=750"
            />
          </div>
          <div className="col-12 col-md-6">
            <OfferItems
              title="FLASH SALE"
              desc="Upto 60% Discount"
              index="2"
              bgImge="https://pandora-fashi.myshopify.com/cdn/shop/files/offer-bg-2.png?v=1681792780&width=750"
            />
          </div>
        </div>
      </div>
    </>
  );
}
