import React from "react";
import styles from './style.module.css'

const IntroBanner: React.FC = () => {
  return <div className={`h-[90vh] ${styles.backgroundImage}`}>
    <div className='h-full lg:w-1/2 flex justify-center items-center text-white'>
      <div className='px-5 md:px-0 md:w-[60%] min:h-50 text-justify'>
        <p className='text-xl md:text-2xl lg:text-3xl font-[900]'>
          Fast & Secure Move is Our Promise
        </p>
        <p className='mt-2'>
          Hornokplease is the best Movers and Packers in Dubai, Our services speak louder than words
        </p>
        <br />
        <button className='bg-meta-orange rounded-lg py-3 px-4 hover:bg-opacity-50'>Learn More</button>
      </div>
    </div>
  </div>
}

export { IntroBanner }