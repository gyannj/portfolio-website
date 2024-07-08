import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full mb-[100px] md:mb-5 pb-10' id="contact">
        
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'> Ready to take <span className='text-purple'>your digital presence</span> to the next level?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>
            Feel free to reach out to me for any inquiries, collaboration opportunities, or project discussions. I look forward to connecting with you!
            </p>
            <a href='mailto:gyanjyotidas677@gmail.com'>
                <MagicButton
                    title="Get in touch"
                    icon={<FaLocationArrow/>}
                    position='right'
                />
            </a>

        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light mb-2 '>Copyright © 2024 Gyan Jyoti Das</p>
        <div className='flex items-center md:gap-3 gap-6'>
            {socialMedia.map((profile)=>(
                <div key={profile.id} className='flex justify-center items-center w-10 h-10 cursor-pointer backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                    <img
                    src = {profile.img}
                    alt="image"
                    width={20}
                    height={20}
                    />
                </div>
            ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer