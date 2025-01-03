import React from 'react';
import { HeroSection } from './hero-section';
import { AboutUsSection } from './about-us-section';
import { CustomUnderline } from '../../components/layouts/custom-underline';
import { OurClients } from '../home-page/our-clients';

const AboutUs: React.FC = () => {

    return (
        <div className="min-h-screen flex flex-col items-center">
            <HeroSection />
            <AboutUsSection />

            <div className='w-full min-h-[500px] bg-neutral-100 bg-opacity-50 md:flex'>
                <div className='md:w-1/2 flex justify-center items-center'>
                    <div className='w-[80%] md:w-[70%] lg:w-1/2 h-[300px] rounded-2xl'>
                        <img src="https://1885.ae/wp-content/uploads/elementor/thumbs/1885-mission-pu0rm9go5ls2nlfs388at9nn843k6y6xnc6b7lwmmg.jpg" alt="" className='w-full h-full rounded-2xl'/>
                    </div>
                </div>
                <div className='md:w-1/2 flex justify-center items-center mt-10 md:mt-0'>
                    <div>
                    <CustomUnderline styles="w-full bg-meta-orange">
                        <p className='mt-2 text-3xl md:text-5xl font-[1000] text-meta-orange'>MISSION</p>
                    </CustomUnderline>
                    <p className='mt-5'>To providethe most efficient service in the last and middle mile delivery<br /> spacewith innovation as the driving force.</p>
                    </div>
                </div>
            </div>

            <div className='w-full min-h-[500px] md:flex'>
            <div className='md:w-1/2 flex justify-center items-center mt-10 md:mt-0'>
                    <div>
                    <CustomUnderline styles="w-full bg-meta-orange">
                        <p className='mt-2 text-3xl md:text-5xl font-[1000] text-meta-orange'>VISION</p>
                    </CustomUnderline>
                    <p className='mt-5'>To be the largestlast and middle mile delivery solutions company across<br /> UAE and GCC markets.</p>
                    </div>
                </div>
                <div className='md:w-1/2 flex justify-center items-center'>
                    <div className='w-[80%] md:w-[70%] lg:w-1/2 h-[300px] rounded-2xl'>
                        <img src="https://1885.ae/wp-content/uploads/elementor/thumbs/1885-Vision-pu0rmaeicftcz7eexqmxdrf3thyxenanzgtsovv8g8.jpg" alt="" className='w-full h-full rounded-2xl'/>
                    </div>
                </div>
            </div>

           <div className='w-full'>
           <OurClients/>
           </div>
        </div>
    );
};

export default AboutUs;
