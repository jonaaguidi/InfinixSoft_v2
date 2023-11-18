import { useEffect, useState } from "react";
import Logo from "../../public/img/Header/logo.svg"
import Arrow from "../../public/img/Header/arrow_dropdown.svg"
import Arrow2 from "../../public/img/Services/Arrow_2.svg"
import Dropdown_Holding from "./Dropdown_Holding";
import Dropdown_Lang from "./Dropdown_Lang";
import Dropdown_Menu from "./Dropdown_Menu";
import Form from "./Form.jsx";
import Image from "next/image.js";
import Link from "next/link";
import { MdOutlineLanguage } from "react-icons/md"


const Header = () => {

  // Estado para abrir y cerrar el Dropdown del Holding.
  const [showDropdownHolding, setShowDropdownHolding] = useState(false);
  // Estado para abrir y cerrar el Dropdown del LANG.
  const [showDropdownLang, setShowDropdownLang] = useState(false);
  // Estado para rotar la flecha del LANG. 
  const [rotate, setRotate] = useState(0);
  // Estado para abrir y cerrar el Dropdown del Menú.
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  // Estado para abrir y cerrar el Form de Contacto.
  const [showForm, setShowForm] = useState(false);

  // Función para abrir/cerrar el Form de Contacto.
  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  // Función abrir/cerrar dropdown del Holding
  const toggleDropdownHolding = () => {
    setShowDropdownHolding(!showDropdownHolding);
    if (!showDropdownHolding) {
      setShowDropdownLang(false);
      setShowDropdownMenu(false);
    }
  };

  // Función abrir/cerrar dropdown de las Flags.
  const toggleDropdownLang = () => {
    setShowDropdownLang(!showDropdownLang);
    setRotate(rotate === 0 ? 180 : 0);
    if (!showDropdownLang) {
      setShowDropdownHolding(false);
      setShowDropdownMenu(false);
    }
  };

  // Función abrir/cerrar dropdown de Menú.
  const toggleDropdownMenu = () => {
    setShowDropdownMenu(!showDropdownMenu);
    if (!showDropdownMenu) {
      setShowDropdownHolding(false);
      setShowDropdownLang(false);
    }
  };


  // Efecto para manejar el click global para cerrar los Dropdowns
  useEffect(() => {
    const handleGlobalClick = (event) => {
      // Si el clic ocurrió fuera del componente <Main></Main>, cierra el Dropdown
      if (event.target.closest("main")) {
        setShowDropdownHolding(false);
        setShowDropdownLang(false);
        setShowDropdownMenu(false);
      }
    };

    // Agrego el evento de escucha de clic al documento.
    document.addEventListener("click", handleGlobalClick);

    // Limpia el evento de escucha 
    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="w-full h-fit z-max bg-transparent opacity-100 px-28 py-5 flex justify-between items-center max-[880px]:px-14 max-[675px]:px-[24px] max-[675px]:py-6">

        <div className="flex gap-[18px] z-50 items-center max-[500px]:gap-2 max-[410px]:gap-1">
          <Link href="/">
            <Image src={Logo} width={201} height={42} alt="InfinixSoft" className="max-[580px]:w-40 max-[440px]:w-32 max-[420px]:w-30 max-[375px]:w-28 max-[360px]:w-24" />
          </Link>
          <Image width={30} height={26} className="relative z-max p-2 mt-1 opacity-70 hover:bg-[#303035] hover:rounded-lg hover:opacity-100 cursor-pointer max-[580px]:p-2 max-[420px]:w-8" src={Arrow} alt="arrow" onClick={toggleDropdownHolding} />
          {showDropdownHolding && <Dropdown_Holding />}
        </div>


        <nav className="flex items-center z-50 gap-10 mt-2 max-[580px]:gap-3 max-[470px]:gap-2 max-[400px]:gap-0">
          <ul className="flex items-center gap-9 max-[580px]:gap-3 max-[470px]:gap-2 list-none p-0 m-0">
            <li className="hover-underline-animation mt-2 max-[1170px]:hidden">
              <a href="#projects" className="text-[14px] font-normal cursor-pointer">Case Studies</a>
            </li>
            <li className="hover-underline-animation mt-2 max-[1170px]:hidden">
              <a href="#services" className="text-[14px] font-normal cursor-pointer ">Our Services</a>
            </li>
            <li className="hover-underline-animation mt-2 max-[1170px]:hidden">
              <a href="https://infinixholdinggroup.com/partner/" target="_blank" rel="noreferrer" className="text-[14px] font-normal cursor-pointer ">Partner</a>
            </li>
            <li className="max-[1170px]:hidden">
              <button
                onClick={toggleShowForm}
                className="btn-primary btn-hover transition duration-400 hover:shadow-opacity flex items-center justify-center gap-1 max-w-[300px]"
              >
                Contact Us
                <Image className="ml-1 w-3.5" src={Arrow2} alt="Arrow"></Image>
              </button>
              {showForm && <Form onClose={() => setShowForm(false)} />}
            </li>
            <li>
              <div onClick={toggleDropdownLang} className="badge lang-hover px-2 flex items-center justify-center gap-1 rounded-xl cursor-pointer max-[1050px]:gap-1">
                <span className="text-[18px] text-white opacity-80">
                  <MdOutlineLanguage />
                </span>
                <Image
                  style={{
                    transform: `rotate(${rotate}deg)`,
                    transition: 'transform 0.5s ease',
                  }}
                  width={20}
                  height={12}
                  className="relative px-1 opacity-80 cursor-pointer max-[420px]:w-4"
                  src={Arrow} alt="arrow" />
              </div>
              {showDropdownLang && <Dropdown_Lang setRotate={setRotate} setShowDropdownLang={setShowDropdownLang} />}
            </li>

            <li className="cursor-pointer min-[1170px]:hidden">
              <div
                className={`menu-button ${showDropdownMenu ? 'open' : ''}`}
                onClick={() => {
                  toggleDropdownMenu();
                }}
              >
                <div className="menu-icon">
                  <span className={`span-1 ${showDropdownMenu ? 'open-span-1' : ''}`}></span>
                  <span className={`span-2 ${showDropdownMenu ? 'open-span-2' : ''}`}></span>
                  <span className={`span-3 ${showDropdownMenu ? 'open-span-3' : ''}`}></span>
                </div>
              </div>
              {showDropdownMenu && <Dropdown_Menu />}
            </li>

          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
