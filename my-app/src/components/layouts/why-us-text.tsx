import React from "react";

interface WhyUsTextProps {
    text: string,
    title: string,
}

const WhyUsText:React.FC<WhyUsTextProps> = ({ text, title }) => {
    return  <div className='flex items-center gap-2 mt-4 text-[12px] md:text-sm'>
    <div className='bg-black text-red-400 font-bold rounded-full w-7 h-7 text-sm grid place-content-center'>{title}</div>
    <div className="w-[90%]"><p>{text}</p></div>
  </div>
}

export { WhyUsText }