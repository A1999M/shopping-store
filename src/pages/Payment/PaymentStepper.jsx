import { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export default function PaymentStepper({ activeNumber }) {
  return (
    <>
      <Stepper style={{ marginTop: "25px" }} activeStep={activeNumber}>
        {/*  */}
        <Step>
          <StepLabel>Billing Information</StepLabel>
        </Step>
        {/*  */}
        <Step>
          <StepLabel>contact Info</StepLabel>
        </Step>
        {/*  */}
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
        {/*  */}
      </Stepper>
    </>
  );
}
