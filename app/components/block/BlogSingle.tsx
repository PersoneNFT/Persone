import { blog } from "@/data/blog";
import Image from "next/image";
import Link from "next/link";

export default function BlogSingle({ id = 1 }: { id?: number }): JSX.Element {
    const data = blog.find((item) => item.id == id);

    return (
        <>
            <div className="tf-section post-details">
                <div className="ibthemes-container">
                    <div className="wrap-flex-box style">
                        <div className="post">
                            <div className="inner-content">
                                <h2 className="title-post">{data?.title}</h2>
                                <div className="divider" />
                                <div className="meta-post flex mg-bt-31">
                                    <div className="box">
                                        <div className="inner">
                                            <h6 className="desc">
                                                DESIGNER INTERVIEW
                                            </h6>
                                            <p>AUGUST CHAPTER</p>
                                        </div>
                                    </div>
                                    <div className="box left">
                                        <div className="inner boder pad-r-50">
                                            <h6 className="desc">WRITER</h6>
                                            <p>DWINAWAN</p>
                                        </div>
                                        <div className="inner mg-l-39 mg-r-1">
                                            <h6 className="desc">DATE</h6>
                                            <p>AUGUST 11, 2021</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="image">
                                    {data && (
                                        <Image
                                            height={1000}
                                            width={1000}
                                            src={data?.img}
                                            alt="Image"
                                        />
                                    )}
                                </div>
                                <div className="inner-post mg-t-40">
                                    <h3 className="heading mg-bt-16">
                                        What is the most fun thing to become a
                                        designer?
                                    </h3>
                                    <p className="mg-bt-24">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Cupidatat non Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum
                                    </p>
                                    <div className="image-box">
                                        <Image
                                            height={500}
                                            width={500}
                                            src="/assets/images/blog/thumb1_details.jpg"
                                            alt="Image"
                                        />
                                        <Image
                                            height={500}
                                            width={500}
                                            src="/assets/images/blog/thumb2_details.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                </div>
                                <div className="inner-post mg-t-22">
                                    <h3 className="heading mg-bt-16">
                                        How is your daily routine?
                                    </h3>
                                    <p className="mg-bt-24">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Cupidatat non Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum
                                    </p>
                                    <div className="image">
                                        <Image
                                            height={500}
                                            width={500}
                                            src="/assets/images/blog/thumb-6.jpg"
                                            alt="Image"
                                        />
                                    </div>
                                </div>
                                <div className="inner-post mg-t-24">
                                    <h3 className="heading mg-bt-16">
                                        Middle Post Heading
                                    </h3>
                                    <p>Middle Post Heading</p>
                                    <p>
                                        {" "}
                                        Sed ut perspiciatis unde omnis iste
                                        natus error sit voluptatem accusantium
                                        doloremque laudantium, totam rem
                                        aperiam, eaque ipsa quae ab illo
                                        inventore veritatis et quasi architecto
                                        beatae vitae dicta sunt explicabo.
                                    </p>
                                    <p className="mg-bt-22">
                                        Nemo enim ipsam voluptatem quia voluptas
                                        sit aspernatur aut odit aut fugit, sed
                                        quia consequuntur magni dolores eos qui
                                        ratione voluptatem sequi nesciunt.
                                    </p>
                                </div>
                                <div className="sc-widget style-1">
                                    <div className="widget widget-tag style-2">
                                        <h4 className="title-widget">Tags</h4>
                                        <ul>
                                            <li>
                                                <a>Bitcoin</a>
                                            </li>
                                            <li>
                                                <a>Token</a>
                                            </li>
                                            <li>
                                                <a>Wallet</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget widget-social style-2">
                                        <h4 className="title-widget">Share:</h4>
                                        <ul>
                                            <li>
                                                <a className="icon-fl-facebook" />
                                            </li>
                                            <li className="style-2">
                                                <a className="icon-fl-coolicon" />
                                            </li>
                                            <li className="mgr-none">
                                                <a className="icon-fl-mess" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="divider d2" />
                                <div id="comments">
                                    <h3 className="heading mg-bt-23">
                                        Leave A Comment
                                    </h3>
                                    <form
                                        action="contact/contact-process.php"
                                        method="post"
                                        id="commentform"
                                        className="comment-form"
                                    >
                                        <fieldset className="name">
                                            <input
                                                type="text"
                                                id="name"
                                                placeholder="Name"
                                                className="tb-my-input"
                                                name="name"
                                                tabIndex={2}
                                                aria-required="true"
                                                required
                                            />
                                        </fieldset>
                                        <fieldset className="email">
                                            <input
                                                type="email"
                                                id="email"
                                                placeholder="Email *"
                                                className="tb-my-input"
                                                name="email"
                                                tabIndex={2}
                                                aria-required="true"
                                                required
                                            />
                                        </fieldset>
                                        <fieldset className="message">
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                placeholder="Message"
                                                tabIndex={4}
                                                aria-required="true"
                                            />
                                        </fieldset>
                                        <div className="btn-submit mg-t-36">
                                            <button
                                                className="tf-button-submit"
                                                type="submit"
                                            >
                                                Send comment
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="side-bar details">
                            <div className="widget widget-recent-post mg-bt-43">
                                <h3 className="title-widget mg-bt-23">
                                    Recent Post
                                </h3>
                                <ul>
                                    <li className="box-recent-post">
                                        <div className="box-feature">
                                            <Link href="/blog-details">
                                                <Image
                                                    height={500}
                                                    width={500}
                                                    src="/assets/images/box-item/icon1-recont-post.jpg"
                                                    alt="image"
                                                />
                                            </Link>
                                        </div>
                                        <div className="box-content">
                                            <Link
                                                href="/blog-details"
                                                className="title-recent-post"
                                            >
                                                6 Make Mobile Website Faster
                                            </Link>
                                            <span>
                                                <span className="sub-recent-post">
                                                    Lorem ipsum dolor sit
                                                    amer....
                                                </span>
                                                <Link
                                                    href="/blog"
                                                    className="day-recent-post"
                                                >
                                                    August 10, 2021
                                                </Link>
                                            </span>
                                        </div>
                                    </li>
                                    <li className="box-recent-post">
                                        <div className="box-feature">
                                            <Link href="/blog-details">
                                                <Image
                                                    height={500}
                                                    width={500}
                                                    src="/assets/images/box-item/icon2-recont-post.jpg"
                                                    alt="image"
                                                />
                                            </Link>
                                        </div>
                                        <div className="box-content">
                                            <Link
                                                href="/blog-details"
                                                className="title-recent-post"
                                            >
                                                Experts Web Design Tips
                                            </Link>
                                            <span>
                                                <span className="sub-recent-post">
                                                    Lorem ipsum dolor sit
                                                    amer....
                                                </span>
                                                <Link
                                                    href="/blog-details"
                                                    className="day-recent-post"
                                                >
                                                    August 22, 2021
                                                </Link>
                                            </span>
                                        </div>
                                    </li>
                                    <li className="box-recent-post">
                                        <div className="box-feature">
                                            <Link href="/blog-details">
                                                <Image
                                                    height={500}
                                                    width={500}
                                                    src="/assets/images/box-item/icon3-recont-post.jpg"
                                                    alt="image"
                                                />
                                            </Link>
                                        </div>
                                        <div className="box-content">
                                            <Link
                                                href="/blog-details"
                                                className="title-recent-post"
                                            >
                                                Importance Of Web Design
                                            </Link>
                                            <span>
                                                <span className="sub-recent-post">
                                                    Lorem ipsum dolor sit
                                                    amer....
                                                </span>
                                                <Link
                                                    href="/blog"
                                                    className="day-recent-post"
                                                >
                                                    August 20, 2021
                                                </Link>
                                            </span>
                                        </div>
                                    </li>
                                    <li className="box-recent-post">
                                        <div className="box-feature">
                                            <Link href="/blog-details">
                                                <Image
                                                    height={500}
                                                    width={500}
                                                    src="/assets/images/box-item/icon4-recont-post.jpg"
                                                    alt="image"
                                                />
                                            </Link>
                                        </div>
                                        <div className="box-content">
                                            <Link
                                                href="/blog-details"
                                                className="title-recent-post"
                                            >
                                                Avoid These Erros In UI Design
                                            </Link>
                                            <span>
                                                <span className="sub-recent-post">
                                                    Lorem ipsum dolor sit
                                                    amer....
                                                </span>
                                                <Link
                                                    href="/blog"
                                                    className="day-recent-post"
                                                >
                                                    August 12, 2021
                                                </Link>
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget widget-tag style-1">
                                <h3 className="title-widget mg-bt-23">
                                    Popular Tag
                                </h3>
                                <ul>
                                    <li>
                                        <Link
                                            href="/blog"
                                            className="box-widget-tag"
                                        >
                                            Bitcoin
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/blog"
                                            className="box-widget-tag"
                                        >
                                            NFT
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/blog"
                                            className="box-widget-tag"
                                        >
                                            Bids
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/blog"
                                            className="box-widget-tag"
                                        >
                                            Digital
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/blog"
                                            className="box-widget-tag"
                                        >
                                            Arts
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/blog"
                                            className="box-widget-tag"
                                        >
                                            Marketplace
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/blog"
                                            className="box-widget-tag"
                                        >
                                            Token
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/blog"
                                            className="box-widget-tag"
                                        >
                                            Wallet
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/blog"
                                            className="box-widget-tag"
                                        >
                                            Crypto
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
