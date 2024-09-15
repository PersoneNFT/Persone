"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import ProductCard2 from "../card/ProductCard2";
import { product2 } from "@/data/product";
import Link from "next/link";

export default function PopularCollection(): JSX.Element {
    return (
        <>
            <section className="tf-section live-auctions style4 no-pt-mb mobie-style">
                <div className="ibthemes-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-live-auctions">
                                <h2 className="tf-title pb-17 text-left">
                                    Popular Collection
                                </h2>
                                <Link href="/explore-3" className="exp style2">
                                    EXPLORE MORE
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="collection">
                                <div className="swiper-container show-shadow carousel4 pad-t-20 button-arow-style">
                                    <Swiper
                                        slidesPerView={3}
                                        spaceBetween={30}
                                        modules={[Navigation]}
                                        className="mySwiper swiper-container show-shadow carousel pad-t-17 auctions"
                                        breakpoints={{
                                            0: {
                                                slidesPerView: 1,
                                            },
                                            769: {
                                                slidesPerView: 2,
                                            },
                                            1024: {
                                                slidesPerView: 3,
                                            },
                                        }}
                                    >
                                        {product2.map((item) => (
                                            <SwiperSlide key={item.id}>
                                                <ProductCard2 data={item} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
