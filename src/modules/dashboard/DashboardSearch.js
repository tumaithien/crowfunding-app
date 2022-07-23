import { IconCancel } from "components/icons";
import { defaultImage } from "constants/global";
import React, { useState } from "react";

const DashboardSearch = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="relative z-50">
      <div className="flex items-center bg-white rounded-full shadow-[10px_10px_20px_rgba(218, 213, 213, 0.15)] p-2">
        <div className="flex-1 px-5">
          <input
            type="text"
            placeholder="Do fundrise now"
            className="bg-transparent text-text1 placeholder:text-text4 text-sm w-full"
          />
        </div>
        <button className="w-[72px] flex-shrink-0 rounded-full flex bg-primary h-10 text-white items-center justify-center">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      {showSearch && (
        <div className="search-results w-[327px] lg:w-[843px] bg-white absolute top-full left-0 translate-y-5 pb-6 rounded-3xl overflow-hidden z-50">
          <div className="flex items-center justify-between p-3 bg-graySoft">
            <h4 className="font-medium text-sm pl-4">
              See all 10,124 fundraisier
            </h4>
            <button className="flex items-center justify-center w-[72px] h-12 rounded-lg text-error bg-redSoft">
              <IconCancel></IconCancel>
            </button>
          </div>
          <div className="p-6 pb-0">
            <div className="flex flex-col gap-y-5 mb-6">
              <ItemSearch></ItemSearch>
              <ItemSearch></ItemSearch>
              <ItemSearch></ItemSearch>
            </div>
            <h3 className="text-sm font-semibold mb-4">Related searchs</h3>
            <div className="flex flex-col gap-y-3 text-sm text-text2">
              <p>
                <strong>education</strong> fund
              </p>
              <p>schoralship fund</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
function ItemSearch() {
  return (
    <div className="flex items-center gap-x-5">
      <img
        src={defaultImage}
        alt="Avatar"
        className="w-[50px] h-[50px] rounded-lg object-cover"
      />
      <div className="flex flex-col gap-y-1 text-sm">
        <p>
          <span className="font-semibold">Education</span> fund for Durgham
          Family
        </p>
        <p className="text-text3">By Durgham Family</p>
      </div>
    </div>
  );
}

export default DashboardSearch;
