import React from "react";
import CP_Header from "../CP_Header/CP_Header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CP_buttons from "@/components/CP_buttons/CP_buttons";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const CP_billing_details = () => {
  return (
    <>
      <div
        className="bg-gradient-to-t  from-[#e5e3f5] via-[#f1effd;
  ] via-50%  to-[#e5e3f5]   h-full flex flex-col"
      >
        <CP_Header />
        <div className="h-full mb-[26%] overflow-auto px-[17px] mt-3 bg-gradient-to-t  from-[#e5e3f5] via-[#f1effd] via-50%  to-[#e5e3f5]">
          {/* clinic details */}
          <div className="mt-3 bg-[#FFFFFF80] rounded-[12px] p-4 px-3">
            <strong className="text-[16px] text-black font-semibold">
              Billing Details
            </strong>
            <div className="mt-5">
              <label htmlFor="" className="text-[14px] text-gray-500">  
                Billing Type *
              </label>
              <RadioGroup defaultValue="comfortable">
                <div className="flex items-center gap-3 mt-[10px]">
                  <RadioGroupItem
                    value="default"
                    id="r1"
                    className="w-5 h-5 flex itmes justify-center"
                  />
                  <Label htmlFor="r1" className="text-[16px]">
                    Monthly Billing
                  </Label>
                </div>
                <div className="flex items-center gap-3 my-1">
                  <RadioGroupItem
                    value="comfortable"
                    id="r2"
                    className="w-5 h-5 flex itmes justify-center"
                  />
                  <Label htmlFor="r2" className="text-[16px]">
                    On-Spot Payment
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem
                    value="compact"
                    id="r3"
                    className="w-5 h-5 flex itmes justify-center"
                  />
                  <Label htmlFor="r3" className="text-[16px]">
                    Patient Pays
                  </Label>
                </div>
                <div className="">
                   <Label
                htmlFor="Pan No."
                className="text-[14px] text-gray-500 mb-2 mt-5"
              >
                Accounts Payable
              </Label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white rounded-[7.26px] text-[14px] text-black font-semibold placeholder:text-[14px] placeholder:text-[#00000066] py-3 px-4 h-[39px]"
              />
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="mt-5 bg-[#FFFFFF80] rounded-[12px] p-4 px-3">
            <strong className="text-[16px] text-black font-semibold">
              KYC
            </strong>
            <div className="mt-5">
              <Label
                htmlFor="Pan No."
                className="text-[14px] text-gray-500 mb-2"
              >
                PAN No.
              </Label>
              <Input
                type="text"
                placeholder="Enter your Pan no."
                className="bg-white rounded-[7.26px] text-[14px] text-black font-semibold placeholder:text-[14px] placeholder:text-[#00000066] py-3 px-4 h-[39px]"
              />
            </div>
            <div className="mt-5">
              <Label
                htmlFor="gst"
                className="text-[14px] text-gray-500 mb-2 block"
              >
                GST No.
              </Label>

              <div className="flex justify-between items-center bg-white rounded-[7.26px] overflow-hidden h-[39px]">
                <select
                  className="bg-white rounded-[7.26px] text-[14px]  font-semibold placeholder:text-[14px] placeholder:text-gray-500 w-[16%]  h-[39px] px-2 outline-none text-gray-500"
                  defaultValue="27"
                >
                  <option value="27">27</option>
                  <option value="29">29</option>
                  <option value="24">24</option>
                  <option value="09">09</option>
                </select>

                <input
                  type="text"
                  value="ABCDE1234F"
                  readOnly
                  className="bg-[#cecece] border-l border-r rounded-l-none rounded-r-none rounded-[7.26px] placeholder:text-[14px] placeholder:text-[#00000066] font-semibold py-3  h-[39px] px-2 text-gray-500 outline-none"
                />
                <input
                  type="text"
                  maxLength={3}
                  placeholder="Z5G"
                  className="text-[14px] placeholder:text-[14px] font-semibold px-2 text-black outline-none w-[50px]"
                />
              </div>
            </div>
          </div>
        </div>

        <CP_buttons />
      </div>
    </>
  );
};

export default CP_billing_details;
