import { useEffect, useState } from "react";

export default function useStickyMenu(top: number = 10) {
    const [isSticky, setSticky] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            setSticky(scrollTop > top);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return isSticky;
}
