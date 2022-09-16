import React from 'react'
import Sephora from '../assets/sephora.JPG';
import Pharm from '../assets/pharm.JPG'

const Project = () => {
  return (
    <div name='project' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
            <p className='py-6'>Checkout my Projects</p>
        </div>
        <div 
        className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* content */}
           <div style={{backgroundImage:`url(${Pharm})`}}   className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
           mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    JavaScript,HTML,CSS Application
                    </span>
                        <div className='pt-8 text-center'>
                            <a href="https://roaring-creponne-d99230.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href="https://github.com/akashkumar-404/PharmEasy-Clone">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    
                </div> 
            </div> 
            {/* 1st project ends */}
            <div style={{backgroundImage:`url(${Sephora})`}}   className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
           mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    React Application
                    </span>
                        <div className='pt-8 text-center'>
                            <a href="https://my-app-gold-five.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href="https://github.com/akashkumar-404/-spotless-crayon-3714">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    
                </div> 
            </div>   
        </div>
    </div>
    </div>
  )
}

export default Project