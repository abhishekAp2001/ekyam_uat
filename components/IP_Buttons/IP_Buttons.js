import React from "react";
import { Button } from "../ui/button";

const IP_Buttons = ({buttonText}) => {
  return (
    <div className="bg-gradient-to-t from-[#fce8e5] to-[#fce8e5] flex justify-between items-center gap-3 mt-[20.35px] fixed bottom-0 pb-[23px] left-0 right-0 px-4">
      <Button className="border border-[#CC627B] bg-transparent text-[14px] font-[600] text-[#CC627B] py-[14.5px] rounded-[8px] flex items-center justify-center w-[48%] h-[45px]">
        Cancel
      </Button>
      <Button className="bg-gradient-to-r from-[#BBA3E4] to-[#E7A1A0] text-[14px] font-[600] text-white py-[14.5px] rounded-[8px] flex items-center justify-center w-[48%] h-[45px]">
        {buttonText}
      </Button>
    </div>
  );
};

export default IP_Buttons;
