import React from "react";
import avatar from "../assets/user.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { TbBulb } from "react-icons/tb";
import { BsBoxSeam } from "react-icons/bs";
import { AiFillHome, AiFillFileImage } from "react-icons/ai";
import { FaBell, FaMoneyCheckAlt, FaBulb } from "react-icons/fa";
import SideBtn from "./SideBtn";

const LeftSide = () => {
  const buttons = [
    { icon: <AiFillHome className="w-7 h-7" />, title: "Home" },
    { icon: <FaBell className="w-7 h-7" />, title: "Notifications" },
    { icon: <FaMoneyCheckAlt className="w-7 h-7" />, title: "Cards" },
    { icon: <AiFillFileImage className="w-7 h-7" />, title: "Payments" },
    { icon: <TbBulb className="w-7 h-7" />, title: "Insights" },
    { icon: <BsBoxSeam className="w-7 h-7" />, title: "Freight" },
  ];
  return (
    <div className=" bg-[#03364b] w-[15rem] h-screen p-4">
      {/* Logo */}
      <div className="  ">
        <p className="text-[24px] text-white font-bold">Dashboard</p>
      </div>
      {/* Profile */}
      <div className="border rounded-[0.6rem] mt-4 flex items-center justify-between pr-2">
        <div className="flex items-center">
          <div className="w-9 h-9 flex  m-[5px] ">
            <img
              src={avatar}
              alt=""
              className="object-cover rounded-[0.5rem]"
            />
          </div>
          <div className="pl-1">
            <p className=" font-semibold   text-white text-[12px]">Manage</p>
            <p className="text-white font-semibold">Harver</p>
          </div>
        </div>

        <div className="text-white">
          <IoMdArrowDropdown />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 space-y-6 border-b pb-4">
        {buttons.map((button) => (
          <SideBtn icon={button.icon} title={button.title} />
        ))}
      </div>
      {/* Apps */}
      <div className="">
        <p className="font-bold text-white/60 pt-1">APPS</p>
        <div className="pt-2 flex items-center  ">
          <div className="bg-white w-5 h-5 rounded-full"></div>
          <p className="text-white pl-2">Sales Expert</p>
        </div>
        <div className="pt-2 flex items-center  ">
          <div className="bg-red-500 w-5 h-5 rounded-full"></div>
          <p className="text-white pl-2">Newstand</p>
        </div>
        <div className="pt-2 flex items-center  ">
          <div className="bg-purple-600 w-5 h-5 rounded-full"></div>
          <p className="text-white pl-2">Charity</p>
        </div>
        <div className="pt-2 flex items-center  ">
          <div className="bg-yellow-500 w-5 h-5 rounded-full"></div>
          <p className="text-white pl-2">Golden Bar</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
