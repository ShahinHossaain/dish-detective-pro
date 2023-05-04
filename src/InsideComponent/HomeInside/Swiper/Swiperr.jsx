import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Swiper.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Swiperr = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="mx-auto my-5">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1PlBgacnSx02iaku6b_wo8tboQU_nZHFRDQ&usqp=CAU"
          alt=""
          className="animate-pulse transform hover:translate-y-1 hover:scale-110 transition duration-500 ease-in-out rounded-3xl w-full"
        />
        <p className="text-2xl font-bold o_font2 text-center">
          <span className="text-green-500">
            <span className="text-3xl">Made</span> By
          </span>{" "}
          Our <span className="text-red-600 text-3xl block">Honorable</span>{" "}
          CHEFS...
        </p>
      </div>

      <div className="md:w-2/3">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
              className="h-full"
            />
            <p className="text-xl font-bold">Beef cary</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://wallpaperaccess.com/full/767277.jpg"
              className="h-full"
            />
            <p className="text-xl font-bold">Hot Pizza</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://wallpapercave.com/wp/wp7029319.jpg"
              className="h-full"
            />
            <p className="text-xl font-bold">Hot Burger</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1PHRB_8U4DI1BN9lbKGxQ8ycVFLl_ejke4A&usqp=CAU"
              className="h-full"
            />
            <p className="text-xl font-bold">Masala Mutton</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLGLqC5A-Kt9faHSI5AqEGvoldr2WXlHlycw&usqp=CAU"
              className="h-full"
            />
            <p className="text-xl font-bold">Pungent Mutton</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiYZKlz2YMUTEu7CLOk2A-M1TdqYhd3S3JmA&usqp=CAU"
              className="h-full"
            />
            <p className="text-xl font-bold">Butter Chicken</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ObF1t7VsHoMd0Ki8nKEy1tpqhPQhlJTpvQ&usqp=CAU"
              className="h-full"
            />
            <p className="text-xl font-bold">Stick Chicken</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbh2bef7fTMYqV7pPec1BZvaPrIZKnHW2sA&usqp=CAU"
              className="h-full"
            />
            <p className="text-xl font-bold">Mojar Chingri</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymfDllxDV8wM8bge2uaTLTA6n1kl2T1hpruI1SCHVY2SDyxv0Vg9tiojFhPk6xGWxxxo&usqp=CAU"
              className="h-full"
            />
            <p className="text-xl font-bold">Fruits</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Swiperr;
