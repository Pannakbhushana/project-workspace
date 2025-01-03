import React from 'react';
import HeroCard from '../../components/layouts/hero-card';
import { CustomUnderline } from '../../components/layouts/custom-underline';
import { WhyUsText } from '../../components/layouts/why-us-text';

const WhyUs: React.FC = () => {

    return (
        <div className="min-h-screen flex flex-col items-center">
            <HeroCard>
                <div className='text-start text-5xl md:text-6xl font-[1000] px-5 md:px-0'>
                    <p className='text-meta-orange'>OUR</p>
                    <CustomUnderline styles="w-full bg-meta-orange">
                        <p className='mt-2 text-meta-blue'>FEATURES</p>
                    </CustomUnderline>
                    <p className='text-2xl mt-3 font-[800] text-meta-blue'>WHY CHOOSE US</p>
                </div>
            </HeroCard>

            <div className='w-full md:flex'>

                <div className='w-full md:w-1/2 p-5 text-start flex justify-center'>
                   <div className='md:w-[80%]'>
                   <CustomUnderline styles="w-full bg-meta-orange">
                        <p className='mt-2 text-3xl font-[1000] text-meta-orange'>WHY CHOOSE US</p>
                    </CustomUnderline>
                    <p className='text-3xl mt-3 font-[700] text-meta-blue'>We are tech enable moving company</p>
                    <div className='mt-5'>
                        <div className='text-justify'>
                            <p>
                                That keeps going above the level of sensitivity that needs to be maintained while shifting, whether it is from different parts of
                                emirates such as Sharjah, Ajman, Al ain, Abu Dhabi, RAK, etc.- yes we operate in almost all the parts of emirates.
                            </p>
                            <br />
                            <p>When you select the experienced packers and movers, you can select and create your package from a variety of comprehensive services so
                                that you can get the options that are right for your requirements and budget. Some of the other benefits you receive by using our
                                packing and moving experts include:
                            </p>
                        </div>
                        <br />
                        <WhyUsText title={'01'} text={'Free Moving Quotes'} />
                        <WhyUsText title={'02'} text={'Packing & Unpacking Services'} />
                        <WhyUsText title={'03'} text={'Trained, Professional and Uniformed Movers'} />
                        <WhyUsText title={'04'} text={'Clean Trucks with Proper Pads and Equipment for Safe Transport'} />
                        <WhyUsText title={'05'} text={'Insured and Bonded Service'} />
                        <WhyUsText title={'06'} text={'Short Term Storage'} />
                        <WhyUsText title={'07'} text={'Best Moving Company In The TOWN!'} />
                        <WhyUsText title={'08'} text={'Best Movers and packers in Town!'} />
                    </div>
                   </div>
                </div>

                <div className='md:w-1/2 flex justify-center items-center'>
                    <div className='w-[80%] lg:w-1/2 h-[450px] md:h-[600px]'>
                        <img src="https://hornokplease.ae/img/about/about-img.jpg" alt="" className='w-full h-full rounded-md' />
                    </div>
                </div>
            </div>


            <div className='w-full md:flex pt-40 bg-neutral-100 bg-opacity-50 pb-40'>
            <div className='md:w-1/2 flex justify-center items-center'>
                    <div className='w-[80%] lg:w-1/2 h-[300px]'>
                        <img src="https://hornokplease.ae/img/about/outstory.png" alt="" className='w-full h-full rounded-md' />
                    </div>
                </div>

                <div className='w-full md:w-1/2 p-5 text-start flex justify-center'>
                   <div className='lg:w-[80%]'>
                   <CustomUnderline styles="w-full bg-meta-orange">
                        <p className='mt-2 text-3xl md:text-5xl font-[1000] text-meta-orange'>WHY ?</p>
                    </CustomUnderline>
                    <div className='mt-5'>
                        <div className='text-justify'>
                           <p>No matter where life is taking you, you can trust the professionals at Horn Ok please to get you there safely and smoothly.</p>
                           <br />
                           <p>We take care of everything during moving. If you don’t have time to pack, we will help with that too. All we need is your address and we will help you to be relocated to your new home.</p>
                            <br />
                            <p>Sometimes during the international relocation Horn Ok please provide the storage service too with packing material so your stuff remains intact, while you are away from it.</p>
                            <br />
                            <p>The logistics involved in an office move is usually a lot more complicated than when moving home.</p>
                            <br />
                            <p>In addition to the size of the move, the importance of having each department perfectly reorganized to its desired state, the value of the documents, and the respect of deadlines is crucial in order not to disrupt the company’s activity. At HOP, we understand how important an office move is for a company</p>
                            <br />
                            <p>Horn Ok please help you in the hassle-free moving in Dubai as well as international relocations too. The non-big furniture owners are probably reluctant to pay a large amount of money for moving when all you have are bags and small furniture.</p>
                            <br />
                            <p>Therefore, we are here to provide excellent moving service for you at a modest price.</p>
                            <br />
                            <p>We are a full-service professional moving company that provides residential and business moving, professional packing, pick up, delivery, and climate-controlled storage services.</p>
                            <br />
                            <p>Horn Ok please is your custom long distance mover. We professionalize in Long Distance moves around the globe too & from UAE. Our services include packaging of your white goods and reassembling them in your new home or office.</p>
                        </div>

                    </div>
                   </div>
                </div>

            </div>

        </div>
    );
};

export default WhyUs;
