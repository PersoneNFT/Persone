export default function LiveAuctionModal(): JSX.Element {
    return (
        <>
            <div
                className="modal fade popup"
                id="popup_bid"
                tabIndex={-1}
                aria-labelledby="dialog"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <button
                            type="button"
                            className="close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                        <div className="modal-body space-y-20 pd-40">
                            <h3>Place a Bid</h3>
                            <p className="text-center">
                                You must bid at least
                                <span className="price color-popup">
                                    4.89 ETH
                                </span>
                            </p>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="00.00 ETH"
                            />
                            <p>
                                Enter quantity.
                                <span className="color-popup">5 available</span>
                            </p>
                            <input
                                type="text"
                                className="form-control quantity"
                                defaultValue={1}
                            />
                            <div className="hr" />
                            <div className="d-flex justify-content-between">
                                <p> You must bid at least:</p>
                                <p className="text-right price color-popup">
                                    4.89 ETH
                                </p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p> Service free:</p>
                                <p className="text-right price color-popup">
                                    0,89 ETH
                                </p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p> Total bid amount:</p>
                                <p className="text-right price color-popup">
                                    4 ETH
                                </p>
                            </div>
                            <a
                                className="btn btn-primary"
                                data-toggle="modal"
                                data-target="#popup_bid_success"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                Place a bid
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
