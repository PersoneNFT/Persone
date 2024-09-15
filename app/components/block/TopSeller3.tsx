import { author } from "@/data/author";
import AuthorCard2 from "../card/AuthorCard2";

export default function TopSeller3(): JSX.Element {
    return (
        <>
            <section className="tf-section top-seller bg-style">
                <div className="ibthemes-container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="tf-title style2">Top Seller</h2>
                            <div className="heading-line s2" />
                        </div>
                        {author.map((item) => (
                            <AuthorCard2 key={item.id} data={item} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
