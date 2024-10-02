"use client";
import { useState } from "react";
import Image from "next/image";

export default function PersoneAI(): JSX.Element {

    return (
        <>
            <section className="tf-section wrap-accordion">
                <div className="container">
                    <div className="row ai_row">
                        <div className="ai_logo_container">
                        <Image
                                    height={500}
                                    width={500}
                                    style={{ height: "276px", width: "276px" }}
                                    src="/assets/images/logo/ai_logo.png"
                                    alt="Image"
                                    className="ai_logo"
                                />
                            <h2 className="sub-title help-center mg-bt-32 ">
                                Soon...
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
