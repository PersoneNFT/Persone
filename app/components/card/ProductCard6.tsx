"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface Props {
    data: {
        id: number;
        hert: number;
        status: string;
        img: string;
        auction: number;
        title: string;
        tag: string;
        eth: number;
        author: { status: string; name: string; avatar: string };
        history?: boolean;
    };
}

export default function ProductCard6({ data }: Props): JSX.Element {
    const [isHeartToggle, setHeartToggle] = useState<number>(0);
    const pathname = usePathname();

    // heart toggle
    const heartToggle = () => {
        if (isHeartToggle === 0) {
            return setHeartToggle(1);
        }
        setHeartToggle(0);
    };

    return (
        <>
            <div className="sc-card-product explode style2 mg-bt">
                <div className="card-media">
                    <Link href="/item-details-1">
                        <Image
                            height={500}
                            width={500}
                            src={data.img}
                            alt="Image"
                        />
                    </Link>
                    <div className="button-place-bid">
                        <a
                            data-bs-toggle="modal"
                            data-bs-target="#popup_bid"
                            className="sc-button style-place-bid style bag fl-button pri-3"
                        >
                            <span>Place Bid</span>
                        </a>
                    </div>
                    {data.status !== "" && (
                        <div className="coming-soon">coming soon</div>
                    )}
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
                    <h5>
                        <Link href="/item-details-1">{data.title}</Link>
                    </h5>
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
                    <div className="tags">{data.tag}</div>
                </div>
                <div className="card-bottom style-explode">
                    <div className="price">
                        <span>Current Bid</span>
                        <div className="price-details">
                            <h5>{data.eth} ETH</h5>
                            <span>= $12.246</span>
                        </div>
                    </div>
                    {pathname === "/home-2" || data.history ? (
                        <Link
                            href="/activity-1"
                            className="view-history reload"
                        >
                            View History
                        </Link>
                    ) : undefined}
                </div>
            </div>
        </>
    );
}
