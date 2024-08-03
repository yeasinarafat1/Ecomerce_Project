import Image from "next/image";

interface props {
    img:string;
    name:string
}
const VerticalProductCard = ({img,name}:props) => {
  return (
    <div className="flex items-center w-full h-[72px]">
      <Image src={img} width={72} height={72} alt={name} />
      <p className="text-[#475156] w-[420px]">{name}</p>
    </div>
  );
}

export default VerticalProductCard