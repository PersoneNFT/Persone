import ItemDetails1 from "@/app/components/block/ItemDetails1";
import LiveAuction from "@/app/components/block/LiveAuction";
import Breadcrumb from "@/app/components/breadcrumb";
import LiveAuctionModal from "@/app/components/modal/LiveAuctionModal";
import { Metadata } from "next";

const item = {
    title: "Item Details 1",
    breadcrumb: [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Explore",
            path: "/item-details-1",
        },
        {
            name: "Item Details 1",
        },
    ],
};

export const metadata: Metadata = {
    title: "Persone | First AI Powered NFT Marketplace on Soneium | Item Details",
};

export default function page(): JSX.Element {
    return (
        <>
            <Breadcrumb data={item} />
            <ItemDetails1 />
            <LiveAuction />

            {/* live auction product modal */}
            <LiveAuctionModal />
        </>
    );
}
