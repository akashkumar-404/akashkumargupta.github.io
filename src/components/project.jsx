import React from 'react'
import Sephora from '../assets/sephora.JPG';
import Pharm from '../assets/pharm.JPG';
import Heliverse from "../assets/heliverse.png"
import Tripvillas from "../assets/Tripvillas.JPG"

const projects = [
    {
      id: 1,
      src: Sephora,
      title: "Sephora Clone",
      techStack:"REACT|CHAKRA UI|MATERIAL UI",
      desc: "sehora is cosmetic brand bussines website funtioning in USA,CANADA where user can order cosmetic brands and get deliver at doorstep",
      link: "https://sephoraclone.vercel.app/",
      repo: "https://github.com/akashkumar-404/Sephora-clone",
    },
    {
      id: 2,
      src: Pharm ,
      title: "Pharmeasy Clone",
      techStack:"HTML|CSS |JS",
      desc: "Pharmeasy is online shoping website which contains medicinal products whixh delivers you to your doorstep",
      link: "https://roaring-creponne-d99230.netlify.app/",
      repo: "https://github.com/akashkumar-404/PharmEasy-Clone",
    },
    {
      id: 3,
      src:  Heliverse,
      title: "Redux Project",
      techStack:"REACT| REDUX|MATERIAL UI" ,
      desc: "User can create team with unique member,filter according to the requirement search person in the search bar.",
      link: "https://akashkumar404-gmail-com-makes-great-sites-0248a.netlify.app/",
      repo: "https://github.com/akashkumar-404/Heliverse",
    },
    {
        id: 4,
        src:  Tripvillas,
        title: "Redux Project",
        techStack:"REACT| REDUX|MATERIAL UI|Chakra UI" ,
        desc: "TripVillas is a hotel booking app that provides renting and buying option for Property in holiday destination",
        link: "https://tripvillas.vercel.app/",
        repo: "https://github.com/akashkumar-404/kindly-earthquake-283",
      },
  ];
const Project = () => {
  return (
    <div
    name="projects"
    className="w-full h-100 bg-gradient-to-l text-gray-300 bg-[#0a192f]">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
    <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
            <p className='py-6'>Checkout my Projects</p>
        </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
        {projects.map(({ id, src, link, repo,title,desc,techStack }) => (
          <div key={id} className="shadow-md shadow-gray-600 bg-black rounded-lg">
            <img
              src={src}
              alt="projects"
              className="rounded-md duration-200 hover:scale-105 h-60 w-full"
            />
            <div className="text-2xl text-slate-300 text-center">{title}</div>
            <div className="mt-2 p-4 text-slate-300 text-lg">{desc}</div>
            <p className="text-center pt-4 text-slate-300	font-medium	text-xl	">Tech Stack: 
            {techStack}</p>

              
            <div className="flex items-center justify-center">
              <button
                className="w-24 padding-left: 1.5rem padding-right: 1.5rem/ pl-4  padding-top: 0.75rem
                padding-bottom: 0.75rem m-4 duration-200 hover:scale-105 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                onClick={() => window.open(link, "_blank")}>
                Demo
              </button>
              <button
                className="w-24 px-6 py-3 m-4 duration-200 hover:scale-105 bg-blue-500 hover:bg-blue-700 text-white font-bold padding-top: 0.5rem padding-bottom: 0.5rem padding-left: 1rem padding-right: 1rem rounded"
                onClick={() => window.open(repo, "_blank")}>
                GitHub
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Project