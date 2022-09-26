/* eslint-disable import/no-unresolved */
import { styled } from "@mui/material/styles";
import { A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

const BusinessComponentWrapper = styled(Swiper)(() => ({
  position: "relative",
  overflow: "hidden",
  maxWidth: 100,
  "& .swiper-wrapper": {
    transitionTimingFunction: "linear !important",
  },
  "& .swiper-slide": {
    width: "auto",
    height: "auto",
    "& > img": {
      display: "block",
      height: 42,
    },
  },
}));

function BusinessComponent() {
  return (
    <BusinessComponentWrapper
      modules={[A11y, Autoplay]}
      grabCursor={false}
      loop
      slidesPerView="auto"
      shortSwipes={false}
      longSwipes={false}
      spaceBetween={32}
      allowTouchMove={false}
      autoplay={{
        delay: 1,
      }}
      freeMode
      speed={5000}
      autoHeight
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img
          src="https://hx1web.f384883be.com/static/media/AG.85fc3432.svg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://hx1web.f384883be.com/static/media/BG.cb969885.svg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://hx1web.f384883be.com/static/media/EVO.69c9c516.svg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://hx1web.f384883be.com/static/media/Micro.8b3dcde5.svg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://hx1web.f384883be.com/static/media/PG.f005e366.svg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://hx1web.f384883be.com/static/media/PS.b15b576d.svg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://hx1web.f384883be.com/static/media/SABA.648f58e7.svg"
          alt=""
        />
      </SwiperSlide>
    </BusinessComponentWrapper>
  );
}

export default BusinessComponent;
