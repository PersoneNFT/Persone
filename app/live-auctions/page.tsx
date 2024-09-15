import Breadcrumb from "@/app/components/breadcrumb";
import { Metadata } from "next";
import LiveAuction4 from "../components/block/LiveAuction4";
import LiveAuctionModal from "../components/modal/LiveAuctionModal";

const item = {
    title: "Auctions",
    breadcrumb: [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Explore",
            path: "/live-auctions",
        },
        {
            name: "Auctions",
        },
    ],
};

export const metadata: Metadata = {
    title: "Persone | First AI Powered NFT Marketplace on Soneium | Live Auctions",
};

export default function page(): JSX.Element {
    return (
        <>
            <Breadcrumb data={item} />
            <LiveAuction4 />

            {/* live auction product modal */}
            <LiveAuctionModal />
        </>
    );
}
