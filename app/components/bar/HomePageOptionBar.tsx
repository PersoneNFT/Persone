"use client";
import useStore from "@/store/home8state";
import { useState } from "react";

const filterItem: string[] = ["Top rate", "Mid rate", "Low rate"];

export default function HomePageOptionBar({
    itemLength,
}: {
    itemLength: number;
}): JSX.Element {
    const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);
    const [getFilterCurrent, setFilterCurrent] =
        useState<string>("Low To High");

    const isGridOrList = useStore((state) => state.isGridOrList);
    const gridOrListHandler = useStore((state) => state.gridOrListHandler);

    const dropdownHover = () => {
        setIsDropdownActive(true);
    };

    const dropdownLeave = () => {
        setIsDropdownActive(false);
    };

    // dropdown
    const changeDropdown = (select: string) => {
        const data = filterItem.filter((item) => item === select);
        setFilterCurrent(data[0]);
        setIsDropdownActive(false);
    };

    return (
        <>
            <div className="option">
                <h2 className="title">{itemLength} Items</h2>
                <div className="view">
                    <ul>
                        <li
                            onClick={() => gridOrListHandler("grid")}
                            className={`style1 grid ${
                                isGridOrList === "grid" ? "active" : ""
                            }`}
                        >
                            <a>
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
                                        fill="white"
                                    />
                                </svg>
                                <span>Grid</span>
                            </a>
                        </li>
                        <li
                            onClick={() => gridOrListHandler("list")}
                            className={`style2 list ${
                                isGridOrList === "list" ? "active" : ""
                            }`}
                        >
                            <a>
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21 8H3C2.59 8 2.25 7.09333 2.25 6C2.25 4.90667 2.59 4 3 4H21C21.41 4 21.75 4.90667 21.75 6C21.75 7.09333 21.41 8 21 8Z"
                                        fill="#EBEBEB"
                                    />
                                    <path
                                        d="M21 14H3C2.59 14 2.25 13.0933 2.25 12C2.25 10.9067 2.59 10 3 10H21C21.41 10 21.75 10.9067 21.75 12C21.75 13.0933 21.41 14 21 14Z"
                                        fill="#EBEBEB"
                                    />
                                    <path
                                        d="M21 20H3C2.59 20 2.25 19.0933 2.25 18C2.25 16.9067 2.59 16 3 16H21C21.41 16 21.75 16.9067 21.75 18C21.75 19.0933 21.41 20 21 20Z"
                                        fill="#EBEBEB"
                                    />
                                </svg>
                                <span>List</span>
                            </a>
                        </li>
                    </ul>
                    <div
                        onMouseLeave={dropdownLeave}
                        id="sort-by"
                        className="btn-sort-by dropdown"
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
                        <a
                            onMouseEnter={dropdownHover}
                            className="btn-selector nolink"
                        >
                            <span>{getFilterCurrent}</span>
                        </a>
                        <ul
                            className={isDropdownActive ? "show" : ""}
                            style={
                                isDropdownActive
                                    ? { visibility: "visible" }
                                    : { visibility: "hidden" }
                            }
                        >
                            {filterItem.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => changeDropdown(item)}
                                >
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
