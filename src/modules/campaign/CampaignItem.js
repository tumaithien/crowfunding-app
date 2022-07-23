import React from "react";
import CampaignAuthor from "./parts/CampaignAuthor";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignDesc from "./parts/CampaignDesc";
import CampaignImage from "./parts/CampaignImage";
import CampaignMeta from "./parts/CampaignMeta";
import CampaignTitle from "./parts/CampaignTitle";

const CampaignItem = () => {
  return (
    <div className="bg-white rounded-2xl">
      <CampaignImage></CampaignImage>
      <div className="py-4 pl-5 pr-9">
        <CampaignCategory></CampaignCategory>
        <CampaignTitle>Powered Kits Learning Boxes</CampaignTitle>
        <CampaignDesc>
          Fun, durable and reusable boxes with eco-friendly options.
        </CampaignDesc>
        <div className="flex items-start justify-between gap-x-5 mb-5">
          <CampaignMeta></CampaignMeta>
          <CampaignMeta amount="173" text="Total backers"></CampaignMeta>
        </div>
        <CampaignAuthor></CampaignAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
