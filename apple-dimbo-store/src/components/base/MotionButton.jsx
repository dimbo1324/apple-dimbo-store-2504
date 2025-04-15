import { motion } from "framer-motion";
import "boxicons/css/boxicons.min.css";

function MotionButton({ onClick, disabled, iconClass }) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      disabled={disabled}
      className={`text-2xl text-pink-400 transition ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
      onClick={onClick}
    >
      <i className={iconClass}></i>
    </motion.button>
  );
}

export default MotionButton;
