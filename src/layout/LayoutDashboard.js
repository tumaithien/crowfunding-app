import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import React from "react";
import { Outlet } from "react-router-dom";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="p-10 bg-lite min-h-screen">
      <DashboardTopbar></DashboardTopbar>
      <div className="dashboard-main flex gap-x-10 items-start">
        <DashboardSidebar></DashboardSidebar>
        <div className="dashboard-children flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
