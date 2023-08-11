import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { toast } from "react-toastify";
import { gsap } from "gsap";
import Star from "../../components/Star";
import { motion } from "framer-motion";

export default function TrendCollectionItem({ item, index }) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let targetHover = useRef(null);
  let [show, setShow] = useState(false);

  useEffect(() => {
    let allWrappers = gsap.utils.toArray(".wrapperCartCollection");

    allWrappers.forEach((wrapper) => {
      let proName = wrapper.querySelector(".proCollectionName");
      let proPrice = wrapper.querySelector(".proCollectionPrice");
      let addBtns = wrapper.querySelector(".addTocartCollection");
      let moreDetail = wrapper.querySelector(".moreDetailsCollection");
      let rate = wrapper.querySelector(".ratesCollection");

      gsap.set(proName, {
        opacity: 0,
        y: 30,
        clipPath: "inset(100% 0% 0% 0%)",
      });
      gsap.set(proPrice, {
        opacity: 0,
        y: 20,
        clipPath: "inset(100% 0% 0% 0%)",
      });
      gsap.set(addBtns, {
        opacity: 0,
        y: 20,
        clipPath: "inset(100% 0% 0% 0%)",
      });
      gsap.set(moreDetail, {
        opacity: 0,
        y: 20,
        clipPath: "inset(100% 0% 0% 0%)",
      });
      gsap.set(rate, {
        opacity: 0,
        clipPath: "inset(0% 100% 0% 0%)",
      });
    });
  }, []);

  let handleShow = () => {
    setShow(true);
  };

  let cartVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.1,
      },
    },
  };

  let handlerHoverCart = (e) => {
    let targetElmIndex = e.target.getAttribute("data-index");
    let tl = gsap.timeline();

    let targetWrapper = document.querySelectorAll(".wrapperCartCollection")[
      targetElmIndex
    ];
    targetWrapper.setAttribute("data-hover", "true");

    targetHover.current = targetWrapper;

    tl.to(targetWrapper.querySelector(".overLayCollection"), {
      opacity: 1,
      duration: 1,
      ease: "Expo.easeOut",
    });
    tl.to(
      targetWrapper.querySelector(".wrapperInfoCart"),
      {
        height: "45%",
        duration: 1,
        ease: "Expo.easeOut",
      },
      "<0.1"
    );
    tl.to(
      targetWrapper.querySelector(".proCollectionName"),
      {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1,
        ease: "Expo.easeOut",
      },
      "<0.2"
    );
    tl.to(
      targetWrapper.querySelector(".proCollectionPrice"),
      {
        y: 0,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1,
        ease: "Expo.easeOut",
      },
      "<0.15"
    );
    tl.to(
      targetWrapper.querySelector(".addTocartCollection"),
      {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5,
        ease: "Expo.easeOut",
      },
      "<0.1"
    );
    tl.to(
      targetWrapper.querySelector(".ratesCollection"),
      {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.6,
        ease: "Power4.easeOut",
      },
      "<0.1"
    );
  };
  let handlerMouseLeave = () => {
    let tl = gsap.timeline();

    tl.to(targetHover.current.querySelector(".addTocartCollection"), {
      opacity: 0,
      y: 20,
      clipPath: "inset(100% 0% 0% 0%)",
      duration: 1.5,
      ease: "Expo.easeOut",
    });
    tl.to(
      targetHover.current.querySelector(".ratesCollection"),
      {
        opacity: 0,
        duration: 0.5,
        ease: "Power4.easeOut",
      },
      "<0.03"
    );
    tl.to(
      targetHover.current.querySelector(".proCollectionPrice"),
      {
        opacity: 0,
        y: 20,
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1,
        ease: "Expo.easeOut",
      },
      "<0.1"
    );
    tl.to(
      targetHover.current.querySelector(".proCollectionName"),
      {
        opacity: 0,
        y: 30,
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1,
        ease: "Expo.easeOut",
      },
      "<0.1"
    );
    tl.to(
      targetHover.current.querySelector(".wrapperInfoCart"),
      {
        height: "0%",
        duration: 1.5,
        ease: "Expo.easeOut",
      },
      "<0.1"
    );
    tl.to(
      targetHover.current.querySelector(".overLayCollection"),
      {
        opacity: 0,
        duration: 1,
        ease: "Expo.easeOut",
      },
      "<0.05"
    );
  };

  let handleAddToCart = (choosenProduct) => {
    if (JSON.parse(localStorage.getItem("userCart")) == null) {
      let basket = [];
      let newItem = {
        id: choosenProduct.id,
        name: choosenProduct.name,
        price: choosenProduct.price,
        count: 1,
        totalPrice: choosenProduct.price * 1,
        imageSrc: choosenProduct.image1,
      };
      basket.push(newItem);
      localStorage.setItem("userCart", JSON.stringify(basket));
      dispatch(cartActions.setCartItems(basket));
      toast.success("Successfully Added To Cart");
    } else {
      let currentLocal = JSON.parse(localStorage.getItem("userCart"));
      let isExist = currentLocal.some((item) => {
        return item.id == choosenProduct.id;
      });
      if (isExist) {
        toast.info("The product has been updated");
      } else {
        let basket = [...currentLocal];
        let newItem = {
          id: choosenProduct.id,
          name: choosenProduct.name,
          price: choosenProduct.price,
          count: 1,
          totalPrice: choosenProduct.price * 1,
          imageSrc: choosenProduct.image1,
        };
        basket.push(newItem);
        localStorage.setItem("userCart", JSON.stringify(basket));
        dispatch(cartActions.setCartItems(basket));
        toast.success("Successfully Added To Cart");
      }
    }
  };
  let handleNavigate = (proId) => {
    navigate(`/posts/${proId}`);
  };

  return (
    <>
      <motion.div
        variants={cartVariants}
        onViewportEnter={handleShow}
        viewport={{ once: true, amount: 0.5 }}
        initial="initial"
        animate={show ? "animate" : "initial"}
        className="col-6 col-md-4 col-lg-3 collectionCol"
      >
        <div
          onMouseEnter={handlerHoverCart}
          onMouseLeave={handlerMouseLeave}
          className="wrapperCartCollection"
          style={{ backgroundImage: `url(${item.image1})` }}
          onClick={() => handleNavigate(item.id)}
        >
          <div className="wrapperInfoCart">
            <p className="proCollectionName">{item.name}</p>
            {/*  */}
            <div className="priceAndRate">
              <p className="proCollectionPrice">${item.price}</p>
              <div className="ratesCollection">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
            {/*  */}
            <div className="wrapperCollectionBtns">
              <button
                onClick={() => handleAddToCart(item)}
                className="addTocartCollection"
              >
                add to card
              </button>
            </div>
          </div>
          <div data-index={index} className="overLayCollection"></div>
        </div>
      </motion.div>
    </>
  );
}
