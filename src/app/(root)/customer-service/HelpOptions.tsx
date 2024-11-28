import { customerServicesList } from '@/constant';
import Image from 'next/image';
import React from 'react'

const HelpOptions = () => {
  return (
    <div className="w-full md:container flex items-center gap-2 flex-wrap">
      {customerServicesList.map((item,index) => { 
        return(
            <div key={index} className='w-[312px] h-20 border border-secondary-100 mb-4 flex items-center px-5 gap-5 cursor-pointer'>
                <Image src={item.icon} alt='item' height={32} width={32}/>
                <p className='text-base font-medium text-gray-900'>{item.name}</p>

            </div>
        )
       })}
    </div>
  );
}

export default HelpOptions