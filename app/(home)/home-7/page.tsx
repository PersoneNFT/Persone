import Category from "@/app/components/block/Category";
import CreateSellNft2 from "@/app/components/block/CreateSellNft2";
import LiveAuction3 from "@/app/components/block/LiveAuction3";
import PopularCollection from "@/app/components/block/PopularCollection";
import PopularCollection6 from "@/app/components/block/PopularCollection";
import TodaysPicks3 from "@/app/components/block/TodaysPicks3";
import TodaysPicks5 from "@/app/components/block/TodaysPicks3";
import TopSeller3 from "@/app/components/block/TopSeller3";
import TopSeller7 from "@/app/components/block/TopSeller3";
import Hero7 from "@/app/components/hero/Hero7";
import LiveAuctionModal from "@/app/components/modal/LiveAuctionModal";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Persone | First AI Powered NFT Marketplace on Soneium",
};

export default function page(): JSX.Element {
    return (
        <>
            <Hero7 />
            <LiveAuction3 />
            <Category />
            <TopSeller3 />
            <TodaysPicks3 />
            <CreateSellNft2 />
            <PopularCollection />

            {/* live auction product modal */}
            <LiveAuctionModal />
        </>
    );
}
