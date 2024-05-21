import React from 'react'

const Hero = () => {
    return (
        <>
            <section>
                <div className="md:grid grid-cols-2 bg-black text-white p-3 md:p-0">
                    <div className='md:h-screen h-96 md:p-20  md:mt-20 '>
                        <h1 className='text-xl font-semibold'>Hello !</h1>
                        <h3 className='text-5xl md:mt-2 mt-2 font-bold'>I'm <span className='text-yellow-500'>Shadap Chaudhari</span></h3>
                        <h2 className='text-2xl md:mt-4 mt-2 font-bold'>A Freelance Web Developer</h2>
                        <p className='md:mt-4 mt-2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure distinctio necessitatibus, quod facere, omnis eaque sit debitis animi neque placeat eum minima tenetur maxime unde cupiditate voluptatibus voluptas quos. Debitis.
                        </p>
                        {/* <button class="rounded-3xl text-sm font-bold h-10 text-black bg-yellow-500 w-32  mt-5">CHAT WITH ME</button> */}
                        <a href="https://api.whatsapp.com/send?phone=919370646455&text=Hello%20%2C%20I%20want%20to%20hire%20you%20for%20my%20website%20%2C%20can%20you%20schedule%20some%20dates%20%3F" className='rounded-3xl text-sm font-bold h-10 text-black bg-yellow-500 w-32  mt-5 p-3'>Chat with me</a>
                        <button className="rounded-3xl ml-4 text-sm font-bold h-10 bg-black  text-white border border-zinc-200 w-32 mt-5">MY WORKS</button>
                    </div>
                    <div className='md:mt-16 md:p-3 md:ml-20 p-7'>
                        <img src="./img/sam1.png" alt="" />
                    </div>
                </div>
                <hr />
            </section>
        </>
    )
}

export default Hero