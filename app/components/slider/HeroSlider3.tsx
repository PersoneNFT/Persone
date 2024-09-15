"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import useDarkModeCheck from "@/hooks/useDarkModeCheck";
import Link from "next/link";
import Image from "next/image";

export default function HeroSlider3(): JSX.Element {
    // is dark hook
    const isDark = useDarkModeCheck();

    return (
        <>
            <div className="swiper-container mainslider home auctions">
                <div className="swiper-wrapper">
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        navigation={{
                            prevEl: ".swiper-button-next",
                            nextEl: ".swiper-button-prev",
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="slider-item">
                                    <div className="ibthemes-container">
                                        <div className="wrap-heading flat-slider text-center two">
                                            <h2 className="heading">
                                                Discover, and collect
                                            </h2>
                                            <h1 className="heading">
                                                <span
                                                    className={`tf-text ${
                                                        isDark ? "s1" : "style"
                                                    }`}
                                                >
                                                    extraordinary{" "}
                                                </span>
                                                <span>Monster NFTs</span>
                                            </h1>
                                            <p className="sub-heading mg-t-29 mg-bt-50">
                                                Marketplace for monster
                                                character cllections non
                                                fungible token NFTs
                                            </p>
                                            <div className="flat-bt-slider flex">
                                                <Link
                                                    href="/explore-1"
                                                    className="sc-button header-slider style style-1 rocket fl-button pri-1"
                                                >
                                                    <span>Explore</span>
                                                </Link>
                                                <Link
                                                    href="/create-item"
                                                    className="sc-button header-slider style style-1 note fl-button pri-1"
                                                >
                                                    <span>Create</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* item*/}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="slider-item">
                                    <div className="ibthemes-container ">
                                        <div className="wrap-heading flat-slider flex">
                                            <div className="content">
                                                <h2 className="heading">
                                                    Discover, find,
                                                </h2>
                                                <h1 className="heading mb-style">
                                                    <span
                                                        className={`tf-text ${
                                                            isDark
                                                                ? "s1"
                                                                : "style"
                                                        }`}
                                                    >
                                                        Sell extraordinary
                                                    </span>
                                                </h1>
                                                <h1 className="heading">
                                                    Monster NFTs
                                                </h1>
                                                <p className="sub-heading mg-t-29 mg-bt-44">
                                                    Marketplace for monster
                                                    character cllections non
                                                    fungible token NFTs
                                                </p>
                                                <div className="flat-bt-slider flex style2">
                                                    <Link
                                                        href="/explore-1"
                                                        className="sc-button header-slider style style-1 rocket fl-button pri-1"
                                                    >
                                                        <span>Explore</span>
                                                    </Link>
                                                    <Link
                                                        href="/create-item"
                                                        className="sc-button header-slider style style-1 note fl-button pri-1"
                                                    >
                                                        <span>Create</span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="image">
                                                <Image
                                                    height={448}
                                                    width={620}
                                                    className="img-bg"
                                                    src="/assets/images/backgroup-secsion/img-bg-sliderhome2.png"
                                                    alt="Image"
                                                />
                                                <Image
                                                    height={588}
                                                    width={354}
                                                    src="/assets/images/box-item/imgslider2.png"
                                                    alt="Image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* item*/}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="slider-item">
                                    <div className="ibthemes-container flex">
                                        <div className="image three">
                                            <Image
                                                height={395}
                                                width={573}
                                                src="/assets/images/box-item/imgslider-3.png"
                                                alt="Image"
                                            />
                                            <Image
                                                height={460}
                                                width={705}
                                                className="img-bg"
                                                src="/assets/images/backgroup-secsion/img-bg-sliderhome3.png"
                                                alt="Image"
                                            />
                                        </div>
                                        <div className="wrap-heading flat-slider h3 three">
                                            <h2 className="heading">
                                                Discover, and collect
                                            </h2>
                                            <h2 className="heading">
                                                extraordinary
                                            </h2>
                                            <h2 className="heading h3">
                                                <span className="fill">
                                                    Monster{" "}
                                                </span>
                                                NFTs
                                            </h2>
                                            <p className="sub-heading mt-29 mb-35">
                                                Marketplace for monster
                                                character cllections non
                                                fungible token NFTs
                                            </p>
                                            <div className="flat-bt-slider flex style2">
                                                <Link
                                                    href="/explore-1"
                                                    className="sc-button header-slider style style-1 rocket fl-button pri-1"
                                                >
                                                    <span>Explore</span>
                                                </Link>
                                                <Link
                                                    href="/create-item"
                                                    className="sc-button header-slider style style-1 note fl-button pri-1"
                                                >
                                                    <span>Create</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* item*/}
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="swiper-pagination" />
            </div>
        </>
    );
}
