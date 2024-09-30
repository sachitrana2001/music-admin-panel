import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa"; // Angle-down icon from react-icons
import { Link } from "react-router-dom";

const Dropdown = ({ items }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Clear any pending close timeout
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false); // Delay closing the dropdown
    }, 200); // Adjust the delay as needed
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Icon (Angle Down) */}
      <div className=" items-center cursor-pointer">
        <FaAngleDown className="text-xl text-gray-600" />
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="origin-top-right absolute mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
