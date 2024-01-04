import React from 'react'
import triangle from '../assets/newTri2.png'
import smallSqaure from '../assets/peach3.png'
import smallCircle from '../assets/smallCircle.svg'
const BuildSection = () => {
    return (
        <div className=' relative w-full h-screen '>
            <div className='flex justify-end h-full lg:max-w-[96%] max-w-[90%] px-4 sm:pt-24 pt-32'>
            <div className='flex flex-col  h-full px-4'>
            <h1 className='font-bold lg:text-6xl  text-4xl py-4'>$PCH Token</h1>
            <p className='md:text-lg text-md '>Native to Peach blockchain, $PCH will be used to security and governace.</p>
          <a href="https://peach-layer-2.gitbook.io/documentation/peach-token-usdpch"><button className='bg-black text-white px-8 py-3 my-7 rounded-full w-fit'>Tokenomics</button></a>
            </div>
            </div>
            <div className='absolute lg:-top-1/2 sm:-top-1/3 -top-[10%]  sm:w-[50%] w-[60%]  lg:w-[55%]  sm:-left-24 -left-20 lg:-left-56 -z-10 '>
                <img className='w-[100%]' src={triangle} alt="" />
            </div>
          
            <img className='lg:w-[17%] md:w-[30%] sm:w-[40%] w-[50%] absolute lg:bottom-[20%] md:bottom-[25%] bottom-[20%]  right-0' src={smallSqaure} alt="" />
            <div className=' hidden sm:block absolute bottom-10'>
                <img src={smallCircle} alt="" />
            </div>
        </div>
    )
}

export default BuildSection