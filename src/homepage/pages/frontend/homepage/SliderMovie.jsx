import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { imgPath } from "@/helpers/functions-general";
const SliderMovie = () => {
  const sliderRef = React.useRef();

  return (
    <>
      <section className="px-10">
        <Swiper
          modules={[Pagination]}
          loop={true}
          pagination={{
            clickable: true,
          }}
          onSwiper={(it) => (sliderRef.current = it)}
          className="mySwiper"
          spaceBetween={20}
          slidesPerView={6}
        >
          <SwiperSlide>
            <div className="slider-card">
              <img
                src={`${imgPath}/series-1.jpg`}
                alt=""
                className="w-full h-[150px] object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-card">
              <img
                src={`${imgPath}/series-1.jpg`}
                alt=""
                className="w-full h-[150px] object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-card">
              <img
                src={`${imgPath}/series-1.jpg`}
                alt=""
                className="w-full h-[150px] object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-card">
              <img
                src={`${imgPath}/series-1.jpg`}
                alt=""
                className="w-full h-[150px] object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-card">
              <img
                src={`${imgPath}/series-1.jpg`}
                alt=""
                className="w-full h-[150px] object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-card">
              <img
                src={`${imgPath}/series-1.jpg`}
                alt=""
                className="w-full h-[150px] object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-card">
              <img
                src={`${imgPath}/series-1.jpg`}
                alt=""
                className="w-full h-[150px] object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-card">
              <img
                src={`${imgPath}/series-1.jpg`}
                alt=""
                className="w-full h-[150px] object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-card">
              <img
                src={`${imgPath}/series-1.jpg`}
                alt=""
                className="w-full h-[150px] object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-card">
              <img
                src={`${imgPath}/series-1.jpg`}
                alt=""
                className="w-full h-[150px] object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-card">
              <img
                src={`${imgPath}/series-1.jpg`}
                alt=""
                className="w-full h-[150px] object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-card">
              <img
                src={`${imgPath}/series-1.jpg`}
                alt=""
                className="w-full h-[150px] object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <button
          className={`css for Prev button`}
          onClick={() => sliderRef.current?.slideNext()}
        >
          Next
        </button>
        <button
          className={`css for Next button`}
          onClick={() => sliderRef.current?.slidePrev()}
        >
          Prev
        </button>
      </section>
    </>
  );
};

export default SliderMovie;
