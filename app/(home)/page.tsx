import { Metadata } from "next";
import CreateSellNft from "../components/block/CreateSellNft";
import LiveAuction from "../components/block/LiveAuction3";
import PopularCollection from "../components/block/PopularCollection3";
import TopSeller from "../components/block/TopSeller3";
import Hero1 from "../components/hero/Hero7";
import LiveAuctionModal from "../components/modal/LiveAuctionModal";
import TodaysPicks from "../components/block/TodaysPicks3";
import Hero7 from "../components/hero/Hero7";
import LiveAuction3 from "../components/block/LiveAuction3";
import TopSeller3 from "../components/block/TopSeller3";
import TodaysPicks3 from "../components/block/TodaysPicks3";
import CreateSellNft2 from "../components/block/CreateSellNft2";

export const metadata: Metadata = {
    title: "Persone | First AI Powered NFT Marketplace on Soneium | Home",
};

export default function page(): JSX.Element {
    return (
        <>
            <Hero7 />
            <LiveAuction3 />
            <TopSeller3 />
            <TodaysPicks3 />
            <PopularCollection />
            <CreateSellNft2 />

            {/* live auction product modal */}
            <LiveAuctionModal />
        </>
    );
}
