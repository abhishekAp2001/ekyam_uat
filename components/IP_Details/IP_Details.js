"use client";
import React, { useState, useRef } from "react"; // Added useRef
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { Button } from "../ui/button";
import { isMobile } from "react-device-detect";
import IP_Buttons from "../IP_Buttons/IP_Buttons";
import IP_Header from "../IP_Header/IP_Header";

const IP_Details = () => {
  const [formData, setFormData] = useState({
    profileImageUrl: "",
    firstName: "",
    lastName: "",
    email: "",
    countryCode_primary: "🇮🇳 +91",
    primaryMobileNumber: "",
    countryCode_whatsapp: "🇮🇳 +91",
    whatsappNumber: "",
    countryCode_emergency: "🇮🇳 +91",
    emergencyNumber: "",
  });

  // Ref for camera input
  const cameraInputRef = useRef(null);
  const photoInputRef = useRef(null);

  // Handle file selection for photo upload or capture
  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, profileImageUrl: imageUrl }));
    }
  };

  // Handle photo deletion
  const handlePhotoDelete = () => {
    setFormData((prev) => ({ ...prev, profileImageUrl: "" }));
    // Revoke the object URL to free memory
    if (formData.profileImageUrl) {
      URL.revokeObjectURL(formData.profileImageUrl);
    }
  };

  // Trigger camera input
  const handleTakePhoto = () => {
    if (cameraInputRef.current) {
      cameraInputRef.current.click();
    }
  };

  const handleChoosePhoto = () => {
    if (photoInputRef.current) {
      photoInputRef.current.click();
    }
  };

  return (
    <div className="bg-gradient-to-t from-[#fce8e5] to-[#eeecfb] h-full flex flex-col">
      <IP_Header text="Add Individual Practitioner Details" />
      <div className="h-full mb-[26%] overflow-auto px-[17px] mt-3 bg-gradient-to-t from-[#fce8e5] to-[#eeecfb]">
        <div className="flex justify-center w-[140.8px] h-fit rounded-[17.63px] mx-auto relative mb-6">
          <Image
            src={formData.profileImageUrl || "/images/profile.png"}
            width={100}
            height={90}
            className="w-full h-fit object-cover"
            alt="Profile"
          />
          <Drawer>
            <DrawerTrigger>
              <Image
                src="/images/camera.png"
                width={31}
                height={31}
                className="w-[31px] h-fit absolute bottom-[-10px] right-[-10px]"
                alt="Camera"
              />
            </DrawerTrigger>
            <DrawerTitle></DrawerTitle>
            <DrawerContent className="bg-gradient-to-b from-[#e7e4f8] via-[#f0e1df] via-70% to-[#feedea]">
              <DrawerHeader>
                <DrawerDescription className="flex flex-col gap-3">
                  {isMobile && (
                    <Button
                      className="bg-gradient-to-r from-[#BBA3E450] to-[#EDA19750] text-black text-[16px] font-[600] py-[17px] px-4 flex justify-between items-center w-full h-[50px]"
                      onClick={handleTakePhoto}
                    >
                      Take Photo
                      <Image
                        src="/images/arrow.png"
                        width={24}
                        height={24}
                        className="w-[24px]"
                        alt="Arrow"
                      />
                    </Button>
                  )}
                  <Button
                    className="bg-gradient-to-r from-[#BBA3E450] to-[#EDA19750] text-black text-[16px] font-[600] py-[17px] px-4 flex justify-between items-center w-full h-[50px]"
                    onClick={handleChoosePhoto}
                  >
                    Choose Photo
                    <Image
                      src="/images/arrow.png"
                      width={24}
                      height={24}
                      className="w-[24px]"
                      alt="Arrow"
                    />
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-[#BBA3E450] to-[#EDA19750] text-black text-[16px] font-[600] py-[17px] px-4 flex justify-between items-center w-full h-[50px]"
                    onClick={handlePhotoDelete}
                  >
                    Delete Photo
                    <Image
                      src="/images/arrow.png"
                      width={24}
                      height={24}
                      className="w-[24px]"
                      alt="Arrow"
                    />
                  </Button>
                  {/* Hidden input for camera capture */}
                  <input
                    ref={cameraInputRef}
                    type="file"
                    accept="image/*"
                    capture="environment"
                    className="hidden"
                    onChange={handlePhotoUpload}
                  />
                  {/* Hidden input for choosing photo */}
                  <input
                    ref={photoInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handlePhotoUpload}
                  />
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter className="p-0">
                {/* Optional: Add a close button */}
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
        {/* Practitioner details (unchanged) */}
        <div className="mt-3 bg-[#FFFFFF80] rounded-[12px] p-4 px-3">
          <strong className="text-[16px] text-black font-semibold">
            Practitioner Details
          </strong>
          <div>
            <Label
              htmlFor="name"
              className="text-[14px] text-gray-500 mb-2 mt-5"
            >
              First Name *
            </Label>
            <div className="flex gap-2 item-center">
              <Select>
                <SelectTrigger className="w-[69px] bg-white rounded-[7.26px] placeholder:text-[12px] placeholder:text-black font-semibold px-3 h-[39px] flex items-center">
                  <SelectValue
                    placeholder="Dr."
                    className="text-[14px] text-black font-semibold"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Dr.">Dr.</SelectItem>
                  <SelectItem value="Mr.">Mr.</SelectItem>
                  <SelectItem value="Ms.">Ms.</SelectItem>
                </SelectContent>
              </Select>
              <Input
                type="text"
                placeholder="Ramesh"
                className="bg-white rounded-[7.26px] text-[14px] text-black font-semibold placeholder:text-[14px] placeholder:text-black py-3 px-4 h-[39px]"
              />
            </div>
          </div>
          <div>
            <Label
              htmlFor="email"
              className="text-[14px] text-gray-500 mb-2 mt-[22px]"
            >
              Last Name
            </Label>
            <Input
              type="text"
              placeholder="Thakur"
              className="bg-white rounded-[7.26px] text-[14px] text-black font-semibold placeholder:text-[14px] placeholder:text-black py-3 px-4 h-[39px]"
            />
          </div>
          <div>
            <Label
              htmlFor="email"
              className="text-[14px] text-gray-500 font-medium mb-2 mt-[22px]"
            >
              Primary Email Address *
            </Label>
            <Input
              type="email"
              placeholder="Case Sensitive"
              className="bg-white rounded-[7.26px] text-[14px] text-black font-semibold placeholder:text-[14px] placeholder:text-[#00000066] py-3 px-4 h-[39px]"
            />
          </div>
          <div className="mt-[22px]">
            <Label htmlFor="mobile" className="text-[14px] text-gray-500 mb-2">
              Primary Mobile Number *
            </Label>
            <div className="flex items-center bg-white border rounded-[7.26px] h-[39px]">
              <span className="text-[14px] text-black font-semibold py-3 px-2">
                +91
              </span>
              <Input
                id="mobile"
                type="text"
                placeholder="9876543210"
                value={formData.primaryMobileNumber}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    primaryMobileNumber: e.target.value,
                  }))
                }
                className="bg-white border rounded-[7.26px] rounded-l-none text-[14px] text-black font-semibold placeholder:text-[14px] placeholder:text-[#000000] py-3 px-4 w-full h-[39px]"
                maxLength={10}
                inputMode="numeric"
                pattern="\d*"
              />
            </div>
          </div>
          <div className="mt-[22px]">
            <div className="flex items-center">
              <Label
                htmlFor="mobile"
                className="text-[14px] text-gray-500 w-[55%] mb-2"
              >
                Whatsapp Number *
              </Label>
              <div className="flex gap-[6px] items-center w-[45%]">
                <Checkbox
                  className="w-4 h-4 border border-[#776EA5] rounded-[1.8px] ms-1"
                  onCheckedChange={(checked) =>
                    checked &&
                    setFormData((prev) => ({
                      ...prev,
                      whatsappNumber: prev.primaryMobileNumber,
                    }))
                  }
                />
                <label htmlFor="" className="text-[12px] text-gray-500">
                  Same as Mobile Number
                </label>
              </div>
            </div>
            <div className="flex items-center bg-white border rounded-[7.26px] h-[39px]">
              <span className="text-[14px] font-semibold py-3 px-2">+91</span>
              <Input
                id="whatsapp_mobile"
                type="text"
                placeholder="9876543210"
                value={formData.whatsappNumber}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    whatsappNumber: e.target.value,
                  }))
                }
                className="bg-white border rounded-[7.26px] rounded-l-none text-[14px] text-black font-semibold placeholder:text-[14px] placeholder:text-gray-500 py-3 px-4 w-full h-[39px]"
                maxLength={10}
                inputMode="numeric"
                pattern="\d*"
              />
            </div>
          </div>
          <div className="mt-[22px]">
            <Label htmlFor="mobile" className="text-[14px] text-gray-500 mb-2">
              Emergency Number *
            </Label>
            <div className="flex items-center bg-white border rounded-[7.26px] h-[39px]">
              <span className="text-[14px] text-black font-semibold py-3 px-2">
                +91
              </span>
              <Input
                id="emergency_mobile"
                type="text"
                placeholder="9876543210"
                value={formData.emergencyNumber}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    emergencyNumber: e.target.value,
                  }))
                }
                className="bg-white border rounded-[7.26px] rounded-l-none text-[14px] text-black font-semibold placeholder:text-[14px] placeholder:text-black py-3 px-4 w-full h-[39px]"
                maxLength={10}
                inputMode="numeric"
                pattern="\d*"
              />
            </div>
          </div>
        </div>
        <IP_Buttons buttonText="Save & Continue" />
      </div>
    </div>
  );
};

export default IP_Details;
