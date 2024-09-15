import { product5 } from "@/data/product";
import ProductCard8 from "../card/ProductCard8";
import Link from "next/link";

export default function OurCreator(): JSX.Element {
    return (
        <>
            <section className="tf-section dark-style2">
                <div className="ibthemes-container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="tf-title style4 mg-bt-38">
                                Our Creator
                            </h2>
                        </div>
                        {product5.map((item) => (
                            <div
                                key={item.id}
                                className="col-lg-4 col-md-6 col-12"
                            >
                                <ProductCard8 data={item} />
                            </div>
                        ))}
                        <div className="col-md-12 wrap-inner load-more mg-t-10 text-center">
                            <Link
                                href="/authors-1"
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
