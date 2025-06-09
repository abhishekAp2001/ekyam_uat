"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Button } from "../ui/button";
import PR_Header from "../PR_Header/PR_Header";
import Footer_bar from "../Footer_bar/Footer_bar";
import Link from "next/link";

const Patient_Registration = ({type}) => {
  const [mobile, setMobile] = useState("");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({
    code: "+91",
    name: "India",
    flag: "/images/india.png",
  });

  const countries = [
    { code: "+91", name: "India", flag: "/images/india.png" },
    { code: "+1", name: "USA", flag: "/images/usa.png" },
    { code: "+44", name: "UK", flag: "/images/uk.png" },
    { code: "+61", name: "Australia", flag: "/images/aus.png" },
  ];

  const handleInputChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, "");
    if (digitsOnly.length <= 10) {
      setMobile(digitsOnly);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-t from-[#fce8e5] to-[#eeecfb] h-full flex flex-col">
        <PR_Header />
        <div className="h-full overflow-auto px-[17px] mt-[22px]">
          <div className="w-full h-[25px] text-[#776EA5] font-semibold text-[20px] leading-[25px] mb-6 text-center">
            Cloudnine Hospital
          </div>
          <div className="bg-[#FFFFFFB2] rounded-[12px] p-5 mt-[45px] relative">
            <div>
              <Label className="text-[14px] text-gray-500 mb-2">
                First Name <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                placeholder="Enter First Name"
                className="bg-white rounded-[7.26px] placeholder:text-[14px] placeholder:text-gray-500 font-semibold py-3 px-4 h-[39px]"
              />
            </div>
            <div>
              <Label className="text-[14px] text-gray-500 font-medium mb-2 mt-[22px]">
                Last Name <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Enter Last Name"
                  className="bg-white rounded-[7.26px] placeholder:text-[14px] placeholder:text-gray-500 font-semibold py-3 px-4 h-[39px]"
                />
              </div>
            </div>

            <div>
              <Label className="text-[14px] text-gray-500 font-medium mb-2 mt-[22px]">
                Email Address
              </Label>
              <Input
                type="text"
                placeholder="Enter Email Address"
                className="bg-white rounded-[7.26px] placeholder:text-[14px] placeholder:text-gray-500 font-semibold py-3 px-4 h-[39px]"
              />
            </div>

            <div>
              <Label className="text-[14px] text-gray-500 font-medium mb-2 mt-[22px]">
                Primary Mobile Number <span className="text-red-500">*</span>
              </Label>
              <div className="flex items-center gap-2 relative">
                {/* Custom Country Dropdown */}
                <div className="relative w-[121px]">
                  <div
                    onClick={() => setOpen(!open)}
                    className="flex items-center justify-between pl-2 pr-2 py-2 bg-white border border-gray-300 rounded-[7.26px] h-[38px] cursor-pointer w-full"
                  >
                    <div className="flex items-center gap-[6px]">
                      <Image
                        src={selected.flag}
                        alt={selected.name}
                        width={16}
                        height={16}
                        className="w-[16px] h-[16px] object-cover"
                      />
                      <span className="font-semibold text-[16px] leading-[100%]">
                        {selected.code}
                      </span>
                    </div>
                    <Image
                      src="/images/arrow.png"
                      alt="dropdown"
                      width={12}
                      height={13}
                      className="w-[12.53px] h-[13px] rotate-90 ml-[2px]"
                    />
                  </div>

                  {open && (
                    <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-[7.26px] shadow-md">
                      {countries.map((item) => (
                        <li
                          key={item.code}
                          onClick={() => {
                            setSelected(item);
                            setOpen(false);
                          }}
                          className="flex items-center gap-2 px-2 py-2 cursor-pointer hover:bg-gray-100"
                        >
                          <Image
                            src={item.flag}
                            alt={item.name}
                            width={16}
                            height={16}
                            className="w-[16px] h-[16px] object-cover"
                          />
                          <span className="font-semibold text-[16px] leading-[100%]">
                            {item.code}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <input
                  type="text"
                  value={mobile}
                  onChange={handleInputChange}
                  placeholder="Enter Mobile Number"
                  className="bg-white border border-gray-300 rounded-[7.26px] placeholder:text-[14px] placeholder:text-gray-500 font-semibold py-2 px-4 h-[38px] w-full"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-[18px] mt-[25px] px-1 ml-[31px] mr-[31px]">
            <Button className="border border-[#CC627B] bg-transparent text-[14px] font-[600] text-[#CC627B] py-[14.5px] rounded-[8px] flex items-center justify-center w-[48%] h-[45px]">
               <Link href={`/channel-partner/${type}/existing-patient`} className="text-[14px] ">
                Existing Patient 
              </Link>
            </Button>
            <Button className="border border-[#CC627B] bg-transparent text-[14px] font-[600] text-[#CC627B] py-[14.5px] rounded-[8px] flex items-center justify-center w-[48%] h-[45px] opacity-30">
                <Link href={`/channel-partner/${type}/patient-history`} className="text-[14px] ">
                + Patient History
              </Link> 
            </Button>
          </div>
        </div>
        <div className="bg-gradient-to-t from-[#fce8e5] to-[#fce8e5] flex flex-col justify-between items-center gap-3 mt-[20.35px] fixed bottom-0 pb-[23px] left-0 right-0 px-4">
         <Footer_bar/>
        </div>
      </div>
    </>
  );
};

export default Patient_Registration;
