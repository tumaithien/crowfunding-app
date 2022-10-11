import { Button } from "components/button";
import Heading from "components/common/Heading";
import React from "react";

const PaymentPage = () => {
  return (
    <div className="pt-[66px]">
      <div className="max-w-[624px] w-full mx-auto text-center">
        <Heading className="text-[25px] leading-9 mb-[10px]">
          Connect Your Payment Processor
        </Heading>
        <p className="text-text3">
          To Start Processing credit card payments and donations, you will need
          to select either Paypal or Payoneer
        </p>
        <div className="grid grid-cols-2 gap-x-10 mt-[60px]">
          <div className="bg-white shadow-1 rounded-[20px] pt-9 px-6 pb-6 flex flex-col items-center">
            <img
              srcSet="/paypal.png"
              className="object-cover w-[80px] h-[80px] mb-10"
              alt=""
            />
            <p className="text-text3 text-sm mb-6">
              Get paid directly via Paypal.
            </p>
            <Button kind="ghost" className="w-full" type="button">
              Connect
            </Button>
          </div>
          <div>
            <div className="bg-white shadow-1 rounded-[20px] pt-9 px-6 pb-6 flex flex-col items-center">
              <img
                srcSet="/payoneer.png"
                className="object-cover w-[80px] h-[80px] mb-10"
                alt=""
              />
              <p className="text-text3 text-sm mb-6">
                Get paid worldwide your Work.
              </p>
              <Button kind="ghost" className="w-full" type="button">
                Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
