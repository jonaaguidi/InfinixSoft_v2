import { useEffect, useState } from "react";
import Dropdown_Lang_Footer from "./Dropdown_Lang_footer";
import infinix_logo from "../../public/img/favicons/favicon_infinix.ico";
import Arrow from "../../public/img/Services/Arrow_2.svg";
import { FaInstagram, FaLinkedinIn, FaSquareXTwitter } from 'react-icons/fa6';
import Image from "next/image";

const Footer = () => {
    // Estado para abrir y cerrar el Dropdown del LANG y Form.
    const [showDropdownLang, setShowDropdownLang] = useState(false);
    // Estado Default language
    const [currentLanguage, setCurrentLanguage] = useState("en");

    const toggleDropdownLang = () => {
        setShowDropdownLang(!showDropdownLang);
    };

    // Efecto para manejar el click global para cerrar el Dropdown
    useEffect(() => {
        const handleGlobalClick = (event) => {
            // Si el clic ocurrió fuera del componente <Main></Main>, cierra el Dropdown
            if (event.target.closest("main")) {
                setShowDropdownLang(false);
            }
        };

        // Agrego el evento de escucha de clic al documento.
        document.addEventListener("click", handleGlobalClick);

        // Limpia el evento de escucha
        return () => {
            document.removeEventListener("click", handleGlobalClick);
        };
    }, []);

    return (
        <div className="relative bottom-0 left-0 w-full h-fit rounded-xl bg-[#181819] flex z-10 justify-between items-center px-40 py-20 max-[1300px]:flex-col max-[1300px]:gap-6 max-[980px]:px-14 max-[560px]:px-7">
            <p className="text-[#F4F5F6] text-center flex flex-wrap items-center gap-2 max-[500px]:flex-col">
                <Image src={infinix_logo} width={24} height={24} alt="logotipo" />
                Made by InfinixSoft <span>©2008 - 2023</span>
                <li className='ml-1 flex gap-3 items-center max-[1467px]:text-[14px] max-[586px]:text-[12px] max-[500px]:mt-2 max-[500px]:ml-0 max-[422px]:flex-wrap '>
                    <Image className="max-[500px]:hidden opacity-60" src={Arrow} alt='arrow' />
                    <a href='https://www.linkedin.com/company/infinixsoft/' target='_blank' rel='noreferrer'>
                        <FaLinkedinIn className='text-[20px] opacity-85 cursor-pointer transition duration-500 transform hover:scale-[1.055]' />
                    </a>
                    <a href='https://www.instagram.com/infinix.soft/' target='_blank' rel='noreferrer'>
                        <FaInstagram className='text-[20px] opacity-85  cursor-pointer transition duration-500 transform hover:scale-[1.055] ml-1' />
                    </a>
                    <a href='https://twitter.com/InfinixSoft' target='_blank' rel='noreferrer'>
                        <FaSquareXTwitter className='text-[20px] opacity-85  cursor-pointer transition duration-500 transform hover:scale-[1.055] ml-1' />
                    </a>
                </li>
            </p>
            <ul className="flex items-center justify-center gap-8 cursor-pointer max-[980px]:flex-wrap max-[980px]:gap-5">
                <li className="hover-underline-animation">
                    <a href="#about">About</a>
                </li>
                <li className="hover-underline-animation">
                    <a href="#projects">Case Studies</a>
                </li>
                <li className="hover-underline-animation">
                    <a href="#services">Our Services</a>
                </li>
                <li className="hover-underline-animation">
                    <a target="_blank" href="https://infinixholdinggroup.com/partner/" rel="noreferrer">Partner</a>
                </li>
                <li className="relative">
                    <div onClick={toggleDropdownLang} className="flex items-center justify-center gap-2 cursor-pointer max-[1050px]:gap-2">
                        <p className="pb-2">
                            {currentLanguage === "en" ? "English (US)" : ""}
                            {currentLanguage === "ar" ? "Arabic (UAE)" : ""}
                            {currentLanguage === "es" ? "Spanish (ES)" : ""}
                            {currentLanguage === "pt" ? "Portuguese (BR)" : ""}
                        </p>
                        <Image className="scale-105 relative pb-1.5 pl-0.5 opacity-60 hover:opacity-100 cursor-pointer rotate-[270deg] mb-1 max-[420px]:scale-95" src={Arrow} alt="arrow" />
                    </div>
                    {showDropdownLang && <Dropdown_Lang_Footer currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />}
                </li>
            </ul>
        </div>
    );
};

export default Footer;
