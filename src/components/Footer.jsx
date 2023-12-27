import React from 'react'

const Footer = () => {
  const inputStyles = {
    color: 'white', // Set the text color to white
  };
  return (
    <footer className="bg-white footer dark:bg-gray-900 py-36 ">
    <div className="container px-6 py-12 mx-auto max-w-[80%] text-white">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-6">
        <div className="sm:col-span-2">
          <h1 className="max-w-lg text-xl md:text-black font-semibold tracking-tight text-white xl:text-4xl dark:text-white">
            Subscribe to our <br/> Newsletter.
          </h1>

          <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-3 ">
          <input
      id="email"
      type="text"
      className="px-4 placeholder-white py-2 mr-6 text-white rounded-md bg-gray-900 focus:outline-none "
      placeholder="Email Address"
      style={inputStyles}
    />

            <button className="w-fit px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform  focus:outline-none bg-gray-900 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
              Subscribe
            </button>
          </div>
        </div>

        <div>
          <p className="font-semibold md:text-black text-xl text-white dark:text-white">Developers</p>

          <div className="flex flex-col items-start mt-5 space-y-2">
            <a
              href="#"
              className="md:text-black font-semibold text-white transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500"
            >
            Developer Portal
            </a>
            <a
              href="#"
              className="md:text-black font-semibold text-white transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500"
            >
              Docs
            </a>
            <a
              href="#"
              className="md:text-black font-semibold text-white transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500"
            >
              Github
            </a>
          </div>
        </div>
            
        <div>
          <p className="font-semibold text-xl md:text-black text-white dark:text-white">Resources</p>

          <div className="flex flex-col items-start mt-5 space-y-2">
            <a
              href="#"
              className="md:text-black font-semibold text-white transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500"
            >
              Technology
            </a>
            <a
              href="#"
              className="md:text-black font-semibold text-white transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500"
            >
              Glossary
            </a>
            <a
              href="#"
              className="md:text-black font-semibold text-white transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500"
            >
              Blog
            </a>
            <a
              href="#"
              className="md:text-black font-semibold text-white transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500"
            >
              Podcast
            </a>
            <a
              href="#"
              className="md:text-black  font-semibold text-white transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500"
            >
             Resources
            </a>
          </div>
        </div>
        <div>
          <p className="font-semibold md:text-black text-xl text-white dark:text-white">Misc</p>

          <div className="flex flex-col items-start mt-5 space-y-2">
            <a
              href="#"
              className="md:text-black font-semibold text-white transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500"
            >
              Brand
            </a>
            <a
              href="#"
              className="md:text-black font-semibold text-white transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500"
            >
               Press
            </a>
            <a
              href="#"
              className="md:text-black font-semibold text-white transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500"
            >
              Careers
            </a>
            <a
              href="#"
              className="md:text-black font-semibold text-white transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500"
            >
              Terms of services
            </a>
            <a
              href="#"
              className="md:text-black font-semibold text-white transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="md:text-black font-semibold text-white transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500"
            >
             Team
            </a>
          </div>
        </div>
        <div>
        <p className="font-semibold md:text-black text-xl text-white dark:text-white">Follow us</p>
        <button className='px-4 py-3 border-2 mt-5 rounded-md font-semibold bg-black text-white'>
            Community
        </button>
        </div>
      </div>

     

      
     
    </div>
  </footer>
  )
}

export default Footer