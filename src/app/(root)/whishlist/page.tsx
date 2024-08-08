import { whishListConstant } from "@/constant";
import WhishlistTable from "./WhishlistTable";
import MobileWhishlists from "./MobileWhishlists";

const WhishList = () => {
  return (
    <div className="w-full md:container my-4 min-h-[70vh] ">
      <h3 className="text-gray-900 font-semibold text-lg pl-2 md:pl-0">Whishlist</h3>
      <WhishlistTable whishListItem={whishListConstant} />
      <MobileWhishlists whishListItem={whishListConstant} />
    </div>
  );
};

export default WhishList;
