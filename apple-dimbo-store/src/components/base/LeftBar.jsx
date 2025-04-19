import React from "react";
import { SidebarHeader } from "./left bar/SidebarHeader";
import { SidebarNav } from "./left bar/SidebarNav";
import { SocialLinks } from "./left bar/SocialLinks";
const LeftBar = ({ activeIdx, handleBarClick }) => (
  <div className="2xl:w-80 xl:w-52 w-44 h-full bg-[#FDE8F8] flex flex-col justify-between pt-5 pl-6 pb-14 md:pb-0">
    <SidebarHeader title="Something value" />
    <SidebarNav activeIdx={activeIdx} onSelect={handleBarClick} />
    <SocialLinks />
  </div>
);
export default LeftBar;
