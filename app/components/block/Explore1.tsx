"use client";
import { product3 } from "@/data/product";
import ProductCard3 from "../card/ProductCard3";
import { useState } from "react";
import Dropdown1 from "../dropdown/Dropdown1";

export default function Explore1() {
    const [getItem, setItem] = useState<number>(8);

    // load more handler
    const loadMoreHandler = () => {
        if (product3.length > getItem) {
            setItem(getItem + 4);
        }
    };
    return (
        <>
            <div className="tf-section sc-explore-1">
                <div className="ibthemes-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="wrap-box explore-1 flex mg-bt-40">
                                <div className="seclect-box style-1">
                                    <Dropdown1
                                        id="item_category"
                                        defaultSelect="All categories"
                                        data={[
                                            "Art",
                                            "Music",
                                            "Domain Names",
                                            "Virtual World",
                                            "Trading Cards",
                                            "Sports",
                                            "Utility",
                                        ]}
                                    />
                                    <Dropdown1
                                        id="buy"
                                        defaultSelect="Buy Now"
                                        data={["On Auction", "Has Offers"]}
                                    />
                                    <Dropdown1
                                        id="all-items"
                                        defaultSelect="All Items"
                                        data={["Single Items", "Bundles"]}
                                    />
                                </div>
                                <div className="seclect-box style-2 box-right">
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
                                        data={[
                                            "Top rate",
                                            "Mid rate",
                                            "Low rate",
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                        {product3.slice(0, getItem).map((item) => (
                            <div
                                key={item.id}
                                className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                            >
                                <ProductCard3 data={item} />
                            </div>
                        ))}
                        {product3.length > getItem && (
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
