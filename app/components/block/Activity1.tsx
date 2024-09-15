import { activity1 } from "@/data/project";
import ActivityCard1 from "../card/ActivityCard1";
import SearchBox from "../element/SearchBox";
import Link from "next/link";

export default function Activity1(): JSX.Element {
    return (
        <>
            <section className="tf-activity s1 tf-section">
                <div className="ibthemes-container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-12">
                            {activity1.map((item) => (
                                <ActivityCard1 key={item.id} data={item} />
                            ))}

                            <div className="btn-activity mg-t-40 center">
                                <Link
                                    href="/authors-1"
                                    className="sc-button loadmore fl-button pri-3"
                                >
                                    <span>Load More</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div id="side-bar" className="side-bar style-2">
                                <SearchBox />
                                <div className="widget widget-filter style-2 mgbt-0">
                                    <h3 className="title-widget">Filter</h3>
                                    <ul className="box-check">
                                        <li>
                                            <a className="box-widget-filter">
                                                <i className="icon-fl-sort-filled" />
                                                Listings
                                            </a>
                                        </li>
                                        <li>
                                            <a className="box-widget-filter">
                                                <i className="icon-fl-heart-filled" />
                                                Like
                                            </a>
                                        </li>
                                        <li>
                                            <a className="box-widget-filter">
                                                <i className="icon-fl-buy" />
                                                Purchases
                                            </a>
                                        </li>
                                        <li>
                                            <a className="box-widget-filter">
                                                <i className="icon-fl-discount" />
                                                Sales
                                            </a>
                                        </li>
                                        <li>
                                            <a className="box-widget-filter">
                                                <i className="icon-fl-logout" />
                                                Transfer
                                            </a>
                                        </li>
                                        <li>
                                            <a className="box-widget-filter">
                                                <i className="icon-fl-star" />
                                                Burns
                                            </a>
                                        </li>
                                        <li>
                                            <a className="box-widget-filter">
                                                <i className="icon-fl-credit-card" />
                                                Bids
                                            </a>
                                        </li>
                                        <li>
                                            <a className="box-widget-filter">
                                                <i className="icon-fl-users-filled" />
                                                Followings
                                            </a>
                                        </li>
                                    </ul>
                                    <a className="clear-check btn-filter style-2">
                                        Clear All Filters
                                    </a>
                                </div>
                            </div>
                            {/*/.side-bar*/}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
