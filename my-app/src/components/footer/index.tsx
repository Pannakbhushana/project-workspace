import React from 'react';
// import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer  className="border py-10"
    >
      <div className="container mx-auto px-6 flex justify-around flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0">
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-semibold mb-4">Our Offices</h3>
  
          {/* <p className="mb-4">Third Floor, 607, SJ Arcade
            <br />Near Reliance Trends, Hosa Road
            <br />Kasavanahalli, Bengaluru, 560035
          </p> */}
          
          {/* <p className="mb-4">Basement Floor, Plot No. 6/263,
            <br />Chitrakoot Scheme,
            <br />Ajmer Road, Jaipur,<br />Rajasthan, 302021</p>
          <p className="mb-4">CIN: U72900RJ2021PTC078290</p>
          <p className="flex justify-center lg:justify-start items-center">
            <FaEnvelope className="mr-2" /> hello@ovikfinance.com
          </p> */}
        </div>

        <div  className="text-center lg:text-left">
          <div className="flex justify-center lg:justify-start space-x-4 mb-4">
            {/* <a href="https://www.linkedin.com/company/ovik-finance/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a> */}
          </div>
          <p className='mt-5'><a href="/#" className="hover:underline">Privacy Policy</a></p>

          <p className='mt-5'><a href="/#" className="hover:underline mt-6">Terms and conditions</a></p>

          <p className="mb-4 mt-5">© {new Date().getFullYear()} Ovik Finance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
