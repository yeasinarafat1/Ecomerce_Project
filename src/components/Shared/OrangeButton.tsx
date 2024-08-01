import React from 'react'
import { Button } from '../ui/button';
import { MoveRight } from 'lucide-react';

const OrangeButton = ({children,className}:{children:string,className?:string}) => {
  return (
    <Button className={`bg-secondary h-11  hover:bg-orange-500 flex-center gap-2 ${className && className}`} >
      {children} <MoveRight />
    </Button>
  );
}

export default OrangeButton