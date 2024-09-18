import {
  Table,
  TableBody,
 
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CartRow from "./CartRow";
interface props {
  CartItems: CartItem[];
}

const CartTable = ({CartItems}:props) => {
  return (
    <Table className="hidden md:inline-table">
      <TableHeader className="bg-gray-[#475156] uppercase ">
        <TableRow className="bg-[#F2F4F5] h-6">
          <TableHead className="md:w-[260px] lg:w-[290px] xl:w-[330px] h-[40px] p-0 lg:p-2">
            Products
          </TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="w-[100px]">Sub total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {CartItems.map((item, index) => {
          return (
            <CartRow
              key={index}
              name={item.name}
              price={item.price}
              initialQuantity={item.quantity}
              img={item.image}
            />
          );
        })}
      </TableBody>
    </Table>
  );
};

export default CartTable;
