import React from "react";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const EnquireForm:React.FC = () => {
   return <div className='bg-meta-orange w-[80%] md:w-[60%] rounded-2xl p-5 md:p-12 pt-20'>
        <div className='text-start flex items-center gap-5'>
            <p className='animate-bounce-slow'><TfiHeadphoneAlt color='white' size={60} /></p>
            <p className='text-xl md:text-2xl text-meta-blue font-[800]'>ENQUIRE NOW</p>
        </div>
        {/* Form */}
        <div className='mt-5'>
            <div className='w-ful rounded-md'>
            <textarea className='w-full rounded-md p-2' rows={7} placeholder='Service Description' />
            </div>
            <br />
            <div className='md:flex justify-between'>
                <div className='md:w-[40%] bg-white h-14 rounded-md'><input type="text" placeholder='Your Name' className='w-full h-full rounded-md p-2' /></div>
                <div className='md:w-[40%] mt-5 md:mt-0 bg-white h-14 rounded-md'><input type="text" placeholder='Your Email' className='w-full h-full rounded-md p-2' /></div>
            </div>
            <br />
            <div className='md:flex justify-between'>
                <div className='md:w-[40%] bg-white h-14 rounded-md'><input type="text" placeholder='Your Phone' className='w-full h-full rounded-md p-2' /></div>
                <div className='md:w-[40%] mt-5 md:mt-0 bg-meta-blue text-white h-14 rounded-md hover:bg-opacity-80'><input type="Submit" value={'ENQUIRE NOW'} className='w-full h-full rounded-md cursor-pointer' /></div>
            </div>
        </div>
    </div>
}

export { EnquireForm }