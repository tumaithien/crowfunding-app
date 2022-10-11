import CampaignAddNew from "modules/campaign/CampaignAddNew";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StartCampaignPage = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user || !user.email) {
      navigate("/login");
      console.log("un ress");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  console.log(user);
  return (
    <>
      <CampaignAddNew></CampaignAddNew>
    </>
  );
};

export default StartCampaignPage;
