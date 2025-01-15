import React from "react";
import Marquee from "react-fast-marquee";
import { CustomUnderline } from "../../components/layouts/custom-underline";

const clients = [
    'https://1885.ae/wp-content/uploads/2022/07/talabat.png',
    'https://1885.ae/wp-content/uploads/2022/07/ajkitchen.png',
    'https://1885.ae/wp-content/uploads/2024/04/amazon.png',
    'https://1885.ae/wp-content/uploads/2022/07/talabat.png',
    'https://1885.ae/wp-content/uploads/2022/07/noon.png',
    'https://1885.ae/wp-content/uploads/2022/07/ajkitchen.png',
    'https://1885.ae/wp-content/uploads/2024/04/amazon.png',
    'https://1885.ae/wp-content/uploads/2022/07/talabat.png',
    'https://1885.ae/wp-content/uploads/2022/07/noon.png',
    'https://1885.ae/wp-content/uploads/2022/07/ajkitchen.png',
    'https://1885.ae/wp-content/uploads/2024/04/amazon.png',
    
]

const OurClients: React.FC = () => {
    return <div className='pt-[5%] pb-[10%] mt-20 bg-neutral-100 bg-opacity-50'>
        <br />
        <CustomUnderline styles="w-full bg-meta-orange">
        <p className="text-3xl md:text-5xl text-center font-[1000] text-meta-orange">OUR CLIENTS</p>
        </CustomUnderline>
        <div className="relative overflow-hidden mt-[20%] md:mt-[5%]">
        <Marquee speed={70} direction={'left'} pauseOnHover={true}>
        <div
            className="flex space-x-17 hide-scrollbar"
            style={{ whiteSpace: 'nowrap' }}
          >
           {
            clients.map((url, i)=> <div key={i} className="flex-shrink-0 mx-5">
            <img className="mx-auto" src={url} alt="" />
        </div>)
           }
            </div>
        </Marquee>
        </div>
    </div>
}

export { OurClients }