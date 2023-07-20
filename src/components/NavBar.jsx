import { useRef } from "react";
import BasketSvg from "../svg/BasketSvg";
import UserSvg from "../svg/UserSvg";
import { gsap } from "gsap";
import SearchSvg from "../svg/SearchSvg";
import "./navbar.scss";

export default function NavBar() {
  let borderRef = useRef();

  let handleFocus = () => {
    gsap.to(borderRef.current, {
      borderColor: "#938787",
      duration: 0.35,
    });
  };
  let handleBlur = () => {
    gsap.to(borderRef.current, {
      borderColor: "#c7c7c700",
      duration: 0.35,
    });
  };

  return (
    <>
      <div className="container-fluid px-5">
        <div className="row">
          <div className="navbar">
            <div ref={borderRef} className="NavbarLeftSection">
              <input
                onFocus={handleFocus}
                onBlur={handleBlur}
                type="text"
                name="search"
                id="search"
                placeholder="Search Product"
              />
              <SearchSvg />
            </div>
            <div className="NavbarLogoSection">
              <img
                src="https://pandora-fashi.myshopify.com/cdn/shop/files/Sachue_5.png?v=1677762506&width=240"
                alt="header logo"
              />
            </div>
            <div className="NavbarRightSection">
              <UserSvg />
              <BasketSvg />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
