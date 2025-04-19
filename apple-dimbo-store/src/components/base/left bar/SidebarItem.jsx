import React from "react";
export const SidebarItem = ({ item, isActive, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`xl:w-36 lg:w-32 w-30 flex items-center justify-between my-3.5 cursor-pointer ${
      isActive ? "bg-[#FBE7F4] rounded-lg" : "hover:bg-[#FDE8F8] rounded-md"
    }`}
  >
    <i
      className={`${item.icon} text-xl ${
        isActive ? "text-[#EC4899]" : "text-[#9CA3AF]"
      }`}
    />
    <span className="text-sm text-[#FF79B0] mr-auto mx-2.5 tracking-wider">
      {item.label}
    </span>
    <i
      className={`${isActive ? item.activeIcon : item.inactiveIcon} text-lg ${
        isActive ? "text-[#FF79B0]" : "text-[#9CA3AF]"
      }`}
    />
  </button>
);
