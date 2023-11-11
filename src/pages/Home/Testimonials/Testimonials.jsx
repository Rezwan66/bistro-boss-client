import SectionTitle from '../../../components/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

// react rating
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';

import { useEffect, useState } from 'react';

import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);
  return (
    <section className="max-w-screen-xl mx-auto px-6 lg:px-0 my-20">
      <SectionTitle
        heading="TESTIMONIALS"
        subHeading="What Our Clients Say"
      ></SectionTitle>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews?.map(review => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center py-10 px-24">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <FaQuoteLeft className="text-7xl my-6"></FaQuoteLeft>
                <p className="mb-4 text-center">{review.details}</p>
                <h3 className="text-2xl uppercase text-[#CD9003]">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Testimonials;
