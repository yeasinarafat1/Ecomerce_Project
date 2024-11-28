import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import InfoCards from "./InfoCards";
import CardDisplay from "./CardDisplay";
import OrderHistoryTable from "@/components/Shared/OrderHistoryTable";
import { orderHistoryConstant } from "@/constant";

const dashboard = () => {
  return (
    <div className="flex w-full flex-col gap-3 px-2 md:px-0">
      <h2 className="text-gray-900 text-xl font-medium">Hello Kelvin</h2>
      <p className="max-w-[423px] text-gray-700 text-sm">
        From your account dashboard. you can easily check & view your{" "}
        <span className="text-primary-500">Recent Orders</span>, manage your{" "}
        <span className="text-primary-500">
          Shipping and Billing Addresses{" "}
        </span>
        and edit your <span className="text-primary-500">Password</span> and{" "}
        <span className="text-primary-500">Account</span> Details.
      </p>
      <InfoCards />
      <CardDisplay />
      <OrderHistoryTable orderHistory={orderHistoryConstant.slice(0, 7)} />
    </div>
  );
};

export default dashboard;
