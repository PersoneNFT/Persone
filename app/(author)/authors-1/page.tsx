import OurCreator from "@/app/components/block/OurCreator";
import TopSeller3 from "@/app/components/block/TopSeller3";
import TopSeller4 from "@/app/components/block/TopSeller3";
import Breadcrumb from "@/app/components/breadcrumb";

const item = {
    title: "Authors",
    breadcrumb: [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Page",
            path: "/authors-1",
        },
        {
            name: "Authors",  
        },
    ],
};

export default function page(): JSX.Element {
    return (
        <>
            <Breadcrumb data={item} />
            <TopSeller3 />
            <OurCreator />
        </>
    );
}
