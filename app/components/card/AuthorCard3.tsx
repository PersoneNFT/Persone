import Image from "next/image";
import Link from "next/link";

interface Props {
  data: { id: number; avatar: string; name: string; eth: number };
}

export default function AuthorCard3({ data }: Props) {
  return (
    <>
      <div className="box-item">
        <div className="sc-author-box style-3">
          <div className="author-avatar">
            <Link href="/authors-1">
              <Image
                height={100}
                width={100}
                src={data.avatar}
                alt="Image"
                className="avatar"
              />
            </Link>
            <div className="badge">
              <i className="ripple" />
            </div>
          </div>
          <div className="author-infor">
            <h5>
              <Link href="/authors-1">{data.name}</Link>
            </h5>
            <span className="price">{data.eth} ETH</span>
          </div>
        </div>
      </div>
    </>
  );
}
