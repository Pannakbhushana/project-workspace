import React from 'react';
import { CustomUnderline } from "../../components/layouts/custom-underline";
import HeroCard from '../../components/layouts/hero-card';

const HeroSection: React.FC = () => {
  return <HeroCard>
    <div className='text-start text-6xl font-[1000] px-5 md:px-0'>
      <p className='text-meta-orange'>ABOUT</p>
      <p className='mt-2 text-meta-blue'>1885 DELIVERY</p>
      <CustomUnderline styles="w-full bg-meta-orange">
        <p className='mt-2 text-meta-blue'>SERVICES</p>
      </CustomUnderline>
      <p className='text-2xl mt-3 font-[800] text-meta-blue'>MAKE THE RIGHT MOVE</p>
    </div>
  </HeroCard>
}

export { HeroSection }