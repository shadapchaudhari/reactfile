import React from 'react'

const Contact = () => {
    return (
        <>
            <section>

                <div className="contact bg-black text-white">
                    <h1 className="text-blue text-3xl flex underline justify-center font-bold  items-center md:p-0 p-5">Contact Me</h1>
                    <div className='md:h-52 h-48 md:p-0 p-4'>
                        <h3 className='font-bold text-3xl md:text-5xl md:text-center md:mt-4'>Let's chat with Me <br /> Tell me about your , <br /><span className='text-yellow-500'>Project</span></h3>
                        <h3 className='text-lg md:text-center md:mt-4'>Let's create something together !</h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact