import React from 'react'
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Login = () => {
  return (
    <>
      <div className=" bg-gradient-to-b  from-[#DFDAFB] to-[#F9CCC5] h-full flex justify-center items-center">
        <div className="border-2 bg-[#FFFFFF80] border-[#FFFFFF4D] rounded-4xl pt-5 px-6 pb-3 mx-4 text-center w-100">
          <strong className="text-[16px] text-black font-[600] text-center">
            Login to proceed
          </strong>
          <div className="pt-6">
            <Input
              type="email"
              placeholder="Enter mobile number or email address"
              className="bg-white rounded-[7.26px] placeholder:text-[12px] placeholder:text-gray-400 pt-3 pb-3.5 px-4 h-[39px]"
            />
            <div className="relative">
            <Input
              type="password"
              placeholder="Enter password"
              className="bg-white rounded-[7.26px] placeholder:text-[12px] placeholder:text-gray-400 pt-3 pb-3.5 px-4 h-[39px] mt-6"
            />
              <Image
              src="/images/visibility.png"
              width={14}
              height={10}
              className="w-[14.67px] absolute top-4 right-[14.83px]"
              alt="ekyamm"
            />
            </div>
            <div className="flex justify-between mt-[11.72px]">
              <div className="flex gap-[6px] items-center">
                <Checkbox className="w-4 h-4 border border-[#776EA5] rounded-[1.8px]" />
                <label htmlFor="" className="text-[12px] text-gray-500 ">
                  Remember Me
                </label>
              </div>
              <Link href={"/forgot_password"} className="text-[12px] text-gray-400">
                Forgot password?
              </Link>
            </div>
            <Button    
              className="mt-6 bg-gradient-to-r  from-[#BBA3E4] to-[#E7A1A0] text-[14px] font-[600] text-white py-[14.5px] h-[45px] mx-auto rounded-[8px] flex items-center justify-center"
              style={{ width: "100% !important" }}
            >
              <Link href={"/"}>
              Login
              </Link>
            </Button>
          </div>
        </div>

        {/* footer */}
        <div className="flex flex-col justify-center items-center gap-[4.75px] fixed bottom-20 left-0 right-0">
          <div className="flex gap-1 items-center">
            <span className="text-[10px] text-gray-500 font-medium">
              Copyright © 2024
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
            <span className="text-[10px] text-gray-500 font-medium">Any technical support</span>
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
  )
}

export default Login
