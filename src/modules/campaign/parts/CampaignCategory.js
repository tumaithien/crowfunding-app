import { IconFolder } from "components/icons";
import React from "react";
import { Link } from "react-router-dom";
import classNames from "utils/classNames";

const CampaignCategory = ({
  text = "Education",
  className = "text-xs mb-4",
}) => {
  return (
    <Link
      to="/"
      className={classNames(
        "flex gap-x-3 items-baseline text-text3 font-medium",
        className
      )}
    >
      <span className="inline-block">
        <IconFolder></IconFolder>
      </span>
      <span className="capitalize">{text}</span>
    </Link>
  );
};

export default CampaignCategory;
