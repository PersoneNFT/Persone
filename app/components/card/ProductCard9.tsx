"use client";
import Image from "next/image";
import Link from "next/link";
import Countdown from "react-countdown";

export default function ProductCard9({ data }: any): JSX.Element {
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
                    <button className="wishlist-button heart">
                        <span className="number-like"> {data.hert}</span>
                    </button>
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
                <div className="card-title">
                    <h5>
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
                <div className="card-bottom">
                    <a
                        data-bs-toggle="modal"
                        data-bs-target="#popup_bid"
                        className="sc-button style bag fl-button pri-3"
                    >
                        <span>Place Bid</span>
                    </a>
                    <Link href="/activity-1" className="view-history reload">
                        View History
                    </Link>
                </div>
            </div>
        </>
    );
}
