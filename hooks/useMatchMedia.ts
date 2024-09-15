import { useEffect, useState } from "react";

export default function useMatchMedia(media: string): boolean | null {
    const [isMatch, setMatch] = useState<boolean | null>(null);

    useEffect(() => {
        const matchFn = () => {
            const match = window.matchMedia(media);
            if (match.matches) {
                setMatch(true);
            } else {
                setMatch(false);
            }
        };
        matchFn();
        window.onresize = matchFn;
    }, [setMatch]);

    return isMatch;
}
