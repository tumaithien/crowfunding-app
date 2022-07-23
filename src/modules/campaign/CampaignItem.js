import React from "react";
import CampaignCategory from "./CampaignCategory";

const CampaignItem = () => {
  return (
    <div className="bg-white rounded-2xl">
      <div className="h-[158px]">
        <img
          src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Test"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="py-4 pl-5 pr-9">
        <CampaignCategory>Education</CampaignCategory>
      </div>
    </div>
  );
};

export default CampaignItem;
