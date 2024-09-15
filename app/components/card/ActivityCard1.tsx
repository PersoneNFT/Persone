import Image from "next/image";
import Link from "next/link";

interface Props {
  data: {
    id: number;
    img: string;
    icon: string;
    title: string;
    name: string;
    type: number;
    eth?: undefined | number;
  };
}

export default function ActivityCard1({ data }: Props): JSX.Element {
  return (
    <>
      <div className="sc-card-activity style1">
        <div className="content">
          <div className="media">
            <Image
              height={200}
              width={200}
              src={data.img}
              alt="Activity Image"
            />
          </div>
          <div className="infor">
            <h3>
              <Link href="/item-details-1">{data.title}</Link>
            </h3>
            {data.type === 1 && (
              <div className="status">
                started following
                <span className="author">{data.name}</span>
              </div>
            )}
            {data.type === 2 && (
              <div className="status">
                <span className="quote">10 editions listed</span>
                by
                <span className="author"> {data.name} </span> for{" "}
                <span className="quote">{data.eth} ETH</span>
                each
              </div>
            )}
            <div className="time">At 2:30 PM on 19th June, 2021</div>
          </div>
        </div>
        <div className={`button-active icon ${data.icon}`} />
      </div>
    </>
  );
}
