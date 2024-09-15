"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import Image from "next/image";

const mgs1: string[] = [
    "/assets/images/box-item/item-h5.1.png",
    "/assets/images/box-item/item-h5.2.png",
    "/assets/images/box-item/item-h5.3.png",
    "/assets/images/box-item/item-h5.2.png",
    "/assets/images/box-item/item-h5.1.png",
    "/assets/images/box-item/item-h5.2.png",
    "/assets/images/box-item/item-h5.3.png",
    "/assets/images/box-item/item-h5.2.png",
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

export default function HeroRotateSlider(): JSX.Element {
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
                className="swiper-container swiper mySwiper mySwiper1 swiper-h swiper-v"
            >
                {mgs1.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            height={280}
                            width={280}
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
                speed={2280}
                modules={[Autoplay]}
                className="swiper-container swiper mySwiper mySwiper1 swiper-h swiper-v"
            >
                {mgs1.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            height={280}
                            width={280}
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
                className="swiper-container swiper mySwiper mySwiper1 swiper-h swiper-v"
            >
                {mgs1.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            height={280}
                            width={280}
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
                speed={2280}
                modules={[Autoplay]}
                className="swiper-container swiper mySwiper mySwiper1 swiper-h swiper-v end"
                style={{ position: "relative", zIndex: "99" }}
            >
                {mgs1.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            height={280}
                            width={280}
                            src={item}
                            alt="Image"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
