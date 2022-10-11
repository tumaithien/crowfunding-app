import React from "react";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignImage from "./parts/CampaignImage";
import CampaignTitle from "./parts/CampaignTitle";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignMeta from "./parts/CampaignMeta";
import { defaultImage } from "constants/global";
import { calculateDate } from "utils/helper";

const CampaignFeature = ({ data = {} }) => {
  const {
    featured_image,
    category,
    title,
    short_description,
    amount,
    goal,
    endDate,
    prefilled,
    slug,
  } = data;
  const { medium } = featured_image;
  const startDate = new Date();
  let days = calculateDate(startDate, endDate);
  return (
    <div className="flex items-center gap-x-8 w-full max-w-[1048px]">
      <CampaignImage
        imgLink={medium || defaultImage}
        className="h-[266px] flex-1"
      ></CampaignImage>
      <div className="flex-1 max-w-[435px]">
        <CampaignCategory
          text={category}
          className="text-sm font-medium mb-4"
        ></CampaignCategory>
        <CampaignTitle to={slug} className="text-xl font-bold mb-4">
          {title}
        </CampaignTitle>
        <CampaignDesc className="text-sm mb-6">
          {short_description}
        </CampaignDesc>
        <div className="w-full h-1 rounded-full bg-[#EFEFEF] mb-6">
          <div className="h-full w-2/4 bg-primary rounded-full"></div>
        </div>
        <div className="flex items-start justify-between gap-x-5">
          <CampaignMeta
            size="large"
            amount={`$${goal}`}
            text={`Raised of $${amount}`}
          ></CampaignMeta>
          <CampaignMeta
            size="large"
            amount={prefilled}
            text="Total backers"
          ></CampaignMeta>
          <CampaignMeta
            size="large"
            text="Days left"
            amount={days < 10 ? `0${days}` : days}
          ></CampaignMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
