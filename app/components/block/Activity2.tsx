import { activity2 } from "@/data/project";
import ActivityCard2 from "../card/ActivityCard2";
import SearchBox from "../element/SearchBox";
import Link from "next/link";

export default function Activity2(): JSX.Element {
    return (
        <>
            <section className="tf-activity tf-section">
                <div className="ibthemes-container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-9 col-md-8 col-12">
                            <div className="box-activity">
                                {activity2.map((item) => (
                                    <ActivityCard2 key={item.id} data={item} />
                                ))}
                            </div>
                            <div className="btn-activity mg-t-10 center">
                                <Link
                                    href="/authors-1"
                                    className="sc-button loadmore fl-button pri-3"
                                >
                                    <span>Load More</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-3 col-md-4 col-12">
                            <div id="side-bar" className="side-bar style-2">
                                <SearchBox />
                                <div className="widget widget-filter style-1 mgbt-0">
                                    <form action="#" className="form-checkbox">
                                        <label>
                                            Listings
                                            <input type="checkbox" />
                                            <span className="btn-checkbox" />
                                        </label>
                                        <br />
                                        <label>
                                            Purchases
                                            <input type="checkbox" />
                                            <span className="btn-checkbox" />
                                        </label>
                                        <br />
                                        <label>
                                            Sales
                                            <input type="checkbox" />
                                            <span className="btn-checkbox" />
                                        </label>
                                        <br />
                                        <label>
                                            Transfers
                                            <input type="checkbox" />
                                            <span className="btn-checkbox" />
                                        </label>
                                        <br />
                                        <label>
                                            Bids
                                            <input type="checkbox" />
                                            <span className="btn-checkbox" />
                                        </label>
                                        <br />
                                        <label>
                                            Likes
                                            <input type="checkbox" />
                                            <span className="btn-checkbox" />
                                        </label>
                                        <br />
                                        <label>
                                            Following
                                            <input type="checkbox" />
                                            <span className="btn-checkbox" />
                                        </label>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
