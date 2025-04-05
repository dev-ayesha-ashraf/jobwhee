'use client';
import Image from "next/image";
import { Search, ChevronDown } from 'lucide-react';

export default function Home() {
    return (
        <>
            <div className="rounded-[50px] mx-5 mt-3 relative h-screen bg-cover bg-center overflow-hidden" style={{ backgroundImage: 'url("/YoungWonen.png")' }}>
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black opacity-1"></div>

                {/* Main Content */}
                <div className="">
                    <div className="hidden lg:flex w-full justify-between px-4">
                        <div className="bg-white/4 backdrop-blur-lg p-1 rounded-[28px] w-[567px] h-[151px] relative mt-11">
                            <p className="text-white font-poppins font-extrabold text-4xl leading-[61px] tracking-[0%] uppercase">
                                FIND THE <span className="text-[#CBEC5E]">TALENT</span> SIGN UP & GET THE <span className="text-[#CBEC5E]">JOB</span> DONE
                            </p>
                        </div>

                        <div className="bg-white/4 backdrop-blur-lg p-1 rounded-[28px] w-[496px] h-[125px] relative mt-[15%]">
                            <p className="text-white font-poppins font-extrabold text-4xl leading-[61px] tracking-[0%] uppercase">
                                {`WE'LL`} <span className="text-[#CBEC5E]">HANDLE</span> THAT
                            </p>
                            <button className="absolute mt-7 bg-[#CBEC5E] p-4 rounded-[28px] w-[222px] h-[51px] flex items-center justify-center text-[#18470D] font-poppins font-medium text-[16px] leading-[100%] tracking-[0%] text-center">
                                Sign Up for contact
                            </button>
                            <button className="w-[51px] h-[51px] bg-white rounded-[40px] relative ml-57 mt-7 flex text-center items-center justify-center">
                                <Image src="/mage_play-fill.png" alt="Example Image" width={18} height={18} />
                            </button>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="hidden lg:flex flex-col h-[12vh] justify-end items-center mt-10">
                        <div className="flex w-[459px] h-[50px] items-center justify-between rounded-[73px] bg-white absolute">
                            <div className="flex">
                                <div className="w-[42px] h-[42px] rounded-[50%] flex items-center justify-center text-center bg-black ml-2">
                                    <Search className="text-white" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Find a talent or service"
                                    className="ml-2 font-poppins font-medium text-sm leading-tight"
                                />
                            </div>
                            <div className="flex">
                                <div className="w-[22.5px] border border-[#737373] rotate-[-90deg] h-0 m-auto"></div>
                                <p className="font-poppins font-medium text-[14px] leading-tight">Talent</p>
                                <ChevronDown className="w-[75px] h-[15px]" />
                            </div>
                        </div>

                    </div>
                    <ul className="flex text-cener justify-center items-center mt-[65%] lg:mt-2">
                        <li className="w-[7px] h-[7px] rounded-full bg-[#D0FF00] mx-1"></li>
                        <li className="w-[7px] h-[7px] rounded-full bg-[#8C9959] mx-1"></li>
                        <li className="w-[7px] h-[7px] rounded-full bg-[#8C9959] mx-1"></li>
                        <li className="w-[7px] h-[7px] rounded-full bg-[#8C9959] mx-1"></li>
                        <li className="w-[7px] h-[7px] rounded-full bg-[#8C9959] mx-1"></li>
                    </ul>
                    <div className="m-auto mt-3 z-10 bg-white text-center flex items-center justify-center w-[241px] h-[46px] rounded-[50px] font-poppins font-[800] text-[14px] shadow-lg">
                        Education And Tutoring
                    </div>
                    <div>
                        <div className="w-full lg:flex hidden justify-center items-center text-center">
                            <div className="w-[30%] h-[40%] bg-white absolute rounded-[53%] mb-[-27%] "></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex flex-col lg:hidden lg:flex-row w-full justify-between items-center px-4">
                    <div className="bg-[#546B868A] backdrop-blur-lg p-1 rounded-[28px] w-[299px] h-[107px] relative mt-11 p-4">
                        <p className="text-white font-poppins font-extrabold text-[20px] tracking-[0%] uppercase">
                            FIND THE <span className="text-[#CBEC5E]">TALENT</span> SIGN UP & GET THE <span className="text-[#CBEC5E]">JOB</span> DONE
                        </p>
                    </div>

                    <div className="bg-[#546B868A] backdrop-blur-lg p-1 rounded-[28px] w-[299px] h-[107px] relative mt-8 lg:mt-[15%] p-4">
                        <p className="text-white font-poppins font-extrabold text-[20px] tracking-[0%] uppercase">
                            {`WE'LL`} <span className="text-[#CBEC5E]">HANDLE</span> THAT
                        </p>
                        <button className="absolute mt-7 bg-[#CBEC5E] p-4 rounded-[28px] w-[222px] h-[51px] flex items-center justify-center text-[#18470D] font-poppins font-medium text-[16px] leading-[100%] tracking-[0%] text-center">
                            Sign Up for contact
                        </button>
                        <button className="w-[51px] h-[51px] bg-white rounded-[40px] relative ml-57 mt-7 flex text-center items-center justify-center">
                            <Image src="/mage_play-fill.png" alt="Example Image" width={18} height={18} />
                        </button>
                    </div>


                </div>
                <div className="flex items-center mt-10 justify-center lg:hidden">
                    <div className="flex w-[335px] sm:w-[459px] h-[50px] items-center justify-between rounded-[73px] bg-white absolute mt-10">
                        <div className="flex">
                            <div className="w-[42px] h-[42px] rounded-[50%] flex items-center justify-center text-center bg-black ml-2">
                                <Search className="text-white" />
                            </div>
                            <input
                                type="text"
                                placeholder="Find a talent or service"
                                className="ml-2 font-poppins font-medium text-sm leading-tight"
                            />
                        </div>
                        <div className="flex">
                            <div className="w-[22.5px] border border-[#737373] rotate-[-90deg] h-0 m-auto"></div>
                            <div className="flex justify-center items-center text-center w-[70px] mr-2 h-[41px] rounded-[5000px] bg-[#F0F1F4] border-[0.72px] border-[#CDCDCD]">
                                <p className="font-poppins font-medium text-[12px] leading-tight">Talent</p>
                                <ChevronDown className="w-[13px] h-[16px] ml-1" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}
