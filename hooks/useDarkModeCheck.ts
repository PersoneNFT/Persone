import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function useDarkModeCheck(): boolean {
    const [isDark, setDark] = useState<boolean>(false);
    const { theme } = useTheme();

    useEffect(() => {
        if (theme === "is_light" || theme === "light") {
            setDark(false);
        } else {
            setDark(true);
        }
    }, [theme, setDark]);

    return isDark;
}
