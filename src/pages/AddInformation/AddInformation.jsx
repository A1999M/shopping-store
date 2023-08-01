import { useState } from "react";
import BillingInfo from "./BillingInfo";
import ContactInfo from "./ContactInfo";
import PaymentStepper from "./PaymentStepper";
import { AnimatePresence, motion } from "framer-motion";
import "./AddInformation.scss";

export default function AddInformation() {
  let [activeNumber, setActiveNumber] = useState(0);
  let [contactInfo, setContactInfo] = useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, x: -200 }}
        className="container-fluid px-5"
      >
        <div className="row">
          <div className="col-12">
            <PaymentStepper activeNumber={activeNumber} />
          </div>
          <div className="col-12">
            <AnimatePresence mode="wait">
              {!contactInfo ? (
                <BillingInfo
                  activeNumber={activeNumber}
                  setActiveNumber={setActiveNumber}
                  contactInfo={contactInfo}
                  setContactInfo={setContactInfo}
                />
              ) : (
                <ContactInfo
                  activeNumber={activeNumber}
                  setActiveNumber={setActiveNumber}
                  contactInfo={contactInfo}
                  setContactInfo={setContactInfo}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </>
  );
}
