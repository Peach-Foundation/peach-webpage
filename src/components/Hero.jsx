import React from 'react'
import Header from './Header'
import Timer from './Timer'
import powerBy from '../assets/powered.webp' 
import { IoMdMenu } from "react-icons/io";
const Hero = () => {
    return (
        <div className='heroSection w-full h-auto z-0 '>
            {/* Other content */}
            
           
            <div className='flex flex-col justify-center items-center md:pt-42 pb-6 pt-52 '>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <h1 className='lg:text-8xl md:text-7xl text-5xl font-bold text-center '>The new era <br/>of Intelligence</h1>
                  
                    <div className='w-full  flex items-center justify-center py-4'><p className='text-center text-2xl lg:max-w-[45%] md:max-w-[60%]
                    max-w-[90%]'>Peach is an isolated processing 
                    layer 2 blockchain which integrates AI to seamlessly execute any specific task.</p></div>
                    {/* <Timer/> */}
                    {/* <button className='bg-black text-white px-5 py-2 mt-3  font-semibold rounded-full'>Launch</button> */}
                    <button className='bg-gray-600 text-white px-5 py-2 mt-3  font-semibold rounded-full'>Coming Soon</button>
                    <div className='my-5 sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex justify-center items-center font-sm'>
                        <img className='w-[50%]' src={powerBy} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero