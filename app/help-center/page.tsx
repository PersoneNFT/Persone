import { Metadata } from "next";
import Breadcrumb from "../components/breadcrumb";
import HelpCenter from "../components/block/HelpCenter";

const item = {
    title: "Help Center",
    breadcrumb: [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Page",
            path: "/help-center",
        },
        {
            name: "Help Center",
        },
    ],
};

export const metadata: Metadata = {
    title: "Persone | First AI Powered NFT Marketplace on Soneium | Help Center",
};

export default function page(): JSX.Element {
    return (
        <>
            <Breadcrumb data={item} />
            <HelpCenter />
        </>
    );
}
