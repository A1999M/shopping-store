import React from "react";

export default function FeatureItems({ item, sizeImage }) {
  return (
    <>
      <div className="col-3">
        <div className="wrapperFeatureItem">
          <div className="wrapperImg">
            <img style={{ width: sizeImage }} src={item.imageSrc} alt="" />
          </div>
          <div className="wrapperDescFItems">
            <p className="featureItemTitle">{item.title}</p>
            <p className="featureItemDesc">{item.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
