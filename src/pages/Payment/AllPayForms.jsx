import { AnimatePresence, motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import "react-toastify/dist/ReactToastify.css";

export default function AllPayForms({
  setActiveNumber,
  billing,
  setBilling,
  contact,
  setContact,
  payment,
  setPayment,
  setShowModal,
}) {
  let handleSubmitBilling = (e) => {
    e.preventDefault();
    setActiveNumber(1);
    setBilling((state) => (state = false));
    setContact((state) => (state = true));
  };
  let handleSubmitContact = (e) => {
    e.preventDefault();
    setActiveNumber(2);
    setPayment((state) => (state = true));
    setContact((state) => (state = false));
  };

  let handleSubmitPayment = (e) => {
    e.preventDefault();
    setActiveNumber(3);
    document.querySelector(".paymentOverlay").style.opacity = 0.5;
    document.querySelector(".paymentOverlay").style.display = "block";
    setShowModal(true);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {billing && (
          <motion.div key={billing} exit={{ opacity: 0 }}>
            <motion.p
              initial={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)", y: 50 }}
              animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)", y: 0 }}
              className="shipingAddress"
            >
              shipping address
            </motion.p>
            <form onSubmit={handleSubmitBilling} className="billingInfoForm">
              <motion.span
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring" }}
                style={{
                  display: "inline-block",
                  width: "47%",
                  marginRight: "2%",
                }}
              >
                <TextField
                  className="field"
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  required
                />
              </motion.span>

              <motion.span
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", delay: 0.1 }}
                style={{
                  display: "inline-block",
                  width: "47%",
                }}
              >
                <TextField
                  className="field"
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Last Name"
                  required
                  variant="outlined"
                />
              </motion.span>
              {/* country field  */}
              <motion.span
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", delay: 0.2 }}
                style={{
                  display: "inline-block",
                  width: "96%",
                  marginTop: "20px",
                }}
              >
                <TextField
                  required
                  className="field"
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Country"
                  variant="outlined"
                />
              </motion.span>
              {/* address fields  */}
              <motion.span
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", delay: 0.3 }}
                style={{
                  display: "inline-block",
                  width: "47%",
                  marginRight: "2%",
                  marginTop: "20px",
                }}
              >
                <TextField
                  required
                  className="field"
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Street Address"
                  variant="outlined"
                />
              </motion.span>

              <motion.span
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", delay: 0.4 }}
                style={{
                  display: "inline-block",
                  width: "47%",
                  marginTop: "20px",
                }}
              >
                <TextField
                  className="field"
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Street Address 2 (Optional) "
                  variant="outlined"
                />
              </motion.span>
              {/* city fields  */}
              <motion.span
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", delay: 0.5 }}
                style={{
                  display: "inline-block",
                  width: "47%",
                  marginTop: "20px",
                  marginRight: "2%",
                }}
              >
                <TextField
                  required
                  className="field"
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                />
              </motion.span>

              <motion.span
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", delay: 0.6 }}
                style={{
                  display: "inline-block",
                  width: "23%",
                  marginTop: "20px",
                  marginRight: "1%",
                }}
              >
                <TextField
                  required
                  className="field"
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="state"
                  variant="outlined"
                />
              </motion.span>

              <motion.span
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", delay: 0.7 }}
                style={{
                  display: "inline-block",
                  width: "23%",
                  marginTop: "20px",
                }}
              >
                <TextField
                  required
                  className="field"
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Zip Code"
                  variant="outlined"
                />
              </motion.span>

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
        )}
        {contact && (
          <div key={contact}>
            <motion.p
              initial={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)", y: 50 }}
              animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)", y: 0 }}
              className="contactInfoTitle"
            >
              contact info
            </motion.p>
            <form
              key={contact}
              onSubmit={handleSubmitContact}
              className="contactInfoForm"
            >
              <motion.span
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring" }}
                style={{
                  display: "inline-block",
                  width: "96%",
                  marginTop: "20px",
                }}
              >
                <TextField
                  className="fieldContact"
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Email"
                  type="email"
                  variant="outlined"
                  required
                />
              </motion.span>

              <motion.span
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", delay: 0.1 }}
                style={{
                  display: "inline-block",
                  width: "96%",
                  marginTop: "20px",
                }}
              >
                <TextField
                  className="fieldContact"
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  type="tel"
                  label="Phone Number"
                  required
                  variant="outlined"
                />
              </motion.span>

              <motion.button
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring" }}
                className="submitContactBtn"
              >
                next
              </motion.button>
            </form>
          </div>
        )}
        {payment && (
          <div key={contact} className="wrapperPaymentForm">
            <motion.p
              initial={{
                opacity: 0,
                clipPath: "inset(100% 0% 100% 0%)",
                y: 50,
              }}
              animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)", y: 0 }}
              transition={{
                type: "tween",
                ease: "backOut",
                duration: 0.8,
                delay: 0.1,
              }}
              className="titlePayment"
            >
              Payment
            </motion.p>
            <motion.p
              className="descPayment"
              initial={{
                opacity: 0,
                clipPath: "inset(100% 0% 100% 0%)",
                y: 50,
              }}
              animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)", y: 0 }}
              transition={{
                type: "tween",
                ease: "backOut",
                duration: 0.8,
                delay: 0.2,
              }}
            >
              All transactions are secure and encrypted.
            </motion.p>
            <form
              onSubmit={handleSubmitPayment}
              key={contact}
              className="paymentForm"
            >
              <motion.span
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring" }}
                style={{
                  display: "inline-block",
                  width: "47%",
                  marginRight: "2%",
                }}
              >
                <TextField
                  className="fieldPayment"
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Cart Number"
                  type="number"
                  variant="outlined"
                  required
                />
              </motion.span>

              <motion.span
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", delay: 0.1 }}
                style={{ display: "inline-block", width: "47%" }}
              >
                <TextField
                  className="fieldPayment"
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Name on Cart"
                  type="text"
                  variant="outlined"
                  required
                />
              </motion.span>

              <motion.span
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", delay: 0.2 }}
                style={{
                  display: "inline-block",
                  width: "47%",
                  marginRight: "2%",
                  marginTop: "20px",
                }}
              >
                <TextField
                  className="fieldPayment"
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Expiration Date (MM / YY)"
                  type="number"
                  variant="outlined"
                  required
                />
              </motion.span>

              <motion.span
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", delay: 0.3 }}
                style={{
                  display: "inline-block",
                  width: "47%",
                  marginTop: "20px",
                }}
              >
                <TextField
                  className="fieldPayment"
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Security Code"
                  type="number"
                  variant="outlined"
                  required
                />
              </motion.span>

              <motion.button
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="payFormBtn"
              >
                pay now
              </motion.button>
            </form>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
