import Signup from "@/app/components/block/Signup";
import Breadcrumb from "@/app/components/breadcrumb";
import { Metadata } from "next";

const item = {
    title: "Sign Up",
    breadcrumb: [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Page",
            path: "/signup",
        },
        {
            name: "Sign Up",
        },
    ],
};

export const metadata: Metadata = {
    title: "Axies | NFT Marketplace React/Next Js Template | Sign Up",
};

export default function page(): JSX.Element {
    return (
        <>
            <Breadcrumb data={item} />
            <Signup />
        </>
    );
}
