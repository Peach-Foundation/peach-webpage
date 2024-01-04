import React from 'react'
import t3 from '../assets/t3.svg'
const Footer = () => {

  return (
    <footer className=" footer   relative ">

      <div className=''>
        <div className="container px-6 border-t-2 border-black py-20 mx-auto max-w-[80%] text-white">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-6">
            <div className="sm:col-span-2">
              <h1 className="max-w-lg text-xl text-black font-semibold tracking-tight  xl:text-4xl ">
                Be the First to<br /> know.
              </h1>

              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-3 ">
                <input
                  id="email"
                  type="text"
                  className="px-4 py-2 mr-6 text-black rounded-md  focus:outline-none "
                  placeholder="Email Address"

                />

                <button className="w-fit px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform  focus:outline-none bg-black rounded-lg hover:bg-gray-700 focus:ring  focus:ring-opacity-80">
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              {/* <p className=" font-extrabold text-black text-xl  ">Developers</p> */}

              {/* <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-black font-semibold transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Developer Portal
                </a>
                <a
                  href="#"
                  className="text-black font-semibold  transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Docs
                </a>
                <a
                  href="#"
                  className="text-black font-semibold  transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Github
                </a>
              </div> */}
            </div>

            <div>
              {/* <p className="font-extrabold text-xl text-black  ">Resources</p> */}

              {/* <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-black font-semibold transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Technology
                </a>
                <a
                  href="#"
                  className="text-black font-semibold  transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Glossary
                </a>
                <a
                  href="#"
                  className="text-black font-semibold transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="text-black font-semibold  transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Podcast
                </a>
                <a
                  href="#"
                  className="text-black  font-semibold transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Resources
                </a>
              </div> */}
            </div>
            <div>
              {/* <p className="font-extrabold text-black text-xl  ">Misc</p> */}
{/* 
              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-black font-semibold  transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Brand
                </a>
                <a
                  href="#"
                  className="text-black font-semibold transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Press
                </a>
                <a
                  href="#"
                  className="text-black font-semibold transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="text-black font-semibold  transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Terms of services
                </a>
                <a
                  href="#"
                  className="text-black font-semibold  transition-colors duration-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-black font-semibold  transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                >
                  Team
                </a>
              </div> */}
            </div>
            <div>
              <p className="font-extrabold text-black text-xl ">Follow us</p>
             <a href="https://twitter.com/PeachLayer2"><button className='px-4 py-3  mt-5 rounded-md font-semibold bg-black text-white'>
                Community
              </button>
              </a> 
            </div>
          </div>





        </div>
      </div>
    </footer>
  )
}

export default Footer