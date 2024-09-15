"use client";
import { ThemeProvider } from "next-themes";
import { MetaMaskProvider } from "metamask-react";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            enableSystem={false}
            themes={["is_light", "is_dark"]}
        >
            <MetaMaskProvider>{children}</MetaMaskProvider>
        </ThemeProvider>
    );
}
