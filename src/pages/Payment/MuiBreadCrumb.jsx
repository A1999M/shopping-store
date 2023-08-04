import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function MuiBreadCrumb({
  activeNumber,
  setActiveNumber,
  setBilling,
  setContact,
  setPayment,
}) {
  let navigate = useNavigate();

  return (
    <>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
      >
        <span
          onClick={() => {
            navigate("/shopping-cart");
          }}
          className="cartBreadCrumb"
        >
          Cart
        </span>
        <span
          onClick={() => {
            setBilling(true);
            setContact(false);
            setPayment(false);
            setActiveNumber(0);
          }}
          style={
            activeNumber == 0
              ? { color: "#006aff" }
              : { color: "rgb(0 0 0 / 60%)" }
          }
          className="billingBreadCrumb"
        >
          Billing Information
        </span>
        <span
          style={
            activeNumber == 1
              ? { color: "#006aff" }
              : { color: "rgb(0 0 0 / 60%)" }
          }
          className="contactBreadCrumb"
          onClick={() => {
            setContact(true);
            setPayment(false);
            setBilling(false);
            setActiveNumber(1);
          }}
        >
          contact info
        </span>
        <span
          style={
            activeNumber == 2
              ? { color: "#006aff" }
              : { color: "rgb(0 0 0 / 60%)" }
          }
          className="paymentBreadCrumb"
          onClick={() => {
            setBilling(false);
            setContact(false);
            setPayment(true);
            setActiveNumber(2);
          }}
        >
          Payment
        </span>
      </Breadcrumbs>
    </>
  );
}
