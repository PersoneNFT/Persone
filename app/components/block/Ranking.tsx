import { product6 } from "@/data/product";
import CollectionListCard from "../card/CollectionListCard";
import Link from "next/link";

export default function Ranking(): JSX.Element {
    return (
        <>
            <section className="tf-section tf-rank">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-ranking">
                                <div className="flex th-title">
                                    <div className="column1">
                                        <h3>Collection</h3>
                                    </div>
                                    <div className="column">
                                        <h3>Volume</h3>
                                    </div>
                                    <div className="column">
                                        <h3>24h %</h3>
                                    </div>
                                    <div className="column">
                                        <h3>7d %</h3>
                                    </div>
                                    <div className="column">
                                        <h3>Floor Price</h3>
                                    </div>
                                    <div className="column">
                                        <h3>Owners</h3>
                                    </div>
                                    <div className="column">
                                        <h3>Assets</h3>
                                    </div>
                                </div>
                                {product6.map((item) => (
                                    <CollectionListCard
                                        key={item.id}
                                        data={item}
                                    />
                                ))}
                            </div>
                            <div className="col-md-12 wrap-inner load-more text-center mg-t16">
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
                </div>
            </section>
        </>
    );
}
