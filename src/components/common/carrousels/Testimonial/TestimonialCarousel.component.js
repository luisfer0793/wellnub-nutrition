import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from '@mantine/hooks';
import { nanoid } from '@reduxjs/toolkit';
import { testimonialsSelector } from 'redux/slices/testimonials/testimonials.selector';
import Testimonial from '../../miscellaneous/Testimonial/Testimonial.component';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialCarousel = () => {
  const testimonials = useSelector(testimonialsSelector);

  const isResponsive = useMediaQuery(`(max-width: 576px)`, false);

  return (
    <Swiper
      loop
      centeredSlides
      spaceBetween={50}
      slidesPerView={isResponsive ? 1 : 3}
    >
      {testimonials.map(testimonial => (
        <SwiperSlide key={nanoid()}>
          <Testimonial testimonial={testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialCarousel;
