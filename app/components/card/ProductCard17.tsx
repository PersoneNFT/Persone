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
            <span style={{ fontSize: "20px" }}>
                {days}:{hours}:{minutes}:{seconds}
            </span>
        );
    }
};

export default function ProductCard17({ data }: Props): JSX.Element {
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
            <div className="sc-card-product menu_card style-h7">
                <div className="wrap-media">
                    <div className="card-media">
                        <Link href="/item-details-1">
                            <Image
                                height={500}
                                width={500}
                                src={data.img}
                                alt="Image"
                            />
                        </Link>
                    </div>
                </div>
                <div className="card-title">
                    <p>Item Name</p>
                    <h4>
                        <Link href="/item-details-1">{data.title}</Link>
                    </h4>
                </div>
                <div className="meta-info style">
                    <p>Creator</p>
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
                            <h4>
                                <Link href="/authors-2">
                                    {data.author.name}
                                </Link>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="countdown">
                    <p>Countdown</p>
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
                </div>
                <div className="wrap-hear">
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
                <div className="wrap-tag">
                    <div className="tags">bsc</div>
                </div>
                <div className="meta-info">
                    <div className="author">
                        <div className="info">
                            <p>Current Bid</p>
                            <p className="pricing">{data.eth} ETH</p>
                        </div>
                    </div>
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
        </>
    );
}
