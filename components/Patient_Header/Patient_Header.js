import { ChevronLeft } from "lucide-react";
import React from "react";

const Patient_Header = () => {
  return (
    <>
    <div  className="">
      <div className="flex items-center py-4 px-0 gap-[9px]">
        <ChevronLeft size={24} className=" text-black-700" />
        <div className="flex-1 text-[14px] font-semibold text-gray-800">
          Add New Patient
        </div>
        <div className="h-6 w-6" /> {/* Space */}
      </div>
      </div>
    </>
  );
};

export default Patient_Header;
