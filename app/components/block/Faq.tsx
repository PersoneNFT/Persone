"use client";

import { faq } from "@/data/project";
import { useState } from "react";
import { Collapse } from "react-collapse";

export default function Faq(): JSX.Element {
    const [getCollapse, setCollapse] = useState<number | null>(null);

    // collapse handler
    const collapseHandler = (id: number) => {
        if (getCollapse !== id) {
            return setCollapse(id);
        }

        return setCollapse(null);
    };

    return (
        <>
            <section className="tf-section wrap-accordion">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="tf-title-heading ct style-2 fs-30 mg-bt-10">
                                Frequently Asked Questions
                            </h2>
                            <h5 className="sub-title help-center mg-bt-32 ">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Laborum obcaecati dignissimos
                                quae quo ad iste ipsum officiis deleniti
                                asperiores sit.
                            </h5>
                        </div>
                        <div className="col-md-12">
                            <div className="flat-accordion2">
                                {faq.map((item) => (
                                    <div key={item.id} className="flat-toggle2">
                                        <h6
                                            onClick={() =>
                                                collapseHandler(item.id)
                                            }
                                            className={`toggle-title ${
                                                getCollapse === item.id
                                                    ? "active"
                                                    : ""
                                            }`}
                                        >
                                            {item.title}
                                        </h6>
                                        <Collapse
                                            isOpened={
                                                getCollapse === item.id
                                                    ? true
                                                    : false
                                            }
                                        >
                                            <div
                                                className="toggle-content"
                                                style={{ display: "block" }}
                                            >
                                                <p>{item.description}</p>
                                            </div>
                                        </Collapse>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
