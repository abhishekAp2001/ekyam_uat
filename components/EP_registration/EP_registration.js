"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Button } from "../ui/button";
import EP_Header from "../EP_Header/EP_Header";
import Footer_bar from "../Footer_bar/Footer_bar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axiosInstance from "@/lib/axiosInstance";
import { getCookie } from "cookies-next";
import Select from "react-select";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";

// Custom debounce function
const customDebounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

polyfillCountryFlagEmojis();

const EP_registration = ({ type }) => {
  const router = useRouter();
  const axios = axiosInstance();
  const [channelPartnerData, setChannelPartnerData] = useState(null);
  const [countryList, setCountryList] = useState([]);
  const [searchUsers, setSearchUsers] = useState([]);
  const [loading, setLoading] = useState(false); // Track API loading state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    primaryMobileNumber: "",
    countryCode_primary: "🇮🇳 +91",
    sessionCreditCount: "",
    sessionPrice: "",
  });
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    email: false,
    primaryMobileNumber: false,
    countryCode_primary: false,
  });

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const isEmailValid = (email) => /\S+@\S+\.\S+/.test(email);
  const isMobileValid = (mobile) => /^\d{10}$/.test(mobile);
  const isFormValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.countryCode_primary &&
      isEmailValid(formData.email) &&
      isMobileValid(formData.primaryMobileNumber)
    );
  };

  const countryOptions = useMemo(
    () =>
      countryList.map((country) => ({
        value: `${country.flag} ${country.code}`,
        label: `${country.flag} ${country.code}`,
        name: country.name,
      })),
    [countryList]
  );

  const getCountryList = async () => {
    try {
      const response = await axios.get(`v2/country`);
      if (response?.data?.success === true) {
        setCountryList(response?.data?.data);
      }
    } catch (error) {
      console.log("error", error);
      if (error.forceLogout) {
        router.push("/login");
      } else {
        // Assuming showErrorToast is defined elsewhere
        console.error(error?.response?.data?.error?.message || "Something Went Wrong");
      }
    }
  };

  const searchPatients = async (searchString) => {
    if (searchString.length < 3) {
      setSearchUsers([]);
      return;
    }
    setLoading(true);
    try {
      const params = {
        channelPartnerUsername: type,
        searchString,
      };
      const response = await axios.get(`v2/cp/patient/search`, { params });
      if (response?.data?.success === true) {
        const users = response?.data?.data?.map((user) => ({
          name: `${user.firstName} ${user.lastName}`,
          image: user.image || "/default-profile.png",
          mobile: `${user.countryCode_primary} ${user.primaryMobileNumber}`,
        }));
        setSearchUsers(users);
      } else {
        setSearchUsers([]);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearch = useCallback(
    customDebounce((value) => {
      searchPatients(value);
    }, 500),
    [type] // Dependency on 'type' ensures stability
  );

  const handleMobileNumberChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      primaryMobileNumber: value,
    }));
    if (value.length >= 3) {
      debouncedSearch(value);
    } else {
      setSearchUsers([]);
    }
  };

  useEffect(() => {
    getCountryList();
  }, []);

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
    <div className="bg-gradient-to-t from-[#fce8e5] to-[#eeecfb] h-full flex flex-col">
      <EP_Header />
      <div className="h-full mb-[28%] overflow-auto px-[17px] mt-[22px]">
        <div className="w-full h-[25px] text-[#776EA5] font-semibold text-[20px] leading-[25px] mb-6 text-center">
          {channelPartnerData?.clinicName || "Greetings Hospital"}
        </div>

        <div className="bg-[#FFFFFFB2] rounded-[12px] p-5 mt-[45px] relative">
          {/* Mobile number */}
          <div>
            <Label className="text-[14px] text-gray-500 font-medium mb-2 mt-[22px]">
              Primary Mobile Number <span className="text-red-500">*</span>
            </Label>
            <div className="flex items-center gap-2 relative">
              <Select
                options={countryOptions}
                value={countryOptions.find(
                  (option) => option.value === formData.countryCode_primary
                )}
                onChange={(selectedOption) => {
                  const newCountryCode = selectedOption ? selectedOption.value : "🇮🇳 +91";
                  setFormData((prev) => ({
                    ...prev,
                    countryCode_primary: newCountryCode,
                  }));
                  setTouched((prev) => ({
                    ...prev,
                    countryCode_primary: true,
                  }));
                }}
                className="w-[100px]"
                styles={{
                  control: (base) => ({
                    ...base,
                    borderRadius: "7.26px 0 0 7.26px",
                    borderRightWidth: 0,
                    height: "39px",
                    minHeight: "39px",
                    width: "max-content",
                  }),
                  menu: (base) => ({ ...base, width: "200px" }),
                }}
                formatOptionLabel={(option, { context }) =>
                  context === "menu" ? `${option.label} - ${option.name}` : option.label
                }
                menuPlacement="top"
              />
              <Input
                type="number"
                value={formData.primaryMobileNumber}
                onChange={handleMobileNumberChange}
                onBlur={() => handleBlur("primaryMobileNumber")}
                placeholder="Enter Mobile Number"
                className="bg-white border border-gray-300 rounded-[7.26px] placeholder:text-[14px] placeholder:text-gray-500 font-semibold py-2 px-4 h-[38px] w-full"
                disabled={loading} // Disable input during search
              />
            </div>
            {touched.primaryMobileNumber &&
              formData.primaryMobileNumber &&
              !isMobileValid(formData.primaryMobileNumber) && (
                <span className="text-red-500 text-sm mt-1 block">Must be 10 digits</span>
              )}
            {touched.primaryMobileNumber && !formData.primaryMobileNumber && (
              <span className="text-red-500 text-sm mt-1 block">Mobile number is required</span>
            )}
          </div>

          {/* First name */}
          <div className="mt-6">
            <Label className="text-[14px] text-gray-500 mb-2">
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Enter First Name"
              className="bg-white rounded-[7.26px] placeholder:text-[14px] placeholder:text-gray-500 font-semibold py-3 px-4 h-[39px]"
            />
          </div>

          {/* Last name */}
          <div className="mt-6">
            <Label className="text-[14px] text-gray-500 font-medium mb-2 mt-[5px]">
              Last Name <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Enter Last Name"
              className="bg-white rounded-[7.26px] placeholder:text-[14px] placeholder:text-gray-500 font-semibold py-3 px-4 h-[39px]"
            />
          </div>

          {/* Email address */}
          <div className="mt-6">
            <Label className="text-[14px] text-gray-500 font-medium mb-2 mt-[5px]">
              Email Address
            </Label>
            <Input
              type="text"
              placeholder="Enter Email Address"
              className="bg-white rounded-[7.26px] placeholder:text-[14px] placeholder:text-gray-500 font-semibold py-3 px-4 h-[39px]"
            />
          </div>

          {/* Profile Section */}
          {searchUsers.length > 0 && (
            <div className="absolute top-[26%] left-1/2 transform -translate-x-1/2 w-full h-[226px] rounded-[16px] bg-gradient-to-br from-[#DFDAFB] to-[#F9CCC5] backdrop-blur-[20px] shadow-[0_5px_20px_0_rgba(0,0,0,0.2)] px-4 py-[14px]">
              <div className="w-full h-[198px] flex flex-col gap-[12px]">
                {searchUsers.map((profile, index) => (
                  <div
                    key={index}
                    className="w-full h-[58px] bg-white/50 rounded-[12px] px-[12px] py-[8px] flex items-center justify-between gap-[118px]"
                  >
                    <div className="flex items-center gap-[12px]">
                      <Image
                        alt="profile"
                        src={profile.image}
                        width={42}
                        height={42}
                        className="rounded-full h-[42px] w-[42px]"
                      />
                      <div className="flex flex-col justify-center gap-[5px]">
                        <Label className="text-sm text-black font-semibold leading-[16px]">
                          {profile.name}
                        </Label>
                        <Label className="text-[11px] text-[#6D6A5D] font-medium leading-[14px]">
                          {profile.mobile}
                        </Label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-[18px] mt-[25px] px-1 ml-[31px] mr-[31px]">
          <Button className="border border-[#CC627B] bg-transparent text-[14px] font-[600] text-[#CC627B] py-[14.5px] rounded-[8px] flex items-center justify-center w-[141px] h-[45px]">
            <Link href={`/channel-partner/${type}/patient-registration`}>New Patient</Link>
          </Button>
          <Button className="border border-[#CC627B] bg-transparent text-[14px] font-[600] text-[#CC627B] py-[14.5px] rounded-[8px] flex items-center justify-center w-[141px] h-[45px] opacity-30">
            <Link href={`/channel-partner/${type}/patient-history`}>+ Patient History</Link>
          </Button>
        </div>
      </div>
      <div className="bg-gradient-to-t from-[#fce8e5] to-[#fce8e5] flex flex-col justify-between items-center gap-3 mt-[20.35px] fixed bottom-0 pb-[23px] left-0 right-0 px-4">
        <Footer_bar />
      </div>
    </div>
  );
};

export default EP_registration;