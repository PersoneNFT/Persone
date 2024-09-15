import Link from "next/link";
import LiveAuctionElement from "../element/LiveAuctionElement";

export default function LiveAuction(): JSX.Element {
    return (
        <>
            <section className="tf-section live-auctions style1 pad-b-54 mobie-style">
                <div className="ibthemes-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-live-auctions">
                                <h2 className="tf-title pb-18">
                                    Live Auctions
                                </h2>
                                <Link href="/explore-2" className="exp style2">
                                    EXPLORE MORE
                                </Link>
                            </div>
                        </div>
                        <LiveAuctionElement />
                    </div>
                </div>
            </section>
        </>
    );
}
