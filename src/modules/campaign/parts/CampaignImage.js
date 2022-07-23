import { defaultImage } from "constants/global";
import React from "react";
import classNames from "utils/classNames";

const CampaignImage = ({
  className = "h-[158px]",
  imgLink = defaultImage,
  imgSize = "small",
  imgClass = "",
}) => {
  return (
    <div className={className}>
      <img
        src={imgLink}
        alt="Test"
        className={classNames(
          "w-full h-full object-cover",
          imgSize === "small" ? "rounded-2xl" : imgClass
        )}
      />
    </div>
  );
};

export default CampaignImage;
