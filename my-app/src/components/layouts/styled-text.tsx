import React, { PropsWithChildren } from "react";

interface StyledTextProps extends PropsWithChildren {
    styles?: string;
    onClick?: () => void;
}

const StyledText: React.FC<StyledTextProps> = ({ children, onClick, styles }) => {
    return (
        <div className={`font-bold hover:underline hover:text-red-500 cursor-pointer ${styles}`}
            onClick={onClick}>{children}</div>
    );
};

export default StyledText;