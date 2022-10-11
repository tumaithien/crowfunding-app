import { Button } from "components/button";
import { Input } from "components/input";
import React from "react";
import { useForm } from "react-hook-form";

const CampaignSupport = () => {
  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
  });
  function handleSupport(values) {
    console.log(values);
  }
  return (
    <div>
      <h2 className="text-lg font-semibold mb-5">Support</h2>
      <div className="shadow-1 bg-white w-full rounded-lg py-7 px-6">
        <h3 className="text-text3 text-xl mb-7 text-center">
          Pledge without reward
        </h3>
        <form onSubmit={handleSubmit(handleSupport)}>
          <Input
            control={control}
            className="text-lg px-5 py-3 w-full rounded-md font-medium border border-strock"
            placeholder="$10"
            name="support"
          ></Input>

          <div className="bg-graySoft p-5 rounded-lg mb-5">
            <h3 className="text-text2 mb-5 font-semibold">
              Back it because you believe in it.
            </h3>
            <p className="text-text3">
              Support the project for no reward, just because it speaks to you.
            </p>
          </div>
          <Button kind="secondary" className="w-full" type="submit">
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CampaignSupport;
