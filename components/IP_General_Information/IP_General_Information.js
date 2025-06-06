"use client";
import React, { useState } from "react";
import IP_Header from "../IP_Header/IP_Header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Plus, X, ChevronDown, CirclePlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import Link from "next/link";
import IP_Buttons from "../IP_Buttons/IP_Buttons";

const IP_General_Information = () => {
  const specializations = [
    "Fertility",
    "Womens Health",
    "PCOS",
    "PCOD",
    "Cardiology",
    "Dermatology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
    "Gynecology",
    "Endocrinology",
    "Oncology",
  ];
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // Optional: Filter logic for search
  const filteredSpecializations = specializations?.filter((item) =>
    item.name?.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSelect = (item) => {
    setCurrentSelection(item);
    setOpen(false);
  };

  const [selectedItems, setSelectedItems] = useState([]);
  const [currentSelection, setCurrentSelection] = useState("Fertility");

  const handleSelectItem = (item) => {
    setCurrentSelection(item);
    setOpen(false);
    setSearchValue("");
  };

  const handleAddItem = () => {
    if (currentSelection && !selectedItems.includes(currentSelection)) {
      setSelectedItems((prev) => [...prev, currentSelection]);
    }
  };

  return (
    <div className="bg-gradient-to-t  from-[#fce8e5]  to-[#eeecfb]  h-full flex flex-col">
      <IP_Header text="Add Individual Practitioner Details" />
      <div className="h-full mb-[26%] overflow-auto px-[17px] mt-3  bg-gradient-to-t from-[#fce8e5] to-[#eeecfb]">
        {/* General Information */}
        <div className="bg-[#FFFFFF80] rounded-[12px] p-4 px-3">
          <strong className="text-[16px] text-black font-semibold">
            General Information
          </strong>

          {/* Experience */}
          <div className="flex justify-between items-center">
            <Label className="text-[14px] text-gray-500 mb-2 mt-[22px]">
              Years of Experience *
            </Label>
            <div className="flex items-baseline gap-2">
              <Input
                type="text"
                placeholder="10"
                className="bg-white rounded-[7.26px] text-[14px] text-black font-semibold placeholder:text-[14px] placeholder:text-gray-500 py-3 px-3 w-[46px] h-[38px]"
              />
              <span className="text-[14px] text-gray-500 ">Years</span>
            </div>
          </div>

          {/* Specialization selector */}
          <div className="w-full max-w-md mt-4">
            <div className="relative">
              <Label className="text-sm font-medium text-gray-500 mb-2">
                Specialisation <span className="text-red-500">*</span>
              </Label>

              <div className="flex gap-2">
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="flex-1 justify-between bg-white"
                    >
                      <span className="text-black text-sm font-semibold">
                        {currentSelection}
                      </span>
                      <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-0" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0" align="start">
                    <Command>
                      <CommandInput
                        placeholder="Search specialisation..."
                        value={searchValue}
                        onValueChange={setSearchValue}
                      />
                      <CommandList>
                        <CommandEmpty>No specialisation found.</CommandEmpty>
                        <CommandGroup>
                          {filteredSpecializations.map((spec) => (
                            <CommandItem
                              key={spec}
                              value={spec}
                              onSelect={() => handleSelectItem(spec)}
                            >
                              {spec}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>

                <Button
                  onClick={handleAddItem}
                  size="icon"
                  variant="outline"
                  className=" bg-transparent border-none absolute right-0"
                >
                  <CirclePlus size={20} className="w-5 h-5 text-gray-500" />
                </Button>
              </div>
            </div>

            {/* Selected tags */}
            {selectedItems.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {selectedItems.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="flex items-center gap-[2px] py-0 px-1 bg-white rounded-[5px] text-[14px] text-gray-500 hover:bg-gray-200"
                  >
                    {item}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-[11px] h-[11px] hover:bg-transparent"
                      onClick={() => handleRemoveItem(item)}
                    >
                      <X className="w-[11px] h-[11px] border border-gray-500 rounded-full Specialisation " />
                    </Button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* don't treat */}
          <div className="w-full max-w-md mt-4">
            <div className="relative">
              <Label className="text-sm font-medium text-gray-500 mb-2">
                What I don’t Treat <span className="text-red-500">*</span>
              </Label>

              <div className="flex gap-2">
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="flex-1 justify-between bg-white"
                    >
                      <span className="text-black text-sm font-semibold">
                        {currentSelection}
                      </span>
                      <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-0" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0" align="start">
                    <Command>
                      <CommandInput
                        placeholder="Search specialisation..."
                        value={searchValue}
                        onValueChange={setSearchValue}
                      />
                      <CommandList>
                        <CommandEmpty>No specialisation found.</CommandEmpty>
                        <CommandGroup>
                          {filteredSpecializations.map((spec) => (
                            <CommandItem
                              key={spec}
                              value={spec}
                              onSelect={() => handleSelectItem(spec)}
                            >
                              {spec}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>

                <Button
                  onClick={handleAddItem}
                  size="icon"
                  variant="outline"
                  className=" bg-transparent border-none absolute right-0"
                >
                  <CirclePlus size={20} className="w-5 h-5 text-gray-500" />
                </Button>
              </div>
            </div>

            {/* Selected tags */}
            {selectedItems.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {selectedItems.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="flex items-center gap-[2px] py-0 px-1 bg-white rounded-[5px] text-[14px] text-gray-500 hover:bg-gray-200"
                  >
                    {item}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-[11px] h-[11px] hover:bg-transparent"
                      onClick={() => handleRemoveItem(item)}
                    >
                      <X className="w-[11px] h-[11px] border border-gray-500 rounded-full Specialisation " />
                    </Button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* textarea */}
          <div className="mt-4">
            <Label className="text-sm font-medium text-gray-500 mb-2">
              What to Expect in the Session *
            </Label>
            <Textarea
              placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem exercitationem harum id ab illum optio nisi nulla molestias assumenda recusandae, a facilis labore velit iste hic, eligendi animi nostrum nam"
              className="bg-white text-[14px] text-gray-500"
            />
          </div>

          {/* select language */}
          {/* don't treat */}
          <div className="w-full max-w-md mt-4">
            <div className="relative">
              <Label className="text-sm font-medium text-gray-500 mb-2">
                Language Proficiency * <span className="text-red-500">*</span>
              </Label>

              <div className="flex gap-2">
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="flex-1 justify-between bg-white"
                    >
                      <span className="text-black text-sm font-semibold">
                        {currentSelection}
                      </span>
                      <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-0" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0" align="start">
                    <Command>
                      <CommandInput
                        placeholder="Search specialisation..."
                        value={searchValue}
                        onValueChange={setSearchValue}
                      />
                      <CommandList>
                        <CommandEmpty>No specialisation found.</CommandEmpty>
                        <CommandGroup>
                          {filteredSpecializations.map((spec) => (
                            <CommandItem
                              key={spec}
                              value={spec}
                              onSelect={() => handleSelectItem(spec)}
                            >
                              {spec}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>

                <Button
                  onClick={handleAddItem}
                  size="icon"
                  variant="outline"
                  className=" bg-transparent border-none absolute right-0"
                >
                  <CirclePlus size={20} className="w-5 h-5 text-gray-500" />
                </Button>
              </div>
            </div>

            {/* Selected tags */}
            {selectedItems.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {selectedItems.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="flex items-center gap-[2px] py-0 px-1 bg-white rounded-[5px] text-[14px] text-gray-500 hover:bg-gray-200"
                  >
                    {item}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-[11px] h-[11px] hover:bg-transparent"
                      onClick={() => handleRemoveItem(item)}
                    >
                      <X className="w-[11px] h-[11px] border border-gray-500 rounded-full Specialisation " />
                    </Button>
                  </Badge>
                ))}
              </div>
            )}
            <div className="">
              <Label
                htmlFor="text"
                className="text-[14px] text-gray-500 font-medium mb-2 mt-[22px]"
              >
                Suggested Languages
              </Label>
              <div className="flex gap-2 items-center">
                <Button className="bg-[#776EA5] rounded-[5px] h-6 flex itmes-center text-sm font-medium px-0">
                  Kannada
                  <CirclePlus
                    size={11}
                    className="w-[11px] h-[11px] text-white suggested_anguages ml-[-4px]"
                  />
                </Button>
                <Button className="bg-[#776EA5] rounded-[5px] h-6 flex itmes-center text-sm font-medium px-0">
                  Konkani
                  <CirclePlus
                    size={11}
                    className="w-[11px] h-[11px] text-white suggested_anguages ml-[-4px]"
                  />
                </Button>
                <Button
                  className="bg-[#776EA5] rounded-[5px] h-6 flex itmes-center text-sm font-medium"
                  px-0
                >
                  Tamil
                  <CirclePlus
                    size={11}
                    className="w-[11px] h-[11px] text-white suggested_anguages ml-[-4px]"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* in-person session */}
        <div className="bg-[#FFFFFF80] rounded-[12px] p-4 px-3 mt-[17.9px]">
          <strong className="text-[16px] text-black font-semibold">
            In-Person Sessions (Optional)
          </strong>
          <div className="mt-5">
            <Label
              htmlFor="text"
              className="text-[14px] text-gray-500 font-medium mb-2"
            >
              Address
            </Label>
            <Input
              type="text"
              placeholder="Type Full Address"
              className="bg-white rounded-[7.26px] text-[14px] text-black font-semibold placeholder:text-[14px] placeholder:text-[#00000066] py-3 px-4 h-[39px]"
            />
          </div>
          <div className="mt-5">
            <Label
              htmlFor="text"
              className="text-[14px] text-gray-500 font-medium mb-2"
            >
              Add Google Maps
            </Label>
            <Input
              type="text"
              placeholder="Add Google Maps Link"
              className="bg-white rounded-[7.26px] text-[14px] text-black font-semibold placeholder:text-[14px] placeholder:text-[#00000066] py-3 px-4 h-[39px]"
            />
          </div>
        </div>

        {/* Button footer */}
        <IP_Buttons />
      </div>
    </div>
  );
};

export default IP_General_Information;
