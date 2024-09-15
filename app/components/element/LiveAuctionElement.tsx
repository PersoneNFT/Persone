"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import ProductCard1 from "../card/ProductCard1";
import { product1 } from "@/data/product";

export default function LiveAuctionElement(): JSX.Element {
    return (
        <>
            <div className="col-md-12">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        prevEl: ".live-auction-next",
                        nextEl: ".live-auction-right",
                    }}
                 
                    modules={[Pagination, Navigation]}
                    className="mySwiper swiper-container show-shadow carousel pad-t-17 auctions"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {product1.slice(0, 7).map((item) => (
                        <SwiperSlide key={item.id}>
                            <ProductCard1 data={item} />
                        </SwiperSlide>
                    ))}
                    <div className="swiper-pagination mg-t-6" />
                    <div className="swiper-button-next live-auction-next btn-slide-next active" />
                    <div className="swiper-button-prev live-auction-right btn-slide-prev" />
                </Swiper>
            </div>
        </>
    );
}
