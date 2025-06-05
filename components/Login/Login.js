"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import axiosInstance from "@/lib/axiosInstance";
import { toast } from "react-toastify";
import { customEncodeString, encryptData } from "@/lib/utils";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const Login = () => {
  const axios = axiosInstance();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Validation function
  const validateInputs = (userName, password) => {
    if (!userName.trim()) {
      return "Please enter a valid email or mobile number";
    }
    if (!password.trim()) {
      return "Please enter a password";
    }
    return "";
  };

  const handleLogin = async () => {
    // Reset error state
    setError("");

    // Validate inputs
    const validationError = validateInputs(userName, password);
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const encodedPassword = customEncodeString(password);
      const encryptedPassword = encryptData(encodedPassword);
      const payload = {
        email: userName,
        password: encryptedPassword,
      };
      const response = await axios.post("/v2/auth/user/signin", payload);
      if (response?.data?.success === true) {
        toast.success("Login Successful");
        if (
          response?.data?.data?.userType === "superAdmin" &&
          response?.data?.data?.status === "active"
        ) {
          setCookie("user", response?.data?.data);
          router.push("/sales");
        }
      }
    } catch (error) {
      console.log("error", error);
      if (error.forceLogout) {
        router.push("/login");
      } else {
        setError(
          error?.response?.data?.error?.message || "Wrong Username/Password"
        );
        toast.error(error?.response?.data?.error?.message || "Login Failed");
      }
    }
  };

  return (
    <>
      <div className="bg-gradient-to-b from-[#DFDAFB] to-[#F9CCC5] h-full flex justify-center items-center">
        <div className="border-2 bg-[#FFFFFF80] border-[#FFFFFF4D] rounded-4xl pt-5 px-6 pb-3 mx-4 text-center w-100">
          <strong className="text-[16px] text-black font-[600] text-center">
            Login to proceed
          </strong>
          <div className="pt-6">
            <Input
              type="text"
              placeholder="Enter mobile number or email address"
              className="bg-white rounded-[7.26px] placeholder:text-[12px] placeholder:text-gray-400 pt-3 pb-3.5 px-4 h-[39px]"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="bg-white rounded-[7.26px] placeholder:text-[12px] placeholder:text-gray-400 pt-3 pb-3.5 px-4 h-[39px] mt-6"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Image
                src="/images/visibility.png"
                width={14}
                height={10}
                className="w-[14.67px] absolute top-4 right-[14.83px]"
                alt="ekyamm"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              />
            </div>
            <div className="flex justify-between mt-[11.72px]">
              <div className="flex gap-[6px] items-center">
                <Checkbox className="w-4 h-4 border border-[#776EA5] rounded-[1.8px]" />
                <label htmlFor="" className="text-[12px] text-gray-500">
                  Remember Me
                </label>
              </div>
              <Link
                href={"/forgot_password"}
                className="text-[12px] text-gray-400"
              >
                Forgot password?
              </Link>
            </div>
            <Button
              className="mt-6 bg-gradient-to-r from-[#BBA3E4] to-[#E7A1A0] text-[14px] font-[600] text-white py-[14.5px] h-[45px] w-full rounded-[8px] flex items-center justify-center cursor-pointer"
              onClick={() => {
                handleLogin();
              }}
            >
              Login
            </Button>
            {/* Error message display */}
            {error && (
              <p className="text-red-500 text-[12px] mt-2 text-center">
                {error}
              </p>
            )}
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

export default Login;
