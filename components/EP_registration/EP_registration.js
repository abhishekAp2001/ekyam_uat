"use client";
import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Image from "next/image";
import { Button } from "../ui/button";
import EP_Header from "../EP_Header/EP_Header";
import Footer_bar from "../Footer_bar/Footer_bar";
import Link from "next/link";
import {useRouter} from "next/navigation"

const EP_registration = ({type}) =>{

  const router = useRouter()
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
        <EP_Header />
        <div className="h-full mb-[28%] overflow-auto px-[17px] mt-[22px]">
          <div className="w-full h-[25px] text-[#776EA5] font-semibold text-[20px] leading-[25px] mb-6 text-center">
            Cloudnine Hospital
          </div>

          <div className="bg-[#FFFFFFB2] rounded-[12px] p-5 mt-[45px] relative">
            {/* Mobile number */}
            <div>
              <Label className="text-[14px] text-gray-500 font-medium mb-2">
                Primary Mobile Number <span className="text-red-500">*</span>
              </Label>
              <div className="flex items-center gap-2 relative">
                {/* Custom Country Dropdown */}
                <div className="relative w-[121px]">
                  <div
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-1 pl-2 pr-4 py-2 bg-white border border-gray-300 rounded-[7.26px] h-[38px] cursor-pointer"
                  >
                    <Image
                      src={selected.flag}
                      alt={selected.name}
                      width={16}
                      height={16}
                      className="w-[16px] h-[16px] object-cover"
                    />
                    <span className="ml-1 font-semibold text-sm leading-[100%]">
                      {selected.code}
                    </span>
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
                          <span className="font-semibold text-sm leading-[100%]">
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

            {/* First name */}
            <div className="mt-6">
              <Label className="text-[14px] text-gray-500 mb-2">
                First Name <span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                placeholder="Enter First Name"
                className="bg-white rounded-[7.26px] placeholder:text-[14px] placeholder:text-gray-500 font-semibold py-3 px-4 h-[39px]"
              />
            </div>

            {/* Last name */}
            <div className="mt-6">
              <Label className="text-[14px] text-gray-500 font-medium mb-2 mt-[5px]">
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

            {/* Email address */}
            <div className="mt-6">
              <Label className="text-[14px] text-gray-500 font-medium mb-2 mt-[5px]">
                Email Address
              </Label>
              <Input
                type="text"
                placeholder="Enter Email Address"
                className="bg-white rounded-[7.26px] placeholder:text-[14px] placeholder:text-gray-500 font-semibold py-3 px-4 h-[39px]"
              />
            </div>

            {/* Profile Section (centered horizontally) */}
            <div className="absolute top-[26%] left-1/2 transform -translate-x-1/2 w-full h-[226px] rounded-[16px] bg-gradient-to-br from-[#DFDAFB] to-[#F9CCC5] backdrop-blur-[20px] shadow-[0_5px_20px_0_rgba(0,0,0,0.2)]  items-start justify-start px-4 py-[14px]">
              <div className="w-full h-[198px] flex flex-col gap-[12px]">
                {[
                  { name: "Tansen Khan", image: "/images/photo.png" },
                  { name: "Sanya Mirza", image: "/images/photo2.png" },
                  { name: "Saleem Khan", image: "/images/photo1.png" },
                ].map((profile, index) => (
                  <div
                    key={index}
                    className="w-full h-[58px] bg-white/50 rounded-[12px] px-[12px] py-[8px] flex items-center justify-between gap-[118px]"
                  >
                    <div className="flex items-center gap-[12px]">
                      <Image
                        alt="profile"
                        src={profile.image}
                        width={42}
                        height={42}
                        className="rounded-full h-[42px] w-[42px]"
                      />
                      <div className="flex flex-col justify-center gap-[5px]">
                        <Label className="text-sm text-black font-semibold leading-[16px]">
                          {profile.name}
                        </Label>
                        <Label className="text-[11px] text-[#6D6A5D] font-medium leading-[14px]">
                          +91 9876543210
                        </Label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile End */}
          </div>

          {/* Buttons */}
          <div className="flex justify-center items-center gap-[18px] mt-[25px] px-1 ml-[31px] mr-[31px]">
            <Button className="border border-[#CC627B] bg-transparent text-[14px] font-[600] text-[#CC627B] py-[14.5px] rounded-[8px] flex items-center justify-center w-[141px] h-[45px]">
               <Link href={`/channel-partner/${type}/patient-registration`}>
                New Patient  
               </Link>
            </Button>
            <Button className="border border-[#CC627B] bg-transparent text-[14px] font-[600] text-[#CC627B] py-[14.5px] rounded-[8px] flex items-center justify-center w-[141px] h-[45px] opacity-30" >
              <Link href={`/channel-partner/${type}/patient-history`}>
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

export default EP_registration;
