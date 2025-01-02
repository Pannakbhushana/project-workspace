import React from 'react';
import HeroCard from '../../components/layouts/hero-card';
import { CustomUnderline } from '../../components/layouts/custom-underline';

const Services: React.FC = () => {

    return (
        <div className="min-h-screen flex flex-col items-center">
             <HeroCard>
                <div className='text-start text-6xl font-[1000] px-5 md:px-0'>
                    <p className='text-meta-orange'>OUR</p>
                    <CustomUnderline styles="w-full bg-meta-orange">
                        <p className='mt-2 text-meta-blue'>SERVICES</p>
                    </CustomUnderline>
                    <p className='text-2xl mt-3 font-[800] text-meta-blue'>TRUSTED DELIVERY PARTNER</p>
                </div>
            </HeroCard>
            
        </div>
    );
};

export default Services;
