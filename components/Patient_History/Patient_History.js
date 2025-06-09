"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { Button } from "../ui/button";
import PR_Header from "../PR_Header/PR_Header";
import { Textarea } from "../ui/textarea";
import Footer_bar from "../Footer_bar/Footer_bar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Patient_History = ({type}) => {
  const router = useRouter();
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

  const isDisabled = true;

  return (
    <>
      <div className="bg-gradient-to-t from-[#fce8e5] to-[#eeecfb] h-full flex flex-col">
        <PR_Header />
         <div className="h-full mt-[22px] mb-[40%] overflow-auto px-[17px] mt-3bg-gradient-to-t  from-[#fce8e5]  to-[#eeecfb]">
          <div className="w-full h-[25px] text-[#776EA5] font-semibold text-[20px] leading-[25px] mb-6 text-center">
            Cloudnine Hospital
          </div>
          {/* Patient Number and Mobile */}
          <div className="bg-[#ffffff66] rounded-[12px] p-5 mt-[45px] relative">
            {/* Patient Name Input */}
            <div>
              <Label className="text-[14px] text-gray-500 mb-2">
                Patient Name<span className="text-red-500">*</span>
              </Label>
              <Input
                disabled
                type="text"
                placeholder="Enter First Name"
                className="bg-white rounded-[7.26px] placeholder:text-[14px] placeholder:text-gray-500 font-semibold py-3 px-4 h-[39px]  opacity-50 cursor-not-allowed"
              />
            </div>

            {/* Primary Mobile Number Input */}
            <div>
              <Label className="text-[14px] text-gray-500 font-medium mb-2 mt-[22px]">
                Primary Mobile Number <span className="text-red-500">*</span>
              </Label>
              <div className="flex items-center gap-2 relative">
                {/* Country Code Dropdown (Disabled) */}
                <div className="relative w-[82px]">
                  <div
                    onClick={() => {
                      if (!isDisabled) setOpen(!open);
                    }}
                    className={`flex items-center gap-1 pl-2 pr-4 py-2 bg-white border border-gray-300 rounded-[7.26px] h-[38px] ${
                      isDisabled
                        ? "cursor-not-allowed opacity-50"
                        : "cursor-pointer"
                    }`}
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

                  {/* Dropdown options only if not disabled */}
                  {!isDisabled && open && (
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

                {/* Mobile Number Input (Disabled) */}
                <input
                  disabled
                  type="text"
                  value={mobile}
                  onChange={handleInputChange}
                  placeholder="Enter Mobile Number"
                  className="bg-white border border-gray-300 rounded-[7.26px] placeholder:text-[14px] placeholder:text-gray-500 font-semibold py-2 px-4 h-[38px] w-[227px] opacity-50 cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          {/* Patient History box with 16px gap */}
          <div className="bg-[#FFFFFFB2] rounded-[12px] p-4 mt-4 mb-5">
            <div>
              <Label className="text-[16px] text-[#000000] font-[600] leading-[16px] tracking-[0]  w-[114px] h-[16px] mb-4 font-['Quicksand'] py-2.5">
                Patient History
              </Label>
              <div className="flex items-center justify-center ">
                <Textarea
                  placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem exercitationem harum id ab illum optio nisi nulla molestias assumenda recusandae, a facilis labore velit iste hic, eligendi animi nostrum nam"
                  className=" bg-white text-[14px] text-[#000000] placeholder:text-gray-500 shadow-none"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="bg-gradient-to-t from-[#fce8e5] to-[#fce8e5] flex flex-col justify-between items-center gap-3 mt-[20.35px] fixed bottom-0 pb-[23px] left-0 right-0 px-4"> 
            <div className="w-full flex gap-[12.2px]">
            <Button className="border border-[#CC627B] bg-transparent text-[14px] font-[600] text-[#CC627B] py-[14.5px] rounded-[8px] flex items-center justify-center w-[48%] h-[45px]">
              Cancel
            </Button>
            <Button className="bg-gradient-to-r from-[#BBA3E4] to-[#E7A1A0] text-[14px] font-[600] text-white py-[14.5px] mx-auto rounded-[8px] flex items-center justify-center w-[48%] h-[45px]" >
              <Link href={`/channel-partner/${type}/cloudnine_hospital`}>
               Select Package
              </Link>
            </Button>
            </div>
              <Footer_bar/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Patient_History;
