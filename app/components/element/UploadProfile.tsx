"use client";
import Image from "next/image";
import { useState } from "react";

export default function UploadProfile(): JSX.Element {
    const [getProfileImg, setProfileImage] = useState<null | any>(null);

    const uploadImage = (e: any) => {
        setProfileImage(e.target.files[0]);
    };

    return (
        <>
            <div className="sc-card-profile text-center">
                <div className="card-media">
                    <Image
                        id="profileimg"
                        src={
                            getProfileImg !== null
                                ? URL.createObjectURL(getProfileImg)
                                : "/assets/images/avatar/avata_profile.jpg"
                        }
                        alt="Image"
                        height={500}
                        width={500}
                    />
                </div>
                <div id="upload-profile">
                    <a className="btn-upload">Upload New Photo </a>
                    <input
                        id="tf-upload-img"
                        type="file"
                        name="profile"
                        required
                        onChange={uploadImage}
                        accept=".png, .jpg, .jpeg"
                    />
                </div>
                <a
                    onClick={() => setProfileImage(null)}
                    style={{ cursor: "pointer" }}
                    className="btn-upload style2"
                >
                    Delete
                </a>
            </div>
        </>
    );
}
