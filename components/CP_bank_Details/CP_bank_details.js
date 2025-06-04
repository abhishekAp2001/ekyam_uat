"use client";
import React, { useState } from "react";
import CP_Header from "../CP_Header/CP_Header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import CP_buttons from "@/components/CP_buttons/CP_buttons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const CP_bank_details = () => {
  const [mobile, setMobile] = useState("");

  const handleInputChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    if (digitsOnly.length <= 10) {
      setMobile(digitsOnly);
    }
  };
  return (
    <>
      <div
        className="bg-gradient-to-t  from-[#e5e3f5] via-[#f1effd;
  ] via-50%  to-[#e5e3f5]   h-full"
      >
        <CP_Header />
        <div className="px-3">
          {/* clinic details */}
          <div className="mt-[11.64px] bg-[#FFFFFF80] rounded-[12px] p-4 px-3">
            <strong className="text-[16px] text-black font-semibold">
              Bank Details
            </strong>
            <div className="">
              <Label
                htmlFor="email"
                className="text-[14px] text-gray-500 mb-2 mt-[22px]"
              >
                Bank Name *
              </Label>
              <Input
                type="text"
                placeholder="Add Bank Name"
                className="bg-white rounded-[7.26px] placeholder:text-[14px] placeholder:text-gray-500 font-semibold 
 pt-3 pb-3.5 px-4 h-[39px]"
              />
            </div>
            <div className="">
              <Label
                htmlFor="text"
                className="text-[14px] text-gray-500 font-medium mb-2 mt-[22px]"
              >
                Account Number *
              </Label>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Add Account Number"
                  className="bg-white rounded-[7.26px] placeholder:text-[14px] placeholder:text-gray-500 font-semibold  pt-3 pb-3.5 px-4 h-[39px]"
                />
                <Image
                  src="/images/green_check.png"
                  width={20}
                  height={20}
                  className="w-[20.83px] pt-1.5 absolute top-[3px] right-3.5"
                  alt="ekyamm"
                />
              </div>
            </div>
            <div className="">
              <Label
                htmlFor="text"
                className="text-[14px] text-gray-500 font-medium mb-2 mt-[22px]"
              >
                Confirm Account Number *
              </Label>
              <div className="relative">
              <Input
                type="text"
                placeholder="Enter Confirm Account Number"
                className="bg-white rounded-[7.26px] placeholder:text-[14px] placeholder:text-gray-500 font-semibold  pt-3 pb-3.5 px-4 h-[39px]"
              />
               <Image
                  src="/images/error_circle.png"
                  width={20}
                  height={20}
                  className="w-[20.83px] pt-1.5 absolute top-[3px] right-3.5"
                  alt="ekyamm"
                />
                </div>
            </div>
            <div className="">
              <Label
                htmlFor="text"
                className="text-[14px] text-gray-500 font-medium mb-2 mt-[22px]"
              >
                Account Holder Number *
              </Label>
              <Input
                type="text"
                placeholder="Add Account Holder Name"
                className="bg-white rounded-[7.26px] placeholder:text-[14px] placeholder:text-gray-500 font-semibold  pt-3 pb-3.5 px-4 h-[39px]"
              />
            </div>
            <div className="">
              <Label
                htmlFor="text"
                className="text-[14px] text-gray-500 font-medium mb-2 mt-[22px]"
              >
                IFSC Code *
              </Label>
              <Input
                type="text"
                placeholder="Add IFSC Code"
                className="bg-white rounded-[7.26px] placeholder:text-[14px] placeholder:text-gray-500 font-semibold  pt-3 pb-3.5 px-4 h-[39px]"
              />
            </div>
          </div>
          <CP_buttons />
        </div>
      </div>
    </>
  );
};

export default CP_bank_details;
