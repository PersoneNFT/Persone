"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import Image from "next/image";

const mgs1: string[] = [
    "/assets/images/box-item/img_item1.png",
    "/assets/images/box-item/img_item2.png",
    "/assets/images/box-item/img_item3.png",
    "/assets/images/box-item/img_item4.png",
    "/assets/images/box-item/img_item1.png",
    "/assets/images/box-item/img_item2.png",
    "/assets/images/box-item/img_item3.png",
    "/assets/images/box-item/img_item4.png",
];

const mgs2: string[] = [
    "/assets/images/box-item/img_item4.png",
    "/assets/images/box-item/img_item3.png",
    "/assets/images/box-item/img_item2.png",
    "/assets/images/box-item/img_item1.png",
    "/assets/images/box-item/img_item4.png",
    "/assets/images/box-item/img_item3.png",
    "/assets/images/box-item/img_item2.png",
    "/assets/images/box-item/img_item1.png",
];

const mgs3: string[] = [
    "/assets/images/box-item/img_item2.png",
    "/assets/images/box-item/img_item1.png",
    "/assets/images/box-item/img_item4.png",
    "/assets/images/box-item/img_item3.png",
    "/assets/images/box-item/img_item2.png",
    "/assets/images/box-item/img_item1.png",
    "/assets/images/box-item/img_item4.png",
    "/assets/images/box-item/img_item3.png",
];

export default function HeroVerticalSlider(): JSX.Element {
    return (
        <>
            <Swiper
                direction={"vertical"}
                slidesPerView={4}
                spaceBetween={10}
                grabCursor={true}
                loop={true}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                }}
                shortSwipes={false}
                longSwipes={false}
                allowTouchMove={true}
                freeMode={true}
                speed={2000}
                modules={[Autoplay]}
                className="swiper-container swiper mySwiper swiper-h"
                style={{ position: "relative", zIndex: "99" }}
            >
                {mgs1.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            height={226}
                            width={226}
                            src={item}
                            alt="Image"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                direction={"vertical"}
                slidesPerView={4}
                spaceBetween={10}
                grabCursor={true}
                loop={true}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                }}
                shortSwipes={false}
                longSwipes={false}
                allowTouchMove={true}
                freeMode={true}
                speed={2200}
                modules={[Autoplay]}
                className="swiper-container swiper mySwiper swiper-h"
                style={{ position: "relative", zIndex: "99" }}
            >
                {mgs2.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            height={226}
                            width={226}
                            src={item}
                            alt="Image"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                direction={"vertical"}
                slidesPerView={4}
                spaceBetween={10}
                grabCursor={true}
                loop={true}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                }}
                shortSwipes={false}
                longSwipes={false}
                allowTouchMove={true}
                freeMode={true}
                speed={2000}
                modules={[Autoplay]}
                className="swiper-container swiper mySwiper swiper-h"
                style={{ position: "relative", zIndex: "99" }}
            >
                {mgs3.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            height={226}
                            width={226}
                            src={item}
                            alt="Image"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
