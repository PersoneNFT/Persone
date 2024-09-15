"use client";
import useDarkModeCheck from "@/hooks/useDarkModeCheck";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Mode(): JSX.Element {
  const { setTheme } = useTheme();

  // is dark hook
  const isDark = useDarkModeCheck();

  // theme change toggle handler
  const toggleTheme = () => {
    if (isDark) {
      setTheme("is_light");
    } else {
      setTheme("is_dark");
    }
  };

  return (
    <>
      <div className="mode_switcher">
        <h6>
          Dark mode <strong>Available</strong>
        </h6>
        <a
          onClick={toggleTheme}
          className={`d-flex align-items-center ${
            isDark ? "dark" : "light is_active"
          }`}
        >
          <Image
            height={24}
            width={24}
            src={
              isDark
                ? "/assets/images/icon/moon-2.png"
                : "/assets/images/icon/sun.png"
            }
            alt=""
          />
        </a>
      </div>
    </>
  );
}
