import React from 'react'
import { Element } from 'react-scroll';

const About = () => {
    return (
        <>
            <section>
                <div className="about" id='About'>
                    <div className="md:grid grid-cols-2 text-white bg-black h-full md:p-0 p-1">
                        <div className='hidden md:block md:text-center md:mt-28 animate-zoomIn'>
                            <img className='md:h-96 md:ml-36 ' src="./img/sam1.png" alt="Logo" />
                        </div>
                        <div className=''>
                            <h2 className='md:text-4xl text-3xl font-bold text-white text-center underline'>About Me</h2>
                            <p className='md:mt-10 mt-4 md:text-lg  text-zinc-400 text-sm'>Hello! I'm [Shadap chaudhari], a passionate and dedicated software developer. specializing in both frontend and backend development. </p>
                            <div className='flex md:mt-8 mt-4'>
                                <div>
                                    <h2 className='md:mt-4 mt-3 md:text-lg font-bold'>Name :</h2>
                                    <h2 className='md:mt-4 mt-3 md:text-lg font-bold'>Date :</h2>
                                    <h2 className='md:mt-4 mt-3 md:text-lg font-bold'>Address :</h2>
                                    <h2 className='md:mt-4 mt-3 md:text-lg font-bold'>Email :</h2>
                                    <h2 className='md:mt-4 mt-3 md:text-lg font-bold'>Phone :</h2>
                                </div>
                                <div>
                                    <h3 className='md:mt-4 mt-3 ml-3 md:text-lg  text-zinc-400'>Shadap chaudhari. </h3>
                                    <h3 className='md:mt-4 mt-3 ml-3 md:text-lg  text-zinc-400'>June 06, 2002</h3>
                                    <h3 className='md:mt-4 mt-3 ml-3 md:text-lg  text-zinc-400'>Takali Road, pandharpur.</h3>
                                    <h3 className='md:mt-4 mt-3 ml-3 md:text-lg  text-zinc-400'>shadapchuadhari11@gmail.com.</h3>
                                    <h3 className='md:mt-4 mt-3 ml-3 md:text-lg  text-zinc-400'>9370646455.</h3>
                                </div>
                            </div>
                            <div className='md:p-5 p-3'>
                                <button className='button mt-7  bg-yellow-400 text-black text-xs font-bold rounded-3xl w-28 h-8 md:h-12 md:w-36'>  <a href="./sam.pdf"></a> DOWNLOAD CV</button>

                            </div>

                        </div>
                    </div>
                </div>
                <hr />
            </section>
        </>
    )
}

export default About