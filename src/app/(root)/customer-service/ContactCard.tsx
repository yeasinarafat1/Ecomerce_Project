import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const ContactCards = () => {
  return (
    <div className="w-full min-h-[90vh] md:container flex-center flex-col gap-4 bg-gray-50">
      <Button className="bg-primary-500 w-24">Contact</Button>
      <h3 className='text-gray-900 text-3xl md:text-4xl w-full md:w-96 text-center'>Don’t find your answer. Contact with us</h3>
      <div className='w-full flex-center gap-2 flex-col md:flex-row'>
        <ContactCard type='phone'/>
        <ContactCard type='email'/>
      </div>
    </div>
  );
}

export default ContactCards
const ContactCard =({type}:{type:'phone' | 'email'})=>{
    return (
      <div className="bg-white w-full md:w-[536px] h-[256px] flex gap-2 items-center justify-center shadow-sm">
        <div className="h-[192px]">
          <div
            className={cn(
              "size-24 flex-center rounded-sm",
              type === "phone" ? "bg-primary-50" : "bg-Success-50"
            )}
          >
            <Image
              src={
                type === "phone"
                  ? "/asset/icons/coustomerService/phoneCall.svg"
                  : "/asset/icons/coustomerService/ChatCircleDots.svg"
              }
              height={48}
              width={48}
              alt="icon"
            />
          </div>
        </div>
        <div className="w-[352px] h-[192px] flex flex-col gap-3">
          <h3 className="text-gray-900 font-semibold text-lg">
            {type === "phone" ? "Call Us" : "Chat with us"}
          </h3>
          <p className="text-gray-600 text-sm">
            we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk with
            use now
          </p>
          <h2 className="text-gray-900 text-2xl font-semibold">
            {type === "phone" ? "+1-202-555-0126" : "Support@clicon.com"}
          </h2>
          <Button
            className={cn(
              "w-[152px] h-12",
              type === "phone" ? "bg-primary-500" : "bg-Success-500"
            )}
          >
            {type === "phone" ? "Call" : "Contact"} Us <ArrowRight />
          </Button>
        </div>
      </div>
    );

}