import React from 'react'

const handleButtonClick = () => {
    const targetUrl ='https://twitter.com/PeachLayer3';
    window.open(targetUrl, '_blank');
};

const BuildSection = () => {
    return (
        <div className='section3 w-full h-screen'>
            <div className='flex justify-end h-full lg:max-w-[80%] max-w-[90%] px-4'>
            <div className='flex flex-col justify-center h-full '>
            <h1 className='font-bold lg:text-8xl md:text-7xl text-5xl py-8'>built by<br/>degens</h1>
            <p className='text-2xl  '>Peach is an isolated processing <br/>
          layer 2 blockchain which <br/>  integrates AI to seamlessly <br/>  execute any specific task.</p>
          {/* <button className='bg-black text-white px-5 py-2 my-7 font-semibold rounded-full w-fit'>Team</button> */}
          <button className='bg-black text-white px-5 py-2 my-7 font-semibold rounded-full w-fit' onClick={handleButtonClick}>Socials</button>
            </div>
            </div>
        </div>
    )
}

export default BuildSection