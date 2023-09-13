import { useState, useEffect, useLayoutEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import RelatedItems from "./RelatedItems";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function RelatedProducts({ productId }) {
  let [relatedPros, setRelatedPros] = useState(null);
  let [deviceSize, seteviceSize] = useState(window.innerWidth);

  let handleResize = () => {
    seteviceSize(window.innerWidth);
  };
  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (productId <= 13) {
      fetch(`https://ecommerce-database-xi.vercel.app/men`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          let filteredPros = data.filter((item) => {
            return item.id != productId;
          });
          setRelatedPros(filteredPros);
        })
        .catch((err) => {
          console.warn(err);
        });
    } else {
      fetch(`https://ecommerce-database-xi.vercel.app/women`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          let filteredPros = data.filter((item) => {
            return item.id != productId;
          });
          setRelatedPros(filteredPros);
        })
        .catch((err) => {
          console.warn(err);
        });
    }
  }, [productId]);

  return (
    <>
      <div className="wrapperRelatedPros">
        <p className="titleRelated">RELATED PRODUCTS</p>
        <div className="wrapperSliderRelated">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={
              (deviceSize > 992 && 4) ||
              (deviceSize > 768 && 3) ||
              (deviceSize > 576 && 3) ||
              (deviceSize < 576 && 2)
            }
            navigation
          >
            {relatedPros &&
              relatedPros.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <RelatedItems deviceSize={deviceSize} item={item} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </>
  );
}
