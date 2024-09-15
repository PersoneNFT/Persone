import Activity1 from "@/app/components/block/Activity1";
import Breadcrumb from "@/app/components/breadcrumb";
import { Metadata } from "next";

const item = {
    title: "Activity 1",
    breadcrumb: [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Community",
            path: "/activity-1",
        },
        {
            name: "Activity 1",
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
            <Activity1 />
        </>
    );
}
