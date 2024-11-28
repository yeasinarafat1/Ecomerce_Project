import Image from 'next/image';
import React from 'react'
import { BsApple, BsGoogle } from 'react-icons/bs';

interface props {
    icon:string;
    text:string;
    func?: ()=> void;
}
const LoginProviderCard = ({icon,text,func}:props) => {
  return (
    <div className="w-full h-11 border border-gray-100 rounded-md flex items-center justify-between hover:bg-secondary group cursor-pointer">
      <div className='flex-center h-full w-9'>
        <Image src={icon} alt="login " height={20} width={20} className='rounded-md' />
      </div>
      <p className="text-sm text-gray-700 group-hover:text-white font-normal w-2/3">{text}</p>
    </div>
  );
}

export default LoginProviderCard