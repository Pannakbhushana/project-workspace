import React, { PropsWithChildren } from "react";

interface CustomUnderlineProps extends PropsWithChildren {
    styles?: string
}

const CustomUnderline: React.FC<CustomUnderlineProps> = ({ styles, children }) => {
    return <div className="inline-block">
        {children}
        <div className="flex justify-center">
            <div className={`h-[1px] bg-black mt-4 animate-bounce-underline ${styles}`}></div>
        </div>
    </div>
}

export { CustomUnderline }