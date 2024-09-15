import Link from "next/link";
import HeroVerticalSlider from "../element/HeroVerticalSlider";
import Image from "next/image";

export default function Hero7(): JSX.Element {
    return (
        <>
            <section className="flat-title-page style3 home-7">
                <Image
                    width={528}
                    height={327}
                    className="bgr-gradient gradient1"
                    src="/assets/images/backgroup-secsion/bg-gradient1.png"
                    alt="Gradient 1"
                />
                <Image
                    width={315}
                    height={195}
                    className="bgr-gradient gradient2"
                    src="/assets/images/backgroup-secsion/bg-gradient2.png"
                    alt="Gradient 2"
                />
                <Image
                    width={178}
                    height={110}
                    className="bgr-gradient gradient3"
                    src="/assets/images/backgroup-secsion/bg-gradient3.png"
                    alt="Gradient 3"
                />
                <div className="overlay" />
                <div className="ibthemes-container home s1">
                    <div className="wrap-heading flat-slider flex">
                        <div className="content">
                            <h2 className="heading m-t-15">PERSONE NFT</h2>
                            {/* <h1 class="heading mb-style"><span class="tf-text s1 type"></span>                                           */}
                            <h1 className="heading mb-style animationtext clip">
                                <span className="tf-text s1 cd-words-wrapper">
                                    <span className="tf-text s1">
                                        First AI Powered
                                    </span>
                                </span>
                            </h1>

                            <h1 className="heading">Marketplace on Soneium</h1>
                            <p className="sub-heading mg-t-19 mg-bt-40">
                                Marketplace for monster character cllections non
                                fungible token NFTs
                            </p>
                            <div className="flat-bt-slider flex style2">
                                <Link
                                    href="/explore-2"
                                    className="sc-button header-slider style style-1 rocket fl-button pri-1"
                                >
                                    <span>Explore</span>
                                </Link>
                                <Link
                                    href="/create-item"
                                    className="sc-button header-slider style style-1 note fl-button pri-1"
                                >
                                    <span>Create</span>
                                </Link>
                            </div>
                        </div>
                        <HeroVerticalSlider />
                    </div>
                </div>
            </section>
        </>
    );
}
