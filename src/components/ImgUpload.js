import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ImgUpload = ({ onChange = () => {}, name = "" }) => {
  const [image, setImage] = useState(null);
  const handleImgUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    const response = await axios({
      method: "post",
      url: "https://api.imgbb.com/1/upload?key=b6966f06a934a424151d59268667309f",
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const imageData = response.data.data;
    console.log(imageData);
    if (!imageData) {
      toast.error("Can not upload image to imgAPI");
      return;
    }
    const imgObj = {
      medium: imageData.medium?.url,
      thumb: imageData.thumb.url,
      url: imageData.url,
    };
    // console.log(imageData);
    onChange(name, imgObj);
    setImage(imgObj.medium || imgObj.thumb);
  };
  return (
    <label className="w-full h-[200px] border border-gray-200 border-dashed rounded-xl mb-8 cursor-pointer flex items-center justify-center">
      <input type="file" onChange={handleImgUpload} className="hidden" />
      {image ? (
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-text3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
          />
        </svg>
      )}
    </label>
  );
};

export default ImgUpload;
