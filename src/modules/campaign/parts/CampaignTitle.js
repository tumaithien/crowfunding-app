import React from "react";
import { Link } from "react-router-dom";
import classNames from "utils/classNames";

const CampaignTitle = ({
  children,
  className = "font-semibold mb-1",
  to = "",
}) => {
  return (
    <h3 className={classNames("text-text1", className)}>
      <Link to={`/campaign/${to}`}>{children}</Link>
    </h3>
  );
};

export default CampaignTitle;
