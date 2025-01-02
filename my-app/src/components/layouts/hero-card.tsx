import React, { PropsWithChildren } from "react";

interface DropdownProps extends PropsWithChildren {
  styles?: string;
}

const HeroCard: React.FC<DropdownProps> = ({ children, styles }) => {

  return (
    <div className={`w-full mt-[80px] md:mt-[100px] min-h-[400px] bg-neutral-100 bg-opacity-50 flex ${styles}`}>
    <div className='w-1/2 hidden md:block'></div>
    <div className='w-full md:w-1/2 flex justify-center items-center'>
      <div className='text-start text-3xl md:text-5xl font-[1000]'>
          {children}
      </div>
      
    </div>
  </div>
  );
};

export default HeroCard;