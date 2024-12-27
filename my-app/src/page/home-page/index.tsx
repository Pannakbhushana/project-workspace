import React from 'react';
import 'tailwindcss/tailwind.css';
import { IntroBanner } from './Intro-banner';
import { OurServices } from './our-services';
import { KeyHighlights } from './key-highlights';
import { WhyUs } from './why-us';
import { OurClients } from './our-clients';
import Contact from '../../components/layouts/contact';


const HomePage: React.FC = () => {
  return (
    <>
      <IntroBanner />
      <OurServices />
      <KeyHighlights />
      <WhyUs/>
      <OurClients/>
    <div className='flex justify-end bg-meta-orange bg-opacity-95'>
      <div className='lg:w-1/2 h-full'>
        <Contact/>
      </div>
    </div>
    </>
  );
};

export default HomePage;