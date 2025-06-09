"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import Link from "next/link";
import NP_Header from "../NP_Header/NP_Header";
import Image from "next/image";
import Footer_bar from "../Footer_bar/Footer_bar";

const NP_Registration = () => {
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
      <div className="bg-gradient-to-t from-[#fce8e5] to-[#eeecfb] h-screen flex flex-col">
        <NP_Header />
        <div className="h-full flex flex-col justify-between overflow-auto px-[13px] mt-[22px] bg-gradient-to-t from-[#fce8e5] to-[#eeecfb]">
          <div className="w-full h-[25px] text-[#776EA5] font-semibold text-[20px] leading-[25px] mb-6 text-center">
            Cloudnine Hospital
          </div>

          <div className="bg-[#FFFFFF] rounded-[9px] p-5 relative">
            <strong className=" flex text-[16px] font-[600] text-black items-center justify-center mb-4">
              Package Credit Confirmation
            </strong>
            <div className="mb-3 bg-gradient-to-r from-[#BBA3E433] to-[#EDA19733] rounded-[12px] p-2">
              <span className="text-[14px] font-medium text-[#000000] ml-1">
                Patient Name:
              </span>
              <div className="text-[14px] font-[600] text-black ml-1">
                Shubham Naik
              </div>
            </div>
            <div className="mb-3 bg-gradient-to-r from-[#BBA3E433] to-[#EDA19733] rounded-[12px] p-2">
              <div className=" flex  justify-between  ">
                <span className="text-[14px] font-[400] text-[#000000] ml-1 pb-2">
                  Number of Sessions:
                </span>
                <span className="text-[14px] font-[600] text-black mr-1">
                  04
                </span>
              </div>

              <div className=" flex justify-between ">
                <span className="text-[14px] font-[400] text-[#000000] ml-1">
                  Session Fee (Hourly):
                </span>
                <span className="text-[14px] font-[700] text-black mr-1">
                  <span className="mx-8">₹</span>1,500.00
                </span>
              </div>
            </div>
            <div className="flex justify-between mt-2  pt-2 bg-gradient-to-r from-[#BBA3E433] to-[#EDA19733] rounded-[12px] p-2">
              <span className="text-[14px] font-[700] text-black ml-1">
                Total:
              </span>
              <span className="text-[14px] font-[700] text-black mr-1">
                <span className="mx-8">₹</span>6,000.00
              </span>
            </div>
          </div>
          <div className="bg-gradient-to-b from-[#fce8e5] to-[#fce8e5] flex flex-col items-center gap-3  py-[23px] px-[17px] left-0 right-0 ">
            <Footer_bar />
          </div>
        </div>
      </div>
    </>
  );
};

export default NP_Registration;
