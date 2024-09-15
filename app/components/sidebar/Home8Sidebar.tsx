"use client";
import { category, currencies, fileType } from "@/data/home8";
import { useState } from "react";
import { Collapse } from "react-collapse";
import PriceRange from "../element/PriceRange";

export default function Home8Sidebar(): JSX.Element {
    const [isCategoryCollapseActive, setCategoryCollapseActive] =
        useState<boolean>(true);
    const [isFileTypeCollapseActive, setFileTypeCollapseActive] =
        useState<boolean>(true);
    const [isCurrenciesCollapseActive, setCurrenciesCollapseActive] =
        useState<boolean>(true);

    // category collapse handler
    const categoryCollapse = () => {
        setCategoryCollapseActive(!isCategoryCollapseActive);
    };

    // file type collapse handler
    const fileTypeCollapse = () => {
        setFileTypeCollapseActive(!isFileTypeCollapseActive);
    };

    // currencies collapse handler
    const currenciesCollapse = () => {
        setCurrenciesCollapseActive(!isCurrenciesCollapseActive);
    };

    return (
        <>
            <div id="side-bar" className="side-bar style-3 item ui-home-8_left">
                <div className="widget widget-filter style-1 mgbt-0">
                    <div className="header-widget-filter">
                        <h4 className="title-widget">Filter</h4>
                        <a className="clear-checkbox btn-filter style-2">
                            Reset
                        </a>
                    </div>
                </div>
                <div className="divider" />
                <div className="wrap-category">
                    <div className="widget widget-category boder-bt">
                        <div
                            onClick={categoryCollapse}
                            className="title-wg-category"
                        >
                            <h5 className="title-widget style-2">Categories</h5>
                            <i className="far fa-chevron-up" />
                        </div>
                        <Collapse isOpened={isCategoryCollapseActive}>
                            <div className="content-wg-category">
                                <form action="#" className="form-checkbox">
                                    {category.map((item) => (
                                        <div key={item.id}>
                                            <label>
                                                <span>{item.name}</span>
                                                <span className="pst-re">
                                                    <input
                                                        type="checkbox"
                                                        defaultChecked={
                                                            item.isSelected ||
                                                            false
                                                        }
                                                    />
                                                    <span className="btn-checkbox" />
                                                </span>
                                            </label>
                                            <br />
                                        </div>
                                    ))}
                                </form>
                            </div>
                        </Collapse>
                    </div>
                    <div className="widget widget-category style2 boder-bt">
                        <div
                            onClick={fileTypeCollapse}
                            className="title-wg-category"
                        >
                            <h5 className="title-widget style-2">File Types</h5>
                            <i className="far fa-chevron-up" />
                        </div>
                        <Collapse isOpened={isFileTypeCollapseActive}>
                            <div className="content-wg-category">
                                <form action="#" className="form-checkbox">
                                    {fileType.map((item) => (
                                        <div key={item.id}>
                                            <label>
                                                <span>{item.name}</span>
                                                <span className="pst-re">
                                                    <input
                                                        type="checkbox"
                                                        defaultChecked={
                                                            item.isSelected ||
                                                            false
                                                        }
                                                    />
                                                    <span className="btn-checkbox" />
                                                </span>
                                            </label>
                                            <br />
                                        </div>
                                    ))}
                                </form>
                            </div>
                        </Collapse>
                    </div>
                    <div className="widget widget-category boder-bt">
                        <div
                            onClick={currenciesCollapse}
                            className="title-wg-category"
                        >
                            <h5 className="title-widget style-2">Currencies</h5>
                            <i className="far fa-chevron-up" />
                        </div>
                        <Collapse isOpened={isCurrenciesCollapseActive}>
                            <div className="content-wg-category">
                                <form action="#" className="form-checkbox">
                                    {currencies.map((item) => (
                                        <div key={item.id}>
                                            <label>
                                                <span>{item.name}</span>
                                                <span className="pst-re">
                                                    <input
                                                        type="checkbox"
                                                        defaultChecked={
                                                            item.isSelected ||
                                                            false
                                                        }
                                                    />
                                                    <span className="btn-checkbox" />
                                                </span>
                                            </label>
                                            <br />
                                        </div>
                                    ))}
                                </form>
                            </div>
                        </Collapse>
                    </div>
                    <div className="widget widget-category style3">
                        <div className="title-wg-category">
                            <h5 className="title-widget style-2">
                                Price Range
                            </h5>
                        </div>
                        <PriceRange />
                    </div>
                </div>
            </div>
        </>
    );
}
