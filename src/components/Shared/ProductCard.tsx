// TODO: Add more props so that it can be used in more place
import Image from "next/image";
import React from "react";
import StarRating from "./StarRatingShow";
interface ProductCardProps {
  name: string;
  image: string;
  price?: Number;
  rating?: Number;
  type?: String;
  className?: string;
}
const ProductCard = ({
  name,
  image,
  price,
  rating,
  type,
  className,
}: ProductCardProps) => {
  //** this props are used to take the value from the card
  //** this card can be used in verius purpose like it can be used in best deal section or it can be used as catagory card and many more
  return (
    <div
      className={` cursor-pointer rounded ${
        type === "catagori" ? className : "flex"
      }  flex-col py-1 items-center justify-center gap-y-2  w-[175px] md:w-[248px] border-[1px] border-[#E4E7E9] `}
    >
      <Image
        className={`${
          type === "catagori" && "w-[200px] h-[180px] object-cover"
        } h-[160px] w-[175px] md:h-[170px] md:w-[195px]`}
        src={image}
        alt={name}
        height={188}
        width={216}
      />
      {rating && (
        <div className="w-[175px] md:w-[216px]">
          <StarRating rating={Math.floor(rating as number)} />
        </div>
      )}
      <p className="text-[12px] md:text-[14px] w-[175px] md:w-[216px] h-[40px] line-clamp-2">
        {name}
      </p>
      {price && (
        <p className="text-[#2DA5F3] text-[12px] w-[175px] md:w-[216px]">
          $ {`${price}`}
        </p>
      )}
    </div>
  );
};

export default ProductCard;
