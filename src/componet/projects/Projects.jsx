import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { AiOutlineGlobal } from "react-icons/ai";
import Butttons from './Butttons';
import { useProjectsButtonText, useProjectsContent } from '../../content/Contents';


function Projects() {
    const { title, subtitle, projects } = useProjectsContent();
    const { githubRepo, liveDemo, aboutPro } = useProjectsButtonText();
    return (
        <div id='projects' className='w-[100%] bg-theme_bg'>
            <div className='container mt-4 justify-center items-center'>

                <div className='mb-8 items-center flex flex-col'>
                    <h1 data-aos="fade-down" data-aos-delay="200" className="text-theme_fg_copy text-4xl px-5 sm:px-0 sm:text-start pt-[60px] font-bold aos-init aos-animate">{title}</h1>

                    <h1
                        data-aos="fade-down"
                        data-aos-delay={200}
                        className='text-secondary/80 sm:text-2xl text-2xl px-5 sm:px-0 sm:text-start font-paprika pt-2' >{subtitle}
                    </h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className=' justify-between flex flex-col shadow-md border border-theme_border sm:hover:shadow-xl sm:hover:scale-105 duration-200 rounded-lg overflow-hidden dark:drop-shadow-[1px_1px_1px_white] bg-theme_fg ml-5 mr-5 sm:ml-0 sm:mr-0'>
                            <div>
                                <img src={project.image} alt={project.title} className='w-full h-80 object-cover rounded-lg' />
                            </div>
                            <div className='pt-6 p-5 pb-10 justify-between flex flex-col'>
                                <div>
                                    <h3 className='text-xl font-bold text-theme_fg_copy mb-2'>{project.title}</h3>
                                    <p className='mb-2 text-theme_bg_copy'>{project.description}</p>
                                </div>
                                <div className=''>
                                    <div className='flex justify-center gap-2 items-center mt-6'>
                                        <Butttons link={project.links.githubLink} icon={FaGithub} text={githubRepo} />
                                        <Butttons link={project.links.liveDemo} icon={AiOutlineGlobal} text={liveDemo} />
                                        <Butttons link={project.links.details} text={aboutPro} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default Projects