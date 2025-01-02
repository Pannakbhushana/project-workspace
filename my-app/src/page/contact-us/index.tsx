import React from 'react';
import HeroCard from '../../components/layouts/hero-card';
import { CustomUnderline } from '../../components/layouts/custom-underline';
import { EnquireForm } from '../../components/enquire-form.tsx';
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs: React.FC = () => {

    return (
        <div className="min-h-screen flex flex-col items-center">
            <HeroCard>
                <div className='text-start text-6xl font-[1000] px-5 md:px-0'>
                    <p className='text-meta-orange'>GET IN</p>
                    <CustomUnderline styles="w-full bg-meta-orange">
                        <p className='mt-2 text-meta-blue'>TOUCH</p>
                    </CustomUnderline>
                    <p className='text-2xl mt-3 font-[800] text-meta-blue'>CONTACT US</p>
                </div>
            </HeroCard>

            <div className='w-full lg:flex text-start'>
                <EnquireForm />
                <div className='lg:w-1/2 flex justify-center items-center'>
                    <div className='w-full md:w-1/2 p-10 md:p-0 min-h-40'>
                        <p className='text-meta-orange text-3xl md:text-5xl font-[1000]'>CONTACT INFO</p>
                        <CustomUnderline styles="w-full bg-meta-orange">
                            <p className='mt-2 text-meta-blue text-2xl font-[800]'>FIND US HERE</p>
                        </CustomUnderline>
                        <br />
                        <div className='flex gap-2'>
                            <p><MdOutlineEmail/></p>
                            <p>info@hornokplease.ae</p>
                        </div>
                        <div className='flex gap-2 mt-2'>
                            <p><FaPhone/></p>
                            <p>0562748481</p>
                        </div>
                            <p className='py-5 text-meta-blue text-xl font-[800] underline underline-offset-8'>Dubai</p>
                            <div className='flex gap-2'>
                            <p><FaLocationDot/></p>
                            <p>53rd St- Al sufouh 2 Dubai United Arab Emirates</p>
                        </div>
                        <p className='py-5 text-meta-blue text-xl font-[800] underline underline-offset-8'>Jharkhand</p>
                        <div className='flex gap-2'>
                            <p><FaLocationDot/></p>
                            <p>Piska More Ranchi Jharkhand</p>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className='w-[80%] ml=[10%] mb-10 h-[400px] rounded-md'>
                <img src="https://www.japantimes.co.jp/uploads/imported_images/uploads/2019/03/adelstein-20190301-z.png" alt="" className='w-full h-full rounded-md' />
            </div>
        </div>
    );
};

export default ContactUs;

