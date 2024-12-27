import React from "react";
import { WhyUsText } from "../../components/layouts/why-us-text";
import { CustomUnderline } from "../../components/layouts/custom-underline";

const WhyUs: React.FC = () => {
    return <div className="bg-opacity-50 flex justify-end">
        <div className='lg:w-1/2'>
            <div className='mt-20 px-2 lg:px-0 lg:w-[70%] text-start'>
                <p className="text-5xl font-[1000] text-meta-orange">WHY US</p>
                <CustomUnderline styles="w-full bg-meta-orange">
                    <p className="text-xl font-semibold mt-3 text-start text-meta-blue">YOUR TRUSTED DELIVERY PARTNER</p>
                </CustomUnderline>
                <p className="mt-8 text-gray-700">
                    A seamless delivery is what we aim for. This is why our logistics solutions cater to creating faster,
                    efficient, and more innovative supply chains tailored to those needs.
                </p>
                <div className="mt-8 px-4 lg:px-0">
                    <WhyUsText title={'01'} text={'Ensures A Dedicated Relationship Manager'} />
                    <WhyUsText title={'02'} text={'Priority In Deployment Of Advanced Transformational Programmes'} />
                    <WhyUsText title={'03'} text={'Responsive Management With Direct Access To Md’s Office'} />
                    <WhyUsText title={'04'} text={'Enhanced Governance And Review Rigor'} />
                    <WhyUsText title={'05'} text={'High Priority ‘P1’ Status For Any On Ground Incidents'} />
                    <WhyUsText title={'06'} text={'Flexible Commercials & Implementation Approach'} />
                    <WhyUsText title={'07'} text={'Strategic Partnership'} />
                    <WhyUsText title={'08'} text={'RTA Compliant'} />
                    <WhyUsText title={'09'} text={'Experienced Professionals'} />
                    <WhyUsText title={'10'} text={'Wider Reach Across UAE'} />
                    <WhyUsText title={'11'} text={'Faster Delivery'} />
                </div>
            </div>
        </div>
    </div>
}

export { WhyUs }