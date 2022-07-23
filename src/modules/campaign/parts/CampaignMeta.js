import React from "react";
import classNames from "utils/classNames";

const CampaignMeta = ({
  amount = "$2,000",
  text = "Raised of $1,900",
  size = "small",
}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <span
        className={classNames(
          "text-text2 font-semibold",
          size === "small" ? "text-sm" : "text-xl"
        )}
      >
        {amount}
      </span>
      <span
        className={classNames(
          "text-text4",
          size === "small" ? "text-xs" : "text-base"
        )}
      >
        {text}
      </span>
    </div>
  );
};

export default CampaignMeta;
