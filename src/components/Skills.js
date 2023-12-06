import React from 'react'
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from './Data';

const Skills = () => {
    return (
      <div id="skills" className="text-gray-400 body-font min-h-screen w-screen bg-no-repeat bg-cover bg-[url('https://media.istockphoto.com/id/1758833901/photo/white-cloud-and-black-sky-textured-background.jpg?s=612x612&w=0&k=20&c=d76mNM_DomUnIWMvHrGapBNYafhdmyeYtywilshyTEo=')]">
        <div className='h-auto w-full flex flex-wrap flex-col items-center text-center p-10'>
        <ChipIcon  className="md:w-18 w-10 inline-block mb-4 stroke-violet-800 hover:stroke-violet-950" />
            <h3 className='text-3xl font-bold text-stone-400'>Skills &amp; Technologies</h3>
            <br></br>
            <div className='w-8 border-t-4 top-0 text-stone-400 shadow-lg'></div>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 items-center text-center p-10">
          {skills.map((skill) => (
            <div  className="p-2 md:w-1/4 w-80 items-center">
              <div className="bg-stone-900 hover:shadow-lg hover:shadow-stone-400 rounded-2xl flex p-6 h-full items-center">
                <BadgeCheckIcon className="text-violet-800 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
            ))} 
        </div>
      </div>
    )
  }
  
  export default Skills