import React from 'react';
import { Element } from 'react-scroll';

const Work = () => {
  return (
    <Element name="work">
      <section id="work" className="bg-black text-white motion-safe:animate-fadeIn">
        <div>
          <h1 className="text-blue md:text-3xl text-2xl font-bold underline flex justify-center items-center">
            Languages I Worked In
          </h1>
          <div id="lang" className="md:justify-center md:flex md:p-10 md:items-center animate-rotateIn">
            <img className='md:h-24 h-16 w-26 md:ml-0 ml-28 md:mt-0 mt-4 md:mr-5 transition-transform transform hover:scale-105' src="./img/c.png" alt="C++ logo" />
            <img className='h-28 w-30 md:ml-0 ml-24 transition-transform transform hover:scale-105' src="./img/js.png" alt="Java logo" />
            <img className='h-24 w-26 md:ml-0 ml-16 transition-transform transform hover:scale-105' src="./img/react.png" alt="React logo" />
            <img className='h-24 w-26 md:ml-0 ml-20 transition-transform transform hover:scale-105' src="./img/php.png" alt="PHP logo" />
            <img className='h-20 w-40 md:ml-0 ml-16 transition-transform transform hover:scale-105' src="./img/tail.png" alt="Tailwind CSS logo" />
            <img className='h-20 w-26 md:ml-0 ml-16 transition-transform transform hover:scale-105' src="./img/codeigniter.png" alt="CodeIgniter logo" />
          </div>
        </div>
        <hr />
      </section>
    </Element>
  );
}

export default Work;
