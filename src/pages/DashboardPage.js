import Heading from "components/common/Heading";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import React from "react";
import CampaignFeature from "modules/campaign/CampaignFeature";
import Gap from "components/common/Gap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCampaign, getCampaignRecent } from "store/campaign/slice";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const { campaignData, campaignDataRecent } = useSelector(
    (state) => state.campaign
  );
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);
  return (
    <div>
      <Heading number={campaignData.length}>Your Campaign</Heading>
      {campaignData.length > 0 && (
        <CampaignFeature data={campaignData[0]}></CampaignFeature>
      )}
      <Gap></Gap>
      <Heading>Popular Campaign</Heading>
      <CampaignGrid>
        {campaignDataRecent.length > 0 &&
          campaignDataRecent.map((item) => (
            <CampaignItem key={item.id} data={item}></CampaignItem>
          ))}
      </CampaignGrid>
      <Gap></Gap>
      <Heading>Recent Campaign</Heading>
      <CampaignGrid>
        {campaignDataRecent.length > 0 &&
          campaignDataRecent.map((item) => (
            <CampaignItem key={item.id} data={item}></CampaignItem>
          ))}
      </CampaignGrid>
    </div>
  );
};

export default DashboardPage;
