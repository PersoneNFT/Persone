"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Countdown from "react-countdown";

interface Props {
    data: {
        id: number;
        hert: number;
        img: string;
        auction: number;
        title: string;
        tag: string;
        eth: number;
        author: { status: string; name: string; avatar: string };
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

export default function ProductCard14({ data }: Props): JSX.Element {
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
                <div className="sc-card-product menu_card style-h7">
                    <div className="meta-info style">
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
                    </div>
                    <div className="card-media">
                        <Link href="/item-details-1">
                            <Image
                                height={500}
                                width={500}
                                style={{
                                    height: "313.56px",
                                    width: "100%",
                                    objectFit: "cover",
                                }}
                                src={data.img}
                                alt="Image"
                            />
                        </Link>
                        <div className="featured-countdown">
                            <span className="slogan" />
                            <span>
                                <Countdown
                                    date={
                                        Date.now() +
                                        1000 * 60 * 60 * 24 * data.auction
                                    }
                                    renderer={renderer}
                                />
                            </span>
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
                    </div>
                    <div className="meta-info">
                        <div className="author">
                            <div className="info">
                                <span>Current Bid</span>
                                <span className="pricing">{data.eth} ETH</span>
                            </div>
                        </div>
                        <div className="tags">bsc</div>
                    </div>
                </div>
            </div>
        </>
    );
}
