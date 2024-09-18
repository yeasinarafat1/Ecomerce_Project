import { featureProducts } from "@/constant";
// **  This are sample constant create for this project

import React from "react";


import FeatureProductsLeftBar from "@/components/FeatureProductsLeftBar";
import FeatureProductNavBar from "@/components/FeatureProductNavBar";
import ProductCard from "@/components/Shared/ProductCard";

const FeatureProducts = () => {
  return (
    <section className="w-full md:container mx-auto mt-5 ">
      
      <div className="w-full flex gap-2 flex-col md:flex-row mt-3  ">
        <FeatureProductsLeftBar />
        <div className="w-full">
          <FeatureProductNavBar  />
          <div className=" w-full md:w-auto flex justify-evenly md:justify-start items-center flex-wrap gap-y-2  md:gap-3 ">
            {/**  here rightBarProducts is a constant in future when  we will have real Product then we will update it  */}
            {featureProducts.map((item, index) => {
              return (
                <ProductCard
                  key={index}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureProducts;

