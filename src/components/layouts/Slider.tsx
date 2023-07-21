"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from "next/image"
import p1 from "public/p1.png"
import p2 from "public/p2.png"
import p3 from "public/p3.png"
const Slider = () => {
  return (
    <div className = "flex justify-center">
        <Swiper
        spaceBetween={4}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay = {true}
        >
            <SwiperSlide><Image src = {p1} alt = "Product 1"/></SwiperSlide>
            <SwiperSlide><Image src = {p1} alt = "Product 1"/></SwiperSlide>
            <SwiperSlide><Image src = {p1} alt = "Product 1"/></SwiperSlide>
            <SwiperSlide><Image src = {p1} alt = "Product 1"/></SwiperSlide>
            <SwiperSlide><Image src = {p1} alt = "Product 1"/></SwiperSlide>
            <SwiperSlide><Image src = {p1} alt = "Product 1"/></SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Slider