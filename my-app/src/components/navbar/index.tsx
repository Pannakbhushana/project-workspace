import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from '../layouts/dropdown';

const Navbar: React.FC = () => {
  const [showNav, setShowNav] = useState(true);
  const [showHamburgerDropdown, setShowHamburgerDropdown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
    setLastScrollY(window.scrollY);
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);


  return (
    <nav className={`fixed w-full bg-white z-999 text-black shadow-lg transition-transform transform
    ${showNav ? 'translate-y-0' : '-translate-y-full'} h-[80px] md:h-[100px] grid content-center`}>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center cursor-pointer">
        <div className="w-1/2 md:w-1/3" onClick={()=>{
          navigate('/')
        }}>
          Logo
        </div>

        <span className='flex justify-between items-center gap-15 font-semibold'>
          <span className='hidden lg:flex justify-between items-center gap-15'>
            <div className="group relative">
              company
            </div>
          </span>

          <span className="lg:hidden cursor-pointer">
            <span onClick={() => setShowHamburgerDropdown((prev) => !prev)}>
              {/* <MdDensitySmall size={30} /> */}
              dropdown
            </span>
            <Dropdown visible={showHamburgerDropdown} positionStyles="top-full right-1">
             <div>a</div>
             <div>a</div>
             <div>a</div>
             <div>a</div>
            </Dropdown>
        </span>

        </span>
      </div>
    </nav>
  );
};

export default Navbar;