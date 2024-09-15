"use client";
import { product1 } from "@/data/product";
import ProductCard9 from "../card/ProductCard9";
import { useState, ChangeEvent } from "react";

const tabs: {
    name: string;
    icon: JSX.Element;
}[] = [
    {
        name: "Fixed Price",
        icon: <span className="icon-fl-tag" />,
    },
    {
        name: "Time Auctions",
        icon: <span className="icon-fl-clock" />,
    },
    {
        name: "Open For Bids",
        icon: <span className="icon-fl-icon-22" />,
    },
];

// Example of collections data
const collections = ["Art", "Music", "Virtual World"];

export default function CreateItem(): JSX.Element {
    const [getCurrentTab, setCurrentTab] = useState<number>(0);
    const [isShow, setShow] = useState<boolean>(false);
    const [getImage, setImage] = useState<null | File>(null);
    const [selectedCollection, setSelectedCollection] = useState<string>("");
    const [isCreatingNewCollection, setIsCreatingNewCollection] = useState<boolean>(collections.length === 0);

    // tab handler
    const tabHandler = (select: number) => {
        setCurrentTab(select);
    };

    // abstraction dropdown handler
    const abstractionHoverHandler = () => {
        setShow(true);
    };

    const abstractionLeaveHandler = () => {
        setShow(false);
    };

    // upload handler
    const uploadHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        const file: File | null = e.target.files?.[0] || null;
        setImage(file);
    };

    // collection handler
    const collectionHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCollection(e.target.value);
    };

    // handle "Create New Collection" button
    const handleCreateNewCollection = () => {
        setIsCreatingNewCollection(true);
    };

    return (
        <>
            <div className="tf-create-item tf-section">
                <div className="ibthemes-container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                            <h4 className="title-create-item">Preview item</h4>
                            <ProductCard9 data={product1[0]} />
                        </div>
                        <div className="col-xl-9 col-lg-6 col-md-12 col-12">
                            <div className="form-create-item">
                                <form action="#">
                                    <h4 className="title-create-item">
                                        Upload file
                                    </h4>
                                    <label className="uploadFile">
                                        <span className="filename">
                                            {getImage !== null
                                                ? getImage?.name
                                                : `PNG, JPG, GIF, WEBP or MP4. Max
                                            200mb.`}
                                        </span>
                                        <input
                                            type="file"
                                            className="inputfile form-control"
                                            name="file"
                                            onChange={uploadHandler}
                                        />
                                    </label>

                                    <h4 className="title-create-item">Select Collection</h4>
                                    {isCreatingNewCollection ? (
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Enter new collection name"
                                                className="form-control"
                                            />
                                        </div>
                                    ) : (
                                        <div className="select-box">
                                            <select
                                                value={selectedCollection}
                                                onChange={collectionHandler}
                                                className="form-control"
                                            >
                                                <option value="">
                                                    Select Collection
                                                </option>
                                                {collections.map((collection, index) => (
                                                    <option key={index} value={collection}>
                                                        {collection}
                                                    </option>
                                                ))}
                                            </select>
                                            <button
                                                type="button"
                                                className="btn btn-secondary mt-2"
                                                onClick={handleCreateNewCollection}
                                            >
                                                Create New Collection
                                            </button>
                                        </div>
                                    )}

                                    <div className="flat-tabs tab-create-item">
                                        <h4 className="title-create-item">
                                            Select method
                                        </h4>
                                        <ul className="menu-tab tabs">
                                            {tabs.map((tab, index) => (
                                                <li
                                                    key={index}
                                                    onClick={() =>
                                                        tabHandler(index)
                                                    }
                                                    className={`tablinks ${
                                                        index === getCurrentTab
                                                            ? "active"
                                                            : ""
                                                    }`}
                                                >
                                                    {tab.icon}
                                                    {tab.name}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="content-tab">
                                            {getCurrentTab === 0 && (
                                                <div className="content-inner">
                                                    <form action="#">
                                                        <h4 className="title-create-item">
                                                            Price
                                                        </h4>
                                                        <input
                                                            type="text"
                                                            placeholder="Enter price for one item (ETH)"
                                                        />
                                                        <h4 className="title-create-item">
                                                            Title
                                                        </h4>
                                                        <input
                                                            type="text"
                                                            placeholder="Item Name"
                                                        />
                                                        <h4 className="title-create-item">
                                                            Description
                                                        </h4>
                                                        <textarea
                                                            placeholder="e.g. “This is very limited item”"
                                                            defaultValue={""}
                                                        />
                                                        <div className="row-form style-3">
                                                            <div className="inner-row-form">
                                                                <h4 className="title-create-item">
                                                                    Royalties
                                                                </h4>
                                                                <input
                                                                    type="text"
                                                                    placeholder="5%"
                                                                />
                                                            </div>
                                                            <div className="inner-row-form">
                                                                <h4 className="title-create-item">
                                                                    Size
                                                                </h4>
                                                                <input
                                                                    type="text"
                                                                    placeholder="e.g. “size”"
                                                                />
                                                            </div>
                                                            <div className="inner-row-form style-2">
                                                                <div className="seclect-box">
                                                                    <div
                                                                        onMouseOver={
                                                                            abstractionHoverHandler
                                                                        }
                                                                        onMouseLeave={
                                                                            abstractionLeaveHandler
                                                                        }
                                                                        id="item-create"
                                                                        className="dropdown"
                                                                    >
                                                                        <a
                                                                            style={{
                                                                                cursor: "pointer",
                                                                            }}
                                                                            className="btn-selector nolink"
                                                                        >
                                                                            Abstraction
                                                                        </a>
                                                                        <ul
                                                                            className={
                                                                                isShow
                                                                                    ? "show"
                                                                                    : ""
                                                                            }
                                                                            style={
                                                                                !isShow
                                                                                    ? {
                                                                                          display:
                                                                                              "none",
                                                                                      }
                                                                                    : {
                                                                                          display:
                                                                                              "block",
                                                                                      }
                                                                            }
                                                                        >
                                                                            <li>
                                                                                <span>
                                                                                    Art
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span>
                                                                                    Music
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span>
                                                                                    Domain
                                                                                    Names
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span>
                                                                                    Virtual
                                                                                    World
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span>
                                                                                    Trading
                                                                                    Cards
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span>
                                                                                    Sports
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span>
                                                                                    Utility
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            )}
                                            {getCurrentTab === 1 && (
                                                <div className="content-inner">
                                                    <form action="#">
                                                        <h4 className="title-create-item">
                                                            Minimum bid
                                                        </h4>
                                                        <input
                                                            type="text"
                                                            placeholder="enter minimum bid"
                                                        />
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <h5 className="title-create-item">
                                                                    Starting date
                                                                </h5>
                                                                <input
                                                                    type="date"
                                                                    name="bid_starting_date"
                                                                    id="bid_starting_date"
                                                                    className="form-control"
                                                                    min="1997-01-01"
                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h4 className="title-create-item">
                                                                    Expiration date
                                                                </h4>
                                                                <input
                                                                    type="date"
                                                                    name="bid_expiration_date"
                                                                    id="bid_expiration_date"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                        </div>
                                                        <h4 className="title-create-item">
                                                            Title
                                                        </h4>
                                                        <input
                                                            type="text"
                                                            placeholder="Item Name"
                                                        />
                                                        <h4 className="title-create-item">
                                                            Description
                                                        </h4>
                                                        <textarea
                                                            placeholder="e.g. “This is very limited item”"
                                                            defaultValue={""}
                                                        />
                                                    </form>
                                                </div>
                                            )}
                                            {getCurrentTab === 2 && (
                                                <div className="content-inner">
                                                    <form action="#">
                                                        <h4 className="title-create-item">
                                                            Price
                                                        </h4>
                                                        <input
                                                            type="text"
                                                            placeholder="Enter price for one item (ETH)"
                                                        />
                                                        <h4 className="title-create-item">
                                                            Minimum bid
                                                        </h4>
                                                        <input
                                                            type="text"
                                                            placeholder="enter minimum bid"
                                                        />
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <h5 className="title-create-item">
                                                                    Starting date
                                                                </h5>
                                                                <input
                                                                    type="date"
                                                                    name="bid_starting_date"
                                                                    id="bid_starting_date2"
                                                                    className="form-control"
                                                                    min="1997-01-01"
                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <h4 className="title-create-item">
                                                                    Expiration date
                                                                </h4>
                                                                <input
                                                                    type="date"
                                                                    name="bid_expiration_date"
                                                                    id="bid_expiration_date2"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                        </div>
                                                        <h4 className="title-create-item">
                                                            Title
                                                        </h4>
                                                        <input
                                                            type="text"
                                                            placeholder="Item Name"
                                                        />
                                                        <h4 className="title-create-item">
                                                            Description
                                                        </h4>
                                                        <textarea
                                                            placeholder="e.g. “This is very limited item”"
                                                            defaultValue={""}
                                                        />
                                                    </form>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
