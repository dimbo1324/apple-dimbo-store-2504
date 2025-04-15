import Controls from "./base/Controls";
import React from "react";

function Area() {
  const [frameZoom, setFrameZoom] = React.useState(false);

  const zoomIn = () => setFrameZoom(true);
  const zoomOut = () => setFrameZoom(false);

  return (
    <div className="relative w-[70vw] h-[85vh] min-w-[70vw] min-h-[85vh] max-w-[90vw] max-h-[90vh] border border-gray-300 rounded-2xl resize overflow-auto">
      <Controls zoomIn={zoomIn} zoomOut={zoomOut} isZoomed={frameZoom} />
      {}
    </div>
  );
}

export default Area;
