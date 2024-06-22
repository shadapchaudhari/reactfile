import React, { useState } from 'react';
import { Element } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='md:flex justify-between md:p-7 bg-black text-white h-full md:h-14 animate-fadeIn'>
        <div className='font-black text-xl ml-5 animate-rotateIn'>
          <img className='h-24 w-22 md:ml-0 ml-14' src="./img/lgo.png" alt="Logo" />
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-yellow-500 focus:outline-none'>
            {!isOpen ? 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg> : 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            }
          </button>
        </div>
        <ul className={`md:flex ${isOpen ? 'block' : 'hidden'} md:space-x-10 md:mr-20 animate-slideIn`}>
          <li className='nav-item'><a href="#Hero" className='nav-link'>Home</a></li>
          <li className='nav-item'><a href="#About" className='nav-link'>About</a></li>
          <li className='nav-item'><a href="#Education" className='nav-link'>Education</a></li>
          <li className='nav-item'><a href="#Skilles" className='nav-link'>Skills</a></li>
          <li className='nav-item'><a href="#Contact" className='nav-link'>Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
