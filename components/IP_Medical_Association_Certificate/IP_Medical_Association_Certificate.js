"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
// import Medical_Header from "../Medical_Header/Medical_Header";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Medical_Header from "../Medical_Header/Medical_Header";
import IP_Header from "../IP_Header/IP_Header";

const IP_Medical_Association_Certificate = () => {
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
      <div className="bg-gradient-to-t  from-[#fce8e5]  to-[#eeecfb]   h-screen flex flex-col">
        <IP_Header text="Medical Association Details" />
        <div className="h-full mb-[26%] overflow-auto px-[17px] mt-[6px] bg-gradient-to-t  from-[#fce8e5]  to-[#eeecfb]">
          {/* Practitioner details */}
          <div className="h-[218px] bg-[#FFFFFF80] rounded-[12px] py-4 px-[19px]">
            <div className="flex flex-col  gap-2  justify-start relative">
              <strong className="text-[14px] font-[700] text-black h-[16px] ">
                Name of the Medical Association
              </strong>
              <strong className=" text-[14px] font-[700] text-black">
                Certificate Number
              </strong>
            </div>
            <div className="flex flex-col mt-1 gap-2">
              <span className="text-[14px] font-[500] text-black">
                Certificates:
              </span>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center  w-[84px] h-[105px] rounded-[9px] border-[0.93px] bg-[#000000]">
                  <Dialog className="">
                    <form>
                      <DialogTrigger
                        asChild
                        className="bg-transparent flex justify-center items-center"
                      >
                        <Button variant="">
                          <Image
                            src="/images/preview.png"
                            width={18}
                            height={18}
                            className="bg-transparent m-auto"
                            alt="ekyamm"
                          />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className=" h-[65vh] bg-[#0000009c] text-white"></DialogContent>
                    </form>
                  </Dialog>
                </div>
                <div className="flex items-center justify-center  w-[84px] h-[105px] rounded-[9px] border-[0.93px] bg-[#000000]">
                  <Dialog className="">
                    <form>
                      <DialogTrigger
                        asChild
                        className="bg-transparent flex justify-center items-center"
                      >
                        <Button variant="">
                          <Image
                            src="/images/preview.png"
                            width={18}
                            height={18}
                            className="bg-transparent m-auto"
                            alt="ekyamm"
                          />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className=" h-[65vh] bg-[#0000009c] text-white"></DialogContent>
                    </form>
                  </Dialog>
                </div>
                <div className="flex items-center justify-center  w-[84px] h-[105px] rounded-[9px] border-[0.93px] bg-[#000000]">
                  <Dialog className="">
                    <form>
                      <DialogTrigger
                        asChild
                        className="bg-transparent flex justify-center items-center"
                      >
                        <Button variant="">
                          <Image
                            src="/images/preview.png"
                            width={18}
                            height={18}
                            className="bg-transparent m-auto"
                            alt="ekyamm"
                          />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className=" h-[65vh] bg-[#0000009c] text-white"></DialogContent>
                    </form>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="bg-gradient-to-b  from-[#fce8e5]  to-[#fce8e5]  flex justify-center items-center gap-3 mt-[20.35px] fixed bottom-0 pb-[23px] left-0 right-0 px-3 ">
          <Button className="bg-gradient-to-r  from-[#BBA3E4] to-[#E7A1A0] text-[14px] font-[600] text-white py-[14.5px]   rounded-[8px] flex items-center justify-center w-full h-[35px]">
            <Link href={"/sales/ip_single_session_fees"}> Save & Continue</Link>
          </Button>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default IP_Medical_Association_Certificate;
