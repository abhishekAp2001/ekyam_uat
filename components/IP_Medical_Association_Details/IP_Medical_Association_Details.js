"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import Medical_Header from "../Medical_Header/Medical_Header";
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
import IP_Header from "../IP_Header/IP_Header";

const IP_Medical_Association_Details = () => {
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
        <div className="h-full mb-[26%] overflow-auto px-[17px] mt-1 bg-gradient-to-t  from-[#fce8e5]  to-[#eeecfb]">
          {/* Practitioner details */}
          {/* <div className="mt-3 bg-[#FFFFFF80] rounded-[12px] p-4 px-3  mb-[87px]"> */}
          <div className="">
            <Label htmlFor="email" className="text-[14px] text-gray-500 mb-2 ">
              Name of Medical Association
            </Label>
            <Input
              type="text"
              placeholder="Enter Name of Medical Association"
              className="bg-white rounded-[7.26px] text-[14px] text-black font-semibold placeholder:text-[14px] placeholder:text-gray-500
                          py-3 px-4 h-[39px]"
            />
          </div>
          <div className="">
            <Label
              htmlFor="email"
              className="text-[14px] text-gray-500 mb-2 mt-4"
            >
              Medical Association Number
            </Label>
            <Input
              type="text"
              placeholder="Enter Medical Association Number"
              className="bg-white rounded-[7.26px] text-[14px] text-black font-semibold placeholder:text-[14px] placeholder:text-gray-500
                          py-3 px-4 h-[39px]"
            />
          </div>
          <div className="h-[177.79px] mt-[21px] bg-[#FFFFFF80] rounded-[12px] p-4">
            <div className="flex items-center justify-between">
              <span className=" text-[14px] font-semibold text-gray-800">
                Upload Certificate
              </span>
              <Drawer className="pt-[9.97px]">
                <DrawerTrigger className="">
                  <Button className="bg-gradient-to-r  from-[#BBA3E4] to-[#E7A1A0] text-[14px] font-[600] text-white py-[14.5px]   rounded-[8px] flex items-center justify-center w-[87px] h-[32px]">
                    + Add
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="bg-gradient-to-b  from-[#e7e4f8] via-[#f0e1df] via-70%  to-[#feedea]">
                  <DrawerHeader>
                    {/* <DrawerTitle className='text-[16px] font-[600] text-center'>Add User</DrawerTitle> */}
                    <DrawerDescription className="flex flex-col gap-3">
                      <Button className="bg-gradient-to-r from-[#BBA3E450] to-[#EDA19750] text-black text-[16px] font-[600] py-[17px] px-4 flex  justify-between items-center w-full h-[50px]">
                        <Link href={"/cp_type"}>Take Photo</Link>
                        <Image
                          src="/images/arrow.png"
                          width={24}
                          height={24}
                          className="w-[24px]"
                          alt="ekyamm"
                        />
                      </Button>
                      <Button className="bg-gradient-to-r from-[#BBA3E450] to-[#EDA19750] text-black text-[16px] font-[600] py-[17px] px-4 flex  justify-between items-center w-full h-[50px]">
                        <Link href={""}>Choose from Gallery</Link>
                        <Image
                          src="/images/arrow.png"
                          width={24}
                          height={24}
                          className="w-[24px]"
                          alt="ekyamm"
                        />
                      </Button>
                      <Button className="bg-gradient-to-r from-[#BBA3E450] to-[#EDA19750] text-black text-[16px] font-[600] py-[17px] px-4 flex  justify-between items-center w-full h-[50px]">
                        <Link href={""}>Upload from File</Link>
                        <Image
                          src="/images/arrow.png"
                          width={24}
                          height={24}
                          className="w-[24px]"
                          alt="ekyamm"
                        />
                      </Button>
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter className="p-0"></DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
            <div className="flex items-center gap-2 mt-4">
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
                    <DialogContent className=" h-[65vh] bg-[#0000009c] text-white">
                    </DialogContent>
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
                    <DialogContent className=" h-[65vh] bg-[#0000009c] text-white">
                    </DialogContent>
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
                    <DialogContent className=" h-[65vh] bg-[#0000009c] text-white">
                    </DialogContent>
                  </form>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b  from-[#fce8e5]  to-[#fce8e5]  flex justify-center items-center gap-3 mt-[20.35px] fixed bottom-0 pb-[23px] left-0 right-0 px-3 ">
          <Button className="bg-gradient-to-r  from-[#BBA3E4] to-[#E7A1A0] text-[14px] font-[600] text-white py-[14.5px]   rounded-[8px] flex items-center justify-center w-full h-[35px]">
            <Link href={"/sales/ip_medical_association_certificate"}> Save</Link>
          </Button>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default IP_Medical_Association_Details;
