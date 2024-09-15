"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import ProductCard7 from "../card/ProductCard7";
import { product4 } from "@/data/product";

export default function PopularCollection3(): JSX.Element {
    return (
        <>
            <section className="tf-section top-seller bg-style">
                <div className="ibthemes-container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="tf-title style3 pb-15">
                                Popular Collection
                            </h2>
                            <div className="heading-line" />
                        </div>
                        <div className="col-md-12">
                            <div className="collection">
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    className="mySwiper swiper-container show-shadow carousel3 pad-t-20 button-arow-style"
                                    breakpoints={{
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 30,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 30,
                                        },
                                    }}
                                    navigation={{
                                        prevEl: ".popular-collection3-next",
                                        nextEl: ".popular-collection3-prev ",
                                    }}
                                    modules={[Pagination, Navigation]}
                                >
                                    {product4.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <ProductCard7 data={item} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="swiper-container show-shadow carousel2 pad-t-20 button-arow-style"></div>
                                <div className="swiper-button-next popular-collection3-prev btn-slide-next" />
                                <div className="swiper-button-prev popular-collection3-next btn-slide-prev" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
