"use client";
import { product1 } from "@/data/product";
import { useEffect, useState } from "react";
import Dropdown1 from "../dropdown/Dropdown1";
import ProductCard6 from "../card/ProductCard6";

const tabs: string[] = ["All", "Art", "Music", "Collectibles", "Sports"];

interface ItemState {
    start: number;
    end: number;
}

export default function Explore2() {
    const [getItem, setItem] = useState<ItemState>({
        start: 0,
        end: 8,
    });
    const [getCurrentTab, setCurrentTab] = useState<string>("All");

    // load more handler
    const loadMoreHandler = () => {
        if (product1.length > getItem.end) {
            setItem({
                start: 0,
                end: getItem.end + 4,
            });
        }
    };

    // tab filter
    useEffect(() => {
        if (getCurrentTab === "All") {
            setItem({
                start: 0,
                end: 8,
            });
        } else if (getCurrentTab === "Art") {
            setItem({
                start: 4,
                end: 8,
            });
        } else if (getCurrentTab === "Music") {
            setItem({
                start: 8,
                end: 12,
            });
        } else if (getCurrentTab === "Collectibles") {
            setItem({
                start: 6,
                end: 12,
            });
        } else if (getCurrentTab === "Sports") {
            setItem({
                start: 10,
                end: 14,
            });
        }
    }, [getCurrentTab, setItem]);

    // tab handler
    const tabHandler = (select: string) => {
        setCurrentTab(select);
    };
    return (
        <>
            <div className="tf-section sc-explore-2">
                <div className="ibthemes-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="seclect-box style3">
                                <Dropdown1
                                    id="artworks"
                                    defaultSelect="All Artworks"
                                    data={[
                                        "Abstraction",
                                        "Skecthify",
                                        "Patternlicious",
                                        "Virtuland",
                                        "Virtuland",
                                        "Papercut",
                                    ]}
                                />
                                <Dropdown1
                                    id="sort-by"
                                    defaultSelect="Sort by"
                                    data={["Top rate", "Mid rate", "Low rate"]}
                                />
                            </div>
                            <div className="flat-tabs explore-tab">
                                <ul className="menu-tab">
                                    {tabs.map((tab, index) => (
                                        <li
                                            onClick={() => tabHandler(tab)}
                                            key={index}
                                            className={`item-title ${
                                                tab === getCurrentTab
                                                    ? "active"
                                                    : ""
                                            }`}
                                        >
                                            <span className="inner">{tab}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="content-tab mg-t-40">
                                    <div className="row">
                                        {product1
                                            .slice(getItem.start, getItem.end)
                                            .map((item) => (
                                                <div
                                                    key={item.id}
                                                    className="col-xl-3 col-lg-4 col-md-6 col-12"
                                                >
                                                    <ProductCard6 data={item} />
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {product1.length > getItem.end && (
                            <div className="col-md-12 wrap-inner load-more text-center">
                                <button
                                    onClick={loadMoreHandler}
                                    id="loadmore"
                                    className="sc-button loadmore fl-button pri-3"
                                >
                                    <span>Load More</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
