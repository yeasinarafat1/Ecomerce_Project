import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6';
import CustomerServiceHero from './CustomerServiceHero';
import HelpOptions from './HelpOptions';
import PopularTopics from './PopularTopics';
import ContactCard from './ContactCard';

const page = () => {
  return (
    <div className='flex flex-col gap-2'>
      <CustomerServiceHero />
      <HelpOptions />
      <PopularTopics />
      <ContactCard />
    </div>
  );
}

export default page