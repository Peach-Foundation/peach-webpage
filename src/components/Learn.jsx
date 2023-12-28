import React from 'react'

const Learn = () => {
  return (
    <div className='learnSection w-full h-screen'>
        <div  className='flex flex-col justify-center md:ml-32 sm:ml-14 ml-8 mr-2 px-2 h-full my-auto  '>
          <h1 className='font-bold lg:text-8xl md:text-7xl text-5xl py-8'>Your wish <br/> my command</h1>
          <p className=' text-2xl lg:max-w-[45%] md:max-w-[60%]
                    max-w-[90%] '>Peach is an isolated processing 
          layer 2 blockchain which integrates AI to seamlessly execute any specific task.</p>
          {/* <button className='bg-black text-white px-5 py-2 my-7 font-semibold rounded-full w-fit'>Learn</button> */}
          <button className='bg-gray-600 text-white px-5 py-2 my-7 font-semibold rounded-full w-fit'>Stay Tuned</button>
        </div>
    </div>
  )
}

export default Learn