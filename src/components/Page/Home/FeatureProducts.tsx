import { featureProducts } from "@/constant";
// **  This are sample constant create for this project

import React from "react";

import BestDealSectionSkleton from "./Shared/SkeltonForBestDeal";

import FeatureProductsLeftBar from "@/components/FeatureProductsLeftBar";

const FeatureProducts = () => {
  return (
    <BestDealSectionSkleton
      type="featureProduct"
      leftBar={<FeatureProductsLeftBar />}
      rightBarProducts={featureProducts}
    />
  );
};

export default FeatureProducts;
