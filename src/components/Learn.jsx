import React from 'react'
import circle from '../assets/newSq2.png'
const Learn = () => {
  return (
    <div className='overflow-x-hidden w-full h-screen py-10 relative'>
        <div  className='flex flex-col  md:ml-32 sm:ml-14 ml-8 h-full '>
<<<<<<< HEAD
          <h1 className='font-bold lg:text-7xl md:text-7xl text-4xl'>Your wish,<br/>My command</h1>
          <p className='lg:max-w-[45%] lg:text-xl text-base md:max-w-[75%] max-w-[90%] py-8 '>
            Peach prompt is our first flagship application which synergizes the use of artifical intelligence and all DeFi applications to elevate experience, accessibility and usability across all proficiency levels.
            <br/>
            <br/>
            We are your personal assistant to everything crypto.
          </p>
         <button className='bg-black text-white px-5 py-2 font-semibold rounded-full w-fit'><a href="https://peach-layer-2.gitbook.io/documentation/"> Learn</a></button>
=======
          <h1 className='r lg:text-8xl  text-5xl py-8'>Your wish <br/> my command</h1>
          <p className=' text-2xl lg:max-w-[45%] md:max-w-[60%]
                    max-w-[90%] '>Peach is an isolated processing 
          layer3 blockchain which integrates AI to seamlessly execute any specific task.</p>
         <a href="https://peach-layer-2.gitbook.io/documentation/"> <button className='bg-black text-white px-5 py-2 my-7 font-semibold rounded-full w-fit'>Learn</button></a>
>>>>>>> a4ff66ec58a4b3ef305fb55fc71f671bf4d6152a
        </div>
        <div className='absolute  lg:w-[50%] md:w-[60%] sm:w-[80%] w-[100%] -right-36 md:-right-48 lg:-right-52 lg:-top-[10%] bottom-0 -z-10'>
          <img className=' w-[100%] ' src={circle} alt="" />
        </div>
    </div>
  )
}

export default Learn
