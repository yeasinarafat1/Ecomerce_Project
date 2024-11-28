import React from 'react'
import CardDisplay from '../dashboard/CardDisplay'
import AddressCard from '@/components/Shared/AddressCard'

const paymentOptions = () => {
  return (
    <div className='w-full md:container flex flex-col gap-3'>
        <CardDisplay />
        <div className='w-full flex items-center gap-2 lg:gap-5 flex-wrap mb-4'>
            <AddressCard type='Billing address'/>
            <AddressCard type="Shipping Address"/>
            
        </div>
    </div>
  )
}

export default paymentOptions