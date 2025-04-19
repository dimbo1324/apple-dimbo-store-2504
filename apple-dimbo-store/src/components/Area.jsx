import React, { useState } from "react";
import LeftBar from "./base/LeftBar";
import Controls from "./base/Controls";
const Area = () => {
  const [frameZoom, setFrameZoom] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const zoomIn = () => setFrameZoom(true);
  const zoomOut = () => setFrameZoom(false);
  const handleBarClick = (idx) => setActivePage(idx);
  return (
    <div
      className={`relative flex w-[70vw] h-[85vh] min-w-[70vw] min-h-[85vh] max-w-[90vw] max-h-[90vh] border border-gray-300 rounded-2xl resize overflow-auto transition-all duration-100 ${
        frameZoom ? "min-w-[97vw] min-h-[97vh]" : ""
      }`}
    >
      <LeftBar activeIdx={activePage} handleBarClick={handleBarClick} />
      <Controls zoomIn={zoomIn} zoomOut={zoomOut} isZoomed={frameZoom} />
    </div>
  );
};
export default Area;
