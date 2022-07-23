import {
  IconDarkmode,
  IconDashboard,
  IconLogout,
  IconPayment,
  IconProfile,
  IconWithdraw,
} from "components/icons";
import IconCampaign from "components/icons/IconCampaign";
import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "utils/classNames";

const sidebarMenu = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: <IconCampaign></IconCampaign>,
    title: "Campaign",
    url: "/campaign",
  },
  {
    icon: <IconPayment></IconPayment>,
    title: "Payment",
    url: "/payment",
  },
  {
    icon: <IconWithdraw></IconWithdraw>,
    title: "Withdraw",
    url: "/withdraw",
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "Profile",
    url: "/profile",
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "#",
    onClick: () => {},
  },
  {
    icon: <IconDarkmode></IconDarkmode>,
    title: "Light/Dark",
    url: "#",
    onClick: () => {},
  },
];

const DashboardSidebar = () => {
  return (
    <div className="w-full h-full max-h-[733px] flex flex-col md:w-[76px] rounded-3xl bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] py-10 px-[14px]">
      {sidebarMenu.map((item) => (
        <NavLink
          to={item.url}
          key={item.title}
          className={classNames(
            "flex items-center gap-x-5 md:w-12 md:h-12 md:rounded-lg md:justify-center md:mb-8 last:mb-auto last:bg-white last:shadow-sdprimary",
            ({ isActive }) =>
              isActive ? "bg-primary text-primary bg-opacity-20" : ""
          )}
        >
          <span>{item.icon}</span>
          <span className="md:hidden">{item.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
