import React from 'react';
import { CustomUnderline } from '../../components/layouts/custom-underline';
import { EnquireForm } from '../../components/enquire-form.tsx';
import { WhyUsText } from '../../components/layouts/why-us-text';

const AboutUsSection: React.FC = () => {
    return <div className='w-full min-h-[500px] lg:flex'>
        <div className='w:full lg:w-1/2 p-5 md:p-20 text-justify'>
            <CustomUnderline styles="w-full bg-meta-orange">
                <p className='mt-2 text-3xl md:text-5xl font-[1000] text-meta-orange'>ABOUT US</p>
            </CustomUnderline>
            <div className='md:w-[65%] mt-5'>
                <p>Hornokplease best Packing And Moving Companie in Dubai has been designed to provide you with the best experience of
                    Packing And Moving Dubai, Rent a truck, and delivery service. We are providing hassle-free movement & the best solution for
                    your logistics handling. Our goal is to be UAE’S best Dealer of “Rent a truck”, Movers in Dubai, and provide end-to-end logistics
                    platforms and revolutionize the transport sector for our customers. You can find us on dubai app sore, we are the best packers
                    and movers in UAE.
                </p>
                <div className="mt-8 px-4 lg:px-0">
                    <WhyUsText title={'01'} text={'Dedicated and Professional'} />
                    <WhyUsText title={'01'} text={'Moving Protection'} />
                    <WhyUsText title={'01'} text={'Commercial Moves'} />
                    <WhyUsText title={'01'} text={'Every Day Delivery'} />
                    <WhyUsText title={'01'} text={'Moving Checklists'} />
                    <WhyUsText title={'01'} text={'Best Logistic Company in Town!'} />
                    <WhyUsText title={'01'} text={'Best Moving Company In The TOWN!'} />
                    <WhyUsText title={'01'} text={'Best Movers and packers in Town!'} />
                </div>
            </div>
        </div>

        <div className='w-full lg:w-1/2 flex justify-center items-center py-20'>
       <EnquireForm/>
       </div>
    </div>
}

export { AboutUsSection }