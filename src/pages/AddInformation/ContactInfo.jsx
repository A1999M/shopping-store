import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import TextField from "@mui/material/TextField";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function ContactInfo({ setActiveNumber, contactInfo }) {
  let scopeRef = useRef();
  let navigate = useNavigate();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let contactFields = gsap.utils.toArray(".fieldContact");

      if (contactInfo) {
        gsap.to(document.querySelector(".contactInfoTitle"), {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          y: 0,
          delay: 0.1,
          duration: 1,
          ease: "Expo.easeOut",
        });
        contactFields.map((field, index) => {
          gsap.to(field, {
            opacity: 1,
            x: 0,
            duration: 0.7,
            delay: 0.15 * index,
            ease: "Back.easeOut",
          });
        });
      }
    }, scopeRef);

    return () => {
      ctx.revert();
    };
  }, []);

  let handleSubmitContact = (e) => {
    e.preventDefault();
    setActiveNumber(2);
  };

  return (
    <motion.div ref={scopeRef} key={contactInfo} exit={{ opacity: 0, x: -150 }}>
      <p className="contactInfoTitle">contact info</p>
      <form onSubmit={handleSubmitContact} className="contactInfoForm">
        <TextField
          className="fieldContact"
          style={{ width: "96%", marginTop: "20px" }}
          id="outlined-basic"
          label="Email"
          type="email"
          variant="outlined"
          required
        />
        <TextField
          className="fieldContact"
          style={{ width: "96%", marginTop: "20px" }}
          id="outlined-basic"
          type="tel"
          label="Phone Number"
          required
          variant="outlined"
        />
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ type: "spring" }}
          className="submitContactBtn"
        >
          <Link to={"/payment"}>next</Link>
        </motion.span>
      </form>
    </motion.div>
  );
}
