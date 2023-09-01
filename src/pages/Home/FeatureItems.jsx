import React from "react";

export default function FeatureItems({
  item,
  sizeImage,
  customMarginTop,
  customMarginRight,
}) {
  return (
    <>
      <div className="col-12 col-sm-6 col-lg-3">
        <div
          style={{ marginRight: customMarginRight }}
          className="wrapperFeatureItem"
        >
          <div style={{ marginTop: customMarginTop }} className="wrapperImg">
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
