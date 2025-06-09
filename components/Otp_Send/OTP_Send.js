"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Patient_Header from "../Patient_Header/Patient_Header";
import Link from "next/link";


const OTP_Send = ({type}) => {
  return (
    <>
      <div className=" bg-gradient-to-b  from-[#DFDAFB] to-[#F9CCC5] h-full flex flex-col px-3">
     <Patient_Header/>
        <div className="h-full flex flex-col justify-around items-center">
           <div className="flex flex-col items-center w-full">
          <strong className="text-[20px] text-[#776EA5] font-semibold">Cloudnine Hospital</strong>
        <div className="border-2 bg-[#FFFFFF80] border-[#FFFFFF4D] rounded-4xl py-[17px] text-center w-full my-[64px]  px-5">
          <strong className="text-[16px] text-black font-[600] text-center">
            Send OTP to
          </strong>
          <div className="">
            <div className="flex justify-between items-center mt-[15px]  gap-3">
              <Button className="border border-[#1DA563] bg-[#1DA563] text-[14px] font-[600] text-white py-[14.5px]  rounded-[8px] flex items-center justify-center w-[48%] h-[45px]">
                Email
              </Button>
              <Button className="bg-transparent border border-[#CC627B] text-[14px] font-[600] text-[#CC627B] py-[14.5px]  rounded-[8px] flex items-center justify-center w-[48%] h-[45px]">
                Mobile
              </Button>
            </div>
            <Button className="bg-gradient-to-r  from-[#BBA3E4] to-[#E7A1A0] text-[14px] font-[600] text-white  border  py-[14.5px]  rounded-[8px] flex items-center justify-center w-full h-[45px] mt-[15px]  ">
              <Link href={`/channel-partner/${type}/otp_verify`} className="text-[12px] text-white">
                Get OTP 
              </Link>
            </Button>
          </div>
        </div>
        </div>
            </div>
      

        {/* footer */}
        <div className="flex flex-col justify-center items-center gap-[4.75px] pb-5">
          <div className="flex gap-1 items-center">
          <span className="text-[10px] text-gray-500 font-medium">
            Copyright © 2025
          </span>
          <Image
            src="/images/ekyamm.png"
            width={100}
            height={49}
            className="w-[106px]"
            alt="ekyamm"
          />
        </div>
          <div className="flex gap-2 items-center">
            <span className="text-[10px] text-gray-500 font-medium">
              Any technical support
            </span>
            <Image
              src="/images/chat_icon.png"
              width={54}
              height={49}
              className="w-[54px]"
              alt="ekyamm"
            />
          </div>
          </div>
        
      </div>
    </>
  );
};

export default OTP_Send;
