import Image from "next/image";
import Link from "next/link";

interface Props {
    data: {
        id: number;
        gallery: string[];
        item: number;
        author: {
            avatar: string;
            name: string;
        };
    };
}

export default function ProductCard8({ data }: Props): JSX.Element {
    return (
        <>
            <div className="sc-card-collection style-2">
                <div className="card-bottom">
                    <div className="author">
                        <div className="sc-author-box style-2">
                            <div className="author-avatar">
                                <Image
                                    height={100}
                                    width={100}
                                    src={data.author.avatar}
                                    alt="avatar"
                                    className="avatar"
                                />
                                <div className="badge" />
                            </div>
                        </div>
                        <div className="content">
                            <h4>
                                <Link href="/authors-2">
                                    {data.author.name}
                                </Link>
                            </h4>
                            <div className="infor">
                                <span>{data.item} item products</span>
                            </div>
                        </div>
                    </div>
                    <Link href="/login" className="sc-button fl-button pri-3">
                        <span>Following</span>
                    </Link>
                </div>
                <Link href="/authors-2">
                    <div className="media-images-collection">
                        <div className="box-left">
                            <Image
                                height={500}
                                width={500}
                                src={data.gallery[0]}
                                alt="Gallery"
                            />
                        </div>
                        <div className="box-right">
                            <div className="top-img">
                                <Image
                                    height={300}
                                    width={300}
                                    src={data.gallery[1]}
                                    alt="Gallery"
                                />
                                <Image
                                    height={300}
                                    width={300}
                                    src={data.gallery[2]}
                                    alt="Gallery"
                                />
                            </div>
                            <div className="bottom-img">
                                <Image
                                    height={400}
                                    width={400}
                                    src={data.gallery[3]}
                                    alt="Gallery"
                                />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}
