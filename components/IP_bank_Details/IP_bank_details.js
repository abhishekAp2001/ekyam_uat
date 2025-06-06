"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Button } from "../ui/button";
import IP_Header from "../IP_Header/IP_Header";
import Link from "next/link";
import IP_Buttons from "../IP_Buttons/IP_Buttons";

const IP_bank_details = () => {
  const [mobile, setMobile] = useState("");

  const handleInputChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    if (digitsOnly.length <= 10) {
      setMobile(digitsOnly);
    }
  };
  return (
    <>
      <div className="bg-gradient-to-t  from-[#fce8e5]  to-[#eeecfb]   h-full flex flex-col">
        <IP_Header text="Add Individual Practitioner Details" />
        <div className="h-full mb-[26%] overflow-auto px-[17px] mt-3bg-gradient-to-t  from-[#fce8e5]  to-[#eeecfb]">
          {/* clinic details */}
          <div className=" bg-[#FFFFFF80] rounded-[12px] p-4 px-3">
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
 py-3 px-4 h-[39px]"
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
                  className="bg-white rounded-[7.26px] placeholder:text-[14px] placeholder:text-gray-500 font-semibold py-3 px-4 h-[39px]"
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
                  className="bg-white rounded-[7.26px] placeholder:text-[14px] placeholder:text-gray-500 font-semibold py-3 px-4 h-[39px]"
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
                disabled
                className="text-[14px] text-gray-500 font-medium mb-2 mt-[22px]"
              >
                Account Holder Number *
              </Label>
              <Input
                type="text"
                disabled
                placeholder="Add Account Holder Name"
                className="bg-white rounded-[7.26px] placeholder:text-[14px] placeholder:text-gray-500 font-semibold py-3 px-4 h-[39px]"
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
                className="bg-white rounded-[7.26px] placeholder:text-[14px] placeholder:text-gray-500 font-semibold py-3 px-4 h-[39px]"
              />
            </div>
          </div>
          {/* button */}
          <IP_Buttons />
        </div>
      </div>
    </>
  );
};

export default IP_bank_details;
