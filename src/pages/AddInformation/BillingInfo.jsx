import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import TextField from "@mui/material/TextField";
import { AnimatePresence, motion } from "framer-motion";

export default function BillingInfo({
  setActiveNumber,
  contactInfo,
  setContactInfo,
}) {
  let scopeRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let allFields = gsap.utils.toArray(".field");
      gsap.to(document.querySelector(".shipingAddress"), {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        delay: 0.1,
        duration: 1,
        ease: "Expo.easeOut",
      });
      // // // //
      allFields.map((field, index) => {
        gsap.to(field, {
          opacity: 1,
          x: 0,
          duration: 0.7,
          delay: 0.15 * index,
          ease: "Back.easeOut",
        });
      });
    }, scopeRef);

    return () => {
      ctx.revert();
    };
  }, []);

  let handleSubmitBilling = (e) => {
    e.preventDefault();
    setActiveNumber(1);
    setContactInfo((contactInfo) => !contactInfo);
  };

  return (
    <motion.div key={contactInfo} exit={{ opacity: 0, x: -150 }} ref={scopeRef}>
      <p className="shipingAddress">shipping address</p>
      <form onSubmit={handleSubmitBilling} className="billingInfoForm">
        <TextField
          className="field"
          style={{ width: "47%", marginRight: "2%" }}
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          required
        />
        <TextField
          className="field"
          style={{ width: "47%" }}
          id="outlined-basic"
          label="Last Name"
          required
          variant="outlined"
        />
        {/* country field  */}
        <TextField
          required
          className="field"
          style={{ width: "96%", marginTop: "20px" }}
          id="outlined-basic"
          label="Country"
          variant="outlined"
        />
        {/* address fields  */}
        <TextField
          required
          className="field"
          style={{ width: "47%", marginRight: "2%", marginTop: "20px" }}
          id="outlined-basic"
          label="Street Address"
          variant="outlined"
        />
        <TextField
          className="field"
          style={{ width: "47%", marginTop: "20px" }}
          id="outlined-basic"
          label="Street Address 2 (Optional) "
          variant="outlined"
        />
        {/* city fields  */}
        <TextField
          required
          className="field"
          style={{ width: "47%", marginRight: "2%", marginTop: "20px" }}
          id="outlined-basic"
          label="City"
          variant="outlined"
        />
        <TextField
          required
          className="field"
          style={{ width: "23%", marginRight: "1%", marginTop: "20px" }}
          id="outlined-basic"
          label="state"
          variant="outlined"
        />
        <TextField
          required
          className="field"
          style={{ width: "23%", marginTop: "20px" }}
          id="outlined-basic"
          label="Zip Code"
          variant="outlined"
        />
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ type: "spring" }}
          type="submit"
          className="submitBillingBtn"
        >
          Next
        </motion.button>
      </form>
    </motion.div>
  );
}
