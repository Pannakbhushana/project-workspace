import React from 'react';
import HeroCard from '../../components/layouts/hero-card';
import { CustomUnderline } from '../../components/layouts/custom-underline';
import CustomCard from '../../components/layouts/custom-card';
import { FaShuttleVan } from "react-icons/fa";
import { AnimatedText } from '../../components/layouts/animated-text';
import { EnquireForm } from '../../components/enquire-form.tsx';

const Services: React.FC = () => {

    return (
        <div className="min-h-screen flex flex-col items-center">
            <HeroCard>
                <div className='text-start text-5xl md:text-6xl font-[1000] px-5 md:px-0'>
                    <p className='text-meta-orange'>OUR</p>
                    <CustomUnderline styles="w-full bg-meta-orange">
                        <p className='mt-2 text-meta-blue'>SERVICES</p>
                    </CustomUnderline>
                    <p className='text-2xl mt-3 font-[800] text-meta-blue'>TRUSTED DELIVERY PARTNER</p>
                </div>
            </HeroCard>

            <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3 mt-20 justify-items-center">
                <CustomCard
                    Logo={FaShuttleVan}
                    path = {"/know-more"}
                    title="Fast & Reliable Services"
                    description="Providing top-notch logistics and transportation solutions tailored to your needs. Providing top-notch logistics and transportation solutions tailored to your needs."
                    backgroundImage={
                        "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg"
                    }
                />
                <CustomCard
                    Logo={FaShuttleVan}
                    path = {"/know-more"}
                    title="Fast & Reliable Services"
                    description="Providing top-notch logistics and transportation solutions tailored to your needs."
                    backgroundImage={
                        "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg"
                    }
                />
                <CustomCard
                    Logo={FaShuttleVan}
                    path = {"/know-more"}
                    title="Fast & Reliable Services"
                    description="Providing top-notch logistics and transportation solutions tailored to your needs."
                    backgroundImage={
                        "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg"
                    }
                />
            </div>

            <div className="mt-20 w-full">
                <div className="mt-30 p-5 h-auto bg-neutral-100 py-20 bg-opacity-50">
                    <CustomUnderline styles="w-full bg-meta-orange">
                        <p className="text-3xl md:text-5xl text-center font-[1000] text-meta-orange">Key Highlights</p>
                    </CustomUnderline>
                    <p className="mt-20 text-center text-gray-700">
                        We’re proud to be one of the fastest-growing & trusted logistic brands
                        in the UAE. Here’s a look at some of the milestones along our journey.
                    </p>
                    <div className="flex flex-wrap gap-10 mt-20 justify-center">
                        <AnimatedText text={'7M'} title={'Deliveries'} />
                        <AnimatedText text={'3M'} title={'Kms Serviced'} />
                        <AnimatedText text={'1K+'} title={'Bikes'} />
                        <AnimatedText text={'100+'} title={'Dry Vans/Canters'} />
                        <AnimatedText text={'100+'} title={'Chiller Vans/Canters'} />
                        <AnimatedText text={'200+'} title={'Sedans/MPVs'} />
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-end bg-meta-orange'>
        <div className='w-full lg:w-1/2 flex justify-center items-center'>
          <EnquireForm />
        </div>
      </div>

        </div>
    );
};

export default Services;
