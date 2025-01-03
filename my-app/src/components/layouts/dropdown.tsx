import React, { PropsWithChildren, useEffect, useRef } from "react";

interface DropdownProps extends PropsWithChildren {
  visible: boolean;
  positionStyles?: string;
  onClose: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ children, visible, positionStyles, onClose }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div ref={dropdownRef}
         className={`absolute bg-white shadow-md py-2 rounded-md mt-1 w-[200px] z-50 ${positionStyles}`}>
      <div className="px-4 py-4 hover:bg-gray-100 cursor-pointer">{children}</div>
    </div>
  );
};

export default Dropdown;