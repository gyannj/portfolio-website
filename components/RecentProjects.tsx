import { projects } from '@/data'
import React from 'react'
import { CardContainer } from './ui/Card'
import { RotatingCard } from './ui/RotatingCard'

const RecentProjects = () => {
return (
    <section id='projects'>

    <div className='py-20'>
        <h1 className='heading'>
            A small selection of {' '}
            <span className='text-purple'>recent projects</span>
        </h1>

        <div className='flex flex-wrap items-center justify-center p-4 gap-40 mt-20 sm:mt-18'>
            {projects.map(({ id, title, des, img, iconLists, link ,repo,techstack}) => (
                <div key={id} className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center lg:w-[30%] md:w-[45%] sm:w-[80%] w-full mb-10 mt-10 sm:mt-5'>
                    <RotatingCard title={title} des={des} img={img} iconLists={iconLists} link={link} repo={repo} techstack={techstack}/>
                </div>
            ))}
        </div>
    </div>
            </section>
)
}

export default RecentProjects