import React from "react";

interface CardProps {
  Logo: React.ElementType;
  title: string;
  description: string;
  backgroundImage: string;
}

const CustomCard: React.FC<CardProps> = ({ Logo, title, description, backgroundImage }) => {
  return (
    <div className="relative w-full max-w-sm h-96 border rounded-lg overflow-hidden shadow-md group bg-neutral-100">
      {/* Background image with red overlay (visible only on hover) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.7), rgba(255, 0, 0, 0.7)),
          url(${backgroundImage})`,
        }}
      ></div>

      {/* Card content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
        {/* Logo */}
        <div className="w-20 h-20 flex items-center justify-center group-hover:text-white">
          <Logo size={50} />
        </div>

        {/* Title */}
        <h3 className="mt-4 text-lg font-bold text-center text-gray-800 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>

        {/* Description (hidden on hover) */}
        <p className="mt-2 text-sm text-gray-600 text-center group-hover:opacity-0 group-hover:invisible transition-all duration-300">
          {description}
        </p>

        {/* Learn More Button */}
        <button className="opacity-0 group-hover:opacity-100 mt-6 bg-white font-bold py-2 px-4 rounded-md shadow-lg hover:bg-red-500 transition-colors duration-300 group-hover:bg-white">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CustomCard;
