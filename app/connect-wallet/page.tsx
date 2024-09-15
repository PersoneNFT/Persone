import { Metadata } from "next";
import ConnectWallet from "../components/block/ConnectWallet";
import Breadcrumb from "../components/breadcrumb";

const item = {
    title: "Connect Wallet",
    breadcrumb: [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Page",
            path: "/connect-wallet",
        },
        {
            name: "Connect Wallet",
        },
    ],
};

export const metadata: Metadata = {
    title: "Persone | First AI Powered NFT Marketplace on Soneium | Connect Wallet",
};

export default function page(): JSX.Element {
    return (
        <>
            <Breadcrumb data={item} />
            <ConnectWallet />
        </>
    );
}
