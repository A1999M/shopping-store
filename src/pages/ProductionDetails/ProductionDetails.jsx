import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProTabs from "./ProTabs";
import RelatedProducts from "./RelatedProducts";
import Footer from "../../components/Footer";
import "./ProductionDetails.scss";

export default function ProductionDetails() {
  let [countPro, setCountPro] = useState(1);
  let [sizePro, setSizePro] = useState({
    s: false,
    m: false,
    l: true,
    xl: false,
    xxl: false,
  });
  let { productId } = useParams();
  const [choosenProduct, setChoosenProduct] = useState();

  console.log(productId);

  useEffect(() => {
    if (productId <= 13) {
      fetch(`http://localhost:8000/men/?id=${productId}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setChoosenProduct(data[0]);
        })
        .catch((err) => {
          console.warn(err);
        });
    } else {
      fetch(`http://localhost:8000/women/?id=${productId}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setChoosenProduct(data[0]);
        })
        .catch((err) => {
          console.warn(err);
        });
    }
  }, [productId]);

  return (
    <>
      {choosenProduct && (
        <div className="container-fluid mt-5 zxasss">
          <div className="row">
            <div className="col-5">
              <div className="imageSectionProDetails">
                <div className="wrapperAllImagePro">
                  <img src={choosenProduct.image1} alt={choosenProduct.title} />
                  <img src={choosenProduct.image2} alt={choosenProduct.title} />
                  <img src={choosenProduct.image3} alt={choosenProduct.title} />
                  <img src={choosenProduct.image4} alt={choosenProduct.title} />
                </div>
                <img
                  src={choosenProduct.image1}
                  alt={choosenProduct.title}
                  className="mainImgProDetail"
                />
              </div>
            </div>
            <div className="col-7">
              <div className="wrapperDetailChoosenPro">
                <p className="nameChoosenPro">{choosenProduct.name}</p>
                <p className="priceChoosenPro">${choosenProduct.price}.00</p>
              </div>
              <ul className="featuresProdetails">
                <li className="featuresProdetailItems">100% Quality</li>
                <li className="featuresProdetailItems">Increases Resistance</li>
                <li className="featuresProdetailItems">
                  Free Shipping Over $5
                </li>
              </ul>
              <p className="stockPro">{productId * 7} in stock</p>
              <p className="sizePro">size:</p>
              <div className="wrapperDifferentSizes">
                <span
                  onClick={() =>
                    setSizePro({
                      s: true,
                      m: false,
                      l: false,
                      xl: false,
                      xxl: false,
                    })
                  }
                  style={
                    sizePro.s
                      ? { color: "#fff", backgroundColor: "#000" }
                      : { color: "#000", backgroundColor: "#00000000" }
                  }
                  className="sizes"
                >
                  s
                </span>
                <span
                  onClick={() =>
                    setSizePro({
                      s: false,
                      m: true,
                      l: false,
                      xl: false,
                      xxl: false,
                    })
                  }
                  style={
                    sizePro.m
                      ? { color: "#fff", backgroundColor: "#000" }
                      : { color: "#000", backgroundColor: "#00000000" }
                  }
                  className="sizes"
                >
                  m
                </span>
                <span
                  onClick={() =>
                    setSizePro({
                      s: false,
                      m: false,
                      l: true,
                      xl: false,
                      xxl: false,
                    })
                  }
                  style={
                    sizePro.l
                      ? { color: "#fff", backgroundColor: "#000" }
                      : { color: "#000", backgroundColor: "#00000000" }
                  }
                  className="sizes"
                >
                  l
                </span>
                <span
                  onClick={() =>
                    setSizePro({
                      s: false,
                      m: false,
                      l: false,
                      xl: true,
                      xxl: false,
                    })
                  }
                  style={
                    sizePro.xl
                      ? { color: "#fff", backgroundColor: "#000" }
                      : { color: "#000", backgroundColor: "#00000000" }
                  }
                  className="sizes"
                >
                  xl
                </span>
                <span
                  onClick={() =>
                    setSizePro({
                      s: false,
                      m: false,
                      l: false,
                      xl: false,
                      xxl: true,
                    })
                  }
                  style={
                    sizePro.xxl
                      ? { color: "#fff", backgroundColor: "#000" }
                      : { color: "#000", backgroundColor: "#00000000" }
                  }
                  className="sizes"
                >
                  xxl
                </span>
              </div>
              <div className="wrapperAddToCartProDetails">
                <div className="wrapperCountBtns">
                  <span
                    style={
                      countPro == productId * 7
                        ? { cursor: "no-drop" }
                        : { cursor: "pointer" }
                    }
                    onClick={() => {
                      if (countPro == productId * 7) {
                        setCountPro(productId * 7);
                      } else {
                        setCountPro(countPro + 1);
                      }
                    }}
                    className="increment"
                  >
                    &#x002B;
                  </span>
                  <span className="choosenProCount">{countPro}</span>
                  <span
                    style={
                      countPro == 1
                        ? { cursor: "no-drop" }
                        : { cursor: "pointer" }
                    }
                    onClick={() => {
                      if (countPro <= 1) {
                        setCountPro(1);
                      } else {
                        setCountPro(countPro - 1);
                      }
                    }}
                    className="decrement"
                  >
                    &#x2212;
                  </span>
                </div>
                <button className="choosenProAddToCart">Add to cart</button>
              </div>
              <div className="wrapperGuarantee">
                <div className="Guarantee">
                  <img
                    src="https://pandora-fashi.myshopify.com/cdn/shop/files/money-back_40x.png?v=1660800486"
                    alt="Guarantee image"
                  />
                  <p className="GuaranteeDesc">Money Back Guarantee</p>
                </div>
                <div className="Warranty">
                  <img
                    src="https://pandora-fashi.myshopify.com/cdn/shop/files/icon-warranty_40x.png?v=1660800492"
                    alt="Warranty image"
                  />
                  <p className="WarrantyDesc">Life Time Warranty</p>
                </div>
                <div className="Gift">
                  <img
                    src="https://pandora-fashi.myshopify.com/cdn/shop/files/gift-box_40x.png?v=1660800501"
                    alt="Gift image"
                  />
                  <p className="GiftDesc">Free Signature Gift Box</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5rem">
            <div className="col-12">
              <ProTabs />
            </div>
          </div>
          <div className="row mt-7rem">
            <div className="col-12">
              <RelatedProducts productId={productId} />
            </div>
          </div>
          <div className="row">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
