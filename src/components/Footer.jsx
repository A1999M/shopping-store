import { useEffect, useRef } from "react";
import TwitterLogo from "../svg/TwitterLogo";
import FaceBookLogo from "../svg/FaceBookLogo";
import InstagramLogo from "../svg/InstagramLogo";
import PinterestLogo from "../svg/PinterestLogo";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./footer.scss";

export default function Footer() {
  let scopeRef = useRef();

  let handleClick = () => {
    document.querySelector("#newsLeterEmil").value = "";
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.set(document.querySelector(".wrapperFooterSocials"), {
        opacity: 0,
        y: 30,
      });
      gsap.set(document.querySelector(".wrapperCateguryFooter"), {
        opacity: 0,
        y: 30,
      });
      gsap.set(document.querySelector(".wrapperQuickLinks"), {
        opacity: 0,
        y: 30,
      });
      gsap.set(document.querySelector(".wrapperNewsLeter"), {
        opacity: 0,
        y: 30,
      });

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".wrapperFooterSocials",
          start: "center 80%",
          end: "bottom 0%",
        },
      });
      tl.to(document.querySelector(".wrapperFooterSocials"), {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "Expo.easeOut",
      });
      tl.to(
        document.querySelector(".wrapperCateguryFooter"),
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "Expo.easeOut",
        },
        "<0.15"
      );
      tl.to(
        document.querySelector(".wrapperQuickLinks"),
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "Expo.easeOut",
        },
        "<0.15"
      );
      tl.to(
        document.querySelector(".wrapperNewsLeter"),
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "Expo.easeOut",
        },
        "<0.15"
      );
    }, scopeRef);

    return () => ctx.revert();
  });

  return (
    <>
      <div ref={scopeRef} className="container-fluid px-5 footer">
        <div className="row">
          {/*  */}
          <div className="col-3">
            <div className="wrapperFooterSocials">
              <img
                src="https://pandora-fashi.myshopify.com/cdn/shop/files/footer-logo.png?v=1680584665&width=150"
                alt="https://pandora-fashi.myshopify.com/cdn/shop/files/footer-logo.png?v=1680584665&width=150"
              />
              <ul className="socialLists">
                <li className="socials">
                  <TwitterLogo />
                </li>
                <li className="socials">
                  <FaceBookLogo />
                </li>
                <li className="socials">
                  <InstagramLogo />
                </li>
                <li className="socials">
                  <PinterestLogo />
                </li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className="col-3">
            <ul className="wrapperCateguryFooter">
              <li className="categuryItemsFooter">CATEGORIES</li>
              <li className="categuryItemsFooter">Men</li>
              <li className="categuryItemsFooter">Women</li>
              <li className="categuryItemsFooter">Kids</li>
            </ul>
          </div>
          {/*  */}
          <div className="col-3">
            <ul className="wrapperQuickLinks">
              <li className="quickLinkItems">QUICK LINKS</li>
              <li className="quickLinkItems">Home</li>
              <li className="quickLinkItems">About us</li>
              <li className="quickLinkItems">Contact Us</li>
              <li className="quickLinkItems">Privacy Policy</li>
              <li className="quickLinkItems">FAQ’s</li>
              <li className="quickLinkItems">Shipping & Return Policy</li>
            </ul>
          </div>
          {/*  */}
          <div className="col-3">
            <div className="wrapperNewsLeter">
              <p className="titleNewsLeter">GET THE NEWSLETER</p>
              <input
                type="email"
                name="newsLeterEmil"
                id="newsLeterEmil"
                placeholder="Email Address"
              />
              <input
                type="button"
                name="btnNewsLeter"
                id="btnNewsLeter"
                value={"Subscribe"}
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
