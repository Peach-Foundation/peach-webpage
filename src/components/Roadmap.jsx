import React from 'react'
import pCircle from '../assets/purpleCircle.svg'
import wCircle from '../assets/whiteCircle.svg'
import Question from './Question'
import t3 from '../assets/newTri.png'
const Roadmap = () => {

    return (
        <div className='h-auto px-10  relative'>
            <h3 className="text-5xl lg:text-8xl r text-black  text-center w-full mb-6 ml-3">Roadmap</h3>
            <ol className='max-w-[80%] mx-auto'>
                <li className="border-l-8  border-[#d118d9] rounded-top-right">
                    <div className="md:flex flex-start">
                        <div className='relative'>
                            <div className="  mt-3  rounded-full  absolute -left-14  w-[100px]">

                                <img className='w-[200px]' src={pCircle} alt="" />

                            </div>
                            <h1 className='absolute -left-20 font-extrabold text-3xl top-10'>01:</h1>
                        </div>
                        <div className='md:pb-6 pb-12 w-full'>
                            <div className="block p-6 rounded-lg shadow-lg questions w-full ml-6">
                                <h1 className='font-bold'>Q1: 2024</h1>
                                <div className="text-sm font-semibold">
                                    <p className='py-2'>1.Peach Prompt Optimization</p>
                                    <div className=''>

                                        <ol className='flex md:ml-3.5 ml-2  flex-col gap-1'>
                                            <li>- Refine user interface and experience based on initial feedback.</li>
                                            <li>- Implement additional analytical tools for advanced traders.</li>
                                            <li>- Conduct user testing and gather insights for further improvements.</li>
                                        </ol>


                                    </div>


                                    <div className=" py-3">
                                        <p className='py-2'>2.Community Engagement:</p>
                                        <div>

                                            <ol className='flex md:ml-3.5 ml-2  flex-col gap-1'>
                                                <li>- Launch community forums and social media channels.</li>
                                                <li>- Organize webinars and AMAs to interact directly with users.</li>
                                                <li>- Initiate bug bounty programs to enhance security.</li>
                                            </ol>


                                        </div>

                                    </div>

                                    <div className=" py-3">
                                        <p className='py-2'>3.Celestia Integration Enhancements:</p>
                                        <div>

                                            <ol className='flex md:ml-3.5 ml-2 flex-col gap-1'>
                                                <li>- Collaborate with Celestia developers to implement performance upgrades. </li>
                                                <li>- Explore additional integration possibilities for improved scalability.</li>

                                            </ol>


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
                                <h1 className='absolute -left-20 font-extrabold text-3xl top-10'>02:</h1>
                            </div>
                            <div className='py-6 w-full'>
                                {/* Question 2 */}
                                <div className="block p-6 rounded-lg shadow-lg questions w-full ml-6">
                                    <h1 className='font-bold'>Q2: 2024</h1>
                                    <div className="text-sm font-semibold">
                                        <p className='py-2'>1.Decentralized Applications (DApps) Development:</p>
                                        <div className=''>

                                            <ol className='flex md:ml-3.5 ml-2  flex-col gap-1'>
                                                <li>- Foster partnerships withDeFi projects to encourage native DApp development.</li>
                                                <li>- Launch developer grants program to incentivize Peach-based DApp creation.</li>

                                            </ol>


                                        </div>


                                        <div className=" py-3">
                                            <p className='py-2'>2.Governance Framework Inroduction:</p>
                                            <div>

                                                <ol className='flex md:ml-3.5 ml-2  flex-col gap-1'>
                                                    <li>- Introduce a community-driven governance model.</li>
                                                    <li>- Launch voting mechanisms for protocol upgrades and feature implementations.</li>

                                                </ol>


                                            </div>

                                        </div>

                                        <div className=" py-3">
                                            <p className='py-2'>3.Community Expansion:</p>
                                            <div>

                                                <ol className='flex md:ml-3.5 ml-2 flex-col gap-1'>
                                                    <li>- Assess market opportunities in key regions, including Asia, Europe, ans North America. </li>
                                                    <li>- Establish strategic partnerships with blockchainn communities and industry influencers.</li>

                                                </ol>


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
                            <h1 className='absolute -left-20 font-extrabold text-3xl top-8'>03:</h1>
                        </div>
                        <div className='py-6 w-full'>
                            {/* Question 3 */}
                            <div className="block p-6 rounded-lg shadow-lg questions w-full ml-6">
                                <h1 className='font-bold'>Q3: 2024</h1>
                                <div className="text-sm font-semibold">
                                    <p className='py-2'>1.Peach Blockchain Mainnet Launch:</p>
                                    <div className=''>

                                        <ol className='flex md:ml-3.5 ml-2  flex-col gap-1'>
                                            <li>- Conduct thorough testing of the mainnet.</li>
                                            <li>- Organize a high-profile launch event, inviting industry leaders and influencers.</li>

                                        </ol>


                                    </div>


                                    <div className="  py-3">
                                        <p className='py-2'>2.Ecosystem Growth Initiatives:</p>
                                        <div>

                                            <ol className='flex md:ml-3.5 ml-2 flex-col gap-1'>
                                                <li>- Launch a liquidity mining program to incentivize users to provide liquidity.</li>
                                                <li>- Onboard more DeFi projects onto Peach Blockchain.</li>

                                            </ol>


                                        </div>

                                    </div>

                                    <div className=" py-3">
                                        <p className='py-2'>.Education and Awareness Campaigns:</p>
                                        <div>

                                            <ol className='flex md:ml-3.5 ml-2 flex-col gap-1'>
                                                <li>- Launch educational content on Peach Blockchain's capabilities. </li>
                                                <li>- Collaboarate with universities and institutions for blockchain education programs.</li>

                                            </ol>


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="border-l-8  BorderColor">
                    <div className="md:flex flex-start">
                        <div className='relative '>
                            <div className=" rounded-full  absolute -left-7 top-7  w-[46px]">

                                <img className='w-[100px]' src={wCircle} alt="" />

                            </div>
                            <h1 className='absolute -left-20 font-extrabold text-3xl top-8'>04:</h1>
                        </div>
                        <div className='py-6 w-full'>
                            {/* Question 4 */}
                            <div className="block p-6 rounded-lg shadow-lg questions w-full ml-6">
                                <h1 className='font-bold'>Q4: 2024</h1>
                                <div className="text-sm font-semibold">
                                    <p className='py-2'>1.Interoperability Features:</p>
                                    <div className=''>

                                        <ol className='flex md:ml-3.5 ml-2  flex-col gap-1'>
                                            <li>- Explore interoperability with other prominent blockchains.</li>
                                            <li>- Implement cross-chain functionalities to enchance user flexibility.</li>

                                        </ol>


                                    </div>


                                    <div className="  py-3">
                                        <p className='py-2'>2.Net Integration:</p>
                                        <div>

                                            <ol className='flex md:ml-3.5 ml-2 flex-col gap-1'>
                                                <li>- Integrate NFT capabilities into Peach Blockchain in the form of PRC-721</li>
                                                <li>- Collaborate with artists and creators for exclusive NFT launches.</li>

                                            </ol>


                                        </div>

                                    </div>

                                    <div className=" py-3">
                                        <p className='py-2'>3. Performance and Security Audits:</p>
                                        <div>

                                            <ol className='flex md:ml-3.5 ml-2 flex-col gap-1'>
                                                <li>- Conduct third-party audits for both performance and security.</li>
                                                <li>- Address any identified vulnerabilities promptly.</li>

                                            </ol>


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="border-l-8 BorderColor ">
                    <div className="md:flex flex-start">
                        <div className='relative '>
                            <div className=" rounded-full  absolute -left-7 top-7  w-[46px]">

                                <img className='w-[100px]' src={wCircle} alt="" />

                            </div>

                        </div>
                        <div className='py-6 w-full'>
                            {/* onngoing throught */}
                            <div className="block p-6 rounded-lg shadow-lg questions w-full ml-6">
                                <h1 className='font-bold'>Ongoing: Throughout the Year</h1>
                                <div className="text-sm font-semibold">
                                    <p className='py-2'>1.User Feedback Iterations:</p>
                                    <div className=''>

                                        <ol className='flex md:ml-3.5 ml-2  flex-col gap-1'>
                                            <li>- Continuously gather and analyze user feedback for ongoing improvemenents.</li>
                                            <li>- Release regular updates addressing user needs and market dynamics.</li>

                                        </ol>


                                    </div>


                                    <div className=" py-3">
                                        <p className='py-2'>2.Strategic Partnerships:</p>
                                        <div>

                                            <ol className='flex md:ml-3.5 ml-2  flex-col gap-1'>
                                                <li>- Foster collaborations with major players in the Blockchain and fintech industries.</li>
                                                <li>- Explore potential partnerships with traditional finance institutions for blockchain integration.</li>

                                            </ol>


                                        </div>

                                    </div>

                                    <div className=" py-3">
                                        <p className='py-2'>3.Regulatory Compliance:</p>
                                        <div>

                                            <ol className='flex md:ml-3.5 ml-2 flex-col gap-1'>
                                                <li>- Stay abreast of global regulatory developments.</li>
                                                <li>- Proactively adapt Peach Blockchain to meet compliance standards in key markets.</li>


                                            </ol>


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