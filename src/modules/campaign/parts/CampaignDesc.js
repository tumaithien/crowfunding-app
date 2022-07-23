import React from "react";
import classNames from "utils/classNames";

const CampaignDesc = ({ children, className = "text-sm mb-4" }) => {
  return <p className={classNames("text-text3", className)}>{children}</p>;
};

export default CampaignDesc;
