import React from 'react'
import { CodeIcon, BadgeCheckIcon } from "@heroicons/react/solid";
import { projects } from './ProjectsData';
import socialMediaImg from '../images/socialMedia.jpg';
const Projects = () => {

    const [showList, setShowList] = React.useState(Array(projects.length).fill(false));
    const [showTech, setShowTech] = React.useState(Array(projects.length).fill(false));

    const toggleList = (index) => {
        setShowList((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const toggleTech = (index) => {
        setShowTech((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <div id="projects" className="text-gray-400 body-font min-h-screen w-screen bg-no-repeat bg-cover bg-[url('https://media.istockphoto.com/id/1758833901/photo/white-cloud-and-black-sky-textured-background.jpg?s=612x612&w=0&k=20&c=d76mNM_DomUnIWMvHrGapBNYafhdmyeYtywilshyTEo=')]">
            <div className="h-auto w-full flex flex-wrap flex-col items-center text-center p-10">
                <CodeIcon className="md:w-18 w-10 inline-block mb-4 stroke-violet-800 hover:stroke-violet-950" />
                <h3 className='text-3xl font-bold text-stone-400'>Apps I built</h3>
                <br></br>
                <div className='w-8 border-t-4 top-0 text-stone-400 shadow-lg'></div>
            </div>
            <div className='container lg:w-4/5 h-full sm:mx-auto sm:mb-2 -mx-2 items-center text-center p-10 rounded-2xl'>
                {projects.map((project, i) => (
                    <div key={i} className='container lg:w-full h-full bg-stone-800 hover:shadow-lg hover:shadow-violet-400 sm:mx-auto mb-5 -mx-2 items-center text-center p-10 rounded-2xl'>
                        <div className='md:flex h-full'>
                            <div className="flex items-center justify-center">
                                <img className='w-42 h-32 md:w-92 md:h-72' src={socialMediaImg} alt="" />
                            </div>
                            <br></br>
                            <div>
                                <h3 className='text-2xl text-violet-500'>{project.Name}</h3>
                                <p className='text-xl text-violet-200'>{project.Built}</p>
                                <p className='text-left px-5'>{project.About}</p>
                                <div>
                                    <p className='text-left px-5'>During the course of this project</p>
                                    <ul className={`text-left list-disc px-12 ${showList[i] ? 'block' : 'hidden md:block'}`}>
                                        {project.Points.map((point, index) => (
                                            <li key={index}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                                {showList[i] || (
                                    <button className="text-stone-400 hover:underline cursor-pointer md:hidden" onClick={() => toggleList(i)}>
                                        View More..
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                )}
                                {!showList[i] || (
                                    <button className="text-stone-400 hover:underline cursor-pointer md:hidden" onClick={() => toggleList(i)}>
                                        Hide..
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                )}
                                <div className={`flex flex-wrap w-full sm:mx-auto sm:mb-2 -mx-2 items-center text-center p-8  ${showTech[i] ? 'block' : 'hidden'}`}>
                                    {project.Techs.map((skill, index) => (
                                        <div key={index} className="md:w-1/6 sm:w-1/2 items-center flex flex-col justify-between">
                                            <div className="bg-stone-900 hover:shadow-lg hover:shadow-stone-400 rounded-2xl flex p-4 h-full mr-1 md:mr-0 mb-2 md:mb-0 items-center">
                                                <BadgeCheckIcon className="text-violet-800 w-4 h-4 flex-shrink-0 mr-2" />
                                                <span className="title-font font-nonormal text-xs text-white">
                                                    {skill}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {showTech[i] || (
                                    <button className="text-violet-400 hover:underline block px-4 cursor-pointer" onClick={() => toggleTech(i)}>
                                        Show Technologies Used
                                    </button>
                                )}
                                {!showTech[i] || (
                                    <button className="text-violet-400 hover:underline block px-4 cursor-pointer" onClick={() => toggleTech(i)}>
                                        Hide Technologies Used
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Projects