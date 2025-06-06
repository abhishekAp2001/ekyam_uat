'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const CP_buttons = ({ disabled,onSave,buttonText="Save & Continue" }) => {
  const router = useRouter()

  const handleCancel = () =>{
    router.push("/sales");
    deleteCookie("cp_type");
    deleteCookie("cp_clinic_details");
    deleteCookie("cp_doctor_details");
    deleteCookie("cp_billing_details");
    deleteCookie("cp_bank_details");
  }

  return (
    <>
      <div className="flex justify-between items-center gap-3 mt-[20.35px] fixed bottom-[23px] left-0 right-0">
        <Button className="border border-[#CC627B] bg-transparent text-[14px] font-[600] text-[#CC627B] py-[14.5px]  mx-auto rounded-[8px] flex items-center justify-center w-[42%] h-[45px]" onClick={()=>{
          handleCancel()
        }}>
          Cancel
        </Button>
        <Button
          disabled={disabled}
          onClick={() => {onSave()}}
          className="bg-gradient-to-r  from-[#BBA3E4] to-[#E7A1A0] text-[14px] font-[600] text-white py-[14.5px]  mx-auto rounded-[8px] flex items-center justify-center w-[42%] h-[45px]"
        >
          {buttonText}
        </Button>
      </div>
    </>
  );
};

export default CP_buttons;
