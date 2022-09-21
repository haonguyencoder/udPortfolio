import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Anna Sway',
    review: 'Can I say I love you today? If not, can I ask you again tomorrow? And the day after tomorrow? And the day after that? Coz I will be loving you every single day of my life?'
  },
  {
    avatar: AVTR2,
    name: 'Matta Wale',
    review: 'Today you are You, that is true than true. There is no one alive who is You are than You. ― Dr. Seuss, Happy Birthday to You!'
  },
  {
    avatar: AVTR3,
    name: 'Deli Ali',
    review: 'Be who you are and say what you mean, because those who mind do not matter and those who matter do not mind.'
  },
  {
    avatar: AVTR4,
    name: 'James Jasmine',
    review: 'Very little is needed to make a happy life; it is all within yourself, in your way of thinking'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="img" />
              </div>
              <h5 className="client__name"> {name} </h5>
              <small className="client__review"> {review} </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
