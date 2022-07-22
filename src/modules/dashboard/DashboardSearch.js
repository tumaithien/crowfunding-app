import React from "react";

const DashboardSearch = () => {
  return (
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
  );
};

export default DashboardSearch;
