import Image from "next/image";
import Link from "next/link";

interface Props {
    data: { id: number; name: string; img: string };
}

export default function BrowCard1({ data }: Props): JSX.Element {
    return (
        <>
            <div className="swiper-slide">
                <div className="slider-item">
                    <div className="sc-card-product explode style2">
                        <div className="type-title">
                            <h3>{data.name}</h3>
                        </div>
                        <div className="card-media">
                            <Link href="/item-details-1">
                                <Image
                                    height={500}
                                    width={500}
                                    src={data.img}
                                    alt="Image"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
