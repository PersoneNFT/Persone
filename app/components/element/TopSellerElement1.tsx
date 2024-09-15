"use client";
import { author } from "@/data/author";
import AuthorCard3 from "../card/AuthorCard3";
import { useState } from "react";

const date = ["1 Day", "1 Week", "1 Month"];

export default function TopSellerElement1(): JSX.Element {
    const [getDate1, setDate1] = useState<number>(0);

    // date select handler
    const dateHandler1 = (select: number) => {
        setDate1(select);
    };
    return (
        <>
            <h2
                className="style2 mb-25 text-left"
                style={{ paddingBottom: "25px" }}
            >
                Top Sellers
            </h2>
            <div className="flat-tabs seller-tab tablet-30">
                <ul className="menu-tab">
                    {date.map((item, index) => (
                        <li
                            onClick={() => dateHandler1(index)}
                            key={index}
                            className={`item-title ${
                                index === getDate1 ? "active" : ""
                            }`}
                        >
                            <span className="inner">{item}</span>
                        </li>
                    ))}
                </ul>
                <div className="content-tab mg-t-24">
                    <div className="content-inner active">
                        <div className="tf-box" style={{ columnGap: "26px" }}>
                            {author
                                .slice(
                                    0,
                                    getDate1 === 0
                                        ? 8
                                        : getDate1 === 1
                                        ? 6
                                        : getDate1 === 2
                                        ? 4
                                        : 8
                                )
                                .map((item) => (
                                    <AuthorCard3 key={item.id} data={item} />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
