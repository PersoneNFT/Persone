import Image from "next/image";

interface Props {
    data: { id: number; avatar: string; name: string; eth: number };
}

export default function AuthorCard4({ data }: Props): JSX.Element {
    return (
        <>
            <div className="sc-author-box style-3">
                <div className="author-style2 flex">
                    <div className="author-avatar">
                        <a>
                            <Image
                                height={200}
                                width={200}
                                src={data.avatar}
                                alt="Image"
                                className="avatar"
                            />
                        </a>
                        <div className="badge">
                            <i className="ripple" />
                        </div>
                    </div>
                    <div className="author-infor">
                        <h5>
                            <a>{data.name}</a>
                        </h5>
                        <div className="tag">@windsorlandhh</div>
                        <span className="price">{data.eth} ETH</span>
                    </div>
                </div>
                <div className="action">
                    <div className="number">#{data.id}</div>
                    <div className="btn-follow">
                        <a>Follow</a>
                    </div>
                </div>
            </div>
        </>
    );
}
