import React from "react";
import Image from "next/image";


const talents = [
    {
        name: "Ioanna Spirou",
        field: "Beauty and Coaching",
        rating: "4.5",
        verified: "Consmetology",
        img: "/avatar-1.jpg",
    },
    {
        name: "Alexandros Markou",
        field: "Legal and Consulting",
        rating: "4.6",
        verified: "Accounting",
        img: "/avatar-2.jpg",
    },
    {
        name: "Sofia Nikolaidis",
        field: "Bookkeeping & Training",
        rating: "4.4",
        verified: "Math Training",
        img: "/avatar-3.jpg",
    },
    {
        name: "Eleni Papadaki",
        field: "Event Entertainment",
        rating: "4.3",
        verified: "Photography",
        img: "/avatar-4.jpg",
    },
    {
        name: "Dimitrios Vasilakis",
        field: "Education & Tutoring",
        rating: "4.5",
        verified: "History Tutoring",
        img: "/avatar-5.jpg",
    },
    {
        name: "Thanos Karamanlis",
        field: "Events & Entertainment",
        rating: "4.6",
        verified: "Videography",
        img: "/avatar-6.jpg",
    },
];

export default function TopTalents() {
    return (
        <section className="px-2 bg-gray-100 text-gray-900 py-5 mt-15 lg:mt-0">
            <div className="">
                <div className="m-auto">
                    <div className="flex justify-center items-center">

                        <div className="bg-[#C0D724] w-[14px] h-[14px] rounded-[3px] mr-2"></div>
                        <h2 className="font-Poppins font-extrabold text-[20px] sm:text-[30px] text-black">TOP TALENTS READY TO HELP</h2>
                    </div>
                    <div className="w-[288px] sm:w-[432px] flex justify-end mt-1 m-auto">
                        <div className="w-[125px] h-[5px] rounded-[19px] bg-[#C0D724] "></div>

                    </div>

                </div>
                <div className="flex justify-around flex-col lg:flex-row">
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
                        {talents.map((talent, index) => (
                            <div key={index} className="bg-white w-[150px] sm:w-[183px] xl:w-[223px] h-[276px] rounded-[20px] shadow-md flex flex-col items-center ">
                                <div className="center mb-4">
                                    <img src={talent.img} alt={talent.name} className="w-[90px] sm:w-[113px] h-[90px] sm:h-[113px] rounded-full object-cover center mb-3 mt-2" />
                                </div>
                                <h3 className="font-Poppins font-[600] text-[16px] md:text-[18px]">{talent.name}</h3>
                                <p className="font-Poppins font-[400] text-[14px] text-[#A5A5A5]">{talent.field}</p>
                                <span className="mt-2 w-[62px] h-[26px] text-center flex items-center justify-center rounded-[47px] bg-[#F0F1F4]"><svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[14px] text-[#FFCB2B] mr-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 
           5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                                    <p className="font-Poppins font-[700] text-[14px] ml-1">{talent.rating}</p></span>
                                <p className="mt-2 font-Poppins  text-[12px] text-[#487C27] leading-[18px] flex items-center ">
                                    <span>
                                        <Image
                                            src="/Group.png"
                                            alt="Example Image"
                                            width={13}
                                            height={13}
                                        /></span><span className="font-[800] mr-1">Verified Talent </span> <span className="text-[600]"> in {talent.verified}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 w-auto md:w-[532px] ml-10">
                        <h2 className="h-auto sm:h-[204px] font-Poppins text-[18px] sm:text-[45px] font-[500] text-[#487C27] leading-[34px] sm:leading-[60px] text-[#18470D] text-start">
                            Work with top talents across industries for success
                        </h2>
                        <p className="h-[104px] sm:h-[152px] font-Poppins text-[16px] sm:text-[24px] font-[400] text-[#487C27] leading:[24px] sm:leading-[38px] text-[#545454] text-left">
                            Discover top talents across various industries—talents who are ready to make your life easier,
                            provide essential services, or grow your business.
                        </p>
                        <div className="flex items-center my-auto">
                            <button className="w-[122px] h-[38px] rounded-[39px] bg-[#CBEC5E] font-Poppins text-[14px] font-[500] ">Sign Up</button>
                            <button className="w-[142px] h-[48px] rounded-[39px] bg-black text-white font-Poppins text-[14px] font-[500] ml-2 ">Contact Us</button>
                        </div>
                        <ul>
                            <li className="flex mt-5">
                                <Image
                                    src="/Group 1171277370.png"
                                    alt="Example Image"
                                    width={26}
                                    height={26}
                                    className="mr-5"
                                />
                                <p className="font-Poppins text-[18px] font-[500] ">Diverse Industry Specialist</p>

                            </li>
                            <li className="flex mt-5">
                                <Image
                                    src="/Group 1171277370.png"
                                    alt="Example Image"
                                    width={26}
                                    height={26}
                                    className="mr-5"
                                />
                                <p className="font-Poppins text-[18px] font-[500] ">On demand Talent</p>

                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </section>
    );
}
