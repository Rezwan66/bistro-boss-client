import ProductCard from '../../Shared/ProductCard/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './OrderPanel.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const OrderPanel = ({ items }) => {
  const count = items.length;
  const itemsPerPage = 6;
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];
  console.log(count, pages);

  const pagination = {
    // el: '.swiper-pagination',
    clickable: true,
    // type: 'fraction',
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <div>
      <Swiper
        pagination={pagination}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper mb-10"
      >
        {pages?.map(page => (
          <SwiperSlide key={page}>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 max-w-screen-xl mx-auto mt-12 mb-20 px-6 lg:px-0">
              {items?.map(item => (
                <ProductCard key={item._id} item={item}></ProductCard>
              ))}
            </div>
          </SwiperSlide>
        ))}
        <div className="my-10 flex justify-center gap-10">
          <button className="swiper-button-prev-custom btn btn-circle bg-[#BB8506] border border-black">
            <FaArrowLeft></FaArrowLeft>
          </button>
          <button className="swiper-button-next-custom btn btn-circle bg-[#BB8506] border border-black">
            <FaArrowRight></FaArrowRight>
          </button>
        </div>
      </Swiper>
    </div>
  );
};
export default OrderPanel;
