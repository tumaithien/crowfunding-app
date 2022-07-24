import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Input } from "components/input";
import { Label } from "components/label";
import React from "react";
import { useForm } from "react-hook-form";

const CampaignAddNew = () => {
  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
  });
  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="text-center mb-10">
        <h1 className="py-4 px-[60px] text-[25px] inline-block text-text2 font-bold bg-text4 bg-opacity-5">
          Start a Campaign
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <FormGroup>
            <Label htmlFor="title">Campaign Title *</Label>
            <Input
              name="title"
              control={control}
              placeholder="Write a titel"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="category">Select a category *</Label>
            {/* Dropdown */}
          </FormGroup>
        </FormRow>
      </form>
    </div>
  );
};

export default CampaignAddNew;
