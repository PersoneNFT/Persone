"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
    data: {
        id: number;
        hert: number;
        gallery: string[];
        author: {
            avatar: string;
            title: string;
            name: string;
        };
    };
}

export default function ProductCard2({ data }: Props): JSX.Element {
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
                <div className="sc-card-collection style-2 home2">
                    <div className="card-bottom">
                        <div className="author">
                            <div className="sc-author-box style-2">
                                <div className="author-avatar">
                                    <Image
                                        height={100}
                                        width={100}
                                        src={data.author.avatar}
                                        alt="Avatar"
                                        className="avatar"
                                    />
                                    <div className="badge">
                                        <i className="ripple" />
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <h4>
                                    <Link href="authors-1">
                                        {data.author.title}
                                    </Link>
                                </h4>
                                <div className="infor">
                                    <span>Created by</span>
                                    <span className="name">
                                        <Link href="authors-2">
                                            {data.author.name}
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={heartToggle}
                            className={`wishlist-button public heart ${
                                isHeartToggle === 1 ? "active" : ""
                            } `}
                        >
                            <span className="number-like">
                                {data.hert + isHeartToggle}
                            </span>
                        </button>
                    </div>
                    <Link href="authors-2">
                        <div className="media-images-collection">
                            <div className="box-left">
                                <Image
                                    height={500}
                                    width={500}
                                    src={data.gallery[0]}
                                    alt="Popular Image"
                                />
                            </div>
                            <div className="box-right">
                                <div className="top-img">
                                    <Image
                                        height={200}
                                        width={200}
                                        src={data.gallery[1]}
                                        alt="Popular Image"
                                    />
                                    <Image
                                        height={200}
                                        width={200}
                                        src={data.gallery[2]}
                                        alt="Popular Image"
                                    />
                                </div>
                                <div className="bottom-img">
                                    <Image
                                        height={400}
                                        width={400}
                                        src={data.gallery[3]}
                                        alt="Popular Image"
                                    />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}
