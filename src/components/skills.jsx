import React from 'react'
import HTML from "../assets/html.png"
import Css from "../assets/css.png"
import React1 from "../assets/react1.png"
import Javascript from "../assets/javascript.png"
import Redux from "../assets/redux.png"
import Github from "../assets/github.png"
import Npm from "../assets/npm.png"
import Tailwind from "../assets/tailwind.png"
import Chakra from "../assets/chakra.png"
import Mui from "../assets/mui.png"
import Typescript from "../assets/typescript.png"


function Skills() {
  return (
    <div name="skills" className='bg-[#1f4882] text-gray-300 '>

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className=''>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>SKILLS</p>
           <p className='py-4'>Technologies that I have worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={HTML} className='w-20 mx-auto' />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Css} className='w-20 mx-auto' />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Javascript} className='w-20 mx-auto' />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={React1} className='w-20 mx-auto' />
            <p className='my-4'>React js</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Redux} className='w-20 mx-auto' />
            <p className='my-4'>Redux</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Npm} className='w-20 mx-auto' />
            <p className='my-4'>Npm</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Github} className='w-20 mx-auto' />
            <p className='my-4'>Github</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Tailwind} className='w-20 mx-auto' />
            <p className='my-4'>Tailwind</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Mui} className='w-20 mx-auto' />
            <p className='my-4'>Mui</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Chakra} className='w-20 mx-auto' />
            <p className='my-4'>Chakra</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={Typescript} className='w-20 mx-auto' />
            <p className='my-4'>Typescript</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills