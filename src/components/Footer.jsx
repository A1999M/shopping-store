import { useEffect, useRef } from "react";
import TwitterLogo from "../svg/TwitterLogo";
import FaceBookLogo from "../svg/FaceBookLogo";
import InstagramLogo from "../svg/InstagramLogo";
import PinterestLogo from "../svg/PinterestLogo";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useState } from "react";
import { motion } from "framer-motion";
import "./footer.scss";
import "./responsiveFooter.scss";

export default function Footer() {
  let scopeRef = useRef();
  let [deviceSize, setDeviceSize] = useState(window.innerWidth);

  let handleClick = () => {
    document.querySelector("#newsLeterEmil").value = "";
  };

  let handleResize = () => {
    setDeviceSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
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

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        ref={scopeRef}
        className="container-fluid footer"
      >
        {deviceSize >= 992 ? (
          <div className="row">
            {/*  */}
            <div className="col-6 col-lg-3">
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
            <div className="col-6 col-lg-3">
              <ul className="wrapperCateguryFooter">
                <li className="categuryItemsFooter">CATEGORIES</li>
                <li className="categuryItemsFooter">Men</li>
                <li className="categuryItemsFooter">Women</li>
                <li className="categuryItemsFooter">Kids</li>
              </ul>
            </div>
            {/*  */}
            <div className="col-6 col-lg-3">
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
            <div className="col-6 col-lg-3">
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
        ) : (
          <div className="row justify-content-center footer2">
            <div className="col-12 col-sm-8">
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
            <div className="col-12 col-sm-8">
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
            <div className="col-12">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>CATEGORIES</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul className="wrapperCateguryFooter">
                    <li className="categuryItemsFooter">Men</li>
                    <li className="categuryItemsFooter">Women</li>
                    <li className="categuryItemsFooter">Kids</li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>QUICK LINKS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul className="wrapperQuickLinks">
                    <li className="quickLinkItems">Home</li>
                    <li className="quickLinkItems">About us</li>
                    <li className="quickLinkItems">Contact Us</li>
                    <li className="quickLinkItems">Privacy Policy</li>
                    <li className="quickLinkItems">FAQ’s</li>
                    <li className="quickLinkItems">Shipping & Return Policy</li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}
