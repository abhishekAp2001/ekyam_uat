"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "../ui/button";
import Select_Header from "../Select_Header/Select_header";
import Footer_bar from "../Footer_bar/Footer_bar";
import Link from "next/link";

const Cloudnine_Hospital = ({type}) => {
  const [mobile, setMobile] = useState("");

  const handleInputChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, "");
    if (digitsOnly.length <= 10) {
      setMobile(digitsOnly);
    }
  };

  return (
    <>
    <div className="bg-gradient-to-t from-[#fce8e5] to-[#eeecfb] h-screen flex flex-col">
      <Select_Header />
      <div className="h-full overflow-auto mb-[40%] px-[17px] mt-[22px] bg-gradient-to-t from-[#fce8e5] to-[#eeecfb]">
        <div className="w-full h-[25px] text-[#776EA5] font-semibold text-[20px] leading-[25px] mb-6 text-center">
          Cloudnine Hospital
        </div>
        {/* Patient Details */}
        <div className="bg-[#ffffff67] rounded-[12px] p-5 mt-[45px] relative">
          <div>
            <Label className="text-[14px] text-gray-500 font-medium mb-2 mt-2 block">
              Patient Name <span className="text-[#FF0000]">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Shubham Naik"
              className="bg-white rounded-[7.26px] text-[14px] text-black font-semibold placeholder:text-[#00000066] py-3 px-4 h-[39px]"
              readOnly
            />
          </div>
          <div>
            <Label className="text-[14px] text-gray-500 font-medium mb-2 mt-5 block">
              Primary Mobile Number <span className="text-[#FF0000]">*</span>
            </Label>
            <div className="flex gap-2 items-center">
              <Select>
                <SelectTrigger className="w-[69px] bg-white rounded-[7.26px] px-3 h-[39px]">
                  <SelectValue placeholder="+91" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+91">+91</SelectItem>
                </SelectContent>
              </Select>
              <Input
                type="text"
                placeholder="8878717271"
                value={mobile}
                onChange={handleInputChange}
                className="bg-white rounded-[7.26px] text-[14px] text-black font-semibold placeholder:text-[#00000066] py-3 px-4 h-[39px]"
              />
            </div>
          </div>
        </div>

        {/* Sessions */}
        <div className="mt-3 bg-[#FFFFFF80] rounded-[12px] p-4">
          <strong className="text-[16px] font-[600] text-black block mb-4">
            Select Number of Sessions
          </strong>
          <div className="flex items-center gap-2 mb-4">
            <Checkbox id="session4" className="h-4 w-[16.05px] border-[1.5px] border-[#776EA5] rounded-[1.5px]" />
            <Label
              htmlFor="session4"
              className="text-[16px] text-gray-500 font-semibold"
            >
              4 Sessions
            </Label>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Checkbox id="session8" className="h-4 w-[16.05px] border-[1.5px] border-[#776EA5] rounded-[1.5px]" />
            <Label
              htmlFor="session8"
              className="text-[16px] text-gray-500 font-semibold"
            >
              8 Sessions
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="session12" className="h-4 w-[16.05px] border-[1.5px] border-[#776EA5] rounded-[1.5px]" />
            <Label
              htmlFor="session12"
              className="text-[16px] text-gray-500 font-semibold"
            >
              12 Sessions
            </Label>
          </div>
        </div>

        {/* Session Fees */}
        <div className="my-3 bg-[#FFFFFF80] rounded-[12px] pl-4 pb-4 pt-4">
          <strong className="text-[16px] font-[600] text-black block mb-3">
            Select Session Fees
          </strong>
          <div className="bg-white rounded-[12px] p-5">
            <div className="text-[14px] text-gray-500 font-[500] mb-3">
              Session Fee (Hourly):{" "}
              <span className="font-[700]">₹150 per session</span>
            </div>
            <Slider defaultValue={[10]} max={100} step={1} />
            <div className="flex justify-between mt-2 text-[14px] text-[#776EA5] font-[600]">
              <span>₹150/-</span>
              <span>₹1,500/-</span>
            </div>
          </div>
        </div>
      </div>
       {/* Buttons */}
        <div className="bg-gradient-to-b from-[#fce8e5] to-[#fce8e5] flex flex-col items-center gap-3 fixed bottom-0 py-[23px] px-[17px] left-0 right-0 ">
            <div className="w-full flex gap-[12.2px]">
          <Button className="border border-[#CC627B] bg-transparent text-[14px] font-[600] text-[#CC627B] rounded-[8px] w-[48%] h-[45px]">
            Cancel
          </Button>
          <Button className="bg-gradient-to-r from-[#BBA3E4] to-[#E7A1A0] text-[14px] font-[600] text-white rounded-[8px] w-[48%] h-[45px]">
              <Link href={`/channel-partner/${type}/np_registration`} className="text-[12px] ">
                Generate Invoice
              </Link>
          </Button>
          </div>
           <Footer_bar/>
        </div>
    </div>
    </>
  );
};

export default Cloudnine_Hospital;
