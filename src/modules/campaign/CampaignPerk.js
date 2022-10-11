import { Button } from "components/button";
import React from "react";
import CampaignImage from "./parts/CampaignImage";
import CampaignTitle from "./parts/CampaignTitle";

const CampaignPerk = ({ showButton = false, className = "" }) => {
  return (
    <div className={className}>
      <div className="shadow-1 rounded-[10px] bg-white">
        <CampaignImage
          className="h-[232px]"
          imgSize="large"
          imgClass="rounded-[10px]"
        ></CampaignImage>
        <div className="p-5 pr-9">
          <span className="inline-block px-3 py-[2px] mb-5 text-white bg-secondary rounded-sm text-xs leading-[18px]">
            Feartured
          </span>
          <CampaignTitle className="text-xl mb-1 font-semibold leading-[30px]">
            Special One Camera
          </CampaignTitle>
          <div className="flex gap-x-2 items-center mb-4">
            <span className="text-text1 font-bold text-xl">$2,724 USD</span>{" "}
            <span className="text-sm text-error line-through font-medium">
              $1,504 USD
            </span>
            <span className="text-sm text-error font-medium">(12% OFF)</span>
          </div>
          <div className="flex flex-col mb-[15px]">
            <span className="font-medium">Estimated Shipping</span>
            <span className="text-sm text-text2">October 2022</span>
          </div>
          <div className="flex text-sm flex-col gap-y-[15px] text-text2">
            <span className="font-medium text-text1">
              05 <span className="font-normal">claimed</span>
            </span>
            <span>Ships worldwide</span>
          </div>
        </div>
      </div>
      {showButton && (
        <div className="mt-6">
          <Button type="button" className="w-full" kind="secondary">
            Get this perk
          </Button>
        </div>
      )}
    </div>
  );
};

export default CampaignPerk;
