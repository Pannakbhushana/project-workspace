import React from "react";
import { AnimatedText } from "../../components/layouts/animated-text";

const KeyHighlights: React.FC = () => {
  return (
    <div className="mt-20">
      <div className="mt-30 p-5 h-auto bg-neutral-100 py-20 bg-opacity-50">
      <p className="text-4xl text-center font-bold">Key Highlights</p>
      <p className="mt-10 text-center text-gray-700">
        We’re proud to be one of the fastest-growing & trusted logistic brands
        in the UAE. Here’s a look at some of the milestones along our journey.
      </p>
      <div className="flex flex-wrap gap-10 mt-20 justify-center">
        <AnimatedText text={'7M'} title={'Deliveries'}/>
        <AnimatedText text={'3M'} title={'Kms Serviced'}/>
        <AnimatedText text={'1K+'} title={'Bikes'}/>
        <AnimatedText text={'100+'} title={'Dry Vans/Canters'}/>
        <AnimatedText text={'100+'} title={'Chiller Vans/Canters'}/>
        <AnimatedText text={'200+'} title={'Sedans/MPVs'}/>
      </div>
    </div>
    </div>
  );
};

export { KeyHighlights };
