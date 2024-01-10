import React from 'react'
import pCircle from '../assets/purpleCircle.svg'
import wCircle from '../assets/whiteCircle.svg'
import Question from './Question'
import t3 from '../assets/newTri.png'
const Roadmap = () => {

    return (
        <div className='h-auto px-10  relative'>
            <h3 className="text-5xl lg:text-8xl r text-black  text-center w-full mb-6 ml-3" style={{ fontFamily: 'Montserrat' }}>Roadmap</h3>
            <ol className='max-w-[80%] mx-auto'>
                <li className="border-l-8  border-[#d118d9] rounded-top-right">
                    <div className="md:flex flex-start">
                        <div className='relative'>
                            <div className="  mt-3  rounded-full  absolute -left-14  w-[100px]">

                                <img className='w-[200px]' src={pCircle} alt="" />

                            </div>
                            <h1 className='absolute -left-20 font-extrabold text-3xl top-10'>Q1:</h1>
                        </div>
                        <div className='md:pb-6 pb-12 w-full'>
                            <div className="block p-6 rounded-lg shadow-lg questions w-full ml-6">
                                <h1 className='font-black text-2xl'>Foundation and Community Building</h1>
                                <div className="lg:text-base text-sm font-semibold">
                                    <p className='py-2'>Peach Prompt Release and Optimization:</p>
                                    <div className=''>
                                        <ul className='flex md:ml-3.5 ml-2  flex-col gap-1'>
                                            <li>We will refine the user interface and experience of Peach Prompt based on initial feedback, adding advanced analytical tools and conducting extensive user testing.</li>
                                        </ul>
                                    </div>
                                    <div className=" py-3">
                                        <p className='py-2'>Celestia Integration Enhancements:</p>
                                        <div>
                                            <ul className='flex md:ml-3.5 ml-2  flex-col gap-1'>
                                                <li>Collaborations with Celestia developers will be pursued to implement performance upgrades and explore additional integration possibilities.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className=" py-3">
                                        <p className='py-2'>Peach Blockchain Mainnet Launch:</p>
                                        <div>
                                            <ul className='flex md:ml-3.5 ml-2 flex-col gap-1'>
                                                <li>The mainnet launch will be a pivotal event, preceded by thorough testing and a launch event.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className=" py-3">
                                        <p className='py-2'>Ecosystem Growth Initiatives:</p>
                                        <div>
                                            <ul className='flex md:ml-3.5 ml-2 flex-col gap-1'>
                                                <li>Initiatives like liquidity mining programs will be launched to incentivize user participation, alongside educational campaigns to spread awareness of Peach Blockchain&apos;s capabilities.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <div className="border-l-8  BorderColor ">
                    <li >
                        <div className="md:flex flex-start">
                            <div className='relative '>
                                <div className="  mt-3  rounded-full  absolute -left-14  w-[100px]">

                                    <img className=' relative z-20 w-[200px]' src={pCircle} alt="" />
                                    <div className='w-[8px] bg-[#d118d9] h-12 z-0  absolute -top-3 left-[48%]'></div>
                                </div>
                                <h1 className='absolute -left-20 font-extrabold text-3xl top-10'>Q2:</h1>
                            </div>
                            <div className='py-6 w-full'>
                                {/* Question 2 */}
                                <div className="block p-6 rounded-lg shadow-lg questions w-full ml-6">
                                    <h1 className='font-black text-2xl'>Expansion and Governance</h1>
                                    <div className="lg:text-base text-sm font-semibold">
                                        <p className='py-2'>DApps Development:</p>
                                        <div className=''>
                                            <ul className='flex md:ml-3.5 ml-2  flex-col gap-1'>
                                                <li>This quarter will see a push towards fostering native DApp development, supported by partnerships and a developer grants program.</li>
                                            </ul>
                                        </div>
                                        <div className=" py-3">
                                            <p className='py-2'>Governance Framework Introduction:</p>
                                            <div>
                                                <ul className='flex md:ml-3.5 ml-2  flex-col gap-1'>
                                                    <li>We will introduce a community-driven governance model, complete with voting mechanisms for protocol and feature upgrades.</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className=" py-3">
                                            <p className='py-2'>Community Roadmap:</p>
                                            <div>
                                                <ul className='flex md:ml-3.5 ml-2 flex-col gap-1'>
                                                    <li>The focus will be on establishing robust community forums and social media channels, hosting webinars and AMAs, and initiating a bug bounty program to strengthen security.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </div>
                <li className="border-l-8  BorderColor">
                    <div className="md:flex flex-start">
                        <div className='relative '>
                            <div className=" rounded-full  absolute -left-7 top-7  w-[46px]">
                                <img className='w-[100px]' src={wCircle} alt="" />
                            </div>
                            <h1 className='absolute -left-20 font-extrabold text-3xl top-8'>Q3:</h1>
                        </div>
                        <div className='py-6 w-full'>
                            {/* Question 3 */}
                            <div className="block p-6 rounded-lg shadow-lg questions w-full ml-6">
                                <h1 className='font-black text-2xl'>Interoperability and NFT Integration</h1>
                                <div className="lg:text-base text-sm font-semibold">
                                    <p className='py-2'>Interoperability Features:</p>
                                    <div className=''>
                                        <ul className='flex md:ml-3.5 ml-2  flex-col gap-1'>
                                            <li>We plan to explore and implement interoperability features with other blockchains, enhancing user flexibility.</li>
                                        </ul>
                                    </div>
                                    <div className="  py-3">
                                        <p className='py-2'>NFT Integration:</p>
                                        <div>
                                            <ul className='flex md:ml-3.5 ml-2 flex-col gap-1'>
                                                <li>The integration of NFT capabilities (ICS-721) will be a significant step, alongside collaborations with artists and creators for exclusive launches.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className=" py-3">
                                        <p className='py-2'>Performance and Security Audits:</p>
                                        <div>
                                            <ul className='flex md:ml-3.5 ml-2 flex-col gap-1'>
                                                <li>Rigorous third-party audits will be conducted to ensure the highest standards of performance and security.</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
              
            </ol>
            <div className='relative  w-fit md:-left-40 -left-32'>
                <img className='md:max-w-[40%] max-w-[60%]' src={t3} alt="" />
            </div>
        </div>
    )
}

export default Roadmap
