/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import Link from "next/link";
import { styled } from "@mui/material/styles";
import { Grid, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";

const SwiperComponentWrapper = styled(Swiper)(() => ({
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  "& .swiper-slide": {
    height: "calc((100% - 16px) / 2) !important",
    display: "flex",
    "@media (min-width: 767.98px)": {},
    alignItems: "center",
    justifyContent: "center",
    "&:nth-of-type(2)": {
      "& .bgame__item.is--wider": {
        position: "absolute !important",
        left: "calc(-100% - 16px)",
        right: "0",
        bottom: "0",
        top: "0",
        width: "auto",
      },
    },
    "& .bgame__item": {
      width: "100%",
      position: "relative",
      textAlign: "center",
      overflow: "hidden",
      cursor: "pointer",
      borderRadius: 16,
      "&:hover": {
        "& .bgame__item__img": {
          transform: "scale(1.1)",
        },
        "& .bgame__item__mask": {
          opacity: 1,
        },
      },
      "& .bgame__item__img": {
        position: "absolute",
        width: "100%",
        height: "auto",
        bottom: 0,
        zIndex: 0,
        left: 0,
        display: "block",
        border: 0,
        transition: "transform 200ms linear, -webkit-transform 200ms linear",
      },
      "& .bgame__item__new": {
        position: "absolute",
        left: "0",
        display: "inline-block",
        fontSize: "12px",
        fontWeight: 800,
        color: "white",
        height: "26px",
        lineHeight: "26px",
        padding: "0 10px",
        borderRadius: "16px 0 16px 0",
        background: "linear-gradient(180deg, #BEFF54 0%, #1BBE00 100%)",
      },
      "& .bgame__item__content": {
        position: "absolute",
        zIndex: "1",
        bottom: 0,
        left: 0,
        right: 0,
      },
      "& .bgame__item__mask": {
        position: "absolute",
        zIndex: 1,
        bottom: 0,
        left: 0,
        right: 0,
        height: "100%",
        display: "grid",
        placeContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        opacity: 0,
        textDecoration: "none",
        transition: "opacity 200ms linear",
        "& .bgame__item__play-icon": {
          width: 60,
          height: 60,
          display: "inline-grid",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: 100,
        },
      },
    },
  },
  "& .swiper-pagination": {
    textAlign: "left",
    paddingLeft: 32,
    "& .swiper-pagination-bullet": {
      width: 64,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      "@media (max-width: 767.98px)": {
        width: 32,
        height: 4,
      },
      "&.swiper-pagination-bullet-active": {
        backgroundColor: "#fff",
      },
    },
  },
}));

function SwiperComponent({
  data,
  scwHeight,
  bgiHeight,
  isOneInTwoGrid,
  ...props
}) {
  return (
    <SwiperComponentWrapper
      modules={[Grid, A11y]}
      {...props}
      style={{ height: scwHeight }}
    >
      {isOneInTwoGrid && (
        <SwiperSlide>
          <div
            className="bgame__item"
            style={{
              paddingBottom: `${bgiHeight}%`,
              backgroundImage: 'url("")',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              visibility: "hidden",
            }}
          >
            <img
              src="/"
              className="bgame__item__img"
              width="100%"
              height="100%"
              alt=""
            />
            <div className="bgame__item__content">
              <div className="bgame__item__brand" />
            </div>
            <Link href="/">
              <a className="bgame__item__mask">
                <div className="bgame__item__play-icon">
                  <div
                    className="icon iconfont"
                    style={{ fontSize: 48, gridGap: 8, gap: 8 }}
                  >
                    <i className="icon__icon icon-chevron-right" />
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </SwiperSlide>
      )}
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <div
            className={`${
              isOneInTwoGrid ? "bgame__item is--wider" : "bgame__item"
            }`}
            style={{
              paddingBottom: `${bgiHeight}%`,
              backgroundImage: `url("${item.bgImg}")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              visibility: "visible",
            }}
          >
            <img
              src={item.srcImg}
              className="bgame__item__img"
              width="100%"
              height="100%"
              alt={item.name}
            />
            {item.new && <i className="bgame__item__new">NEW</i>}
            <div className="bgame__item__content">
              <div className="bgame__item__brand" />
            </div>
            <Link href={item.url}>
              <a className="bgame__item__mask">
                <div className="bgame__item__play-icon">
                  <div
                    className="icon iconfont"
                    style={{ fontSize: 48, gridGap: 8, gap: 8 }}
                  >
                    <i className="icon__icon icon-chevron-right" />
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </SwiperComponentWrapper>
  );
}

SwiperComponent.defaultProps = {
  isOneInTwoGrid: false,
};

export default SwiperComponent;
