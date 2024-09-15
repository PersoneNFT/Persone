"use client";
import Image from "next/image";
import { useState } from "react";

// category data
const categories: {
    id: number;
    img: string;
    title: string;
}[] = [
    {
        id: 1,
        img: "/assets/images/icon/menu.png",
        title: "All",
    },
    {
        id: 2,
        img: "/assets/images/icon/rainbow.png",
        title: "Art",
    },
    {
        id: 3,
        img: "/assets/images/icon/photo.png",
        title: "Music",
    },
    {
        id: 4,
        img: "/assets/images/icon/itunes.png",
        title: "Photography",
    },
];

const price: string[] = ["Low To High", "High to Low"];
const sale: string[] = [
    "Timed auction",
    "Fixed price",
    "Not for sale",
    "Open for offers",
];

const blcokchain: string[] = ["Ethereum", "Flow", "Tezos"];

const sort: string[] = [
    "Recently added",
    "Price: Low to High",
    "Price: High to Low",
    "Auction ending soon",
];

export default function FilterSection() {
    const [getCategorySelect, setCategorySelect] = useState<number>(1);
    const [getPriceSelect, setPriceSelect] = useState<number>(0);
    const [getSaleSelect, setSaleSelect] = useState<number>(0);
    const [getBlcokchainSelect, setBlcokchainSelect] = useState<number>(0);
    const [getSortSelect, setSortSelect] = useState<number>(0);

    // category handler
    const categoryHandler = (select: number) => {
        setCategorySelect(select);
    };

    // price handler
    const priceHandler = (select: number) => {
        setPriceSelect(select);
    };

    // sale handler
    const saleHandler = (select: number) => {
        setSaleSelect(select);
    };

    // blcokchain handler
    const blcokchainHandler = (select: number) => {
        setBlcokchainSelect(select);
    };

    // sort handler
    const sortHandler = (select: number) => {
        setSortSelect(select);
    };

    return (
        <>
            <div className="col-md-12">
                <div className="tf-soft">
                    <div className="soft-left">
                        <div className="dropdown">
                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span className="inner">Category</span>
                            </button>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                            >
                                {categories.map((item) => (
                                    <a
                                        onClick={() => categoryHandler(item.id)}
                                        key={item.id}
                                        className="dropdown-item"
                                    >
                                        <div
                                            className={`sort-filter ${
                                                item.id === getCategorySelect
                                                    ? "active"
                                                    : ""
                                            }`}
                                        >
                                            <span>
                                                <Image
                                                    height={25}
                                                    width={25}
                                                    src={item.img}
                                                    alt=""
                                                />{" "}
                                                {item.title}
                                            </span>
                                            <i className="fal fa-check" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="dropdown">
                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12 6V18"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span className="inner">Price range</span>
                            </button>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                            >
                                {price.map((item, i) => (
                                    <a
                                        key={i}
                                        onClick={() => priceHandler(i)}
                                        className="dropdown-item"
                                    >
                                        <div
                                            className={`sort-filter ${
                                                i === getPriceSelect
                                                    ? "active"
                                                    : ""
                                            }`}
                                        >
                                            <span> Price: {item}</span>
                                            <i className="fal fa-check" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="dropdown">
                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <svg
                                    width={18}
                                    height={22}
                                    viewBox="0 0 18 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.0901 12.2799H6.1801V19.4799C6.1801 21.1599 7.0901 21.4999 8.2001 20.2399L15.7701 11.6399C16.7001 10.5899 16.3101 9.7199 14.9001 9.7199H11.8101V2.5199C11.8101 0.839898 10.9001 0.499897 9.7901 1.7599L2.2201 10.3599C1.3001 11.4199 1.6901 12.2799 3.0901 12.2799Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span className="inner">Sale type</span>
                            </button>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                            >
                                {sale.map((item, i) => (
                                    <a
                                        key={i}
                                        onClick={() => saleHandler(i)}
                                        className="dropdown-item"
                                    >
                                        <div
                                            className={`sort-filter ${
                                                i === getSaleSelect
                                                    ? "active"
                                                    : ""
                                            }`}
                                        >
                                            <span> Price: {item}</span>
                                            <i className="fal fa-check" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="dropdown">
                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.16992 7.44043L11.9999 12.5504L20.7699 7.47043"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12 21.61V12.54"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M9.92965 2.48028L4.58965 5.44028C3.37965 6.11028 2.38965 7.79028 2.38965 9.17028V14.8203C2.38965 16.2003 3.37965 17.8803 4.58965 18.5503L9.92965 21.5203C11.0696 22.1503 12.9396 22.1503 14.0796 21.5203L19.4196 18.5503C20.6296 17.8803 21.6196 16.2003 21.6196 14.8203V9.17028C21.6196 7.79028 20.6296 6.11028 19.4196 5.44028L14.0796 2.47028C12.9296 1.84028 11.0696 1.84028 9.92965 2.48028Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span className="inner">Blockchain</span>
                            </button>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                            >
                                {blcokchain.map((item, i) => (
                                    <a
                                        key={i}
                                        onClick={() => blcokchainHandler(i)}
                                        className="dropdown-item"
                                    >
                                        <div
                                            className={`sort-filter ${
                                                i === getBlcokchainSelect
                                                    ? "active"
                                                    : ""
                                            }`}
                                        >
                                            <span> Price: {item}</span>
                                            <i className="fal fa-check" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="soft-right">
                        <div className="dropdown">
                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3 7H21"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M6 12H18"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M10 17H14"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <span>Sort By: Recently Added</span>
                            </button>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <h6>Sort by</h6>
                                {sort.map((item, i) => (
                                    <a
                                        key={i}
                                        onClick={() => sortHandler(i)}
                                        className="dropdown-item"
                                    >
                                        <div
                                            className={`sort-filer ${
                                                i === getSortSelect
                                                    ? "active"
                                                    : ""
                                            }`}
                                        >
                                            <span> Price: {item}</span>
                                            <i className="fal fa-check" />
                                        </div>
                                    </a>
                                ))}
                                <h6>Options</h6>
                                <a className="dropdown-item">
                                    <div className="sort-filer">
                                        <span>Auction ending soon</span>
                                        <input
                                            className="check"
                                            type="checkbox"
                                            defaultValue="checkbox"
                                            name="check"
                                            defaultChecked
                                        />
                                    </div>
                                </a>
                                <a className="dropdown-item">
                                    <div className="sort-filer">
                                        <span>Show lazy minted</span>
                                        <input
                                            className="check"
                                            type="checkbox"
                                            defaultValue="checkbox"
                                            name="check"
                                            defaultChecked
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
