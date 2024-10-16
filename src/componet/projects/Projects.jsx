import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { projects } from '../../content/Contents'
import Butttons from './Butttons';


function Projects() {
    return (
        <div id='projects' className='w-[100%] bg-theme_bg'>
            <div className='container mt-[80px]'>

                <h1 data-aos="fade-down" data-aos-delay="200" className="text-theme_fg_copy sm:text-3xl text-2xl px-5 sm:px-0 sm:text-start pt-[60px]  aos-init aos-animate">Projects</h1>

                <h1
                    data-aos="fade-down"
                    data-aos-delay={200}
                    className='text-theme_bg_copy/60 sm:text-3xl text-2xl px-5 sm:px-0 sm:text-start font-paprika mb-[20px] sm:mb-[40px] pt-2'>SOME OF MY PROJECTS</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className='shadow-md sm:hover:shadow-xl sm:hover:scale-105 duration-200 rounded-lg overflow-hidden dark:drop-shadow-[1px_1px_1px_white] bg-theme_fg ml-5 mr-5 sm:ml-0 sm:mr-0'>
                            <img src={project.image} alt={project.title} className='w-full h-80 object-cover rounded-lg' />
                            <div className='pt-8 p-5 pb-12'>
                                <h3 className='text-xl font-bold text-theme_fg_copy mb-2'>{project.title}</h3>
                                <p className='mb-4 text-theme_bg_copy'>{project.description}</p>
                                <div className='flex justify-center gap-2 items-center mt-8'>
                                    <Butttons link={project.links.githubLink} icon={FaGithub} text='GitHub Repo' />
                                    <Butttons link={project.links.liveDemo} icon={FaGithub} text='Live Demo' />
                                    <Butttons link={project.links.details} text='About Pro' />
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