import OrderHistoryTable from "@/components/Shared/OrderHistoryTable";
import { Pagination } from "@/components/Shared/Pagination";
import { orderHistoryConstant } from "@/constant";
import React from "react";
interface props {
  searchParams: {
    page: string;
  };
}
const OrderHistory = ({ searchParams: { page } }: props) => {
  const pageNum = Number(page) || 1;
  const rowsPerPage = 7;
  const totalPages = Math.ceil(orderHistoryConstant.length / rowsPerPage);

  const indexOfLastHistory = pageNum * rowsPerPage;
  const indexOfFirstHistory = indexOfLastHistory - rowsPerPage;

  const currentHistory = orderHistoryConstant.slice(
    indexOfFirstHistory,
    indexOfLastHistory
  );
  return (
    <div className="w-full">
      <OrderHistoryTable orderHistory={currentHistory} />
      {totalPages > 1 && (
        <div className="my-4 w-full">
          <Pagination totalPages={totalPages} page={pageNum} />
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
