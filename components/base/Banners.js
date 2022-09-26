/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import { styled } from '@mui/material/styles';
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const SwiperWrapper = styled(Swiper)(() => ({
  position: 'relative',
  borderRadius: 16,
  overflow: 'hidden',
  '& .swiper-slide': {
    borderRadius: 16,
    overflow: 'hidden',
    '& > img': {
      display: 'block',
      width: '100%',
    },
  },
  '& .swiper-pagination': {
    textAlign: 'left',
    paddingLeft: 32,
    '& .swiper-pagination-bullet': {
      width: 64,
      height: 8,
      borderRadius: 4,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      '@media (max-width: 767.98px)': {
        width: 32,
        height: 4,
      },
      '&.swiper-pagination-bullet-active': {
        backgroundColor: '#fff',
      },
    },
  },
}));

function Banners({ data }) {
  return (
    <SwiperWrapper
      modules={[Pagination, A11y]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoHeight
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <img src={item.srcImg} alt={item.name} />
        </SwiperSlide>
      ))}
    </SwiperWrapper>
  );
}

export default Banners;
