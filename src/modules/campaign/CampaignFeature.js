import React from "react";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignImage from "./parts/CampaignImage";
import CampaignTitle from "./parts/CampaignTitle";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignMeta from "./parts/CampaignMeta";

const CampaignFeature = () => {
  return (
    <div className="flex items-center gap-x-8 w-full max-w-[1048px]">
      <CampaignImage className="h-[266px] flex-1"></CampaignImage>
      <div className="flex-1 max-w-[435px]">
        <CampaignCategory
          text="Architecture"
          className="text-sm font-medium mb-4"
        ></CampaignCategory>
        <CampaignTitle className="text-xl font-bold mb-4">
          Remake - We Make architecture exhibition
        </CampaignTitle>
        <CampaignDesc className="text-sm mb-6">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampaignDesc>
        <div className="w-full h-1 rounded-full bg-[#EFEFEF] mb-6">
          <div className="h-full w-2/4 bg-primary rounded-full"></div>
        </div>
        <div className="flex items-start justify-between">
          <CampaignMeta size="large"></CampaignMeta>
          <CampaignMeta
            size="large"
            amount="173"
            text="Total backers"
          ></CampaignMeta>
          <CampaignMeta
            size="large"
            text="Days left"
            amount="30"
          ></CampaignMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
