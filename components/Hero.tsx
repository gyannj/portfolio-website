import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>

            {/* //Spotlight component */}
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="purple" />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue" />
            </div>


            {/* Grid Background */}
            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
                
            </div>

            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center'>
                    <h2 className='uppercase tracking-widest tex-xs text-center text-blue-100 max-w-80'>
                    CODE AND CREATIVITY
                    </h2>

                    <TextGenerateEffect
                        className='text-center text-[40px] md:text-5xl lg:text-6xl'
                        words='Hi I&apos;m Gyan Jyoti Das , a final year student and an aspiring Developer '
                    />

                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                        Final Year Student at NIT Silchar and a full stack developer
                    </p>
                    <a href="#projects">
                        <MagicButton
                            title="Show my Work"
                            icon={<FaLocationArrow/>}
                            position = 'right'
                        />
                    </a>

                </div>
            </div>


        </div>
    )
}

export default Hero