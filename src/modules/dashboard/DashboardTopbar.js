import { Button } from "components/button";
import React from "react";
import DashboardFund from "./DashboardFund";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-10 flex-1">
        <img srcSet="/logo.png 2x" alt="crowfunding-app" />
        <div className="w-full max-w-[458px]">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center gap-x-10">
        <DashboardFund></DashboardFund>
        <Button className="bg-secondary px-7">Start a campaign</Button>
        <img
          srcSet="/logo.png 2x"
          alt="crowfunding-app"
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default DashboardTopbar;
