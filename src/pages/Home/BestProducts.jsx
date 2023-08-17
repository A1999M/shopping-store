import { useContext, useState, useRef, useEffect } from "react";
import items from "../../context/items";
import BestProItems from "./BestProItems";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function BestProducts() {
  let scopeRef = useRef();
  let titleRef = useRef();
  let descRef = useRef();
  let wrapperBestPro = useRef();
  let { menItems, womenItems } = useContext(items);
  let [deviceSize, setDeviceSize] = useState(window.innerWidth);

  let handleResize = () => {
    setDeviceSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  let bestProducts = [
    menItems[5],
    womenItems[5],
    menItems[7],
    womenItems[9],
    menItems[8],
    womenItems[8],
    menItems[10],
    womenItems[6],
    menItems[6],
    womenItems[7],
    menItems[9],
    womenItems[10],
  ];

  return (
    <>
      <div ref={scopeRef} className="container-fluid bestProducts">
        <div className="row bestProTitleRow">
          <div className="col-12">
            <p ref={titleRef} className="titleBestProducts">
              BEST PRODUCTS
            </p>
            <p ref={descRef} className="descBestProducts">
              Our most popular products
            </p>
          </div>
        </div>
        <div ref={wrapperBestPro} className="row">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={
              (deviceSize > 1200 && 4) ||
              (deviceSize > 992 && 4) ||
              (deviceSize > 576 && 3) ||
              (deviceSize > 412 && 2) ||
              (deviceSize < 412 && 2)
            }
            navigation
          >
            {bestProducts &&
              bestProducts.map((item) => {
                return (
                  <div className="col-4">
                    <SwiperSlide>
                      <BestProItems item={item} />
                    </SwiperSlide>
                  </div>
                );
              })}
            ...
          </Swiper>
        </div>
      </div>
    </>
  );
}
