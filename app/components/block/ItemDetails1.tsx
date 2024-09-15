"use client";
import Image from "next/image";
import ItemDetailsTab from "../element/ItemDetailsTab";
import Link from "next/link";
import Countdown from "react-countdown";

export default function ItemDetails1() {
    const renderer = ({
        days,
        hours,
        minutes,
        seconds,
        completed,
    }: any): JSX.Element | string => {
        if (completed) {
            return "Completed";
        } else {
            return (
                <p className="countdown__timer">
                    <span className="countdown__item">{days}</span>
                    <span className="countdown__item"> : </span>
                    <span className="countdown__item">{hours}</span>
                    <span className="countdown__item"> : </span>
                    <span className="countdown__item">{minutes}</span>
                    <span className="countdown__item"> : </span>
                    <span className="countdown__item">{seconds}</span>
                </p>
            );
        }
    };

    return (
        <>
            <div className="tf-section tf-item-details">
                <div className="ibthemes-container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="content-left">
                                <div className="media">
                                    <Image
                                        height={1000}
                                        width={1000}
                                        src="/assets/images/box-item/images-item-details.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="content-right">
                                <div className="sc-item-details">
                                    <h2 className="style2">
                                        “The Fantasy Flower illustration ”
                                    </h2>
                                    <div className="meta-item">
                                        <div className="left">
                                            <span className="viewed eye">
                                                225
                                            </span>
                                            <span className="liked heart wishlist-button mg-l-8">
                                                <span className="number-like">
                                                    100
                                                </span>
                                            </span>
                                        </div>
                                        <div className="right">
                                            <a className="share" />
                                            <a className="option" />
                                        </div>
                                    </div>
                                    <div className="client-infor sc-card-product">
                                        <div className="meta-info">
                                            <div className="author">
                                                <div className="avatar">
                                                    <Image
                                                        height={200}
                                                        width={200}
                                                        src="/assets/images/avatar/avt-8.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="info">
                                                    <span>Owned By</span>
                                                    <h6>
                                                        <Link href="/authors-2">
                                                            Ralph Garraway
                                                        </Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="meta-info">
                                            <div className="author">
                                                <div className="avatar">
                                                    <Image
                                                        height={200}
                                                        width={200}
                                                        src="/assets/images/avatar/avt-2.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="info">
                                                    <span>Create By</span>
                                                    <h6>
                                                        <Link href="/authors-2">
                                                            Freddie Carpenter
                                                        </Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        Habitant sollicitudin faucibus cursus
                                        lectus pulvinar dolor non ultrices eget.
                                        Facilisi lobortisal morbi fringilla urna
                                        amet sed ipsum vitae ipsum malesuada.
                                        Habitant sollicitudin faucibus cursus
                                        lectus pulvinar dolor non ultrices eget.
                                        Facilisi lobortisal morbi fringilla urna
                                        amet sed ipsum
                                    </p>
                                    <div className="meta-item-details style2">
                                        <div className="item meta-price">
                                            <span className="heading">
                                                Current Bid
                                            </span>
                                            <div className="price">
                                                <div className="price-box">
                                                    <h5> 4.89 ETH</h5>
                                                    <span>= $12.246</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item count-down">
                                            <span className="heading style-2">
                                                Countdown
                                            </span>
                                            <span className="js-countdown">
                                                {" "}
                                                <Countdown
                                                    date={
                                                        Date.now() +
                                                        1000 *
                                                            60 *
                                                            60 *
                                                            24 *
                                                            4.343
                                                    }
                                                    renderer={renderer}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <a
                                        data-bs-toggle="modal"
                                        data-bs-target="#popup_bid"
                                        className="sc-button loadmore style bag fl-button pri-3"
                                    >
                                        <span>Place a bid</span>
                                    </a>
                                </div>
                                <ItemDetailsTab />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
