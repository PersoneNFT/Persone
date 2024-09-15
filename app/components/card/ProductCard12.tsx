import Image from "next/image";
import Link from "next/link";

interface Props {
    data: {
        id: number;
        hert: number;
        gallery: string[];
        author: {
            avatar: string;
            title: string;
            name: string;
        };
    };
}

export default function ProductCard12({ data }: Props): JSX.Element {
    return (
        <>
            <div className="sc-card-collection style-2 home5">
                <div className="media-images-collection">
                    <div className="box-left">
                        <Image
                            height={500}
                            width={500}
                            src={data.gallery[0]}
                            alt="Image"
                        />
                    </div>
                    <div className="box-right">
                        <div className="top-img">
                            <Image
                                height={500}
                                width={500}
                                src={data.gallery[1]}
                                alt="Image"
                            />
                        </div>
                        <div className="bottom-img">
                            <Image
                                height={500}
                                width={500}
                                src={data.gallery[2]}
                                alt="Image"
                            />
                        </div>
                        <button className="wishlist-button heart">
                            <span className="number-like"> {data.hert}</span>
                        </button>
                    </div>
                </div>
                <div className="author-avatar">
                    <div className="image">
                        <Image
                            height={100}
                            width={100}
                            src={data.author.avatar}
                            alt="Image"
                            className="avatar"
                        />
                        <div className="badge">
                            <i className="ripple" />
                        </div>
                    </div>
                </div>
                <div className="content">
                    <h4 className="heading">
                        <Link href="/authors-1">{data.author.title}</Link>
                    </h4>
                    <div className="description">
                        <span>Created by</span>
                        <h6 className="name">
                            <Link href="/authors-2">{data.author.name}</Link>
                        </h6>
                    </div>
                </div>
            </div>
        </>
    );
}
