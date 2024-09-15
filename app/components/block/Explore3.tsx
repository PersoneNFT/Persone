import TodaysPicksElement from "../element/TodaysPicksElement";

export default function Explore3(): JSX.Element {
    return (
        <>
            <section className="tf-explore-2 tf-section">
                <div className="ibthemes-container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="tf-title-heading ct style-2 mg-bt-13">
                                NFTs Marketplace
                            </h2>
                            <p className="sub-title ct small mg-bt-20 pad-420">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Laborum obcaecati dignissimos
                                quae quo ad iste ipsum officiis deleniti
                                asperiores sit.
                            </p>
                            <div className="swiper-container pd-t-20 carousel auctions show-shadow">
                                <TodaysPicksElement />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
