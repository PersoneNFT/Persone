"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Countdown from "react-countdown";

interface Props {
    data: {
        hert: number;
        status: string;
        img: string;
        auction: number;
        title: string;
        eth: number;
        author: {
            status: string;
            name: string;
            avatar: string;
        };
        collection: {
            name: string;
            avatar: string;
        };
    };
}

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
            <span>
                {days} : {hours} : {minutes} : {seconds}
            </span>
        );
    }
};

export default function ProductCard10({ data }: Props): JSX.Element {
    const [isHeartToggle, setHeartToggle] = useState<number>(0);

    // heart toggle
    const heartToggle = () => {
        if (isHeartToggle === 0) {
            return setHeartToggle(1);
        }
        setHeartToggle(0);
    };

    return (
        <>
            <div className="slider-item">
                <div className="sc-card-product menu_card">
                    <div className="meta-info style">
                        <div className="author">
                            <div className="avatar">
                                <Image
                                    height={100}
                                    width={100}
                                    src={data.collection.avatar}
                                    alt="Image"
                                />
                            </div>
                            <div className="info">
                                <span>Collection</span>
                                <h6>
                                    <Link href="/authors-2">
                                        {data.collection.name}
                                    </Link>
                                </h6>
                            </div>
                        </div>
                        <div className="menu_card">
                            <div className="dropdown">
                                <div className="icon">
                                    <a
                                        className="btn-link"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i className="fas fa-ellipsis-h" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a
                                            className="dropdown-item"
                                            data-toggle="modal"
                                            data-target="#delete_client"
                                        >
                                            Refresh Metadata
                                        </a>
                                        <a
                                            className="dropdown-item"
                                            data-toggle="modal"
                                            data-target="#edit_client"
                                        >
                                            Share
                                        </a>
                                        <a
                                            className="dropdown-item"
                                            data-toggle="modal"
                                            data-target="#edit_client"
                                        >
                                            Report
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-media">
                        <Link href="/item-details-1">
                            <Image
                                height={500}
                                width={500}
                                src={data.img}
                                alt="Image"
                            />
                        </Link>
                        <button
                            onClick={heartToggle}
                            className={`wishlist-button heart ${
                                isHeartToggle === 1 ? "active" : ""
                            } `}
                        >
                            <span className="number-like">
                                {data.hert + isHeartToggle}
                            </span>
                        </button>
                        <div className="featured-countdown">
                            <span className="slogan" />
                            <Countdown
                                date={
                                    Date.now() +
                                    1000 * 60 * 60 * 24 * data.auction
                                }
                                renderer={renderer}
                            />
                        </div>
                        <div className="button-place-bid">
                            <a
                                data-bs-toggle="modal"
                                data-bs-target="#popup_bid"
                                className="sc-button style-place-bid style bag fl-button pri-3"
                            >
                                <span>Place Bid</span>
                            </a>
                        </div>
                    </div>
                    <div className="card-title">
                        <h5>
                            <Link href="/item-details-1">{data.title}</Link>
                        </h5>
                        <div className="tags">bsc</div>
                    </div>
                    <div className="meta-info">
                        <div className="author">
                            <div className="avatar">
                                <Image
                                    height={100}
                                    width={100}
                                    src={data.author.avatar}
                                    alt="Image"
                                />
                            </div>
                            <div className="info">
                                <span>Creator</span>
                                <h6>
                                    <Link href="/authors-2">
                                        {data.author.name}
                                    </Link>
                                </h6>
                            </div>
                        </div>
                        <div className="price">
                            <span>Current Bid</span>
                            <h5> {data.eth} ETH</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
