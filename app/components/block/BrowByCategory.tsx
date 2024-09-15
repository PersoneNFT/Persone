"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { product7 } from "@/data/product";
import BrowCard1 from "../card/BrowCard1";

export default function BrowByCategory(): JSX.Element {
    return (
        <>
            <section className="tf-section live-auctions home5 bg-style2">
                <div className="ibthemes-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-live-auctions">
                                <h2 className="tf-title text-left pb-40">
                                    Brow By Category
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <Swiper
                                slidesPerView={"auto"}
                                spaceBetween={30}
                                loop={true}
                                className="swiper-container carousel-overflow2 auctions"
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                    1300: {
                                        slidesPerView: 4,
                                        spaceBetween: 30,
                                    },
                                }}
                            >
                                {product7.slice(0, 14).map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <BrowCard1 data={item} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
