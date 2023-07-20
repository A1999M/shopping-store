import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function CustomerReview() {
  return (
    <>
      <div className="container custoremReview">
        <div className="row bgCustomerReview">
          <div className="col-12">
            <div className="wrapperCReviews">
              <p className="titleReviews">CUSTOMER REVIEWS</p>
              <p className="descReviews">what says our customers about us!</p>
            </div>
          </div>
          <div className="col-12 cWrapperSlider">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              // navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <p className="firstReview">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  eget varius nunc. Integer faucibus nibh odio, ut mattis turpis
                  blandit ullamcorper. In pellentesque urna nec lectus iaculis,
                  eget mollis tortor venenatis. Praesent nec arcu quis nisi
                  dictum tincidunt. Integer gravida libero non nulla posuere, ac
                  ullamcorper turpis varius. Praesent at fringilla lectus.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Nunc quis libero erat.
                  Praesent sapien urna, mollis id tincidunt egestas, tempor eget
                  elit.
                </p>
                <p className="customerName">Mack Johnson</p>
                <p className="customerJob">Fashion Designer</p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="firstReview">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  eget varius nunc. Integer faucibus nibh odio, ut mattis turpis
                  blandit ullamcorper. In pellentesque urna nec lectus iaculis,
                  eget mollis tortor venenatis. Praesent nec arcu quis nisi
                  dictum tincidunt. Integer gravida libero non nulla posuere, ac
                  ullamcorper turpis varius. Praesent at fringilla lectus.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Nunc quis libero erat.
                  Praesent sapien urna, mollis id tincidunt egestas, tempor eget
                  elit.
                </p>
                <p className="customerName">Luies Charls</p>
                <p className="customerJob">Developer</p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="firstReview">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  eget varius nunc. Integer faucibus nibh odio, ut mattis turpis
                  blandit ullamcorper. In pellentesque urna nec lectus iaculis,
                  eget mollis tortor venenatis. Praesent nec arcu quis nisi
                  dictum tincidunt. Integer gravida libero non nulla posuere, ac
                  ullamcorper turpis varius. Praesent at fringilla lectus.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Nunc quis libero erat.
                  Praesent sapien urna, mollis id tincidunt egestas, tempor eget
                  elit.
                </p>
                <p className="customerName">Jecob Goeckno</p>
                <p className="customerJob">Manager</p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
