import { BestDeals, } from "@/constant";
// **  This are sample constant create for this project

import React from "react";

import BestDealSectionSkleton from "./Shared/SkeltonForBestDeal";
import BestDealLeftBarComponent from "@/components/BestDealLeftBarComponent";

const TopDeals = () => {
  return (
    <BestDealSectionSkleton
      leftBar={<BestDealLeftBarComponent />}
      rightBarProducts={BestDeals}
    />
  );
};

export default TopDeals;
