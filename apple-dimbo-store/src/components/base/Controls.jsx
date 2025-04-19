import React from "react";
import MotionButton from "./MotionButton";
function Controls({ zoomIn, zoomOut, isZoomed }) {
  return (
    <div className="absolute top-3 right-3 space-x-2">
      <MotionButton
        onClick={zoomIn}
        disabled={isZoomed}
        iconClass="bx bx-plus"
      />
      <MotionButton
        onClick={zoomOut}
        disabled={!isZoomed}
        iconClass="bx bx-minus"
      />
    </div>
  );
}
export default Controls;
