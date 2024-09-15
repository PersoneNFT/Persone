import Image from "next/image";

interface Props {
    data: { id: number; name: string; img: string };
}

export default function CategoryCard1({ data }: Props): JSX.Element {
    return (
        <>
            <div className="slider-item">
                <div className="sc-categoty">
                    <div className="card-media">
                        <Image
                            height={500}
                            width={500}
                            src={data.img}
                            alt="Image"
                        />
                    </div>
                    <div className="card-title">
                        <h4>{data.name}</h4>
                    </div>
                </div>
            </div>
        </>
    );
}
