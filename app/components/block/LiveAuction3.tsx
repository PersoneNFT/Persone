import LiveAuctionElement from "../element/LiveAuctionElement";

export default function LiveAuction3(): JSX.Element {
    return (
        <>
            <section className="tf-section live-auctions mobie-style">
                <div className="ibthemes-container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="tf-title">Live Auctions</h2>
                            <div className="heading-line" />
                        </div>
                        <LiveAuctionElement />
                    </div>
                </div>
            </section>
        </>
    );
}
