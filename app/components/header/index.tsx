"use client";
import Link from "next/link";
import Navigation from "./Navigation";
import Mode from "./Mode";
import useDarkModeCheck from "@/hooks/useDarkModeCheck";
import { usePathname } from "next/navigation";
import useStickyMenu from "@/hooks/useStickyMenu";
import AdminBar from "./AdminBar";
import Search1 from "./Search1";
import Search2 from "./Search2";
import WalletConnectButton from "../button/WalletConnectButton";
import Image from "next/image";

export default function Header(): JSX.Element {
  const path = usePathname();

  // is dark hook
  const isDark = useDarkModeCheck();

  // sticky menu
  const isSticky1 = useStickyMenu(200);
  const isSticky2 = useStickyMenu(250);

  return (
    <>
      <header
        id="header_main"
        className={
          // if the page route is /home-8 then the header navigation will be position-fixed
          path !== "/home-8"
            ? // if the page route is not /home-8
              `header_1 js-header style  ${
                path === "/text-type" ||
                path === "/text-scroll" ||
                path === "/home-5" ||
                path === "/home-6" ||
                path === "/home-7" ||
                path === "/home-8"
                  ? "header_2 style2"
                  : ""
              } ${isSticky1 ? "is-fixed" : ""} ${isSticky2 ? "is-small" : ""}`
            : // if the page route is /home-8
              `header_1 header_2 style2 style3 js-header position-fixed`
        }
      >
        <div className="ibthemes-container">
          <div className="row">
            <div className="col-md-12">
              <div id="site-header-inner">
                <div className="wrap-box flex">
                  <div id="site-logo" className="clearfix">
                    <div id="site-logo-inner">
                      <Link href="/" rel="home" className="main-logo">
                        <Image
                          id="logo_header"
                          src={`/assets/images/logo/${
                            isDark ? "logo_dark" : "logo"
                          }.png`}
                          alt="nft-gaming"
                          width={133}
                          height={56}
                        />
                      </Link>
                    </div>
                  </div>
                  <div
                    data-bs-toggle="offcanvas"
                    data-bs-target="#menu"
                    aria-controls="menu"
                    className="mobile-button "
                  >
                    <span />
                  </div>

                  {/* search bar 1 */}
                  {path == "/home-5" ||
                  path == "/home-6" ||
                  path == "/home-7" ||
                  path == "/home-8" ||
                  path === "/text-type" ||
                  path === "/text-scroll" ||
                  path === "/text-rotate" ? (
                    <Search1 />
                  ) : (
                    ""
                  )}

                  <Navigation />

                  <div className="flat-search-btn flex">
                    {/* search bar 2 */}
                    {path !== "/home-5" &&
                      path !== "/home-6" &&
                      path !== "/home-7" &&
                      path !== "/home-8" &&
                      path !== "/text-type" &&
                      path !== "/text-scroll" &&
                      path !== "/text-rotate" && <Search2 />}

                    {/* wallet */}
                    {path !== "/authors-1" &&
                      path !== "/authors-2" &&
                      path !== "/create-item" &&
                      path !== "/edit-profile" && <WalletConnectButton />}

                    <AdminBar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Mode />
      </header>
    </>
  );
}
