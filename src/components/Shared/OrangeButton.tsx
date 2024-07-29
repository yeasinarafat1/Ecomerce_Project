import React from 'react'
import { Button } from '../ui/button';
import { MoveRight } from 'lucide-react';

const OrangeButton = ({children}:{children:string}) => {
  return (
    <Button className="bg-secondary h-11  hover:bg-orange-500 flex-center gap-2 ">
      {children} <MoveRight />
    </Button>
  );
}

export default OrangeButton