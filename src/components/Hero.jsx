import React from 'react'
import Header from './Header'
import Timer from './Timer'; 
import { IoMdMenu } from "react-icons/io";
import square from '../assets/Peach.png'
import triangle from '../assets/newTri.png'
import op from '../assets/OP.svg'
import powerBy from '../assets/powerBy.svg'
import built from '../assets/builtIn.svg'
const Hero = () => {
    return (
        <div className='overflow-x-hidden  w-full lg:h-screen h-[150vh] relative z-0 '>
            {/* Other content */}
            
           
            <div className='flex flex-col justify-center items-center pt-52 pb-6  '>
                <div className='flex flex-col lg:items-center lg:justify-center gap-5 px-6'>
                    <h1 className='font-bold lg:text-7xl md:text-7xl text-4xl'>The One Above All</h1>
                    <div className='w-full  flex lg:items-center lg:justify-center md:font-semibold '>
                        <p className='lg:max-w-[52%] lg:text-xl text-base lg:text-center md:w-[80%] w-full'>
                            Peach is a layer 2 EVM blockchain built on the Optimism stack and harness the data availability layer on Celestia, making blockchain operations hyper easy for everyone.
                        </p>
                    </div>
                    {/* <Timer/> */}
                    <button className='bg-black text-white w-fit px-9 py-3 mt-3  rounded-full'>Coming soon</button>
                    <div className=' mt-12 '>
                            <img src={built} alt="" />
                    </div>
                    <div className='flex lg:justify-center items-center font-sm'>
                        <img className='lg:w-full w-[70%]' src={powerBy} alt="" />
                    </div>
                </div>
            </div>

            <div className='absolute lg:bottom-0 sm:-left-40 -left-24 lg:w-[30%] w-[60%] -z-10'>
                <img src={square} alt="" />
            </div>
            <div className='absolute lg:w-[18%] sm:w-[30%] w-[48%] lg:right-20 -right-24  lg:bottom-[10%] lg:top-1/2 top-1/3 -z-10'>
                <img className='lg:w-full w-[80%] ' src={triangle} alt="" />
            </div>
        </div>
    )
}

export default Hero
