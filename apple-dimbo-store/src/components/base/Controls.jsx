import { motion } from "framer-motion";
import { handleZoomIn, handleZoomOut } from "../functions and actions/toZoom";
import "boxicons/css/boxicons.min.css";

function Controls() {
  return (
    <div className="absolute top-3 right-3 space-x-2">
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className="text-2xl text-pink-400 cursor-pointer transition"
        onClick={handleZoomIn}
      >
        <i className="bx bx-plus"></i>
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className="text-2xl text-pink-400 cursor-pointer transition"
        onClick={handleZoomOut}
      >
        <i className="bx bx-minus"></i>
      </motion.button>
    </div>
  );
}

export default Controls;
