import { Button } from "components/button";
import Overlay from "components/common/Overlay";
import { Input } from "components/input";
import CampaignPerk from "modules/campaign/CampaignPerk";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import React from "react";
import { useForm } from "react-hook-form";
import ReactModal from "react-modal";
import { Outlet } from "react-router-dom";

const LayoutDashboard = ({ children }) => {
  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
  });
  function handleModal(values) {
    console.log(values);
  }
  return (
    <div className="p-10 bg-lite min-h-screen">
      <ReactModal
        isOpen={false}
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
        className="modal-content w-full max-w-[520px] bg-white py-[50px] px-10 rounded-[20px] outline-none relative max-h-[90vh] overflow-y-auto scroll-hidden"
      >
        <button className="absolute w-11 h-11 flex justify-center items-center z-10 top-[10px] right-5 text-text2">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="font-bold text-[25px] mb-10 text-center">
          Back this project
        </h2>
        <p className="text-text2 text-sm font-medium">
          Enter the contribute amount
        </p>
        <form onSubmit={handleSubmit(handleModal)}>
          <Input
            control={control}
            className="text-lg px-5 py-3 w-full rounded-md font-medium border border-strock"
            placeholder="$10"
            name="support"
            classWrapper="pb-5"
          ></Input>
          <p className="text-text3 mb-5">
            Contribution are not associatied with perks
          </p>
          <Button kind="primary" className="px-10" type="submit">
            Continue
          </Button>
        </form>
        <div className="mt-[60px]"></div>
        <div className="flex flex-col gap-y-[40px]">
          <CampaignPerk showButton></CampaignPerk>
          <CampaignPerk showButton></CampaignPerk>
        </div>
      </ReactModal>
      <Overlay></Overlay>
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
