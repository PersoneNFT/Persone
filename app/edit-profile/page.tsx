import { Metadata } from "next";
import Breadcrumb from "../components/breadcrumb";
import EditProfile from "../components/block/EditProfile";

const item = {
    title: "Create Item",
    breadcrumb: [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Page",
            path: "/create-item",
        },
        {
            name: "Author",
            path: "/edit-profile",
        },
        {
            name: "Edit Profile",
        },
    ],
};

export const metadata: Metadata = {
    title: "Persone | First AI Powered NFT Marketplace on Soneium | Edit Profile",
};

export default function page(): JSX.Element {
    return (
        <>
            <Breadcrumb data={item} />
            <EditProfile />
        </>
    );
}
