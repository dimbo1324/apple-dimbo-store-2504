import Controls from "./base/Controls";

function Area() {
  return (
    <div className="relative w-[70vw] h-[85vh] min-w-[70vw] min-h-[85vh] max-w-[90vw] max-h-[90vh] border border-gray-300 rounded-2xl resize overflow-auto">
      <Controls />
    </div>
  );
}

export default Area;
