import { Metadata } from "next";
import Breadcrumb from "../components/breadcrumb";
import NoResult from "../components/block/NoResult";
import LiveAuction3 from "../components/block/LiveAuction3";

const item = {
    title: "No Result",
    breadcrumb: [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Page",
            path: "/no-result",
        },
        {
            name: "No Result",
        },
    ],
};

export const metadata: Metadata = {
    title: "Persone | First AI Powered NFT Marketplace on Soneium | No Result",
};

export default function page(): JSX.Element {
    return (
        <>
            <Breadcrumb data={item} />
            <NoResult />
            <LiveAuction3 />
        </>
    );
}
