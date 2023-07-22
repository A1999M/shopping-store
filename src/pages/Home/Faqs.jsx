import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Accordion from "react-bootstrap/Accordion";

export default function Faqs() {
  let scopeRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.set(".faqsTitle", {
        opacity: 0,
        clipPath: "inset(0% 0% 100% 0%)",
        y: 30,
      });
      gsap.to(".faqsTitle", {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        duration: 1,
        ease: "Expo.easeOut",
        scrollTrigger: {
          trigger: ".faqsTitle",
          start: "center 80%",
          end: "bottom 0%",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={scopeRef} className="container-fluid faqs">
        <div className="row justify-content-center">
          <div className="col-12">
            <p className="faqsTitle">Faqs</p>
          </div>
          <div className="col-6 mt-4">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What Shipping Methods Are Available?
                </Accordion.Header>
                <Accordion.Body>
                  Male evening subdue heaven Is, seas great creepeth under
                  second evening from give theyre upon third give void bring
                  fowl image years all. Cant life a. Dominion god which dont
                  upon.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  What are shipping times and costs?
                </Accordion.Header>
                <Accordion.Body>
                  Complimentary ground shipping within 1 to 7 business days
                  <br />
                  <br />
                  In-store collection available within 1 to 7 business days
                  <br />
                  <br />
                  Next-day and Express delivery options also available
                  <br />
                  <br />
                  Purchases are delivered in an orange box tied with a Bolduc
                  ribbon, with the exception of certain items
                  <br />
                  <br />
                  See the delivery FAQs for details on shipping methods, costs
                  and delivery times
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  What payment methods can I use?
                </Accordion.Header>
                <Accordion.Body>
                  Credit Card: Visa, MasterCard, Discover, American Express,
                  JCB, Visa Electron. The total will be charged to your card
                  when the order is shipped. PayPal: Shop easily online without
                  having to enter your credit card details on the website.Your
                  account will be charged once the order is completed. To
                  register for a PayPal account, visit the website paypal.com.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  What is your exchanges, returns and refunds policy?
                </Accordion.Header>
                <Accordion.Body>
                  Items returned within 14 days of their original shipment date
                  in same as new condition will be eligible for a full refund or
                  store credit. Refunds will be charged back to the original
                  form of payment used for purchase. Customer is responsible for
                  shipping charges when making returns and shipping/handling
                  fees of original purchase is non-refundable.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
