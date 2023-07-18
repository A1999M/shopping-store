import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Star from "../../components/Star";

export default function TrendCollectionItem({ item }) {
  let cartInfoRef = useRef();

  useLayoutEffect(() => {
    gsap.set(document.querySelector(".proCollectionName"), {
      opacity: 0,
      y: 30,
      clipPath: "inset(100% 0% 0% 0%)",
    });
    gsap.set(document.querySelector(".proCollectionPrice"), {
      opacity: 0,
      y: 20,
      clipPath: "inset(100% 0% 0% 0%)",
    });
    gsap.set(document.querySelector(".addTocartCollection"), {
      opacity: 0,
      y: 20,
      clipPath: "inset(100% 0% 0% 0%)",
    });
    gsap.set(document.querySelector(".moreDetailsCollection"), {
      opacity: 0,
      y: 20,
      clipPath: "inset(100% 0% 0% 0%)",
    });
    gsap.set(document.querySelector(".ratesCollection"), {
      opacity: 0,
      clipPath: "inset(0% 100% 0% 0%)",
    });
  }, []);

  let handlerHoverCart = () => {
    let tl = gsap.timeline();
    tl.to(document.querySelector(".overLayCollection"), {
      opacity: 1,
      duration: 1,
      ease: "Expo.easeOut",
    });
    tl.to(
      cartInfoRef.current,
      {
        height: "45%",
        duration: 1,
        ease: "Expo.easeOut",
      },
      "<0.1"
    );
    tl.to(
      document.querySelector(".proCollectionName"),
      {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1,
        ease: "Expo.easeOut",
      },
      "<0.2"
    );
    tl.to(
      document.querySelector(".proCollectionPrice"),
      {
        y: 0,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1,
        ease: "Expo.easeOut",
      },
      "<0.15"
    );
    tl.to(
      document.querySelector(".addTocartCollection"),
      {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5,
        ease: "Expo.easeOut",
      },
      "<0.1"
    );
    tl.to(
      document.querySelector(".moreDetailsCollection"),
      {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5,
        ease: "Expo.easeOut",
      },
      "<0.1"
    );
    tl.to(
      document.querySelector(".ratesCollection"),
      {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.6,
        ease: "Power4.easeOut",
      },
      "<0.1"
    );
  };
  let handlerMouseLeave = () => {
    let tl = gsap.timeline();
    tl.to(document.querySelector(".moreDetailsCollection"), {
      opacity: 0,
      y: 20,
      clipPath: "inset(100% 0% 0% 0%)",
      duration: 1.5,
      ease: "Expo.easeOut",
    });
    tl.to(
      document.querySelector(".addTocartCollection"),
      {
        opacity: 0,
        y: 20,
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1.5,
        ease: "Expo.easeOut",
      },
      "<0.1"
    );
    tl.to(
      document.querySelector(".ratesCollection"),
      {
        opacity: 0,
        duration: 0.5,
        ease: "Power4.easeOut",
      },
      "<0.03"
    );
    tl.to(
      document.querySelector(".proCollectionPrice"),
      {
        opacity: 0,
        y: 20,
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1,
        ease: "Expo.easeOut",
      },
      "<0.1"
    );
    tl.to(
      document.querySelector(".proCollectionName"),
      {
        opacity: 0,
        y: 30,
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1,
        ease: "Expo.easeOut",
      },
      "<0.1"
    );
    tl.to(
      cartInfoRef.current,
      {
        height: "0%",
        duration: 1.5,
        ease: "Expo.easeOut",
      },
      "<0.1"
    );
    tl.to(
      document.querySelector(".overLayCollection"),
      {
        opacity: 0,
        duration: 1,
        ease: "Expo.easeOut",
      },
      "<0.05"
    );
  };

  return (
    <>
      <div className="col-3">
        <div
          onMouseEnter={handlerHoverCart}
          onMouseLeave={handlerMouseLeave}
          className="wrapperCartCollection"
          style={{ backgroundImage: `url(${item.image1})` }}
        >
          <div ref={cartInfoRef} className="wrapperInfoCart">
            <p className="proCollectionName">{item.name}</p>
            {/*  */}
            <div className="priceAndRate">
              <p className="proCollectionPrice">${item.price}</p>
              <div className="ratesCollection">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
            {/*  */}
            <div className="wrapperCollectionBtns">
              <button className="addTocartCollection">add to card</button>
              <button className="moreDetailsCollection">more details</button>
            </div>
          </div>
          <div className="overLayCollection"></div>
        </div>
      </div>
    </>
  );
}
