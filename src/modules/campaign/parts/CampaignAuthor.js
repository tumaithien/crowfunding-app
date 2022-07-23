import { defaultImage } from "constants/global";
import React from "react";

const CampaignAuthor = ({
  authorImage = defaultImage,
  authorName = "Mahfuzul Nabil",
}) => {
  return (
    <div className="flex gap-x-3 items-center">
      <div className="w-8 h-8">
        <img
          src={authorImage}
          alt="Avatar"
          className="h-full w-full rounded-full object-cover"
        />
      </div>
      <p className="text-xs text-text3">
        by <span className="text-text2 font-semibold">{authorName}</span>
      </p>
    </div>
  );
};

export default CampaignAuthor;
