import React from 'react';
import { CustomUnderline } from '../../components/layouts/custom-underline';
import { EnquireForm } from '../../components/enquire-form.tsx';

const AboutUsSection: React.FC = () => {
    return <div className='w-full min-h-[500px] lg:flex'>
        <div className='w:full lg:w-1/2 p-5 md:p-20 text-justify'>
            <CustomUnderline styles="w-full bg-meta-orange">
                <p className='mt-2 text-3xl md:text-5xl font-[1000] text-meta-orange'>ABOUT US</p>
            </CustomUnderline>
            <div className='md:w-[65%] mt-5'>
                <p>
                    1885 Delivery Services, a company invested by Easy Lease Motorcycle Rental, is a subsidiary of International Holding Company (IHC), Abu Dhabi,
                    providing last and middle mile services across UAE.
                </p>
                <br />
                <p>The company was formed with a vision to capture substantial market share with a customer-centric approach and provide an end-to-end delivery solution.</p>
                <br />
                <p>
                    We go the extra mile when providing delivery-related solutions to get your logistics where they need to go. Our team is committed to serving its clients the best logistics servicesin the last and middle mile delivery space.</p>
                <br /><p>We are the trusted last mile delivery solution for reputed companies in the UAE across dozens of industries, including food and beverage, retail, e-commerce, furniture, healthcare centres, pharmacy and more.</p>
                <p>At 1885 Delivery Services, we don’t just promise, but we provide a seamless delivery solution.</p>
            </div>
        </div>


       <EnquireForm/>
    </div>
}

export { AboutUsSection }