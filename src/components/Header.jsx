import React, { useEffect } from 'react'
import logo from '../assets/logo.webp'
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
const Header = () => {
    const [bgColor, setBgColor] = useState('transparent');
    const [isOpen,setOpen]=useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isScroll,setScroll]=useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || window.pageYOffset; // Get the scroll position
            const triggerPosition = 135;

            if (scrollPosition > triggerPosition) {
                setBgColor('bg-white shadow-lg'); // Change to the desired background color
                setScroll(true);
            } else {
                setBgColor('transparent');
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array to run the effect only once


    const handleDropdownClick = (dropdownName) => {
        if (activeDropdown === dropdownName) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(dropdownName);
        }
    };

    const containerStyle = {
        transition: 'width 0.7s ease', // Adjust the transition duration and easing as needed
        width: isScroll ? '3.5rem' : '5rem', // Modify width values as per your requirement
       
      };
    
    return (
        <div>
        <div className={`${isScroll&&'header'} opacity-100  w-full fixed top-0  z-30`}>
            <div className='max-w-[80%] relative mx-auto flex items-center justify-between'>
                <img
                   style={containerStyle}
                  className={`${isScroll?'py-3':'py-5'} `} src={logo} alt="" />
                <div className='relative hidden md:flex  gap-10'>
                <div
                            className={` flex items-center ${isScroll ?'text-lg':'text-xl'} font-semibold cursor-pointer`}
                            onMouseEnter={() => handleDropdownClick('ecosystem')}
                            onMouseLeave={() => handleDropdownClick('ecosystem')}
                        >
                        <p>Ecosystem</p>
                        {/* <RiArrowDropDownLine size={25} className={`${activeDropdown==='ecosystem'?'rotate-180 transition-all duration-500' : 'rotate-0 transition-all duration-600'} `}/>
                    
                                
                                <div className={`${activeDropdown==='ecosystem'?' visible opacity-100':' invisible opacity-0'} absolute flex flex-col w-full px-4 top-full left-0  py-2 bg-white bg-opacity-70 shadow-lg rounded transition-opacity duration-500 `}> */}
                                    {/* Dropdown items */}
{/*                                   
                                        <a className='py-1 border-b' href="#">Item 1</a>
                                        <a className='py-2 border-b' href="#">Item 2</a>
                                        <a className='py-2 ' href="#">Item 3</a>
                                   
                                </div> */}
                           
                    </div>

                    <div
                            className={` flex items-center ${isScroll ?'text-lg':'text-xl'} font-semibold cursor-pointer`}
                            onMouseEnter={() => handleDropdownClick('docs')}
                            onMouseLeave={() => handleDropdownClick('docs')}
                        >
                        <p>Docs</p>
                        {/* <RiArrowDropDownLine size={25} className={`${activeDropdown==='docs'?'rotate-180 transition-all duration-500' : 'rotate-0 transition-all duration-600'} `}/>
                    
                                
                    <div className={`${activeDropdown==='docs'?' visible opacity-100':' invisible opacity-0'} absolute flex flex-col w-full px-4 top-full left-0  py-2 bg-white bg-opacity-70 shadow-lg rounded transition-opacity duration-500 `}> */}
                        {/* Dropdown items */}
{/*                       
                            <a className='py-1 border-b' href="#">Doc 1</a>
                            <a className='py-2 border-b' href="#">Doc 2</a>
                            <a className='py-2 ' href="#">Doc 3</a>
                       
                    </div> */}
               
                    </div>
                    <div
                            className={` flex items-center ${isScroll ?'text-lg':'text-xl'} font-semibold cursor-pointer`}
                            onMouseEnter={() => handleDropdownClick('roadmap')}
                            onMouseLeave={() => handleDropdownClick('roadmap')}
                        >
                        <p>Roadmap</p>
                        {/* <RiArrowDropDownLine size={25} className={`${activeDropdown==='roadmap'?'rotate-180 transition-all duration-500' : 'rotate-0 transition-all duration-600'} `}/>
                    
                                
                                <div className={`${activeDropdown==='roadmap'?' visible opacity-100':' invisible opacity-0'} absolute flex flex-col w-full px-4 top-full left-0  py-2 bg-white bg-opacity-70 shadow-lg rounded transition-opacity duration-500 `}> */}
                                    {/* Dropdown items */}
{/*                                   
                                        <a className='py-1 border-b' href="#">Roadmap 1</a>
                                        <a className='py-2 border-b' href="#">Roadmap 2</a>
                                        <a className='py-2 ' href="#">Roadmap 3</a>
                                   
                                </div> */}
                           
                    </div>

                </div>
                <div onClick={()=>setOpen(true)} className='md:hidden absolute right-0'>
                    <IoMenu size={30} />
                </div>
            </div>
               
               
        </div>
        
        {
            isOpen &&
       
        <div className='bg-white h-full sm:w-1/2 w-[70%] z-30 fixed top-0 right-0'>
        <img className='w-20 px-3 py-7' src={logo} alt="" />
                <div className='flex flex-col px-5 gap-10'>
                <div
                            className='relative flex items-center text-xl font-semibold cursor-pointer'
                            onClick={() => handleDropdownClick('ecosystem')}
                        >
                        <p>Ecosystem</p>
                        {/* <RiArrowDropDownLine size={25} className={`${activeDropdown==='ecosystem'?'rotate-180':'rotate-0'} `}/>
                        {activeDropdown === 'ecosystem' && ( */}
                                {/* <div className="absolute z-40 flex flex-col  w-full px-4 top-full left-0 mt-1 py-2 bg-black text-white shadow-lg rounded"> */}
                                    {/* Dropdown items */}
{/*                                   
                                        <a className='py-1 border-b' href="#">Item 1</a>
                                        <a className='py-2 border-b' href="#">Item 2</a>
                                        <a className='py-2 ' href="#">Item 3</a>
                                   
                                </div>
                            )} */}
                    </div>


                    <div
                            className='relative flex items-center text-xl font-semibold cursor-pointer'
                            onClick={() => handleDropdownClick('docs')}
                        >
                        <p>Docs</p>
                        {/* <RiArrowDropDownLine size={25} className={`${activeDropdown==='docs'?'rotate-180':'rotate-0'} `}/>
                        {activeDropdown === 'docs' && ( */}
                                {/* <div className="absolute z-40 flex flex-col w-full px-4 top-full left-0 mt-1 py-2 bg-black text-white  shadow-lg rounded"> */}
                                    {/* Dropdown items */}
{/*                                   
                                        <a className='py-1 border-b' href="#">docs 1</a>
                                        <a className='py-2 border-b' href="#">docs 2</a>
                                        <a className='py-2 ' href="#">docs 3</a>
                                   
                                </div>
                            )} */}
                    </div>
                    <div
                            className='relative flex items-center text-xl font-semibold cursor-pointer'
                            onClick={() => handleDropdownClick('roadmap')}
                        >
                        <p>Roadmap</p>
                        {/* <RiArrowDropDownLine size={25} className={`${activeDropdown==='roadmap'?'rotate-180':'rotate-0'} `}/>
                        {activeDropdown === 'roadmap' && ( */}
                                {/* <div className="absolute z-40 flex flex-col w-full px-4 top-full left-0 mt-1 py-2 bg-black text-white  shadow-lg rounded"> */}
                                    {/* Dropdown items */}
{/*                                   
                                        <a className='py-1 border-b' href="#">Roadmap 1</a>
                                        <a className='py-2 border-b' href="#">Roadmap 2</a>
                                        <a className='py-2 ' href="#">Roadmap 3</a>
                                   
                                </div>
                            )} */}
                    </div>
                </div>
                <div onClick={()=>setOpen(false)} className='absolute top-10 right-10'>
                <IoMdClose size={30}  />
                </div>
               </div>
                }
        </div>
    )
}

export default Header