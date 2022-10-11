import { defaultImage } from "constants/global";
import React from "react";
import CampaignAuthor from "./parts/CampaignAuthor";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignImage from "./parts/CampaignImage";
import CampaignMeta from "./parts/CampaignMeta";
import CampaignTitle from "./parts/CampaignTitle";

const CampaignItem = ({ data }) => {
  const {
    title,
    featured_image,
    amount,
    goal,
    prefilled,
    category,
    short_description,
    slug,
  } = data;
  return (
    <div className="bg-white rounded-2xl">
      <CampaignImage
        imgLink={featured_image?.medium || defaultImage}
      ></CampaignImage>
      <div className="py-4 pl-5 pr-9">
        <CampaignCategory text={category}></CampaignCategory>
        <CampaignTitle to={slug}>{title}</CampaignTitle>
        <CampaignDesc className="title-clip-2 text-sm mb-3">
          {short_description}
        </CampaignDesc>
        <div className="flex items-start justify-between gap-x-5 mb-5">
          <CampaignMeta
            amount={`$${amount}`}
            text={`Raised of $${goal}`}
          ></CampaignMeta>
          <CampaignMeta amount={prefilled} text="Total backers"></CampaignMeta>
        </div>
        <CampaignAuthor></CampaignAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
