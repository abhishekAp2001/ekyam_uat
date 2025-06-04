import Image from 'next/image'
import React from 'react'

const All_clinics = () => {
    const clinics = [
  {
    id: 1,
    name: "McLead ",
    title: "Clinic",
    image: "/images/clinic1.png",
  },
  {
    id: 2,
    name: "Sunrise",
    title: "Clinic",
    image: "/images/clinic2.png",
  },
  {
    id: 3,
    name: "Downtown ",
    title: "Clinic",
    image: "/images/clinic3.png",
  },
  {
    id: 4,
    name: "McLead ",
    title: "Clinic",
    image: "/images/clinic4.png",
  },
  {
    id: 5,
    name: "Sunrise",
    title: "Clinic",
    image: "/images/clinic5.png",
  },
  {
    id: 6,
    name: "Downtown ",
    title: "Clinic",
    image: "/images/clinic6.png",
  },
    {
    id: 7,
    name: "McLead ",
    title: "Clinic",
    image: "/images/clinic7.png",
  },
  {
    id: 8,
    name: "Sunrise",
    title: "Clinic",
    image: "/images/clinic8.png",
  },
  {
    id: 9,
    name: "Downtown ",
    title: "Clinic",
    image: "/images/clinic9.png",
  },
];

  return (
    <>
      <div className="flex justify-between flex-wrap mt-[10.9px]">
  {clinics.map((clinic) => (
    <div
      key={clinic.id}
      className="w-1/3 rounded-[65px] flex flex-col items-center gap-1 mb-3.5"
    > 
      
      <Image
        src={clinic.image}
        width={65}
        height={65}
        className="w-[65px] h-[65px] rounded-full object-cover"
        alt={clinic.name}
      />
      <div className="flex flex-col">
        <span className="text-[14px] text-black font-[400] whitespace-pre-line text-center">
          {clinic.name} <br />
          {clinic.title}
        </span>
      </div>
    </div>
  ))}
</div>

    </>
  )
}

export default All_clinics
