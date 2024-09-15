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

export default function ProductCard5({ data }: Props): JSX.Element {
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
                <div className="sc-card-collection style-3 mg-bt">
                    <Link href="/authors-1">
                        <div className="media-images-box">
                            <div className="top-media">
                                <Image
                                    height={300}
                                    width={300}
                                    src={data.gallery[0]}
                                    alt="Image"
                                />
                                <Image
                                    height={300}
                                    width={300}
                                    src={data.gallery[1]}
                                    alt="Image"
                                />
                            </div>
                            <div className="bottom-media">
                                <Image
                                    height={300}
                                    width={300}
                                    src={data.gallery[2]}
                                    alt="Image"
                                />
                                <Image
                                    height={300}
                                    width={300}
                                    src={data.gallery[3]}
                                    alt="Image"
                                />
                                <Image
                                    height={300}
                                    width={300}
                                    src={data.gallery[4]}
                                    alt="Image"
                                />
                            </div>
                        </div>
                    </Link>
                    <div className="card-bottom">
                        <div className="author">
                            <div className="sc-author-box style-2">
                                <div className="author-avatar">
                                    <Image
                                        height={100}
                                        width={100}
                                        src={data.author.avatar}
                                        alt=""
                                        className="avatar"
                                    />
                                    <div className="badge">
                                        <i className="ripple" />
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <h4>
                                    <Link href="/authors-1">
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
                                {" "}
                                {data.hert + isHeartToggle}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
