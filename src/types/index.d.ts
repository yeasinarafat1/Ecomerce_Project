type whislistitem = {
  name: string;
  image: string;
  instock: boolean;
  price: number;
};
type CartItem = {
  name: string;
  image: string;
  quantity: number;
  price: number;
};
declare interface PaginationProps {
  page: number;
  totalPages: number;
}