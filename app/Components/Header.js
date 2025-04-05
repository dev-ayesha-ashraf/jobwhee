"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const [selectedLang, setSelectedLang] = useState({
        code: "EN",
        flag: "/flagone (1).png",
        name: "English",
    });

    const languages = [
        { code: "EN", flag: "/flagone (1).png", name: "English" },
        { code: "GR", flag: "/flagTwo.png", name: "Greek" },
    ];

    const handleSelect = (lang) => {
        setSelectedLang(lang);
        setIsLangOpen(false);
    };

    return (
        <header className="h-[74px] rounded-[145px] mx-5 bg-black flex items-center">
            <div className="flex items-center justify-between w-full px-[14px]">
                {/* Logo */}
                <h1 className="logo">
                    <Image
                        src="/Group 34077.png"
                        alt="Example Image"
                        width={171}
                        height={27}
                    />
                </h1>

                {/* Desktop Nav Items (hidden on <=1000px) */}
                <ul className="hidden lg:flex items-center gap-4">
                    <li className="text-white font-poppins font-semibold text-[16px] w-[105px] text-center">Post A Job</li>
                    <li className="text-white font-poppins font-semibold text-[16px] w-[105px] text-center">Explore Jobs</li>
                    <li className="text-white font-poppins font-semibold text-[16px] w-[105px] text-center">How it works</li>
                </ul>

                {/* Right side buttons */}
                <div className="relative flex items-center">
                    {/* Language Dropdown */}
                    <div className="hidden lg:block">
                        <button
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className="flex items-center gap-2 text-white bg-black border border-[#94949480] transition mr-1 px-2 rounded-[39px] w-[95px] h-[40px]"
                        >
                            <Image src={selectedLang.flag} alt="Flag" width={20} height={15} />
                            <span className="font-medium">{selectedLang.code}</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>

                        {isLangOpen && (
                            <div className="absolute left-0 mt-12 w-[131px] text-white bg-black border border-[#94949480] rounded-[14px] z-10">
                                {languages.map((lang, index) => (
                                    <div key={lang.code}>
                                        <div
                                            className="flex items-center gap-2 cursor-pointer p-2"
                                            onClick={() => handleSelect(lang)}
                                        >
                                            <Image src={lang.flag} alt="Flag" width={20} height={15} />
                                            <span className="font-poppins font-medium text-[14px]">{lang.name}</span>
                                        </div>
                                        {index === 0 && <div className="w-[111px] border border-[#4A4A4A] m-auto"></div>}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Sign In (hidden on <=1000px) */}
                    <button className="hidden lg:block rounded-[39px] text-white bg-black w-[122px] h-[48px] border border-[#94949480] mr-1">Sign In</button>

                    {/* Sign Up (always visible) */}
                    <button className="rounded-[39px] text-black bg-white w-[122px] h-[48px] border border-[#94949480] mr-1">Sign Up</button>

                    {/* Toggle Button for small to medium screens */}
                    <div className="block lg:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white ml-2">
                            {menuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - appears on toggle */}
            {menuOpen && (
                <div className="absolute top-[100px] left-0 w-full bg-black text-white px-5 py-4 z-20 lg:hidden">
                    <ul className="space-y-3">
                        <li className="text-white font-poppins font-semibold">Post A Job</li>
                        <li className="text-white font-poppins font-semibold">Explore Jobs</li>
                        <li className="text-white font-poppins font-semibold">How it works</li>
                        <div className="block lg:hidden">
                        <button
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className="flex items-center gap-2 text-white bg-black border border-[#94949480] transition mr-1 px-2 rounded-[39px] w-[95px] h-[40px]"
                        >
                            <Image src={selectedLang.flag} alt="Flag" width={20} height={15} />
                            <span className="font-medium">{selectedLang.code}</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>

                        {isLangOpen && (
                            <div className="absolute left-0 mt-12 w-[131px] text-white bg-black border border-[#94949480] rounded-[14px] z-10">
                                {languages.map((lang, index) => (
                                    <div key={lang.code}>
                                        <div
                                            className="flex items-center gap-2 cursor-pointer p-2"
                                            onClick={() => handleSelect(lang)}
                                        >
                                            <Image src={lang.flag} alt="Flag" width={20} height={15} />
                                            <span className="font-poppins font-medium text-[14px]">{lang.name}</span>
                                        </div>
                                        {index === 0 && <div className="w-[111px] border border-[#4A4A4A] m-auto"></div>}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                        <button className="rounded-[39px] text-white bg-black w-full h-[48px] border border-[#94949480]">Sign In</button>
                        {/* Optional: show language switcher here too if you want */}
                    </ul>
                </div>
            )}
        </header>
    );
}
