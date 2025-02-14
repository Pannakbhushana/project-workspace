import React from 'react';
import 'tailwindcss/tailwind.css';
import { IntroBanner } from './Intro-banner';
import { OurServices } from './our-services';
import { KeyHighlights } from './key-highlights';
import { WhyUsSection } from './why-us';
import { OurClients } from './our-clients';
import { EnquireForm } from '../../components/enquire-form.tsx';


const HomePage: React.FC = () => {
  return (
    <>
      <IntroBanner />
      <OurServices />
      <KeyHighlights />
      <WhyUsSection />
      <OurClients />
      <div className='flex justify-end bg-meta-orange'>
        <div className='w-full lg:w-1/2 flex justify-center items-center'>
          <EnquireForm />
        </div>
      </div>
    </>
  );
};

export default HomePage;