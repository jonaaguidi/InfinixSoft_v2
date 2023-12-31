"use client"
import { useEffect, useState } from "react";
import Dropdown_Lang_Footer from "./Dropdown_Lang_footer";
import infinix_logo from "../../public/img/favicons/favicon_infinix.ico";
import Arrow from "../../public/img/Header/arrow_dropdown.svg"
import { FaLinkedinIn } from 'react-icons/fa6';
import Image from "next/image";
import { MdOutlineLanguage } from "react-icons/md";

const Footer = () => {
    // Estado para abrir y cerrar el Dropdown del LANG.
    const [showDropdownLang, setShowDropdownLang] = useState(false);
    // Estado para rotar la flecha del Lang. 
    const [rotate, setRotate] = useState(0);

    const toggleDropdownLang = () => {
        setShowDropdownLang(!showDropdownLang);
        setRotate(rotate === 0 ? 180 : 0);
    };

    // Efecto para manejar el click global para cerrar el Dropdown
    useEffect(() => {
        const handleGlobalClick = (event) => {
            // Si el clic ocurrió fuera del componente <Main></Main>, cierra el Dropdown
            if (event.target.closest("main")) {
                setShowDropdownLang(false);
                setRotate(rotate === 0 ? 180 : 0);
            }
        };

        // Agrego el evento de escucha de clic al documento.
        document.addEventListener("click", handleGlobalClick);

        // Limpia el evento de escucha
        return () => {
            document.removeEventListener("click", handleGlobalClick);
        };
    }, );

    return (
        <footer className="relative bottom-0 left-0 w-full h-fit rounded-xl bg-[#181819] flex z-10 justify-between items-center px-40 py-20 max-[1300px]:flex-col max-[1300px]:gap-6 max-[980px]:px-14 max-[560px]:px-7">
            <div className="text-[#F4F5F6] text-center flex flex-wrap items-center gap-2 max-[500px]:flex-col">
                <Image src={infinix_logo} width={24} height={24} alt="logotipo" />
                Made by InfinixSoft <span>©2008 - 2023</span>
                <li className='ml-1 flex gap-3 items-center max-[1467px]:text-[14px] max-[586px]:text-[12px] max-[500px]:mt-2 max-[500px]:ml-0 max-[422px]:flex-wrap '>
                    <Image className="max-[500px]:hidden opacity-60 rotate-[270deg]" src={Arrow} alt='arrow' />
                    <a href='https://www.linkedin.com/company/infinixsoft/' target='_blank' rel='noreferrer'>
                        <FaLinkedinIn className='text-[20px] opacity-85 cursor-pointer transition duration-500 transform hover:scale-[1.055]' />
                    </a>
                </li>
            </div>
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
                <li>
                    <div onClick={toggleDropdownLang} className="badge lang-hover mb-[10px] px-2 flex items-center justify-center gap-1 rounded-xl cursor-pointer max-[1050px]:gap-1">
                        <span className="text-[18px] text-white opacity-80">
                            <MdOutlineLanguage />
                        </span>
                        <Image
                            width={20}
                            height={12}
                            style={{
                                transform: `rotate(${rotate}deg)`,
                                transition: 'transform 0.5s ease',
                            }}
                            className="relative px-1 opacity-80 cursor-pointer max-[420px]:w-4"
                            src={Arrow}
                            alt="arrow"
                        />
                    </div>
                    {showDropdownLang && <Dropdown_Lang_Footer setShowDropdownLang={setShowDropdownLang} />}
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
