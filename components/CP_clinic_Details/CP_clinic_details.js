import React from "react";
import CP_Header from "../CP_Header/CP_Header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CP_buttons from "@/components/CP_buttons/CP_buttons";

const CP_clinic_details = () => {
  return (
    <>
      <div className="bg-gradient-to-t  from-[#e5e3f5] via-[#f1effd;
  ] via-50%  to-[#e5e3f5]   h-full">
        <CP_Header />
        <div className="px-3">
        {/* clinic details */}
          <div className="mt-5 bg-[#FFFFFF80] rounded-[12px] p-4 px-3">
              <strong className="text-[16px] text-black font-semibold">
                Clinic Address Details
              </strong>
              <div className="">
              <Label
                htmlFor="email"
                className="text-[14px] text-gray-500 mb-2 mt-5"
              >
                PIncode *
              </Label>
              <Input
                type="text"
                placeholder="400053"
                className="bg-white rounded-[7.26px] text-[14px] text-black font-semibold placeholder:text-[14px] placeholder:text-black font-semibold pt-3 pb-3.5 px-4 h-[39px]"
              />
              </div>
              <div className="">
              <Label
                htmlFor="email"
                className="text-[14px] text-gray-500 mb-2 mt-[22px]"
              >
                Area Name
              </Label>
                <Input
                  type="text"
                  placeholder="Pimple Saudagar"
                  className="bg-white rounded-[7.26px] text-[14px] text-black font-semibold placeholder:text-[14px] placeholder:text-[#00000066] font-semibold 
 pt-3 pb-3.5 px-4 h-[39px]"
                /></div>
                <div className="">
              <Label
                htmlFor="email"
                className="text-[14px] text-gray-500 mb-2 mt-[22px]"
              >
                City 
              </Label>
              <Input
                type="text"
                placeholder="Mumbai"
                className="bg-white rounded-[7.26px] text-[14px] text-black font-semibold placeholder:text-[14px] placeholder:text-[#00000066] font-semibold  pt-3 pb-3.5 px-4 h-[39px]"
              />
              </div>
              <div className="">
               <Label
                htmlFor="email"
                className="text-[14px] text-gray-500 mb-2 mt-[22px]"
              >
                State
              </Label>
              <Input
                type="text"
                placeholder="Maharashtra"
                className="bg-white rounded-[7.26px] text-[14px] text-black font-semibold placeholder:text-[14px] placeholder:text-[#00000066] font-semibold  pt-3 pb-3.5 px-4 h-[39px]"
              />
              </div>
            </div>
             <CP_buttons/>
            </div>
      </div>
    </>
  );
};

export default CP_clinic_details;
