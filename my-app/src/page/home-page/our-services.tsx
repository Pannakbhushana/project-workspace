import React from "react";
import CustomCard from "../../components/layouts/custom-card";
import { FaShuttleVan } from "react-icons/fa";
import { CustomUnderline } from "../../components/layouts/custom-underline";
import CustomeSlider from "../../components/slider";

const OurServices: React.FC = () => {
    return <div className="mt-17 px-4">
        <CustomUnderline styles="w-full bg-meta-orange">
        <p className="text-3xl md:text-5xl font-[1000] text-meta-orange mt-2 text-center">Our Services</p>
        </CustomUnderline>
        <div className="mt-20 lg:w-[80%] lg:ml-[10%]">
            <CustomeSlider>
            <CustomCard
                Logo={FaShuttleVan}
                path = {"/know-more"}
                title="Rent a Truck"
                description="We all are aware of the hassles whenever we are planning to rent pickup in Dubai. Whether you are an individual looking to move your belongings to a new location or a shop owner who needs to ship goods to your client, everyone has faced the tantrums of the vehicle owners as well as the fluctuating prices. We at “Hornokplease” solve this for you!"
                backgroundImage={
                    "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg"
                }
            />
            <CustomCard
                Logo={FaShuttleVan}
                path = {"/know-more-second-page"}
                title="Furniture Movers"
                description="Working with many Furniture companies to deliver and assemble there customer furniture. We are best furniture movers in Dubai. This is what we do at Hornokplease. We make your life easy and your business easier!"
                backgroundImage={
                    "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg"
                }
            />
            <CustomCard
                Logo={FaShuttleVan}
                path = {"/know-more-third-page"}
                title="Movers & Packers"
                description="Packing your house to move can be stressful. If you’re looking for packers and movers in Dubai that will pack for you then you have come to the perfect location."
                backgroundImage={
                    "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg"
                }
            />
            </CustomeSlider>
        </div>
    </div>
}

export { OurServices }