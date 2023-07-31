import { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import RelatedItems from "./RelatedItems";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function RelatedProducts({ productId }) {
  let [relatedPros, setRelatedPros] = useState(null);

  useEffect(() => {
    if (productId <= 13) {
      fetch(`http://localhost:8000/men`)
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
      fetch(`http://localhost:8000/women`)
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
        <div className="wrapperSliderRelated mt-5rem">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={4}
            navigation
          >
            {relatedPros &&
              relatedPros.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <RelatedItems item={item} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </>
  );
}
