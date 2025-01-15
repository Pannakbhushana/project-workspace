import React, { PropsWithChildren } from "react";
import { ReactTyped } from "react-typed";

interface DropdownProps extends PropsWithChildren {
  styles?: string;
}

const HeroCard: React.FC<DropdownProps> = ({ children, styles }) => {
  const reactTYpedContent = [
    "Full Service Moving Company",
    "Best Moving Company In The UAE !",
    "Fast and Secure Moving Company",
  ]

  return (
    <div className={`w-full mt-[80px] md:mt-[100px] min-h-[400px] bg-neutral-100 bg-opacity-50 flex ${styles}`}>
      <div className='w-1/2 hidden md:flex justify-center items-center'>
        <div>
          <p className="text-meta-orange font-bold">Welcome to Horn Ok Please</p>
          <div className="text-meta-blue text-2xl font-[800]"><ReactTyped loop strings={reactTYpedContent} typeSpeed={100} /></div>
        </div>
      </div>
      <div className='w-full md:w-1/2 flex justify-center items-center'>
        <div className='text-start text-3xl md:text-5xl font-[1000]'>
          {children}
        </div>

      </div>
    </div>
  );
};

export default HeroCard;