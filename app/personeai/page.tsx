import PersoneAI from "@/app/components/block/PersoneAI";
import Breadcrumb from "@/app/components/breadcrumb";
import { Metadata } from "next";

const item = {
    title: "Persone AI",
    breadcrumb: [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Explore",
            path: "/personeai",
        },
        {
            name: "Persone AI",
        },
    ],
};

export const metadata: Metadata = {
    title: "Persone | First AI Powered NFT Marketplace on Soneium | Persone AI",
};

export default function page(): JSX.Element {
    return (
        <>
            <Breadcrumb data={item} />
            <PersoneAI />
        </>
    );
}
