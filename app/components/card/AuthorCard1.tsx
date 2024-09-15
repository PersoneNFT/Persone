import Image from "next/image";
import Link from "next/link";

interface Props {
    data: {
        id: number;
        avatar: string;
        name: string;
        eth: number;
    };
}

export default function AuthorCard1({ data }: Props) {
    return (
        <>
            <div className="slider-item">
                <div className="sc-author-box style-2">
                    <div className="author-avatar">
                        <Image
                            height={500}
                            width={500}
                            src={data.avatar}
                            alt="Avatar"
                            className="avatar"
                        />
                        <div className="badge" />
                    </div>
                    <div className="author-infor">
                        <h5>
                            <Link href="/authors-2">{data.name}</Link>
                        </h5>
                        <span className="price">{data.eth} ETH</span>
                    </div>
                </div>
            </div>
        </>
    );
}
