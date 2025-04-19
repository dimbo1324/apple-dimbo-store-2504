import React from "react";
import { leftBarData } from "../../../data";
import { SidebarItem } from "./SidebarItem";
export const SidebarNav = ({ activeIdx, onSelect }) => (
  <nav className="flex flex-col flex-grow">
    {leftBarData.map((item, idx) => (
      <SidebarItem
        key={item.label}
        item={item}
        isActive={idx === activeIdx}
        onClick={() => onSelect(idx)}
      />
    ))}
  </nav>
);
