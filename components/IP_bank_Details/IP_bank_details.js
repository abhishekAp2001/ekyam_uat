"use client";

import React, { useEffect, useState } from "react";
import CP_Header from "@/components/CP_Header/CP_Header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CP_buttons from "@/components/CP_buttons/CP_buttons";
import Image from "next/image";
import axiosInstance from "@/lib/axiosInstance";
import { toast } from "react-toastify";
import { deleteCookie, getCookie, hasCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import IP_Header from "../IP_Header/IP_Header";
import IP_Buttons from "../IP_Buttons/IP_Buttons";
import { Button } from "../ui/button";

const IP_bank_details = () => {
  const axios = axiosInstance();
  const router = useRouter();

  const [formData, setFormData] = useState({
    accountHolderName: "",
    accountNumber: "",
    confirmAccountNumber: "",
    ifscCode: "",
    bankName: "",
  });

  const [touched, setTouched] = useState({
    ifscCode: false,
    bankName: false,
    accountNumber: false,
    confirmAccountNumber: false,
    accountHolderName: false,
  });

  // Validation functions
  const isIfscValid = (ifsc) => /^[A-Z]{4}0\d{6}$/.test(ifsc);
  const isAccountNumberValid = (account) => /^\d{9,18}$/.test(account);
  const isAccountHolderNameValid = (name) => /^[A-Za-z\s]{3,}$/.test(name);
  const isConfirmAccountNumberValid = () =>
    formData.accountNumber === formData.confirmAccountNumber;
  const isFormValid = () =>
    isIfscValid(formData.ifscCode) &&
    formData.bankName &&
    isAccountNumberValid(formData.accountNumber) &&
    isConfirmAccountNumberValid() &&
    isAccountHolderNameValid(formData.accountHolderName);

  // Load form data from cookie on component mount
  useEffect(() => {
    const savedData = localStorage.getItem("ip_bank_details");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFormData(parsedData);
        // Mark fields as touched if they have values
        setTouched({
          ifscCode: !!parsedData.ifscCode,
          bankName: !!parsedData.bankName,
          accountNumber: !!parsedData.accountNumber,
          confirmAccountNumber: !!parsedData.confirmAccountNumber,
          accountHolderName: !!parsedData.accountHolderName,
        });
      } catch (error) {
        console.error("Error parsing cp_bank_details cookie:", error);
      }
    }
  }, []);

  // Fetch bank details by IFSC code
  const fetchBankDetailsByIfsc = async () => {
    try {
      const response = await axios.post(`v2/sales/verify/ifsc`, {
        ifscCode: formData.ifscCode,
      });
      if (response?.data?.success === true) {
        setFormData((prev) => ({
          ...prev,
          bankName: response?.data?.data?.bank,
        }));
        setTouched((prev) => ({ ...prev, bankName: true }));
      }
    } catch (error) {
      console.error("Error fetching bank details:", error);
      setFormData((prev) => ({ ...prev, bankName: "" }));
      if (error.forceLogout) {
        router.push("/login");
      } else {
        toast.error(
          error?.response?.data?.error?.message ||
            "Failed to fetch bank details"
        );
      }
    }
  };

  useEffect(() => {
    if (formData?.ifscCode?.length === 11 && isIfscValid(formData?.ifscCode)) {
      fetchBankDetailsByIfsc();
    } else {
      setFormData((prev) => ({ ...prev, bankName: "" }));
    }
  }, [formData.ifscCode]);

  // Handle input change
  const handleInputChange = (e, field) => {
    let value = e.target.value;
    if (field === "ifscCode") {
      value = value.toUpperCase().slice(0, 11);
    } else if (field === "accountNumber" || field === "confirmAccountNumber") {
      value = value.replace(/\D/g, "").slice(0, 18);
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle blur for input fields
  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  // Handle save and continue
  const handleSave = () => {
    if (isFormValid()) {
      localStorage.setItem("ip_bank_details", JSON.stringify(formData));
      handleAddIndividualPractitioner();
    } else {
      toast.error("Please fill all required fields correctly");
      // Mark all fields as touched to show errors
      setTouched({
        ifscCode: true,
        bankName: true,
        accountNumber: true,
        confirmAccountNumber: true,
        accountHolderName: true,
      });
    }
  };

  const handleAddIndividualPractitioner = async () => {
    try {
      // const payload={};
      // const response = await axios.post(`v2/sales/invite/individualPractitioner`,payload)
      // if(response?.data?.success){
      //   router.push("/sales")
      //   toast.success("Invite Sent");
      // }
    } catch (error) {
      console.error("Error Adding Individual racttioner:", error);
      if (error.forceLogout) {
        router.push("/login");
      } else {
        toast.error(error?.response?.data?.error?.message);
      }
    }
  };

  const handleCancel = () => {
    router.push("/sales");
    localStorage.removeItem("ip_details");
    localStorage.removeItem("ip_bank_details");
    localStorage.removeItem("ip_general_information");
    localStorage.removeItem("ip_medical_association_details");
    localStorage.removeItem("ip_single_session_fees");
  };

  return (
    <div className="bg-gradient-to-t from-[#e5e3f5] via-[#f1effd] via-50% to-[#e5e3f5] h-full flex flex-col">
      <IP_Header text="Add Individual Practitioner Details" />
      <div className="h-full mb-[26%] overflow-auto px-[17px] mt-3 bg-gradient-to-t from-[#e5e3f5] via-[#f1effd] via-50% to-[#e5e3f5]">
        <div className="mt-[11.64px] bg-[#FFFFFF80] rounded-[12px] p-4 px-3">
          <strong className="text-[16px] text-black font-semibold">
            Bank Details
          </strong>
          <div>
            <Label
              htmlFor="ifscCode"
              className="text-[14px] text-gray-500 mb-2 mt-[22px]"
            >
              IFSC Code *
            </Label>
            <Input
              id="ifscCode"
              type="text"
              placeholder="Add IFSC Code"
              value={formData.ifscCode}
              onChange={(e) => handleInputChange(e, "ifscCode")}
              onBlur={() => handleBlur("ifscCode")}
              className="bg-white rounded-[7.26px] text-[14px] text-black font-semibold placeholder:text-[14px] placeholder:text-gray-500 py-3 px-4 h-[39px]"
            />
            {touched.ifscCode && !formData.ifscCode && (
              <span className="text-red-500 text-sm mt-1 block">
                IFSC code is required
              </span>
            )}
            {touched.ifscCode &&
              formData.ifscCode &&
              !isIfscValid(formData.ifscCode) && (
                <span className="text-red-500 text-sm mt-1 block">
                  Invalid IFSC code (e.g., SBIN0001234)
                </span>
              )}
          </div>
          <div>
            <Label
              htmlFor="bankName"
              className={`text-[14px] mb-2 mt-[22px] ${
                isIfscValid(formData.ifscCode)
                  ? "text-gray-500"
                  : "text-[#00000040]"
              }`}
            >
              Bank Name *
            </Label>
            <Input
              id="bankName"
              type="text"
              placeholder="Add Bank Name"
              value={formData.bankName}
              disabled
              className={`rounded-[7.26px] text-[14px] text-black font-semibold placeholder:text-[14px] py-3 px-4 h-[39px] ${
                isIfscValid(formData.ifscCode)
                  ? "bg-white placeholder:text-gray-500"
                  : "bg-[#ffffff10] placeholder:text-[#00000040]"
              }`}
            />
            {touched.bankName && !formData.bankName && (
              <span className="text-red-500 text-sm mt-1 block">
                Bank name is required
              </span>
            )}
          </div>
          <div>
            <Label
              htmlFor="accountNumber"
              className={`text-[14px] mb-2 mt-[22px] ${
                formData.bankName ? "text-gray-500" : "text-[#00000040]"
              }`}
            >
              Account Number *
            </Label>
            <div className="relative">
              <Input
                id="accountNumber"
                type="text"
                placeholder="Add Account Number"
                value={formData.accountNumber}
                onChange={(e) => handleInputChange(e, "accountNumber")}
                onBlur={() => handleBlur("accountNumber")}
                disabled={!formData.bankName}
                className={`rounded-[7.26px] text-[14px] text-black font-semibold placeholder:text-[14px] py-3 px-4 h-[39px] ${
                  formData.bankName
                    ? "bg-white placeholder:text-gray-500"
                    : "bg-[#ffffff10] placeholder:text-[#00000040]"
                }`}
              />
              {touched.accountNumber &&
                isAccountNumberValid(formData.accountNumber) && (
                  <Image
                    src="/images/green_check.png"
                    width={20}
                    height={20}
                    className="w-[20.83px] pt-1.5 absolute top-[3px] right-3.5"
                    alt="check"
                  />
                )}
            </div>
            {touched.accountNumber && !formData.accountNumber && (
              <span className="text-red-500 text-sm mt-1 block">
                Account number is required
              </span>
            )}
            {touched.accountNumber &&
              formData.accountNumber &&
              !isAccountNumberValid(formData.accountNumber) && (
                <span className="text-red-500 text-sm mt-1 block">
                  Invalid account number (9-18 digits)
                </span>
              )}
          </div>
          <div>
            <Label
              htmlFor="confirmAccountNumber"
              className={`text-[14px] mb-2 mt-[22px] ${
                isAccountNumberValid(formData.accountNumber)
                  ? "text-gray-500"
                  : "text-[#00000040]"
              }`}
            >
              Confirm Account Number *
            </Label>
            <div className="relative">
              <Input
                id="confirmAccountNumber"
                type="text"
                placeholder="Enter Confirm Account Number"
                value={formData.confirmAccountNumber}
                onChange={(e) => handleInputChange(e, "confirmAccountNumber")}
                onBlur={() => handleBlur("confirmAccountNumber")}
                disabled={!isAccountNumberValid(formData.accountNumber)}
                className={`rounded-[7.26px] text-[14px] text-black font-semibold placeholder:text-[14px] py-3 px-4 h-[39px] ${
                  isAccountNumberValid(formData.accountNumber)
                    ? "bg-white placeholder:text-gray-500"
                    : "bg-[#ffffff10] placeholder:text-[#00000040]"
                }`}
              />
              {touched.confirmAccountNumber &&
                isConfirmAccountNumberValid() && (
                  <Image
                    src="/images/green_check.png"
                    width={20}
                    height={20}
                    className="w-[20.83px] pt-1.5 absolute top-[3px] right-3.5"
                    alt="check"
                  />
                )}
              {touched.confirmAccountNumber &&
                formData.confirmAccountNumber &&
                !isConfirmAccountNumberValid() && (
                  <Image
                    src="/images/error_circle.png"
                    width={20}
                    height={20}
                    className="w-[20.83px] pt-1.5 absolute top-[3px] right-3.5"
                    alt="error"
                  />
                )}
            </div>
            {touched.confirmAccountNumber && !formData.confirmAccountNumber && (
              <span className="text-red-500 text-sm mt-1 block">
                Confirm account number is required
              </span>
            )}
            {touched.confirmAccountNumber &&
              formData.confirmAccountNumber &&
              !isConfirmAccountNumberValid() && (
                <span className="text-red-500 text-sm mt-1 block">
                  Account numbers do not match
                </span>
              )}
          </div>
          <div>
            <Label
              htmlFor="accountHolderName"
              className={`text-[14px] mb-2 mt-[22px] ${
                isConfirmAccountNumberValid()
                  ? "text-gray-500"
                  : "text-[#00000040]"
              }`}
            >
              Account Holder Name *
            </Label>
            <Input
              id="accountHolderName"
              type="text"
              placeholder="Add Account Holder Name"
              value={formData.accountHolderName}
              onChange={(e) => handleInputChange(e, "accountHolderName")}
              onBlur={() => handleBlur("accountHolderName")}
              disabled={
                !(
                  isAccountNumberValid(formData.accountNumber) &&
                  isConfirmAccountNumberValid()
                )
              }
              className={`rounded-[7.26px] text-[14px] text-black font-semibold placeholder:text-[14px] py-3 px-4 h-[39px] ${
                isConfirmAccountNumberValid()
                  ? "bg-white placeholder:text-gray-500"
                  : "bg-[#ffffff10] placeholder:text-[#00000040]"
              }`}
            />
            {touched.accountHolderName && !formData.accountHolderName && (
              <span className="text-red-500 text-sm mt-1 block">
                Account holder name is required
              </span>
            )}
            {touched.accountHolderName &&
              formData.accountHolderName &&
              !isAccountHolderNameValid(formData.accountHolderName) && (
                <span className="text-red-500 text-sm mt-1 block">
                  Invalid name (letters and spaces, min 3 characters)
                </span>
              )}
          </div>
        </div>
        <div className="flex justify-between items-center gap-3 mt-[20.35px] fixed bottom-[23px] left-0 right-0">
          <Button
            className="border border-[#CC627B] bg-transparent text-[14px] font-[600] text-[#CC627B] py-[14.5px]  mx-auto rounded-[8px] flex items-center justify-center w-[42%] h-[45px]"
            onClick={() => {
              handleCancel();
            }}
          >
            Cancel
          </Button>
          <Button
            disabled={!isFormValid()}
            onClick={() => {
              handleSave();
            }}
            className="bg-gradient-to-r  from-[#BBA3E4] to-[#E7A1A0] text-[14px] font-[600] text-white py-[14.5px]  mx-auto rounded-[8px] flex items-center justify-center w-[42%] h-[45px]"
          >
            Send Invite
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IP_bank_details;
