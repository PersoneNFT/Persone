"use client";
import CategoryCard1 from "../card/CategoryCard1";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { category1 } from "@/data/project";

export default function Category(): JSX.Element {
    return (
        <>
            <section className="tf-section category">
                <div className="ibthemes-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-live-auctions">
                                <h2 className="tf-title pb-39">
                                    All Catergories
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div style={{ position: "relative" }}>
                                <Swiper
                                    spaceBetween={22}
                                    navigation={{
                                        prevEl: ".btn-slide-next",
                                        nextEl: ".btn-slide-prev",
                                    }}
                                    modules={[Navigation]}
                                    className="swiper-container carousel11"
                                    breakpoints={{
                                        500: {
                                            slidesPerView: 2,
                                            spaceBetween: 22,
                                        },
                                        768: {
                                            slidesPerView: 4,
                                            spaceBetween: 22,
                                        },
                                        1024: {
                                            slidesPerView: 6,
                                            spaceBetween: 22,
                                        },
                                    }}
                                >
                                    {category1.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <CategoryCard1 data={item} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="swiper-button-next btn-slide-next active"></div>
                                <div className="swiper-button-prev btn-slide-prev"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
