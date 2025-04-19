import React from "react";
import PropTypes from "prop-types";

const ItemCard = ({ label, img, pageIndex }) => (
  <a
    href={`#${pageIndex}`}
    className="
      group
      flex flex-col items-center justify-center 
      bg-white rounded-lg border border-gray-200 
      p-8 cursor-pointer
      transition-shadow duration-200 ease-in-out
      hover:shadow-lg
    "
  >
    <span
      className="
        text-xl font-semibold 
        bg-gradient-to-b from-red-500 to-yellow-300 
        bg-clip-text text-transparent 
        tracking-wide mb-8
        group-hover:opacity-90
      "
    >
      {label}
    </span>
    <img
      src={img}
      alt={label}
      className="
        max-w-[60%] max-h-[60%] object-contain 
        transition-transform duration-200 ease-in-out
        group-hover:scale-105
      "
      draggable="false"
    />
  </a>
);

ItemCard.propTypes = {
  label: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  pageIndex: PropTypes.number.isRequired,
};

export default ItemCard;
