import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='md:flex justify-between md:p-7 bg-black text-white h-full md:h-14'>
        <div className='font-black text-xl ml-5'>
          <img className='h-24 w-22 md:ml-0 ml-14' src="./img/lgo.png" alt="" />
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-yellow-500 focus:outline-none'>
            {!isOpen ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>}
          </button>
        </div>
        <ul className={`md:flex ${isOpen ? 'block' : 'hidden'} md:space-x-10 md:mr-20`}>
          <li><a href="/Home"><span className='text-yellow-500'>Home</span></a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Resume">Resume</a></li>
          <li><a href="/Skills">Skills</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
