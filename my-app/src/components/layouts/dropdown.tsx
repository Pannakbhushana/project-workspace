import React, { PropsWithChildren } from "react";

interface DropdownProps extends PropsWithChildren {
  visible: boolean;
  positionStyles?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ children, visible, positionStyles }) => {
  if (!visible) return null;

  return (
    <div className={`absolute bg-white shadow-md py-2 rounded-md mt-1 w-50 z-50 ${positionStyles}`}>
     <div className="px-4 py-4 hover:bg-gray-100 cursor-pointer">{ children }</div>
    </div>
  );
};

export default Dropdown;