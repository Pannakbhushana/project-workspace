import React from "react";

const PageOne:React.FC = () =>{
    return <div className="h-full lg:flex">
    <div className="lg:w-1/2">
        <img src="https://hornokplease.ae/img/services/rent-a-truck.jpg" alt="" />
    </div>
    <div className="lg:w-1/2 pt-20 text-start px-5 md:px-10">
        <p className="text-2xl font-[800] underline underline-offset-8">Rent a Truck</p>
        <p className="leading-7 mt-5">
        We all are aware of the hassles whenever we are planning to rent pickup in Dubai. Whether you are an individual looking to move your belongings to a new location or a shop owner who needs to ship goods to your client, everyone has faced the tantrums of the vehicle owners as well as the fluctuating prices. We at “Hornokplease” solve this for you!
        <br />
        <br />
        Say you are in a shop looking at the things you bought that you need to get transported to your house or you are the owner of a shop who needs to get the goods delivered to the customer within a stipulated period of time. To get the task done, you will call multiple pickup rental services or you go to the nearby pickup stand to find a 1ton pickup/3 ton pickup or the truck to hire. Then the main part will come “negotiation” — drivers asking for unfairly high prices, unnecessary delays, trust issues with drivers and more other problems— making your experience an irritating one.
        <br />
        <br />
        Let’s assume you have an app on your smartphone. You open it and select the pickup you want and immediately you receive the estimated time of delivery along with an estimated cost structure. The name and number of the driver come up on your screen along with the option of tracking the vehicle in transit. Hire how many helpers you want.
        <br />
        <br />
        Everything is sorted and at one place as the driver arrives on time, the condition of the vehicle is excellent, get helper, assembler, carpenter and you have a wide smile on your face. Hurray!
        <br />
        <br />
        This is what we do at Hornokplease. We make your life easy and your business easier!
        </p>
    </div>
</div>
}

export { PageOne }