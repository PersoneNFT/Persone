"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
    data: {
        id: number;
        status: string;
        hert: number;
        img: string;
        title: string;
        tag: string;
        eth: number;
        author: {
            name: string;
            avatar: string;
        };
    };
}

export default function ProductCard3({ data }: Props): JSX.Element {
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
            <div className="sc-card-product">
                <div className="card-media">
                    <Link href="/item-details-1">
                        <Image
                            height={500}
                            width={500}
                            src={data.img}
                            alt="Image"
                        />
                    </Link>
                    {data.status === "Coming Soon" ? (
                        <div className="coming-soon">coming soon</div>
                    ) : undefined}

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
                <div className="card-title">
                    <h5 className="style2">
                        <Link href="/item-details-1">{data.title}</Link>
                    </h5>
                    <div className="tags">{data.tag}</div>
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
                            <span>Owned By</span>
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
                {data.status !== "Coming Soon" ? (
                    <div className="card-bottom">
                        <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#popup_bid"
                            className="sc-button style bag fl-button pri-3"
                        >
                            <span>Place Bid</span>
                        </a>
                        <Link
                            href="/activity-1"
                            className="view-history reload"
                        >
                            View History
                        </Link>
                    </div>
                ) : undefined}
            </div>
        </>
    );
}
