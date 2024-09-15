import Contact from "@/app/components/block/Contact";
import Breadcrumb from "@/app/components/breadcrumb";
import { Metadata } from "next";

const item = {
    title: "Contact 1",
    breadcrumb: [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Contact",
            path: "/contact-1",
        },
        {
            name: "Contact 1",
        },
    ],
};

export const metadata: Metadata = {
    title: "Persone | First AI Powered NFT Marketplace on Soneium",
};

export default function page(): JSX.Element {
    return (
        <>
            <Breadcrumb data={item} />
            <Contact />
        </>
    );
}
