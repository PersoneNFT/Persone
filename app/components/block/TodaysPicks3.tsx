import { product3 } from "@/data/product";
import ProductCard3 from "../card/ProductCard3";
import Link from "next/link";
import Image from "next/image";

export default function TodaysPicks3(): JSX.Element {
    return (
        <>
            <section className="tf-section">
                <div className="ibthemes-container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="tf-title pb-12">Today's Picks</h2>
                            <div className="heading-line s2" />
                        </div>
                        {product3.slice(0, 8).map((item) => (
                            <div
                                key={item.id}
                                className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                            >
                                <ProductCard3 data={item} />
                            </div>
                        ))}
                        <div className="col-md-12 wrap-inner load-more text-center mg-t-9">
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
            </section>
        </>
    );
}
