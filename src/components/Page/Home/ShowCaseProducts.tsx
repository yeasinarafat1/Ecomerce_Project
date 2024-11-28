import BigShowCaseProductCard from "@/components/Shared/BigShowCaseProductCard";
import React from "react";

const ShowCaseProducts = () => {
  return (
    <div className="container mx-auto mt-3 flex justify-center items-center gap-2 flex-col lg:flex-row">
      <BigShowCaseProductCard
        type="left"
        name="New Apple Homepod Mini"
        desc="Jam-packed with innovation, HomePod mini delivers unexpectedly."
        productsImg="/asset/DemoPic/apple_home_pod.png"
      />
      <BigShowCaseProductCard
        type="right"
        name="Xiaomi Mi 11 Ultra12GB+256GB"
        desc="*Data provided by internal laboratories. Industry measurment."
        productsImg="/asset/DemoPic/mi_11_ultra.png"
      />
    </div>
  );
};

export default ShowCaseProducts;
