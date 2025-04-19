import React, { useState } from "react";
import { leftBarData } from "../../data";

const LeftBar = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div
      className="
        2xl:w-80 xl:w-52 w-44 h-full
        bg-[#FDE8F8]             /* светло‑розовый фон вместо серого */
        flex flex-col justify-between
        pt-5 pl-6 pb-14 md:pb-0
      "
    >
      <a
        href="#"
        className="
          2xl:text-2xl xl:text-xl font-light
          text-[#EC4899] mb-14    /* яркий пинк вместо серого */
          tracking-wider
        "
      >
        Something value
      </a>

      <div className="flex flex-col flex-grow">
        {leftBarData.map((item, idx) => {
          const isActive = idx === activeIdx;

          return (
            <a
              key={idx}
              href="#"
              onClick={() => setActiveIdx(idx)}
              className={`
                xl:w-36 lg:w-32 w-30 flex items-center justify-between
                my-3.5 text-left cursor-pointer
                ${
                  isActive
                    ? "bg-[#FBE7F4] rounded-lg" /* активный фон */
                    : "hover:bg-[#FDE8F8] rounded-md"
                } /* hover тот же светлый фон */
              `}
            >
              <i
                className={`
                  ${item.icon} text-xl
                  ${isActive ? "text-[#EC4899]" : "text-[#9CA3AF]"}
                `}
              ></i>

              <span className="text-sm text-[#FF79B0] mr-auto mx-2.5 tracking-wider">
                {item.label}
              </span>

              <i
                className={`
                  ${isActive ? item.activeIcon : item.inactiveIcon}
                  text-lg ${isActive ? "text-[#FF79B0]" : "text-[#9CA3AF]"}
                `}
              ></i>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default LeftBar;
