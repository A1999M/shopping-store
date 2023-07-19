import React from "react";
import FeatureItems from "./FeatureItems";

export default function Features() {
  let featureItemsArray = [
    {
      imageSrc:
        "https://pandora-fashi.myshopify.com/cdn/shop/files/service-icon-1.png?v=1681792935&width=150",
      title: "100 DAY RETURNS",
      desc: "No-Nonsense Return Policy If You Aren't Happy.",
    },
    {
      imageSrc:
        "https://pandora-fashi.myshopify.com/cdn/shop/files/service-icon-2.png?v=1681792941&width=150",
      title: "FREE SHIPPING",
      desc: "Your Precious Package Is Expedited And Insured.",
    },
    {
      imageSrc:
        "https://pandora-fashi.myshopify.com/cdn/shop/files/service-icon-3.png?v=1681792949&width=150",
      title: "SECURE PAYMENT",
      desc: "Your Payment Information Is Encryption",
    },
    {
      imageSrc:
        "https://pandora-fashi.myshopify.com/cdn/shop/files/service-icon-4.png?v=1681792961&width=150",
      title: "CUSTOMER SUPPORT",
      desc: "Our Support Team Are Ready 24/7 To Answer Any Have.",
    },
  ];

  return (
    <>
      <div className="container-fluid features mt-6rem">
        <div className="row">
          {featureItemsArray.map((item, index) => {
            return (
              <FeatureItems
                sizeImage={
                  (index === 0 && "78%") ||
                  (index === 1 && "85%") ||
                  (index === 2 && "70%") ||
                  (index === 3 && "80%")
                }
                key={index}
                item={item}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
