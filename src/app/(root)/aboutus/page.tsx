import React from 'react'
import AboutHero from './AboutHero'
import AboutUsBanner from './AboutUsBanner'
import SubscribeToNewsLater from '@/components/Shared/SubscribeToNewsLater'
import Contributors from './Contributors'

const AboutUs = () => {
  return (
    <div className='w-full flex flex-col gap-4 '>
      <AboutHero />
      <Contributors />
      <AboutUsBanner />
    <SubscribeToNewsLater />
    </div>
  )
}

export default AboutUs