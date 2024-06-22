import React from 'react';
import { Element } from 'react-scroll';

const Skills = () => {
    return (
        <div id='Skilles'>
            <section id="skilles" className="bg-black text-white animate-fadeIn">
                <h1 className="text-blue text-3xl flex underline justify-center font-bold items-center md:p-10 p-5">
                    Skills
                </h1>
                <div className="skill md:grid md:grid-cols-2">
                    <div className="md:flex md:mt-5 md:w-55 justify-center md:p-20 p-4 shadow-lg rounded-lg md:items-start items-center md:flex-col h-full animate-slideIn">
                        <h1 className="text-3xl font-bold">
                            A Creative frontend developer and Skilled backend developer, overall a complete full stack web developer
                        </h1>
                        <p className="mt-10">
                            Experienced Developer at Arosys Technologies, proficient in PHP and skilled in jQuery AJAX. Specialized in crafting visually appealing webpages using HTML, CSS, Tailwind, Bootstrap, and Material UI. Possesses a strong foundation in C++, C, and Java, with expertise in SQL. Eager to apply expertise to drive innovative web development projects forward.
                        </p>
                    </div>
                    <div className="md:flex md:mt-5 md:my-10 w-50 mx-11 space-x-10 md:justify-center md:p-10 shadow-lg rounded-lg md:items-start items-center flex-col mt-10 h-full">
                        <div className="md:mt-0 animate-slideIn">
                            <div className="w-full">
                                <label htmlFor="html">HTML / CSS</label>
                                <progress id="html" value="85" max="100" className="w-full rounded-md"> 85% </progress>
                            </div>
                            <div className="w-full md:mt-3 animate-slideIn">
                                <label htmlFor="javascript">JavaScript</label>
                                <progress id="javascript" value="70" max="100" className="w-full rounded-md"> 70% </progress>
                            </div>
                            <div className="w-full md:mt-3 animate-slideIn">
                                <label htmlFor="react">React</label>
                                <progress id="react" value="60" max="100" className="w-full rounded-md"> 60% </progress>
                            </div>
                            <div className="w-full md:mt-3 animate-slideIn">
                                <label htmlFor="php">PHP</label>
                                <progress id="php" value="78" max="100" className="w-full rounded-md"> 78% </progress>
                            </div>
                            <div className="w-full md:mt-3 animate-slideIn">
                                <label htmlFor="codeigniter">CodeIgniter</label>
                                <progress id="codeigniter" value="65" max="100" className="w-full rounded-md"> 65% </progress>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;
