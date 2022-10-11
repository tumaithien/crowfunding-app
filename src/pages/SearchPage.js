import { Button } from "components/button";
import Heading from "components/common/Heading";
import CampaignGrid from "modules/campaign/CampaignGrid";
import React from "react";
import { Link } from "react-router-dom";

const SearchPage = () => {
  return (
    <div>
      <Heading number={4}>Your Campaign</Heading>
      <div className="mb-10 bg-white rounded-[20px] px-10 py-8 flex items-center justify-between">
        <div className="flex-1 flex items-start gap-x-6">
          <button className="w-[54px] h-[54px] rounded-full bg-secondary bg-opacity-60 flex items-center justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
          <div className="flex flex-col gap-y-2">
            <Heading className="text-[22px] mb-0">Create Your Campaign</Heading>
            <p className="text-text3 text-sm">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <Link to="/" className="text-primary text-sm">
              Need any help? Learn More...
            </Link>
          </div>
        </div>
        <Button
          type="button"
          className="px-7"
          kind="ghost"
          href="/campaign-start"
        >
          Create campaign
        </Button>
      </div>
      <CampaignGrid type="secondary"></CampaignGrid>
      <div className="mt-10">
        <Button type="button" className="mx-auto px-14" kind="ghost">
          See more{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default SearchPage;
