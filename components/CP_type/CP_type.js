"use client";

import CP_Header from "@/components/CP_Header/CP_Header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import CP_buttons from "@/components/CP_buttons/CP_buttons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CP_type = () => {
    const [mobile, setMobile1] = useState("");
  const [whatsapp_mobile, setMobile2] = useState("");
  const [emergency_mobile, setMobile3] = useState("");

  const handleInputChange = (e, setMobile) => {
    const digitsOnly = e.target.value.replace(/\D/g, "");
    if (digitsOnly.length <= 10) {
      setMobile(digitsOnly);
    }
  };

  return (
    <>
      <div
        className="bg-gradient-to-t  from-[#e5e3f5] via-[#f1effd;
  ] via-50%  to-[#e5e3f5]  h-full"
      >
        <CP_Header />
        <div className="px-[17px] mt-3">
          <div className="">
            <Label htmlFor="email" className="text-[14px] text-gray-500 mb-2">
              Type of Channel Partner *
            </Label>
            <div className="flex gap-2 item-center">
              <Select className="">
                <SelectTrigger className="w-full bg-white rounded-[7.26px] placeholder:text-[14px] placeholder:text-black font-semibold px-3 h-[39px] flex items-center">
                  <SelectValue
                    placeholder="IVF / Fertility Clinic"
                    className="placeholder:text-[14px] placeholder:text-black"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">IVF / Fertility Clinic</SelectItem>
                  <SelectItem value="dark">IVF / Fertility Clinic</SelectItem>
                  <SelectItem value="system">IVF / Fertility Clinic</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Clinic Details */}
            <div className="mt-5 bg-[#FFFFFF80] rounded-[12px] p-4">
              <strong className="text-[16px] text-black font-semibold">
                Clinic Details
              </strong>
              <div className="">
              <Label
                htmlFor="email"
                className="text-[14px] text-gray-500 mb-2 mt-5"
              >
                Clinic Name *
              </Label>
              <Input
                type="text"
                placeholder="Gyno Clinic"
                className="bg-white rounded-[7.26px] placeholder:text-[14px] placeholder:text-black font-semibold py-3 px-4 h-[39px]"
              />
              </div>
              <div className="">
              <Label
                htmlFor="email"
                className="text-[14px] text-gray-500 mb-2 mt-[22px]"
              >
                Unique URL *
              </Label>
              <div className="flex gap-[10px] items-center">
                <span className="text-[14px] text-gray-600">ekyamm.com/</span>
                <Input
                  type="text"
                  placeholder="Enter URL Name"
                  className="bg-white rounded-[7.26px] placeholder:text-[14px] placeholder:text-gray-500 py-3 px-4 h-[39px]"
                />
                </div>
              </div>
              <div className="">
              <Label
                htmlFor="email"
                className="text-[14px] text-gray-500 mb-2 mt-[22px]"
              >
                Clinic Primary Email Address *
              </Label>
              <Input
                type="text"
                placeholder="Case Sensitive"
                className="bg-white rounded-[7.26px] placeholder:text-[14px] placeholder:text-gray-500  py-3 px-4 h-[39px]"
              />
              </div>
              <div className="mt-[22px]">
                <Label
                  htmlFor="mobile"
                  className="text-[14px] text-gray-500 mb-2"
                >
                  Clinic Primary Mobile Number *
                </Label>

                <div className="flex items-center bg-white border rounded-[7.26px] h-[39px]">
                  <span className="text-[14px] font-semibold py-3 px-2">
                    +91
                  </span>
                  <Input
                    id="mobile"
                    type="text"
                    placeholder="9876543210"
                    value={mobile}
                    // onChange={handleInputChange}
                      onChange={(e) => handleInputChange(e, setMobile1)}
                    className="bg-white border rounded-[7.26px] rounded-l-none placeholder:text-[14px] placeholder:text-gray-500  py-3 w-full h-[39px]"
                    maxLength={10}
                    inputMode="numeric"
                    pattern="\d*"
                  />
                </div>
              </div>
              <div className="mt-[22px]">
                <div className="flex items-center">
                  <Label
                    htmlFor="mobile"
                    className="text-[14px] text-gray-500 w-[55%] mb-2"
                  >
                    Clinic Whatsapp Number *
                  </Label>
                  <div className="flex gap-[6px] items-center w-[45%]">
                    <Checkbox className="w-4 h-4 border border-[#776EA5] rounded-[1.8px] ms-1" />
                    <label htmlFor="" className="text-[12px] text-gray-500">
                      Same as Mobile Number
                    </label>
                  </div>
                </div>
                <div className="flex items-center bg-white border rounded-[7.26px] h-[39px]">
                  <span className="text-[14px] font-semibold py-3 px-2">
                    +91
                  </span>
                  <Input
                    id="Whatsapp_mobile"
                    type="text"
                    placeholder="9876543210"
                    value={whatsapp_mobile}
                    // onChange={handleInputChange}
                     onChange={(e) => handleInputChange(e, setMobile2)}
                    className="bg-white border rounded-[7.26px] rounded-l-none placeholder:text-[14px] placeholder:text-gray-500  py-3 px-4 w-full h-[39px]"
                    maxLength={10}
                    inputMode="numeric"
                    pattern="\d*"
                  />
                </div>
              </div>
              <div className="mt-[22px]">
                <Label
                  htmlFor=""
                  className="text-[14px] text-gray-500 mb-2"
                >
                  Clinic Emergency Number *
                </Label>

                <div className="flex items-center bg-white border rounded-[7.26px] h-[39px]">
                  <span className="text-[14px] font-semibold py-3 px-2">
                    +91
                  </span>
                  <Input
                    id="emergency_mobile"
                    type="text"
                    placeholder="9876543210"
                    value={emergency_mobile}
                    // onChange={handleInputChange}
                     onChange={(e) => handleInputChange(e, setMobile3)}
                    className="bg-white border rounded-[7.26px] rounded-l-none text-[14px] text-black font-semibold placeholder:text-[14px] placeholder:text-gray-500  py-3 px-4 w-full h-[39px]"
                    maxLength={10}
                    inputMode="numeric"
                    pattern="\d*"
                  />
                </div>
              </div>
            </div>
            <CP_buttons />
          </div>
        </div>
      </div>
    </>
  );
};

export default CP_type;
