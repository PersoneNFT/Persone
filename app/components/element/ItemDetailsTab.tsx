"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const tabs: string[] = ["Bid History", "Info", "Provenance"];

export default function ItemDetailsTab(): JSX.Element {
    const [getCurrentTab, setCurrentTab] = useState<number>(0);

    // tab handler
    const tabHandler = (select: number) => {
        setCurrentTab(select);
    };

    return (
        <>
            <div className="flat-tabs themesflat-tabs">
                <ul className="menu-tab tab-title">
                    {tabs.map((item, index) => (
                        <li
                            onClick={() => tabHandler(index)}
                            key={index}
                            className={`item-title ${
                                index === getCurrentTab ? "active" : ""
                            }`}
                        >
                            <span className="inner">{item}</span>
                        </li>
                    ))}
                </ul>
                <div className="content-tab">
                    {getCurrentTab === 0 && (
                        <div className="content-inner tab-content">
                            <ul className="bid-history-list">
                                <li>
                                    <div className="content">
                                        <div className="client">
                                            <div className="sc-author-box style-2">
                                                <div className="author-avatar">
                                                    <a>
                                                        <Image
                                                            height={100}
                                                            width={100}
                                                            src="/assets/images/avatar/avt-3.jpg"
                                                            alt=""
                                                            className="avatar"
                                                        />
                                                    </a>
                                                    <div className="badge" />
                                                </div>
                                                <div className="author-infor">
                                                    <div className="name">
                                                        <h6>
                                                            <Link href="/authors-2">
                                                                Mason Woodward
                                                            </Link>
                                                        </h6>
                                                        <span>place a bid</span>
                                                    </div>
                                                    <span className="time">
                                                        8 hours ago
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="price">
                                            <h5>4.89 ETH</h5>
                                            <span>= $12.246</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <div className="client">
                                            <div className="sc-author-box style-2">
                                                <div className="author-avatar">
                                                    <a>
                                                        <Image
                                                            height={100}
                                                            width={100}
                                                            src="/assets/images/avatar/avt-11.jpg"
                                                            alt=""
                                                            className="avatar"
                                                        />
                                                    </a>
                                                    <div className="badge" />
                                                </div>
                                                <div className="author-infor">
                                                    <div className="name">
                                                        <h6>
                                                            <Link href="/authors-2">
                                                                Mason Woodward
                                                            </Link>
                                                        </h6>
                                                        <span>
                                                            bid accepted
                                                        </span>
                                                    </div>
                                                    <span className="time">
                                                        at 06/10/2021, 3:20 AM
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="price">
                                            <h5>4.89 ETH</h5>
                                            <span>= $12.246</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <div className="client">
                                            <div className="sc-author-box style-2">
                                                <div className="author-avatar">
                                                    <a>
                                                        <Image
                                                            height={100}
                                                            width={100}
                                                            src="/assets/images/avatar/avt-1.jpg"
                                                            alt=""
                                                            className="avatar"
                                                        />
                                                    </a>
                                                    <div className="badge" />
                                                </div>
                                                <div className="author-infor">
                                                    <div className="name">
                                                        <h6>
                                                            <Link href="/authors-2">
                                                                Mason Woodward
                                                            </Link>
                                                        </h6>
                                                        <span>place a bid</span>
                                                    </div>
                                                    <span className="time">
                                                        8 hours ago
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="price">
                                            <h5>4.89 ETH</h5>
                                            <span>= $12.246</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <div className="client">
                                            <div className="sc-author-box style-2">
                                                <div className="author-avatar">
                                                    <a>
                                                        <Image
                                                            height={100}
                                                            width={100}
                                                            src="/assets/images/avatar/avt-5.jpg"
                                                            alt=""
                                                            className="avatar"
                                                        />
                                                    </a>
                                                    <div className="badge" />
                                                </div>
                                                <div className="author-infor">
                                                    <div className="name">
                                                        <h6>
                                                            <Link href="/authors-2">
                                                                Mason Woodward
                                                            </Link>
                                                        </h6>
                                                        <span>place a bid</span>
                                                    </div>
                                                    <span className="time">
                                                        8 hours ago
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="price">
                                            <h5>4.89 ETH</h5>
                                            <span>= $12.246</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <div className="client">
                                            <div className="sc-author-box style-2">
                                                <div className="author-avatar">
                                                    <a>
                                                        <Image
                                                            height={100}
                                                            width={100}
                                                            src="/assets/images/avatar/avt-7.jpg"
                                                            alt=""
                                                            className="avatar"
                                                        />
                                                    </a>
                                                    <div className="badge" />
                                                </div>
                                                <div className="author-infor">
                                                    <div className="name">
                                                        <h6>
                                                            <Link href="/authors-2">
                                                                Mason Woodward
                                                            </Link>
                                                        </h6>
                                                        <span>place a bid</span>
                                                    </div>
                                                    <span className="time">
                                                        8 hours ago
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="price">
                                            <h5>4.89 ETH</h5>
                                            <span>= $12.246</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <div className="client">
                                            <div className="sc-author-box style-2">
                                                <div className="author-avatar">
                                                    <a>
                                                        <Image
                                                            height={100}
                                                            width={100}
                                                            src="/assets/images/avatar/avt-8.jpg"
                                                            alt=""
                                                            className="avatar"
                                                        />
                                                    </a>
                                                    <div className="badge" />
                                                </div>
                                                <div className="author-infor">
                                                    <div className="name">
                                                        <h6>
                                                            <Link href="/authors-2">
                                                                Mason Woodward
                                                            </Link>
                                                        </h6>
                                                        <span>place a bid</span>
                                                    </div>
                                                    <span className="time">
                                                        8 hours ago
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="price">
                                            <h5>4.89 ETH</h5>
                                            <span>= $12.246</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )}

                    {getCurrentTab === 1 && (
                        <div className="content-inner tab-content">
                            <ul className="bid-history-list">
                                <li>
                                    <div className="content">
                                        <div className="client">
                                            <div className="sc-author-box style-2">
                                                <div className="author-avatar">
                                                    <a>
                                                        <Image
                                                            height={100}
                                                            width={100}
                                                            src="/assets/images/avatar/avt-3.jpg"
                                                            alt=""
                                                            className="avatar"
                                                        />
                                                    </a>
                                                    <div className="badge" />
                                                </div>
                                                <div className="author-infor">
                                                    <div className="name">
                                                        <h6>
                                                            <Link href="/authors-2">
                                                                Mason Woodward
                                                            </Link>
                                                        </h6>
                                                        <span>place a bid</span>
                                                    </div>
                                                    <span className="time">
                                                        8 hours ago
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )}

                    {getCurrentTab === 2 && (
                        <div className="content-inner tab-content">
                            <div className="provenance">
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not only five centuries, but also
                                    the leap into electronic typesetting,
                                    remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop
                                    publishing software like Aldus PageMaker
                                    including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
