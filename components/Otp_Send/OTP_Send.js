"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Patient_Header from "../Patient_Header/Patient_Header";
import Link from "next/link";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "react-toastify";
import { showErrorToast, showSuccessToast } from "@/lib/toast";
import { formatTime } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import axiosInstance from "@/lib/axiosInstance";
import { Loader2Icon } from "lucide-react";
import axios from "axios";
import { whatsappUrl } from "@/lib/constants";

const OTP_Send = ({ type }) => {
  const [selectedMethod, setSelectedMethod] = useState("email");
  const [otp, setOtp] = useState("");
  const [otpSendStatus, setOtpSendStatus] = useState(false);
  const [resendTimer, setResendTimer] = useState(120);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [channelPartnerData, setChannelPartnerData] = useState(null);
  const router = useRouter();
  const customAxios = axiosInstance();

  const sendOtp = async () => {
    if (isLoading) return;
    setLoading(true);
    try {
      if (selectedMethod === "mobile") {
        if (await sendMobileOtp()) {
          setOtpSendStatus(true);
          setResendTimer(120);
          setIsResendDisabled(true);
          setOtp("");
          showSuccessToast(`OTP sent to your verified mobile number.`);
        }
      } else {
        if (await sendEmailOtp()) {
          setOtpSendStatus(true);
          setResendTimer(120);
          setIsResendDisabled(true);
          setOtp("");
          showSuccessToast(`OTP sent to your verified email.`);
        }
      }
    } catch (error) {
      showErrorToast("Failed to send OTP. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  function redirectAfterOtpValidate(type) {
    showSuccessToast("OTP verified successfully!");
    setTimeout(() => {
      router.push(`/channel-partner/${type}/verified_successfully`);
    }, 100);
  }
  const verifyOtp = async () => {
    if (otp.length !== 6) {
      showErrorToast("Please enter a valid 6-digit OTP");
      return;
    }

    setLoading(true);
    try {
      if (selectedMethod === "mobile") {
        if (await validateMobileOtp(otp)) {
          redirectAfterOtpValidate(type);
          return;
        } else {
          // showErrorToast("Invalid OTP. Please try again.");
          return;
        }
      } else if (selectedMethod === "email") {
        if (await validateEmailOtp(otp)) {
          redirectAfterOtpValidate(type);
        } else {
          // showErrorToast("Invalid OTP. Please try again.");
          return;
        }
      }
    } catch (error) {
      showErrorToast("Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const changeOtpMethod = (method) => {
   
    setSelectedMethod(method);
    setOtpSendStatus(false);
    setOtp("");
    setResendTimer(120);
    setIsResendDisabled(false);
  };

  const sendEmailOtp = async () => {
    setLoading(true);

    try {
      const response = await customAxios.post(`v2/cp/email/otpGenerate`, {
        email: channelPartnerData?.email,
        verificationToken: channelPartnerData?.verificationToken,
        type: "firstTimeSignupOTP",
      });

      if (response?.data?.success === true) {
        return true;
      } else {
        showErrorToast(response?.data?.error?.message || "Otp Not Sent.");
      }
    } catch (err) {
      showErrorToast(
        err?.response?.data?.error?.message ||
          "An error occurred while sending."
      );
    } finally {
      setLoading(false);
    }
    return false;
  };

  const sendMobileOtp = async () => {
    setLoading(true);

    try {
      const apiUrl = "http://india.smscloudhub.com/generateOtp.jsp";
      const mobileNumber =
        channelPartnerData.primaryMobileNumber?.trim() || null;
      let countryCode = "+91";
      if (channelPartnerData.countryCode_primary) {
        const countryCodeParts =
          channelPartnerData.countryCode_primary.split("+");
        if (countryCodeParts.length > 1 && countryCodeParts[1]) {
          countryCode = `+${countryCodeParts[1].trim()}`;
        } else {
          console.warn(
            `Invalid country code format: ${channelPartnerData.countryCode_primary}. Falling back to ${defaultCountryCode}`
          );
        }
      }
      const params = {
        userid: "Radicle",
        key: "7f0853aec2XX", // Note: In production, store this in .env
        mobileno: `${countryCode}${mobileNumber}`,
        timetoalive: 200,
        message:
          "Your Ekyamm registration verification code is {otp}. Please enter this code on your app to complete your registration.",
        senderid: "EKYAMM",
        accusage: 1,
        entityid: "1701171698144140417",
        tempid: "1707171767456458609",
      };
      const result = await axios.get(apiUrl, { params });

      if (result.data.result === "success") {
        return true;
      } else {
        showErrorToast(`Failed to generate OTP`);
      }
    } catch (err) {
      showErrorToast(
        err.response?.data?.reason || "An error occurred while generating OTP"
      );
    } finally {
      setLoading(false);
    }
    return false;
  };

  const validateMobileOtp = async (otp) => {
    setLoading(true);

    try {
      const apiUrl = "http://india.smscloudhub.com/validateOtpApi.jsp";

      const mobileNumber =
        channelPartnerData.primaryMobileNumber?.trim() || null;
      let countryCode = "+91";
      if (channelPartnerData.countryCode_primary) {
        const countryCodeParts =
          channelPartnerData.countryCode_primary.split("+");
        if (countryCodeParts.length > 1 && countryCodeParts[1]) {
          countryCode = `+${countryCodeParts[1].trim()}`;
        } else {
          console.warn(
            `Invalid country code format: ${channelPartnerData.countryCode_primary}. Falling back to ${defaultCountryCode}`
          );
        }
      }

      const params = {
        mobileno: `${countryCode}${mobileNumber}`,
        otp: otp,
      };

      const result = await axios.get(apiUrl, { params });
      if (result.data.result === "success") {
        return true;
      } else {
        // console.log(result);
        showErrorToast("Invalid Otp");
      }
      return false;
    } catch (err) {
      showErrorToast(
        err.response?.data?.reason || "An error occurred while generating OTP"
      );
    } finally {
      setLoading(false);
    }
    return false;
  };

  const validateEmailOtp = async (otp) => {
    setLoading(true);

    try {
      const response = await customAxios.post(`v2/cp/email/otpValidate`, {
        email: channelPartnerData?.email,
        otp: otp,
      });

      if (response?.data?.success === true) {
        // showErrorToast("Verified successfully");
        return true;
      } else {
        showErrorToast(response?.data?.error?.message || "Invalid otp");
      }
    } catch (err) {
      showErrorToast(
        err?.response?.data?.error?.message ||
          "An error occurred while verifying"
      );
    } finally {
      setLoading(false);
    }
    return false;
  };
  useEffect(() => {
    let timer;
    if (otpSendStatus && resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    } else if (resendTimer === 0) {
      setIsResendDisabled(false);
    }
    return () => clearInterval(timer);
  }, [otpSendStatus, resendTimer]);

  useEffect(() => {
    const cookieData = getCookie("channelPartnerData");
    if (cookieData) {
      try {
        const parsedData = JSON.parse(cookieData);
        setChannelPartnerData(parsedData);
      } catch (error) {
        setChannelPartnerData(null);
      }
    } else {
      setChannelPartnerData(null);
      router.push(`/channel-partner/${type}`);
    }
  }, [type]);

  return (
    <>
      <div className=" bg-gradient-to-b  from-[#DFDAFB] to-[#F9CCC5] h-full flex flex-col px-3">
        <Patient_Header
          to={`/channel-partner/${type}`}
          title="Add New Patient"
        />
        <div className="h-full flex flex-col justify-around items-center">
          <div className="flex flex-col items-center w-full">
            <strong className="text-[20px] text-[#776EA5] font-semibold">
              {channelPartnerData?.clinicName || "Greetings Hospital"}
            </strong>
            <div className="border-2 bg-[#FFFFFF80] border-[#FFFFFF4D] rounded-4xl py-[17px] text-center w-full my-[64px]  px-5">
              <strong className="text-[15px] text-black font-[600] text-center">
                Send OTP to
              </strong>
              <div>
                <div className="flex justify-between items-center mt-[15px] gap-3">
                  <label className="w-[48%] h-[45px] cursor-pointer">
                    <input
                      type="radio"
                      name="auth"
                      value="email"
                      checked={selectedMethod === "email"}
                      onChange={() => changeOtpMethod("email")}
                      className="hidden"
                    />
                    <div
                      className={`border rounded-[8px] text-[15px] font-[600] flex items-center justify-center h-full py-[14.5px] transition-all duration-200 ${
                        selectedMethod === "email"
                          ? "bg-[#1DA563] text-white border-[#1DA563]"
                          : "bg-transparent text-[#CC627B] border-[#CC627B]"
                      }`}
                    >
                      Email
                    </div>
                  </label>

                  <label className="w-[48%] h-[45px] cursor-pointer">
                    <input
                      type="radio"
                      name="auth"
                      value="mobile"
                      checked={selectedMethod === "mobile"}
                      onChange={() => changeOtpMethod("mobile")}
                      className="hidden"
                    />
                    <div
                      className={`border rounded-[8px] text-[15px] font-[600] flex items-center justify-center h-full py-[14.5px] transition-all duration-200 ${
                        selectedMethod === "mobile"
                          ? "bg-[#1DA563] text-white border-[#1DA563]"
                          : "bg-transparent text-[#CC627B] border-[#CC627B]"
                      }`}
                    >
                      Mobile
                    </div>
                  </label>
                </div>
                {otpSendStatus ? (
                  <>
                    <div className="my-[15px]">
                      <div className="text-[12px] text-gray-500 font-medium text-left mb-1 relative ">
                        {otp === "" ? <>Enter OTP</> : <>You entered: {otp}</>}
                      </div>
                      <InputOTP
                        maxLength={6}
                        value={otp}
                        onChange={(otp) => setOtp(otp)}
                      >
                        <InputOTPGroup className="flex justify-between gap-2 items-center w-[90%]">
                          <InputOTPSlot
                            index={0}
                            className="w-[42px] h-[42px] border-[1.54px] border-[#776EA5] rounded-[9.23px] text-[16px] text-gray-500"
                          />
                          <InputOTPSlot
                            index={1}
                            className="w-[42px] h-[42px] border-[1.54px] border-[#776EA5] rounded-[9.23px] text-[16px] text-gray-500"
                          />
                          <InputOTPSlot
                            index={2}
                            className="w-[42px] h-[42px] border-[1.54px] border-[#776EA5] rounded-[9.23px] text-[16px] text-gray-500"
                          />
                          <InputOTPSlot
                            index={3}
                            className="w-[42px] h-[42px] border-[1.54px] border-[#776EA5] rounded-[9.23px] text-[16px] text-gray-500"
                          />
                          <InputOTPSlot
                            index={4}
                            className="w-[42px] h-[42px] border-[1.54px] border-[#776EA5] rounded-[9.23px] text-[16px] text-gray-500"
                          />
                          <InputOTPSlot
                            index={5}
                            className="w-[42px] h-[42px] border-[1.54px] border-[#776EA5] rounded-[9.23px] text-[16px] text-gray-500"
                          />
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                  </>
                ) : (
                  <></>
                )}
                <Button
                  onClick={otpSendStatus ? verifyOtp : sendOtp}
                  disabled={
                    isLoading || (otpSendStatus && isResendDisabled && !otp)
                  }
                  className="cursor-pointer bg-gradient-to-r from-[#BBA3E4] to-[#E7A1A0] text-[15px] font-[600] text-white border py-[14.5px] rounded-[8px] flex items-center justify-center w-full h-[45px] mt-[15px]"
                >
                  {isLoading ? (
                    <Loader2Icon className="animate-spin" />
                  ) : otpSendStatus ? (
                    "Verify OTP"
                  ) : (
                    "Get OTP"
                  )}
                </Button>
              </div>

              {otpSendStatus && (
                <div className="text-xs text-gray-500 font-medium text-center mt-2">
                  {resendTimer > 0 ? (
                    `Resend OTP in ${formatTime(resendTimer)}`
                  ) : (
                    <span
                      className="text-[#1DA563] cursor-pointer"
                      onClick={isResendDisabled ? null : sendOtp}
                    >
                      Resend OTP
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="flex flex-col justify-center items-center gap-[4.75px] pb-5">
          <div className="flex gap-1 items-center">
            <span className="text-[10px] text-gray-500 font-medium">
              Copyright © {new Date().getFullYear()}
            </span>
            <Image
              src="/images/ekyamm.png"
              width={100}
              height={49}
              className="w-[106px] mix-blend-multiply"
              alt="ekyamm"
            />
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-[10px] text-gray-500 font-medium">
              Any technical support
            </span>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/chat_icon.png"
                width={54}
                height={49}
                className="w-[54px]"
                alt="ekyamm"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTP_Send;
