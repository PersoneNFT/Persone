"use client";
import useStore from "@/store/home8state";

const tabs: string[] = ["Live Auctions", "Today's Picks", "Land", "Items"];

export default function HomePageTab(): JSX.Element {
    const itemCurrentTab = useStore((state) => state.itemCurrentTab);
    const itemTabHandler = useStore((state) => state.itemTabHandler);

    return (
        <>
            <ul className="menu-tab">
                {tabs.map((item, index) => (
                    <li
                        onClick={() => itemTabHandler(index)}
                        key={index}
                        className={itemCurrentTab === index ? "active" : ""}
                    >
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </>
    );
}
