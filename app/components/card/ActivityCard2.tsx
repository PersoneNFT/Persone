import Image from "next/image";
import Link from "next/link";

interface Props {
    data: {
        id: number;
        img: string;
        title: string;
        name: string;
        type: number;
        eth?: undefined | number;
        to?: undefined | string;
    };
}

export default function ActivityCard2({ data }: Props) {
    return (
        <>
            <div className="sc-card-activity style-2">
                <div className="content">
                    <div className="media">
                        <Image
                            height={500}
                            width={500}
                            src={data.img}
                            alt="image"
                        />
                    </div>
                    <div className="infor">
                        <h4>
                            <Link href="/item-details-1"> Pinky Ocean</Link>
                        </h4>
                        {data.type === 1 && (
                            <div className="status">
                                following
                                <span className="author">{data.name}</span>
                            </div>
                        )}
                        {data.type == 2 && (
                            <>
                                <div className="status">
                                    listed by{" "}
                                    <span className="author">
                                        Trista Francis
                                    </span>
                                </div>
                                <div className="status">
                                    for{" "}
                                    <span className="quote">0.049 ETH </span>
                                </div>
                            </>
                        )}

                        {data.type === 3 && (
                            <>
                                <div className="status">
                                    transferred from{" "}
                                    <span className="author">Gayle Hicks</span>
                                </div>
                                <div className="status style-2">
                                    to <span className="author">{data.to}</span>
                                </div>
                            </>
                        )}

                        <div className="time">
                            {data.type === 1 || data.type === 3
                                ? "19th June, 2021"
                                : "10 minutes ago"}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
