import Login from "@/app/components/block/Login";
import Breadcrumb from "@/app/components/breadcrumb";
import { Metadata } from "next";

const item = {
    title: "Login",
    breadcrumb: [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Page",
            path: "/login",
        },
        {
            name: "Login",
        },
    ],
};

export const metadata: Metadata = {
    title: "Axies | NFT Marketplace React/Next Js Template | Login",
};
export default function page(): JSX.Element {
    return (
        <>
            <Breadcrumb data={item} />
            <Login />
        </>
    );
}
