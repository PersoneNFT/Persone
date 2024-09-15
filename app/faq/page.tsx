import { Metadata } from "next";
import Breadcrumb from "../components/breadcrumb";
import Faq from "../components/block/Faq";

const item = {
    title: "FAQ",
    breadcrumb: [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Page",
            path: "/faq",
        },
        {
            name: "FAQ",
        },
    ],
};

export const metadata: Metadata = {
    title: "Persone | First AI Powered NFT Marketplace on Soneium | FAQ",
};

export default function page(): JSX.Element {
    return (
        <>
            <Breadcrumb data={item} />
            <Faq />
        </>
    );
}
