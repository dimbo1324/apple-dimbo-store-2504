import React from "react";
import { items } from "../data";
import ItemCard from "../components/ItemCard";

const Home = () => (
  <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-6 px-6 pb-6 pt-12 bg-gray-50">
    {items.map((item) => (
      <ItemCard
        key={item.pageIndex}
        label={item.label}
        img={item.img}
        pageIndex={item.pageIndex}
      />
    ))}
  </div>
);

export default Home;
