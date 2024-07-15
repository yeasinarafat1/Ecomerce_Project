// TODO: Add more props so that it can be used in more place
import Image from 'next/image';
import React from 'react'
interface ProductCardProps {
    name: String;
    image : String;
    price?: Number;
}
const ProductCard = ({name,image,price}:ProductCardProps) => {
    //** this props are used to take the value from the card
  return (
    <div className="flex flex-col items-center justify-center gap-2 h-[296px] w-[248px] border-[1px] border-[#E4E7E9]">
      <Image src={image} alt={name} height={188} width={216} />
      <p className="text-[14px] w-[216px]">{name}</p>
      {price && (
        <p className="text-[#2DA5F3] text-[14px] w-[216px]">${price}</p>
      )}
    </div>
  );
}

export default ProductCard