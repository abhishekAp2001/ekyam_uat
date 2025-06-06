"use client";
import React, { useState } from "react";
import IP_Header from "../IP_Header/IP_Header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import IP_Buttons from "../IP_Buttons/IP_Buttons";

const IP_Single_Session_Fees = () => {
  const specializations = [
    "Fertility",
    "Womens Health",
    "PCOS",
    "PCOD",
    "Cardiology",
    "Dermatology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
    "Gynecology",
    "Endocrinology",
    "Oncology",
  ];
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // Optional: Filter logic for search
  const filteredSpecializations = specializations?.filter((item) =>
    item.name?.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSelect = (item) => {
    setCurrentSelection(item);
    setOpen(false);
  };

  const [selectedItems, setSelectedItems] = useState([]);
  const [currentSelection, setCurrentSelection] = useState("Fertility");

  const handleSelectItem = (item) => {
    setCurrentSelection(item);
    setOpen(false);
    setSearchValue("");
  };

  const handleAddItem = () => {
    if (currentSelection && !selectedItems.includes(currentSelection)) {
      setSelectedItems((prev) => [...prev, currentSelection]);
    }
  };

  return (
    <div className="bg-gradient-to-t from-[#fce8e5] to-[#eeecfb] h-full flex flex-col">
      <IP_Header text="Add Individual Practitioner Details" />
      <div className="h-full mb-[26%] overflow-auto px-[17px] mt-3 bg-gradient-to-t from-[#fce8e5] to-[#eeecfb]">
        {/* single session session */}
        <div className="bg-[#FFFFFF80] rounded-[12px] p-4 px-3">
          <strong className="text-[16px] text-black font-semibold">
            Single Session Fees
          </strong>
          <div className="mt-5">
            <Label
              htmlFor="text"
              className="text-[14px] text-gray-500 font-medium mb-[7.59px]"
            >
              Session Fee (Hourly) *
            </Label>
            <Input
              type="text"
              placeholder="₹ 1,500/-"
              className="bg-white rounded-[7.26px] text-[14px] text-black font-semibold placeholder:text-[14px] placeholder:text-[#00000066] py-3 px-4 h-[39px]"
            />
          </div>
        </div>
        {/* package session */}
        <div className="bg-[#FFFFFF80] rounded-[12px] p-4 px-3 mt-[17.9px]">
          <strong className="text-[16px] text-black font-semibold">
            Package Sessions (Optional)
          </strong>
          <div className="flex flex-col gap-[15px]">
            <div className="flex items-center justify-between mt-5">
              <div className="flex gap-2 items-center">
                <Checkbox className="w-4 h-4 border-[1.5px] border-[#776EA5] rounded-[1.8px] ms-1" />
                <label
                  htmlFor=""
                  className="text-[16px] text-gray-500 font-semibold"
                >
                  4 Sessions
                </label>
              </div>
              <div className="">
                <Input
                  type="text"
                  placeholder="₹ 1,200/-"
                  className="bg-white rounded-[5px] text-[14px] text-black font-semibold placeholder:text-[14px] placeholder:text-[#00000066] py-3 px-2 w-[74px] h-[28px]"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <Checkbox className="w-4 h-4 border-[1.5px] border-[#776EA5] rounded-[1.8px] ms-1" />
                <label
                  htmlFor=""
                  className="text-[16px] text-gray-500 font-semibold"
                >
                  8 Sessions
                </label>
              </div>
              <div className="">
                <Input
                  type="text"
                  placeholder="₹ 1,000/-"
                  className="bg-white rounded-[5px] text-[14px] text-black font-semibold placeholder:text-[14px] placeholder:text-[#00000066] py-3 px-2 w-[74px] h-[28px]"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <Checkbox className="w-4 h-4 border-[1.5px] border-[#776EA5] rounded-[1.8px] ms-1" />
                <label
                  htmlFor=""
                  className="text-[16px] text-gray-500 font-semibold"
                >
                  12 Sessions
                </label>
              </div>
              <div className="">
                <Input
                  type="text"
                  placeholder="₹ 800/-"
                  className="bg-white rounded-[5px] text-[14px] text-black font-semibold placeholder:text-[14px] placeholder:text-[#00000066] py-3 px-2 w-[74px] h-[28px]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* kyc */}
        <div className="bg-[#FFFFFF80] rounded-[12px] p-4 px-3 mt-[17.9px]">
          <strong className="text-[16px] text-black font-semibold">KYC</strong>
          <div className="mt-5">
            <Label
              htmlFor="text"
              className="text-[14px] text-gray-500 font-medium mb-[7.59px]"
            >
              Lorem Ipsum
            </Label>
            <Input
              type="text"
              placeholder="Lorem Ipsum"
              className="bg-white rounded-[7.26px] text-[14px] text-black font-semibold placeholder:text-[14px] placeholder:text-[#00000066] py-3 px-4 h-[39px]"
            />
          </div>
        </div>

        {/* Button footer */}
        <IP_Buttons />
      </div>
    </div>
  );
};

export default IP_Single_Session_Fees;
