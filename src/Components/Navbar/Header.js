import React from "react";
import Dropdown from "../Custom/Dropdown";

const Header = () => {
  const dropdownItems = [
    { label: "Option 1", href: "#1" },
    { label: "Option 2", href: "#2" },
    { label: "Option 3", href: "#3" },
  ];
  return (
    <header className="w-full h-[60px] bg-[#23D962] p-4 flex justify-between text-white">
      <div className="flex items-center p-1">
        <div className="font-extrabold text-[24px] p-2">LOGO</div>
        <div className="h-full border"></div>
        <div className="p-2">Config IT</div>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-[30px] h-[30px] bg-gray-400 rounded-full"></div>
        <div className="text-[18px] font-extrabold ">PRAVEEN KUMAR</div>
        <Dropdown items={dropdownItems} />
      </div>
    </header>
  );
};

export default Header;
