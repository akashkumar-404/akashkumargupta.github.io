import React from 'react';
import {HiArrowNarrowRight, hiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';
import Profile from "../assets/profile.png"

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <div className='flex'>
            <div>
            <p className='text-pink-600 ml-[50px]'>Hi, my name is</p>
            <h1 className='text-4xl md:text-7xl font-bold text-yellow-600 ml-[40px]'>Akash Kumar Gupta</h1>
            <h2 className='text-4xl md:text-7xl font-bold  text-gray-300 ml-[40px]'>I'm Frontend </h2>
            <h2 className='text-4xl md:text-7xl font-bold  text-gray-300 ml-[40px]'>Developer</h2>
            <p className='text-gray-500 py-4 max-w-[500px] ml-[40px] '>I'm full-stack Developer specializing in building and designing Websites.
                Currently I'm focused more on Frontend</p>
                </div>
                <div>
                    <img  src={Profile} style={{width:'150px',borderRadius:'140px'}} className="ml-[-1px] mt-40 md:w-[10px]" />
                </div>
                </div>
            <div>
                <button className='text-white group ml-[40px] border-2 p-3 my-2 flex items-center  hover:bg-pink-600 hover:border-pink-600'>
                <Link to="project" smooth={true} duration={500} >
            View my Projects
        </Link>
                <span className='group-hover:rotate-90 duration-500'>
                <HiArrowNarrowRight className='ml-4'/>
                </span>
                </button>
            </div>
        </div>


    </div>
  )
}

export default Home