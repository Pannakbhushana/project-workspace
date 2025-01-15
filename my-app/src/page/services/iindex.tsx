import React from 'react';
import HeroCard from '../../components/layouts/hero-card';
import { CustomUnderline } from '../../components/layouts/custom-underline';
import CustomCard from '../../components/layouts/custom-card';
import { FaShuttleVan } from "react-icons/fa";
import { AnimatedText } from '../../components/layouts/animated-text';
import { EnquireForm } from '../../components/enquire-form.tsx';
import CustomeSlider from '../../components/slider';

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

            <div className="mt-20 w-full lg:w-[80%]">
                <CustomeSlider>
                    <CustomCard
                        Logo={FaShuttleVan}
                        path={"/know-more"}
                        title="Rent a Truck"
                        description="We all are aware of the hassles whenever we are planning to rent pickup in Dubai. Whether you are an individual looking to move your belongings to a new location or a shop owner who needs to ship goods to your client, everyone has faced the tantrums of the vehicle owners as well as the fluctuating prices. We at “Hornokplease” solve this for you!"
                        backgroundImage={
                            "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg"
                        }
                    />
                    <CustomCard
                        Logo={FaShuttleVan}
                        path={"/know-more-second-page"}
                        title="Furniture Movers"
                        description="Working with many Furniture companies to deliver and assemble there customer furniture. We are best furniture movers in Dubai. This is what we do at Hornokplease. We make your life easy and your business easier!"
                        backgroundImage={
                            "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg"
                        }
                    />
                    <CustomCard
                        Logo={FaShuttleVan}
                        path={"/know-more-third-page"}
                        title="Movers & Packers"
                        description="Packing your house to move can be stressful. If you’re looking for packers and movers in Dubai that will pack for you then you have come to the perfect location."
                        backgroundImage={
                            "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg"
                        }
                    />
                </CustomeSlider>
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
