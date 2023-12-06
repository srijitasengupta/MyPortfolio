import React from 'react'
const About = () => {
    return (
        <div  id="about" className="min-h-screen bg-[url('https://media.istockphoto.com/id/675020930/photo/textured-dark-vignette-black-background.jpg?s=2048x2048&w=is&k=20&c=CWymtsqhn1PtlV3HoVLLRfDCqoElruybamNJtuBGXd4=')]">
            <div className='md:w-120 md:px-60 w-50 px-10'>
                <div class="bg-[url('https://media.istockphoto.com/id/675020930/photo/textured-dark-vignette-black-background.jpg?s=2048x2048&w=is&k=20&c=CWymtsqhn1PtlV3HoVLLRfDCqoElruybamNJtuBGXd4=')]"></div>
                <div className='text-center mx-auto mt-20 pt-20 mb-10'>
                    <h1 className='md:text-5xl text-2xl font-semibold text-stone-400'>Hey, I'm Srijita Sengupta</h1>
                    <br></br>
                    <h2 className='md:text-2xl text-lg text-stone-600'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</h2>
                </div>
            </div>
            <div className='md:border-solid md:border-2 md:border-stone-500 md:shadow-lg md:shadow-stone-500 text-white md:flex md:justify-between md:mx-80 md:px-28 md:p-10 px-10 mx-20 rounded-2xl'>
                <div className='border-solid border-2 border-stone-500 shadow-lg shadow-stone-700 md:shadow-none mb-4 rounded-xl md:mb-0 md:mr-4 md:w-1/3 text-center md:border-0 md:border-solid py-4 md:py-0'>
                    <p className='text-lg md:text-3xl'>150+</p>
                    <p>Projects Solved</p>
                </div>
                <div className='border-solid border-2 border-stone-500 shadow-lg shadow-stone-700 md:shadow-none rounded-xl mb-4 md:mb-0 md:mx-4 md:w-1/3 text-center md:border-0 md:border-solid py-4 md:py-0'>
                    <p className='text-lg md:text-3xl'>150+</p>
                    <p>Projects Solved</p>
                </div>
                <div className='border-solid border-2 border-stone-500 shadow-lg shadow-stone-700 md:shadow-none rounded-xl md:w-1/3 text-center md:border-0 md:border-solid py-4 md:py-0'>
                    <p className='text-lg md:text-3xl'>150+</p>
                    <p>Projects Solved</p>
                </div>
            </div>
            <div className='text-center my-20'>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12  stroke-stone-600 hover:stroke-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg> <a href="#skills"></a>
                </button>
            </div>
        </div>
    )
}

export default About