"use client";
import { product1 } from "@/data/product";
import ProductCard1 from "../card/ProductCard1";
import FilterSection from "../element/FilterSection";
import Link from "next/link";

export default function LiveAuction4(): JSX.Element {
    return (
        <>
            <section className="tf-auction tf-section">
                <div className="ibthemes-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="top">
                                <h2 className="tf-title-heading style-1 ct">
                                    Live Auctions
                                </h2>
                            </div>
                        </div>
                        <FilterSection />
                        {product1.slice(0, 8).map((item) => (
                            <div
                                key={item.id}
                                className="col-xl-3 col-lg-6 col-md-6 col-12"
                            >
                                <ProductCard1 data={item} />
                            </div>
                        ))}
                        <div className="col-12">
                            <div className="btn-auction center">
                                <Link
                                    href="/explore-2"
                                    id="loadmore"
                                    className="sc-button loadmore fl-button pri-3"
                                >
                                    <span>Load More</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
