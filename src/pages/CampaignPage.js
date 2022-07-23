import Heading from "components/common/Heading";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignFeature from "modules/campaign/CampaignFeature";
import React from "react";

const CampaignPage = () => {
  return (
    <div>
      <Heading number={4}>Your Campaign</Heading>
      <div className="mb-10 bg-white">
        
      </div>
      <CampaignGrid type="secondary">
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
      </CampaignGrid>
    </div>
  );
};

export default CampaignPage;
