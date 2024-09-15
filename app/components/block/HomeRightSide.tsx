"use client";
import HomePageOptionBar from "@/app/components/bar/HomePageOptionBar";
import HomePageTab from "@/app/components/element/HomePageTab";
import ProductCard17 from "../card/ProductCard17";
import { product1 } from "@/data/product";
import ProductCard14 from "../card/ProductCard14";
import useStore from "@/store/home8state";
import Link from "next/link";

export default function HomeRightSide(): JSX.Element {
    const isGridOrList = useStore((state) => state.isGridOrList);
    const itemCurrentTab = useStore((state) => state.itemCurrentTab);

    const slicedProduct1 = product1.slice(
        itemCurrentTab === 0
            ? 0
            : itemCurrentTab === 1
            ? 3
            : itemCurrentTab === 2
            ? 2
            : itemCurrentTab === 3
            ? 5
            : itemCurrentTab,
        itemCurrentTab === 0
            ? 12
            : itemCurrentTab === 1
            ? 11
            : itemCurrentTab === 2
            ? 8
            : itemCurrentTab === 3
            ? 13
            : itemCurrentTab
    );
    const product1Length = slicedProduct1.length;

    return (
        <>
            <div className="ui-home-8__right">
                <div className="flat-tabs items">
                    <HomePageTab />
                    <div className="content-tab">
                        <div className="content-inner">
                            <HomePageOptionBar itemLength={product1Length} />
                            {/* gird item */}
                            <div
                                className="content-item ui-home8-content-item"
                                style={
                                    isGridOrList === "grid"
                                        ? { display: "flex" }
                                        : { display: "none" }
                                }
                            >
                                {slicedProduct1.map((item) => (
                                    <div key={item.id} className="col-item">
                                        <ProductCard14 data={item} />
                                    </div>
                                ))}
                            </div>
                            {/* list item */}
                            <div
                                className="content-item2 ui-item-list"
                                style={
                                    isGridOrList === "list"
                                        ? { display: "block", paddingLeft: 0 }
                                        : { display: "none" }
                                }
                            >
                                {slicedProduct1.map((item) => (
                                    <div key={item.id} className="col-item">
                                        <ProductCard17 data={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-auction item center">
                    <Link
                        href="/explore-1"
                        style={{ cursor: "pointer" }}
                        className="sc-button loadmore fl-button pri-3"
                    >
                        <span>Load More</span>
                    </Link>
                </div>
            </div>
        </>
    );
}
