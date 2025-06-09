"use client"
import React from "react";
import { Button } from "@/components/ui/button";;
import Image from "next/image";
import Link from "next/link";

const CP_landing = ({type}) =>  {
  return (
    <>
      <div className="bg-white h-screen">
        <div className="flex flex-col items-center h-full text-center">
          <div className="">
            <h1 className="text-[32px] text-[#776EA5] font-semibold mt-[30%]">
              Cloudnine Hospital
            </h1>
            <div className="flex justify-center items-center gap-[2px]">
              <Image
                src="/images/location.png"
                width={15}
                height={15}
                className="w-[15.78px]"
                alt="location"
              />
              <span className="text-sm text-[#776EA5] font-medium">
                Pimple Saudagar
              </span>
            </div>
          </div>
          <div className="mt-[50px] flex flex-col items-center gap-[23px]">
            <div className="flex flex-col text-center">
              <div className="">
                <strong className="text-[36px] text-[#776EA5] font-bold leading-6">
                  Balance Your{" "}
                </strong>
                <div className="leading-6">
                  <strong className="text-[36px] text-[#CC627B] font-bold leading-6">
                    Mind
                  </strong>
                  <strong className="text-[36px] text-[#776EA5] font-bold">
                    &
                  </strong>
                  <strong className="text-[36px] text-[#CC627B] font-bold leading-6">
                    Body
                  </strong>
                  <strong className="text-[36px] text-[#776EA5] font-bold">
                    for
                  </strong>
                </div>
                <strong className="text-[36px] text-[#776EA5] font-bold leading-6">
                  Better Fertility
                </strong>
              </div>
            </div>
            <Button className=" bg-gradient-to-r  from-[#BBA3E4] to-[#E7A1A0] text-[14px] font-[600] text-white py-[14.5px] h-[45px]  rounded-[8px] flex items-center justify-center w-[198px]">
              <Link
                href={`/channel-partner/${type}/otp_send`}
                className="text-[12px] text-white"
              >
                Add Patient
              </Link>
            </Button>
            <div className="flex gap-1 items-center">
              <span className="text-[10px] text-gray-500 font-medium">
                Powered by
              </span>
              <Image
                src="/images/ekyamm.png"
                width={77}
                height={17}
                className="w-[77px]"
                alt="ekyamm"
              />
            </div>
          </div>
          <div className="bg-[url(/images/relaxed-feminine-woman.png)] bg-contain sm:bg-cover md:bg-cover bg-center bg-no-repeat w-full h-full"></div>
        </div>
      </div>
    </>
  );
};

export default CP_landing;
