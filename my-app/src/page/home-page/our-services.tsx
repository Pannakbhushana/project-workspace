import React from "react";
import CustomCard from "../../components/layouts/custom-card";
import { FaShuttleVan } from "react-icons/fa";
import { CustomUnderline } from "../../components/layouts/custom-underline";

const OurServices: React.FC = () => {
    return <div className="lg:w-[70%] lg:ml-[15%] mt-17 px-4">
        <CustomUnderline styles="w-full bg-meta-orange">
        <p className="text-3xl md:text-5xl font-[1000] text-meta-orange mt-2 text-center">Our Services</p>
        </CustomUnderline>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-20 justify-items-center">
            <CustomCard
                Logo={FaShuttleVan}
                title="Fast & Reliable Services"
                description="Providing top-notch logistics and transportation solutions tailored to your needs. Providing top-notch logistics and transportation solutions tailored to your needs."
                backgroundImage={
                    "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg"
                }
            />
            <CustomCard
                Logo={FaShuttleVan}
                title="Fast & Reliable Services"
                description="Providing top-notch logistics and transportation solutions tailored to your needs."
                backgroundImage={
                    "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg"
                }
            />
            <CustomCard
                Logo={FaShuttleVan}
                title="Fast & Reliable Services"
                description="Providing top-notch logistics and transportation solutions tailored to your needs."
                backgroundImage={
                    "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg"
                }
            />
        </div>
    </div>
}

export { OurServices }