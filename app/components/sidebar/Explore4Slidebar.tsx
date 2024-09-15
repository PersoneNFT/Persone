"use client";
import { useState } from "react";
import { Collapse } from "react-collapse";

export default function Explore4Slidebar(): JSX.Element {
    const [getStatusCollapse, setStatusCollapse] = useState<boolean>(true);
    const [getCatCollapse, setCatCollapse] = useState<boolean>(true);
    const [getChainsCollapse, setChainsCollapse] = useState<boolean>(true);
    const [getCollectionsCollapse, setCollectionsCollapse] =
        useState<boolean>(true);

    const statusHandler = () => {
        setStatusCollapse(!getStatusCollapse);
    };

    const catHandler = () => {
        setCatCollapse(!getCatCollapse);
    };

    const chainsHandler = () => {
        setChainsCollapse(!getChainsCollapse);
    };

    const collectionsHandler = () => {
        setCollectionsCollapse(!getCollectionsCollapse);
    };

    return (
        <>
            <div id="side-bar" className="side-bar style-3">
                <div className="widget widget-category mgbt-24 boder-bt">
                    <div onClick={statusHandler} className="title-wg-category">
                        <h4 className="title-widget style-2">Status</h4>
                        <i className="icon-fl-down-2" />
                    </div>
                    <Collapse isOpened={getStatusCollapse}>
                        <div className="content-wg-category">
                            <form action="#">
                                <label>
                                    Buy Now
                                    <input type="checkbox" />
                                    <span className="btn-checkbox" />
                                </label>
                                <br />
                                <label>
                                    On Auctions
                                    <input type="checkbox" />
                                    <span className="btn-checkbox" />
                                </label>
                                <br />
                                <label className="mgbt-none">
                                    Has Offers
                                    <input type="checkbox" />
                                    <span className="btn-checkbox" />
                                </label>
                                <br />
                            </form>
                        </div>
                    </Collapse>
                </div>
                <div className="widget widget-category mgbt-24 boder-bt">
                    <div onClick={catHandler} className="title-wg-category">
                        <h4 className="title-widget style-2">Categories</h4>
                        <i className="icon-fl-down-2" />
                    </div>
                    <Collapse isOpened={getCatCollapse}>
                        <div className="content-wg-category">
                            <form action="#">
                                <label>
                                    Art
                                    <input type="checkbox" />
                                    <span className="btn-checkbox" />
                                </label>
                                <br />
                                <label>
                                    Music
                                    <input type="checkbox" />
                                    <span className="btn-checkbox" />
                                </label>
                                <br />
                                <label>
                                    Domain Names
                                    <input type="checkbox" />
                                    <span className="btn-checkbox" />
                                </label>
                                <br />
                                <label>
                                    Virtual Worlds
                                    <input type="checkbox" />
                                    <span className="btn-checkbox" />
                                </label>
                                <br />
                                <label>
                                    Trading Cards
                                    <input type="checkbox" />
                                    <span className="btn-checkbox" />
                                </label>
                                <br />
                                <label>
                                    Collectibles
                                    <input type="checkbox" />
                                    <span className="btn-checkbox" />
                                </label>
                                <br />
                                <label>
                                    Sports
                                    <input type="checkbox" />
                                    <span className="btn-checkbox" />
                                </label>
                                <br />
                                <label className="mgbt-none">
                                    Utility
                                    <input type="checkbox" />
                                    <span className="btn-checkbox" />
                                </label>
                                <br />
                            </form>
                        </div>
                    </Collapse>
                </div>
                <div className="widget widget-category mgbt-24 boder-bt">
                    <div onClick={chainsHandler} className="title-wg-category">
                        <h4 className="title-widget style-2">Chains</h4>
                        <i className="icon-fl-down-2" />
                    </div>
                    <Collapse isOpened={getChainsCollapse}>
                        <div className="content-wg-category">
                            <form action="#">
                                <label>
                                    Ethereum
                                    <input type="checkbox" />
                                    <span className="btn-checkbox" />
                                </label>
                                <br />
                                <label>
                                    Polygon
                                    <input type="checkbox" />
                                    <span className="btn-checkbox" />
                                </label>
                                <br />
                                <label className="mgbt-none">
                                    Klaytn
                                    <input type="checkbox" />
                                    <span className="btn-checkbox" />
                                </label>
                                <br />
                            </form>
                        </div>
                    </Collapse>
                </div>
                <div className="widget widget-category">
                    <div
                        onClick={collectionsHandler}
                        className="title-wg-category"
                    >
                        <h4 className="title-widget style-2">Collections</h4>
                        <i className="icon-fl-down-2" />
                    </div>
                    <Collapse isOpened={getCollectionsCollapse}>
                        <div className="content-wg-category">
                            <form action="#">
                                <label>
                                    Abstraction
                                    <input type="checkbox" />
                                    <span className="btn-checkbox" />
                                </label>
                                <br />
                                <label>
                                    Patternlicious
                                    <input type="checkbox" />
                                    <span className="btn-checkbox" />
                                </label>
                                <br />
                                <label>
                                    Skecthify
                                    <input type="checkbox" />
                                    <span className="btn-checkbox" />
                                </label>
                                <br />
                                <label>
                                    Cartoonism
                                    <input type="checkbox" />
                                    <span className="btn-checkbox" />
                                </label>
                                <br />
                                <label>
                                    Virtuland
                                    <input type="checkbox" />
                                    <span className="btn-checkbox" />
                                </label>
                                <br />
                                <label className="mgbt-none">
                                    Papercut
                                    <input type="checkbox" />
                                    <span className="btn-checkbox" />
                                </label>
                                <br />
                            </form>
                        </div>
                    </Collapse>
                </div>
            </div>
        </>
    );
}
