import React from 'react'
import {
  leftBarData
} from '../../data'
const LeftBar = () => {
  return (
    <div className="2xl:w-80 xl:w-52 w-44 h-full bg-[#f8f8f8] flex flex-col justify-between pt-5 pl-6 pb-14 md:pb-0">
      <a href="#" className="2xl:text-2xl xl:text-xl font-light text-[#8e8e8e] mb-14 tracking-wider">
        Something value
      </a>
      <div className="flex flex-col flex-grow">
        <a
          href="#"
          className="xl:w-36 lg:w-32 w-30 flex items-center justify-between my-3.5 text-left cursor-pointer"
        >
          <i className="bx bx-home-alt-2 text-xl text-[#8e8e8e]"></i>
          <span className="text-sm text-[#8e8e8e] mr-auto mx-2.5 tracking-wider"></span>
          <i className="text-lg text-[#8e8e8e] bx bxs-folder"></i>
        </a>
      </div>
    </div>
  );
}

export default LeftBar




