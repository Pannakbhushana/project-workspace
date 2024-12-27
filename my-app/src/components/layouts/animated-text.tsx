import React from "react";

interface AnimatedTextProps {
    text: string,
    title: string,
}

const AnimatedText:React.FC<AnimatedTextProps> = ({ text, title }) => {
    return <div className="text-center animate-bounce-slow hover:text-meta-orange">
    <p className="text-5xl font-bold">{text}</p>
    <p className="py-2 px-4 bg-meta-blue rounded-full mt-2 text-white hover:bg-meta-orange">
      {title}
    </p>
  </div>
}

export { AnimatedText }