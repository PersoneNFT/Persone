"use client";
import { useState, ChangeEvent } from "react";
import UploadProfile from "../element/UploadProfile";
import Image from "next/image";

export default function EditProfile(): JSX.Element {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [previewUrls, setPreviewUrls] = useState<string[]>([]);
    const [getSelectCover, setSelectCover] = useState<number | null>(null);

    // multi image upload
    const multiConverHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);

        if (
            files?.length <= 2 &&
            Number(files?.length) + Number(selectedFiles?.length) <= 2
        ) {
            setSelectedFiles([...selectedFiles, ...files.slice(0, 2)]);
            const urls = files.map((file) => URL.createObjectURL(file));
            setPreviewUrls([...previewUrls, ...urls]);
        }
    };

    // select image handler
    const selectCoverImage = (select: number) => {
        setSelectCover(select);
    };

    // delete handler
    const deleteConver = (select: string) => {
        const deleteResult2 = previewUrls?.filter((item) => item !== select);
        setPreviewUrls(deleteResult2);
        setSelectedFiles([]);
    };

    return (
        <>
            <div className="tf-create-item tf-section">
                <div className="ibthemes-container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                            <UploadProfile />
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-12 col-12">
                            <div className="form-upload-profile">
                                <h4 className="title-create-item">
                                    Choice your Cover image
                                </h4>
                                <div className="option-profile clearfix">
                                    <form action="#">
                                        <label className="uploadFile">
                                            <input
                                                type="file"
                                                className="inputfile form-control"
                                                name="file"
                                                accept="png,jpg,gif,jpeg"
                                                onChange={multiConverHandler}
                                                multiple
                                            />
                                        </label>
                                    </form>
                                    {previewUrls.map((url, index) => (
                                        <div
                                            key={index}
                                            className={`position-relative ${
                                                getSelectCover !== null &&
                                                getSelectCover === index
                                                    ? "image"
                                                    : "image style2"
                                            }`}
                                            style={{ marginRight: "15px" }}
                                        >
                                            <Image
                                                height={500}
                                                width={500}
                                                onClick={() =>
                                                    selectCoverImage(index)
                                                }
                                                src={url}
                                                alt="Conver Photo"
                                            />
                                            <a
                                                onClick={() =>
                                                    deleteConver(url)
                                                }
                                                className="ui-cover-cross"
                                            >
                                                <i className="far fa-times"></i>
                                            </a>
                                        </div>
                                    ))}
                                    {previewUrls.length === 0 && (
                                        <>
                                            <div
                                                onClick={() =>
                                                    selectCoverImage(0)
                                                }
                                                className={
                                                    getSelectCover !== null &&
                                                    getSelectCover === 0
                                                        ? "image"
                                                        : "image style2"
                                                }
                                                style={{ marginRight: "15px" }}
                                            >
                                                <Image
                                                    height={500}
                                                    width={500}
                                                    src="/assets/images/backgroup-secsion/option1_bg_profile.jpg"
                                                    alt="Conver Photo"
                                                />
                                            </div>
                                            <div
                                                onClick={() =>
                                                    selectCoverImage(1)
                                                }
                                                className={
                                                    getSelectCover !== null &&
                                                    getSelectCover === 1
                                                        ? "image"
                                                        : "image style2"
                                                }
                                            >
                                                <Image
                                                    height={500}
                                                    width={500}
                                                    src="/assets/images/backgroup-secsion/option2_bg_profile.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </>
                                    )}
                                </div>
                                <form action="#" className="form-profile">
                                    <div className="form-infor-profile">
                                        <div className="info-account">
                                            <h4 className="title-create-item">
                                                Account info
                                            </h4>
                                            <fieldset>
                                                <h4 className="title-infor-account">
                                                    Display name
                                                </h4>
                                                <input
                                                    type="text"
                                                    placeholder="Trista Francis"
                                                    required
                                                />
                                            </fieldset>
                                            <fieldset>
                                                <h4 className="title-infor-account">
                                                    Custom URL
                                                </h4>
                                                <input
                                                    type="text"
                                                    placeholder="Axies.Trista Francis.com/"
                                                    required
                                                />
                                            </fieldset>
                                            <fieldset>
                                                <h4 className="title-infor-account">
                                                    Email
                                                </h4>
                                                <input
                                                    type="email"
                                                    placeholder="Enter your email"
                                                    required
                                                />
                                            </fieldset>
                                            <fieldset>
                                                <h4 className="title-infor-account">
                                                    Bio
                                                </h4>
                                                <textarea
                                                    tabIndex={4}
                                                    rows={5}
                                                    required
                                                    defaultValue={""}
                                                />
                                            </fieldset>
                                        </div>
                                        <div className="info-social">
                                            <h4 className="title-create-item">
                                                Your Social media
                                            </h4>
                                            <fieldset>
                                                <h4 className="title-infor-account">
                                                    Facebook
                                                </h4>
                                                <input
                                                    type="text"
                                                    placeholder="Facebook username"
                                                    required
                                                />
                                                <a className="connect">
                                                    <i className="fab fa-facebook" />
                                                    Connect to face book
                                                </a>
                                            </fieldset>
                                            <fieldset>
                                                <h4 className="title-infor-account">
                                                    Twitter
                                                </h4>
                                                <input
                                                    type="text"
                                                    placeholder="Twitter username"
                                                    required
                                                />
                                                <a className="connect">
                                                    <i className="fab fa-twitter" />
                                                    Connect to Twitter
                                                </a>
                                            </fieldset>
                                            <fieldset>
                                                <h4 className="title-infor-account">
                                                    Discord
                                                </h4>
                                                <input
                                                    type="text"
                                                    placeholder="Discord username"
                                                    required
                                                />
                                                <a className="connect">
                                                    <i className="icon-fl-vt" />
                                                    Connect to Discord
                                                </a>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <button
                                        className="tf-button-submit mg-t-15"
                                        type="submit"
                                    >
                                        Update Profile
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
