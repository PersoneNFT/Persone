import Link from "next/link";
import Breadcrumb from "../components/breadcrumb";
import Image from "next/image";

const item = {
  title: "404",
  breadcrumb: [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Page Not Found",
      path: "/",
    },
    {
      name: "404",
    },
  ],
};

export default function NotFound() {
  return (
    <>
      <Breadcrumb data={item} />
      <div className="ui-404">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="ui-404__content">
                <Image
                  height={500}
                  width={500}
                  src="/assets/images/404.svg"
                  alt="404"
                />
                <h2>Opps! you’r on the wrong place.</h2>
                <p>
                  Can not find what you need? Take a moment and do a search
                  below or start from our Homepage.
                </p>
                <Link href="/">
                  <button className="sc-button loadmore fl-button pri-3">
                    Back to home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
