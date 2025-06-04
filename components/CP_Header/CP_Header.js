import { ChevronLeft } from "lucide-react";
import React from "react";

const CP_Header = () => {
  return (
    <>
    <div  className="">
      <div className="flex items-center p-4 gap-[9px]">
        <ChevronLeft size={24} className=" text-black-700" />
        <div className="flex-1 text-[14px] font-semibold text-gray-800">
          Add Channel Partner Details
        </div>
        <div className="h-6 w-6" /> {/* Space */}
      </div>
      </div>
    </>
  );
};

export default CP_Header;
