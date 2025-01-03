import React, { useState, useEffect } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import { useNavigate, NavLink } from 'react-router-dom';
import Dropdown from '../layouts/dropdown';
import StyledText from '../layouts/styled-text';

const Navbar: React.FC = () => {
  const [showNav, setShowNav] = useState(true);
  const [showHamburgerDropdown, setShowHamburgerDropdown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const activeStyle = "text-meta-orange underline underline-offset-4"; 
  const inactiveStyle = "";

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
    setLastScrollY(window.scrollY);
  };

  const handleNavigate = (path: string) => {
    navigate(path)
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);


  return (
    <div className={`fixed w-full z-999 text-black shadow-lg transition-transform transform
    ${showNav ? 'translate-y-0' : '-translate-y-full'} h-[80px] md:h-[100px] flex justify-between items-center`}>

      {/* Large Screen */}
      <div className='hidden lg:grid place-content-center w-[20%] h-full text-xl font-bold hover:underline underline-offset-8
                      cursor-pointer bg-white'>
        <img src="./hornokplease.png" alt="" onClick={() => handleNavigate('/')} />
      </div>
      <div className='hidden lg:block w-[80%] h-full'>
        <div className='bg-neutral-100 h-1/2 flex items-center bg-opacity-70'>
          <div className='w-1/4 h-full grid content-center'>transport12@example.com</div>|
          <div className='w-1/4 h-full grid content-center'>+12 3456789012</div>|
          <div className='w-1/4 h-full grid content-center'>Mon – Sun: 9.00 am – 8.00pm</div>
          <div className='w-1/4 h-full flex justify-end'>
            <div className='w-1/2 h-full flex justify-around items-center'>
              <div className='hover:text-meta-orange cursor-pointer'><FaFacebook /></div><span>|</span>
              <div className='hover:text-meta-orange cursor-pointer'><FaTwitter /></div><span>|</span>
              <div className='hover:text-meta-orange cursor-pointer'><FaLinkedin /></div>
            </div>
          </div>
        </div>

        <div className='bg-white h-1/2'>
          <div className='w-[60%] ml-[20%] h-full flex justify-around items-center'>
            <StyledText >
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
              >Home</NavLink>
            </StyledText>

            <StyledText>
              <NavLink
                to="/about-us"
                className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
              >About</NavLink>
            </StyledText>

            <StyledText >
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
              >Service</NavLink>
            </StyledText>

            <StyledText >
              <NavLink
                to="/why-us"
                className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
              >Why Us</NavLink>
            </StyledText>

            <StyledText >
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
              >Contact Us</NavLink>
            </StyledText>
          </div>
        </div>
      </div>

      {/* Medium Screen */}
      <div className='hidden lg:hidden md:grid place-content-center w-[40%] h-full text-xl
                      font-bold hover:underline underline-offset-8 cursor-pointer bg-white'>
        <img src="./hornokplease.png" alt="" onClick={() => handleNavigate('/')} />
      </div>
      <div className='hidden md:block lg:hidden w-[60%] h-full text-sm'>
        <div className='h-1/2 flex justify-around items-center bg-neutral-100 opacity-70'>
          <div className='h-full grid content-center'>transport12@example.com</div>|
          <div className='h-full grid content-center'>+12 3456789012</div>|
          <div className='h-full grid content-center'>Mon – Sun: 9.00 am – 8.00pm</div>
        </div>
        <div className='bg-white h-1/2'>
          <div className='h-full flex justify-around items-center bg-white'>
          <StyledText >
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
              >Home</NavLink>
            </StyledText>

            <StyledText>
              <NavLink
                to="/about-us"
                className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
              >About</NavLink>
            </StyledText>

            <StyledText >
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
              >Service</NavLink>
            </StyledText>

            <StyledText >
              <NavLink
                to="/why-us"
                className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
              >Why Us</NavLink>
            </StyledText>

            <StyledText >
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
              >Contact Us</NavLink>
            </StyledText>
          </div>
        </div>
      </div>

      {/* Small Screen */}
      <div className='md:hidden grid content-center w-[70%] h-full text-lg font-bold hover:underline
                      underline-offset-8 cursor-pointerbg-white bg-white'>
        <img src="./hornokplease.png" alt="" className='ml-[17%]' onClick={() => handleNavigate('/')} />
      </div>
      <div className='md:hidden grid content-center w-[30%] h-full bg-white text-white'>
        <span className="cursor-pointer">
          <div className='flex justify-center'
            onClick={() => setShowHamburgerDropdown((prev) => !prev)}>
            <SlMenu size={25} color='black' />
          </div>
          <Dropdown visible={showHamburgerDropdown} onClose={() => setShowHamburgerDropdown(false)} positionStyles="top-full right-1">
            <StyledText onClick={() => {
              navigate('/')
              setShowHamburgerDropdown(false)
            }}>Home</StyledText>

            <StyledText styles='mt-2' onClick={() => {
              navigate('/about-us')
              setShowHamburgerDropdown(false)
            }}>About</StyledText>

            <StyledText styles='mt-2' onClick={() => {
              setShowHamburgerDropdown(false)
              navigate('/services')
            }}>Service</StyledText>

            <StyledText styles='mt-2' onClick={() => {
              setShowHamburgerDropdown(false)
              navigate('/why-us')
            }}>Why Us</StyledText>

            <StyledText styles='mt-2' onClick={() => {
              setShowHamburgerDropdown(false)
              navigate('/contact')
            }}>Contact Us</StyledText>
          </Dropdown>
        </span>
      </div>
    </div>
  );
};

export default Navbar;