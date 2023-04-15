import React from "react";
// Import Swiper React components
import "./testimonials.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section className="testimonial container section" id="participating">
      <motion.h2 className="section__title">Participating</motion.h2>
      <span className="section__subtitle">
        Things that I have participate in
      </span>

      <Swiper
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper testimonial__container"
      >
        {Data.map(({ id, image, title, description,tweet }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <motion.div whileTap={{ scale: 0.8 }}>
                <img src={image} alt="" className="testimonial__img" />
                <h3 className="testimonial__name">{title}</h3>
                <p className="testimonial__description">{description}</p>
                <div>{tweet}</div>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
