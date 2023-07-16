import React from "react";
import "./header.scss";

export default function Header() {
  return (
    <>
      <div className="container-fluid heroHeader">
        <div className="row px-0">
          <div className="col-12 p-0">
            <div className="wrapperHeader">
              <div className="wrapperHeroHeaderFeatures">
                <p className="titleHeroHeader">TRENDS IN FASHION</p>
                <p className="offerHeroHeader">
                  20% DISCOUNT IN ALL WOMEN'S FASHION...
                </p>
                <button className="btnHeroHeader">
                  shop now <span>&#8594;</span>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
