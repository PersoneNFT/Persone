import Image from "next/image";
import Link from "next/link";

interface Props {
    data: {
        id: number;
        img: string;
        title: string;
        author: {
            img: string;
            name: string;
        };
    };
}

export default function CollectionListCard({ data }: Props): JSX.Element {
    return (
        <>
            <div className="fl-blog">
                <div className="item flex">
                    <div className="infor-item flex column1">
                        <div className="media">
                            <Image
                                src={data.img}
                                alt="Images"
                                height={100}
                                width={100}
                            />
                        </div>
                        <div className="content-collection">
                            <h5 className="title mb-15">
                                <Link href="/item-details-1">{data.title}</Link>
                            </h5>
                            <div className="author flex">
                                <div className="author-avatar">
                                    <Image
                                        src={data.author.img}
                                        alt="Images"
                                        height={50}
                                        width={50}
                                    />
                                    <div className="badge">
                                        <i className="ripple" />
                                    </div>
                                </div>
                                <div className="content">
                                    <p>Owned By</p>
                                    <h6>
                                        <Link href="/authors-1">
                                            {data.author.name}
                                        </Link>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <span>12,4353</span>
                    </div>
                    <div className="column td2">
                        <span>+3456%</span>
                    </div>
                    <div className="column td3">
                        <span>-564%</span>
                    </div>
                    <div className="column td4">
                        <span>12,4353 ETH</span>
                    </div>
                    <div className="column td5">
                        <span>3.3k</span>
                    </div>
                    <div className="column td6">
                        <span>23k</span>
                    </div>
                </div>
            </div>
        </>
    );
}
