import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ProTabs from "./ProTabs";
import RelatedProducts from "./RelatedProducts";
import Footer from "../../components/Footer";
import { gsap } from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import Zoom from "react-img-zoom";
import "./ProductionDetails.scss";

export default function ProductionDetails() {
  let proNameRef = useRef(null);
  let stockProRef = useRef(null);
  let sizeProRef = useRef(null);
  let proPriceRef = useRef(null);
  let countBtnRef = useRef(null);
  let addBtn = useRef(null);

  let [countPro, setCountPro] = useState(1);
  let [whichImg, setWhichImg] = useState({
    image1: true,
    image2: false,
    image3: false,
    image4: false,
  });
  let [sizePro, setSizePro] = useState({
    s: false,
    m: false,
    l: true,
    xl: false,
    xxl: false,
  });
  let { productId } = useParams();
  const [choosenProduct, setChoosenProduct] = useState();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline();

      let featuresPro = gsap.utils.toArray(".featuresProdetailItems");
      let differentSizes = gsap.utils.toArray(".sizes");

      tl.to(proNameRef.current, {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        duration: 0.5,
        ease: "Expo.easeOut",
        delay: 0.35,
      });
      tl.to(
        proPriceRef.current,
        {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          y: 0,
          duration: 0.5,
          ease: "Expo.easeOut",
        },
        "<0.1"
      );
      featuresPro.map((pro) => {
        tl.to(
          pro,
          {
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
            duration: 0.7,
            ease: "Expo.easeOut",
          },
          "<0.12"
        );
      });
      tl.to(
        ".featuresProdetails",
        {
          borderColor: "#a4a4a498",
          duration: 0.5,
          ease: "Power4.easeOut",
        },
        "<0.2"
      );
      tl.to(
        stockProRef.current,
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.5,
          ease: "Expo.easeOut",
        },
        "<0.05"
      );
      tl.to(
        sizeProRef.current,
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.5,
          ease: "Expo.easeOut",
        },
        "<0.25"
      );
      differentSizes.map((size) => {
        tl.to(
          size,
          {
            scale: 1,
            duration: 1.5,
            ease: "Elastic.easeOut",
          },
          "<0.1"
        );
      });
      tl.to(
        countBtnRef.current,
        {
          opacity: 1,
          duration: 0.5,
          ease: "Expo.eseOut",
        },
        "<0.2"
      );
      tl.to(
        addBtn.current,
        {
          scale: 1,
          duration: 0.3,
          ease: "Back.easeOut",
        },
        "<0.2"
      );
      tl.to(
        ".wrapperGuarantee",
        {
          opacity: 1,
          duration: 0.5,
          ease: "Power4.eseOut",
        },
        "<0.25"
      );

      //
    });

    return () => {
      ctx.kill();
    };
  });

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

  let changeImage1 = () => {
    setWhichImg({
      image1: true,
      image2: false,
      image3: false,
      image4: false,
    });
  };
  let changeImage2 = () => {
    setWhichImg({
      image1: false,
      image2: true,
      image3: false,
      image4: false,
    });
  };
  let changeImage3 = () => {
    setWhichImg({
      image1: false,
      image2: false,
      image3: true,
      image4: false,
    });
  };
  let changeImage4 = () => {
    setWhichImg({
      image1: false,
      image2: false,
      image3: false,
      image4: true,
    });
  };

  let hoverAdTocart = () => {
    gsap.to(addBtn.current, {
      backgroundColor: "#fff",
      color: "#000",
      duration: 0.5,
      ease: "Power4.easeOut",
    });
  };
  let hoverLeaveAdTocart = () => {
    gsap.to(addBtn.current, {
      backgroundColor: "#000",
      color: "#fff",
      duration: 0.5,
      ease: "Power4.easeOut",
    });
  };

  return (
    <>
      {choosenProduct && (
        <AnimatePresence mode="wait">
          <div className="container-fluid mt-5">
            <div className="row">
              <div className="col-5">
                <div className="imageSectionProDetails">
                  <div className="wrapperAllImagePro">
                    <img
                      style={
                        whichImg.image1
                          ? { borderColor: "#000" }
                          : { borderColor: "rgb(0 ,0 ,0 , 0)" }
                      }
                      src={choosenProduct.image1}
                      onClick={changeImage1}
                      alt={choosenProduct.title}
                    />
                    <img
                      style={
                        whichImg.image2
                          ? { borderColor: "#000" }
                          : { borderColor: "rgb(0 ,0 ,0 , 0)" }
                      }
                      src={choosenProduct.image2}
                      onClick={changeImage2}
                      alt={choosenProduct.title}
                    />
                    <img
                      style={
                        whichImg.image3
                          ? { borderColor: "#000" }
                          : { borderColor: "rgb(0 ,0 ,0 , 0)" }
                      }
                      src={choosenProduct.image3}
                      onClick={changeImage3}
                      alt={choosenProduct.title}
                    />
                    <img
                      style={
                        whichImg.image4
                          ? { borderColor: "#000" }
                          : { borderColor: "rgb(0 ,0 ,0 , 0)" }
                      }
                      src={choosenProduct.image4}
                      onClick={changeImage4}
                      alt={choosenProduct.title}
                    />
                  </div>
                  {whichImg.image1 ? (
                    <motion.img
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      src={choosenProduct.image1}
                      alt={choosenProduct.title}
                      className="mainImgProDetail"
                    />
                  ) : null}
                  {whichImg.image2 ? (
                    <motion.img
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      src={choosenProduct.image2}
                      alt={choosenProduct.title}
                      className="mainImgProDetail"
                    />
                  ) : null}
                  {whichImg.image3 ? (
                    <motion.img
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      src={choosenProduct.image3}
                      alt={choosenProduct.title}
                      className="mainImgProDetail"
                    />
                  ) : null}
                  {whichImg.image4 ? (
                    <motion.img
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      src={choosenProduct.image4}
                      alt={choosenProduct.title}
                      className="mainImgProDetail"
                    />
                  ) : null}
                </div>
              </div>
              <div className="col-7">
                <div className="wrapperDetailChoosenPro">
                  <p ref={proNameRef} className="nameChoosenPro">
                    {choosenProduct.name}
                  </p>
                  <p ref={proPriceRef} className="priceChoosenPro">
                    ${choosenProduct.price}.00
                  </p>
                </div>
                <ul className="featuresProdetails">
                  <li className="featuresProdetailItems">100% Quality</li>
                  <li className="featuresProdetailItems">
                    Increases Resistance
                  </li>
                  <li className="featuresProdetailItems">
                    Free Shipping Over $5
                  </li>
                </ul>
                <p ref={stockProRef} className="stockPro">
                  {productId * 7} in stock
                </p>
                <p ref={sizeProRef} className="sizePro">
                  size:
                </p>
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
                  <div ref={countBtnRef} className="wrapperCountBtns">
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
                  <button
                    onMouseLeave={hoverLeaveAdTocart}
                    onMouseEnter={hoverAdTocart}
                    ref={addBtn}
                    className="choosenProAddToCart"
                  >
                    Add to cart
                  </button>
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
        </AnimatePresence>
      )}
    </>
  );
}
