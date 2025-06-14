import React from "react";
import Image from "next/image";
import All_clinics from "../All_clinics/All_clinics";
import { ChevronLeft, Link } from "lucide-react";

const Clinic_List = () => {
  return (
    <>
      <div className="bg-gradient-to-t from-[#fce8e5] to-[#eeecfb] h-full flex flex-col">
        <div className="px-[17px] h-full mb-[10%] overflow-auto">
        <div className="sticky top-0 left-0 right-0 z-10 bg-[#efecfa]">
          <div className="flex items-center p-4 px-0 gap-[9px]">
            <ChevronLeft size={24} className=" text-black-700" />
            <div className="flex-1 text-[16px] font-semibold text-gray-800">
             Clinic List
            </div>
            <div className="h-6 w-6" /> {/* Space */}
          </div>
        </div>
        <div className="bg-[#FFFFFF80] pt-[8.21px] pb-3.5 border=[1.47px] border-[#FFFFFF4D] rounded-2xl">
          <div className="flex justify-between items-center ps-2 pe-[16.93px]">
            {/* <div className="flex items-center gap-1">
              <Image
                src="/images/bx_clinic.png"
                width={24}
                height={24}
                className="w-[24px]"
                alt="ekyamm"
              />
              <span className="text-[15px] text-black font-semibold">
                Channel Partner
              </span>
            </div> */}
            
          </div>
          <div className="px-[10px] ">
            <All_clinics />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Clinic_List;
