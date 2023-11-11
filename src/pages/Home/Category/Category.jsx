import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle';

const Category = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-20 px-6 lg:px-0">
      <SectionTitle
        subHeading={'From 11:00am to 10:00pm'}
        heading={'ORDER ONLINE'}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        rewind={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="cinzel text-center md:text-3xl md:text-white uppercase md:-mt-20 md:mb-24 mb-10">
            salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="cinzel text-center md:text-3xl md:text-white uppercase md:-mt-20 md:mb-24 mb-10">
            pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="cinzel text-center md:text-3xl md:text-white uppercase md:-mt-20 md:mb-24 mb-10">
            soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="cinzel text-center md:text-3xl md:text-white uppercase md:-mt-20 md:mb-24 mb-10">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="cinzel text-center md:text-3xl md:text-white uppercase md:-mt-20 md:mb-24 mb-10">
            salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
