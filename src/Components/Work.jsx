import React from 'react';

const Work = () => {
  return (
    <section id="work" className=" bg-black text-white">
      <div>
        <h1 className="text-blue md:text-3xl text-2xl font-bold underline flex justify-center items-center">Languages I Worked In</h1>

        <div id="lang" className="md:justify-center md:flex md:p-10 md:items-center">
          <img className='md:h-24 h-16  w-26 md:ml-0 ml-12 md:mt-0 mt-4' src="./img/c.png" alt="C++ logo" />
          <img className='h-28 w-30 md:ml-0 ml-8' src="./img/js.png" alt="Java logo" />
          <img className='h-24 w-26' src="./img/react.png" alt="PHP logo" />
          <img className='h-24 w-26 md:ml-0 ml-6' src="./img/php.png" alt="Tailwind CSS logo" />
          <img className='h-20 w-40' src="./img/tail.png" alt="PHP logo" />
          <img className='h-20 w-26 md:ml-0 ml-4' src="./img/codeigniter.png" alt="PHP logo" />
        </div>
      </div> 
      <hr />
    </section>
  );
}

export default Work;
