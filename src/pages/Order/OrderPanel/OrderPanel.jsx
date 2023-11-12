import ProductCard from '../../Shared/ProductCard/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const OrderPanel = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 max-w-screen-xl mx-auto mt-12 mb-20 px-6 lg:px-0">
            {items?.map(item => (
              <ProductCard key={item._id} item={item}></ProductCard>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default OrderPanel;
