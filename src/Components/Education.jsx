import React from 'react';
import { Element } from 'react-scroll';

const Education = () => {
    return (
        <>
            <div id='Education'>
                <section>
                    <div className='md:h-96 bg-black text-white animate-fadeIn'>
                        <h1 className="text-blue text-3xl flex underline justify-center font-bold items-center md:p-5 p-5">Education</h1>
                        <div className="md:grid grid-cols-2 gap-4 p-3 sm:gap-10">
                            <div className='md:h-80 h-64 w-full border md:p-8 p-3 animate-zoomIn'>
                                <h3 className='text-yellow-500 md:text-4xl font-bold'>2023-2026</h3>
                                <h2 className='md:text-3xl font-bold mt-4'>Bachelor of Computer Applications</h2>
                                <h4 className='md:mt-4 md:text-sm text-xs mt-3'><span className='md:font-bold md:text-lg text-sm'>Fundamentals of Computers :</span> This includes an introduction to computer hardware, software, and basic operations.</h4>
                                <h3 className='md:mt-4 md:text-sm text-xs mt-3'><span className='md:font-bold md:text-lg text-sm'>Programming Languages :</span> Students usually learn programming languages like C, C++, Java, Python, or others. They learn about syntax, data structures, algorithms, and problem-solving techniques.</h3>
                            </div>
                            <div className='md:h-80 h-64 w-full border md:mt-0 mt-5 md:p-8 p-3 animate-rotateIn'>
                                <h3 className='text-yellow-500 md:text-4xl font-bold'>2020-2022</h3>
                                <h2 className='md:text-3xl mt-4 font-bold'>Higher Secondary School</h2>
                                <h4 className='md:mt-4 md:text-sm text-xs mt-3'><span className='md:font-bold md:text-lg text-sm'>Computer Science as a Subject :</span> Some educational boards include Computer Science as a separate subject in the curriculum. In this subject, students learn about programming languages (such as Python, Java, or C++), algorithms, data structures, computer architecture, software development, and other fundamental concepts of computer science.</h4>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Education;
