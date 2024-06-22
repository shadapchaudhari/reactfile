import React from 'react';
import { Element } from 'react-scroll';

const Hero = () => {
    return (
        <>
            <section>
                <div className="md:grid grid-cols-2 bg-black text-white p-3 md:p-0" id='Hero'>
                    <div className='md:h-screen h-96 md:p-20 md:mt-14 animate-slideIn'>
                        <h1 className='text-xl font-semibold'>Hello !</h1>
                        <h3 className='text-5xl md:mt-2 mt-2 font-bold animate-rotateIn'>I'm <span className='text-yellow-500'>Shadap Chaudhari</span></h3>
                        <h2 className='text-2xl md:mt-4 mt-2 font-bold'>A Software Developer</h2>
                        <p className='md:mt-4 mt-2'>
                            As a software engineer, I am constantly navigating the dynamic landscape of technology, driven by an unyielding curiosity and a passion for problem-solving. This field offers a unique blend of creativity and logic, allowing me to build solutions that not only function efficiently but also enhance the lives of users.
                        </p>
                        <a href="https://api.whatsapp.com/send?phone=919370646455&text=Hello%20%2C%20I%20want%20to%20hire%20you%20for%20my%20website%20%2C%20can%20you%20schedule%20some%20dates%20%3F" className='rounded-3xl text-sm font-bold h-10 text-black bg-yellow-500 w-32 mt-5 p-3 animate-bounceIn'>Chat with me</a>
                        <button className="rounded-3xl ml-4 text-sm font-bold h-10 bg-black text-white border border-zinc-200 w-32 mt-5 animate-fadeIn"><a href="sam.pdf" download="download">Download CV</a></button>

            

                    </div>
                    <div className='md:mt-16 md:p-3 md:ml-20 p-7 animate-zoomIn'>
                        <img src="./img/sam1.png" alt="Hero" />
                    </div>
                </div>
                <hr />
            </section>
        </>
    );
}

export default Hero;
