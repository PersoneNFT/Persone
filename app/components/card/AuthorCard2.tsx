import Image from "next/image";
import Link from "next/link";

interface Props {
    data: { id: number; avatar: string; name: string; eth: number };
}

export default function AuthorCard2({ data }: Props): JSX.Element {
    return (
        <>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="sc-author-box">
                    <div className="author-avatar">
                        <a>
                            <Image
                                src={data.avatar}
                                alt="Image"
                                className="avatar"
                                height={100}
                                width={100}
                                priority
                            />
                        </a>
                        <div className="badge">
                            <i className="ripple" />
                        </div>
                    </div>
                    <div className="author-infor">
                        <h5 className="style2">
                            <Link href="/authors-2">{data.name}</Link>
                        </h5>
                        <span className="price">{data.eth} ETH</span>
                    </div>
                </div>
            </div>
        </>
    );
}
