import React from "react";
import HomeSectionHeader from "./HomeSectionHeader";
import TestimonialItem from "./TestimonialItem";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function HomeTestimonial(props) {
  return (
    <section
      className="container mx-auto md:px-6 pb-8 md:mb-14"
      data-aos="fade-up"
      data-aos-delay={150}
      data-aos-easing="ease-in-out"
    >
      <HomeSectionHeader title="Kata Mereka" isCenter="centered" />

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <TestimonialItem
            name="Fathul Laili Khoirun Nisa"
            class="Kelas Karya Tulis Ilmiah Ultimate"
            img="/assets/testimonial.jpg"
          >
            "Serius, Generasi Ilmiah tuh membuka jalan aku banget! Aku jadi tahu
            banyak hal tentang kepenulisan, presentasi, dan juga desain poster
            Kesemuanya gak cuma untuk persiapan lomba, tapi juga bisa banget
            menunjang perkuliahan"
          </TestimonialItem>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default HomeTestimonial;
