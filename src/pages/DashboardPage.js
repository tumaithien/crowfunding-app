import Heading from "components/common/Heading";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import { v4 } from "uuid";
import React from "react";
import CampaignFeature from "modules/campaign/CampaignFeature";
import Gap from "components/common/Gap";

const DashboardPage = () => {
  return (
    <div>
      <Heading number={4}>Your Campaign</Heading>
      <CampaignFeature></CampaignFeature>
      <Gap></Gap>
      <Heading>Popular Campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}>{item}</CampaignItem>
          ))}
      </CampaignGrid>
      <Gap></Gap>
      <Heading>Recent Campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}>{item}</CampaignItem>
          ))}
      </CampaignGrid>
    </div>
  );
};

export default DashboardPage;
