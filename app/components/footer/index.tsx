import useDarkModeCheck from "@/hooks/useDarkModeCheck";
import Image from "next/image";
import Link from "next/link";
import FooterItems from "./FooterItems";
import Social from "./Social";

export default function Footer() {
  // is dark hook
  const isDark = useDarkModeCheck();
  const data = { id: 1, avatar: "avatar.png", name: "John Doe", eth: 5 };

  return (
    <>
      <footer id="footer" className="footer-light-style clearfix">
        <div className="ibthemes-container">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-12">
              <div className="widget widget-logo">
                <div className="logo-footer" id="logo-footer">
                  <Link href="/">
                    <Image
                      id="logo_footer"
                      // src="/assets/images/logo/logo_dark.png"
                      src={`/assets/images/logo/${
                        isDark ? "logo_dark" : "logo_dark"
                      }.png`}
                      alt="nft-gaming"
                      width={135}
                      height={56}
                      data-retina="assets/images/logo/logo_dark@2x.png"
                    />
                  </Link>
                </div>
                <p className="sub-widget-logo">
                  Lorem ipsum dolor sit amet,consectetur adipisicing elit. Quis
                  non, fugit totam vel laboriosam vitae.
                </p>
                <p>
                  © {new Date().getFullYear()} Persone 2024
                </p>
              </div>
            </div>
            {/* End col */}

            <FooterItems data={data} />

            <div className="col-lg-3 col-md-6 col-sm-7 col-12">
              <div className="widget widget-subcribe">
                <h5 className="title-widget">Subscribe Us</h5>
                <div className="widget-social style-1 mg-t32">
                  <ul>
                    <Social />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
