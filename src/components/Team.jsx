/* eslint-disable react/no-unescaped-entities */

// TEAM SECTION ESTATICO 
import { FaLinkedinIn } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import ivan from "../../public/img/Team/ivan.png"
import marcos from "../../public/img/Team/Marcos.png"
import hernan from "../../public/img/Team/Hernan.png"
import marcela from "../../public/img/Team/Marce.png"
import luis from "../../public/img/Team/Luis.png"
import ale from "../../public/img/Team/ale.png"
import jero from "../../public/img/Team/jero.png"
import fernando from "../../public/img/Team/Fer.png"
import valeria from "../../public/img/Team/valeria.png"
import ayelen from "../../public/img/Team/aye.png"
import lis from "../../public/img/Team/Lis.png"
import Image from "next/image";

const TeamComponent = () => {

  const { t } = useTranslation();

  return (
    <section className="max-w-[1220px] py-20 mx-auto flex flex-col ">
      <div className="max-w-[548px] pb-20 max-[1350px]:pl-14 max-[580px]:px-7 ">
        <h2 className="text-[52px] text-[#F4F5F6] font-bold pb-6 max-[458px]:text-[32px] max-[458px]:pb-2">{t("teamTitle")}</h2>
        <p className="text-[#A1A1A9] text-[18px] max-[458px]:text-[16px]">
          {t("teamSubtitle")}
        </p>
      </div>

      <div className="flex items-start justify-center gap-x-11 gap-y-10 flex-wrap max-[1350px]:px-14 max-[1350px]:gap-x-7 max-[669px]:justify-center max-[580px]:px-7 max-[580px]:gap-x-5">

        <div className="flex flex-col items-center justify-center member z-10 max-w-[170px] h-fit max-[580px]:max-w-[156px] max-[458px]:max-w-[146px]">
          <Image className="opacity-80" src={ivan} alt="Ivan Saroka"></Image>
          <p className="text-[14px] font-bold text-white text-center">
          {t("ivanName")}
          </p>
          <p className="text-[12px] font-normal text-[#A1A1A9] text-center">
            {t("ivanPosition")}
          </p>
          <a href="https://www.linkedin.com/in/isaroka/" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="mt-1.5 opacity-50 text-[20px] cursor-pointer transition duration-500 transform hover:scale-[1.10] hover:opacity-80" />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center member z-10 max-w-[170px] h-fit max-[580px]:max-w-[156px] max-[458px]:max-w-[146px]">
          <Image className="opacity-80" src={marcos} alt={t("marcosName")}></Image>
          <p className="text-[14px] font-bold text-white text-center">
          {t("marcosName")}
          </p>
          <p className="text-[12px] font-normal text-[#A1A1A9] text-center">
            {t("marcosPosition")}
          </p>
          <a href="https://www.linkedin.com/in/vittoriomarcos/" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="mt-1.5 opacity-50 text-[20px] cursor-pointer transition duration-500 transform hover:scale-[1.10] hover:opacity-80" />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center member z-10 max-w-[170px] h-fit max-[580px]:max-w-[156px] max-[458px]:max-w-[146px]">
          <Image className="opacity-80" src={hernan} alt={t("hernanName")}></Image>
          <p className="text-[14px] font-bold text-white text-center">
            {t("hernanName")}
          </p>
          <p className="text-[12px] font-normal text-[#A1A1A9] text-center">
            {t("hernanPosition")}
          </p>
          <a href="https://www.linkedin.com/in/hernanpaez/" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="mt-1.5 opacity-50 text-[20px] cursor-pointer transition duration-500 transform hover:scale-[1.10] hover:opacity-80" />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center member z-10 max-w-[170px] h-fit max-[580px]:max-w-[156px] max-[458px]:max-w-[146px]">
          <Image className="opacity-80" src={marcela} alt={t("marcelaName")}></Image>
          <p className="text-[14px] font-bold text-white text-center">
            {t("marcelaName")}
          </p>
          <p className="text-[12px] font-normal text-[#A1A1A9] text-center">
            {t("marcelaPosition")}
          </p>
          <a href="https://www.linkedin.com/company/infinixsoft/" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="mt-1.5 opacity-50 text-[20px] cursor-pointer transition duration-500 transform hover:scale-[1.10] hover:opacity-80" />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center member z-10 max-w-[170px] h-fit max-[580px]:max-w-[156px] max-[458px]:max-w-[146px]">
          <Image className="opacity-80" src={luis} alt={t("luisName")} />
          <p className="text-[14px] font-bold text-white text-center">
            {t("luisName")}
          </p>
          <p className="text-[12px] font-normal text-[#A1A1A9] text-center">
            {t("luisPosition")}
          </p>
          <a href="https://www.linkedin.com/in/luis-santiago-paez/" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="mt-1.5 opacity-50 text-[20px] cursor-pointer transition duration-500 transform hover:scale-[1.10] hover:opacity-80" />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center member z-10 max-w-[170px] h-fit max-[580px]:max-w-[156px] max-[458px]:max-w-[146px]">
          <Image className="opacity-80" src={jero} alt={t("jeroName")}></Image>
          <p className="text-[14px] font-bold text-white text-center">
            {t("jeroName")}
          </p>
          <p className="text-[12px] font-normal text-[#A1A1A9] text-center">
            {t("jeroPosition")}
          </p>
          <a href="https://www.linkedin.com/in/jeronimohutton/" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="mt-1.5 opacity-50 text-[20px] cursor-pointer transition duration-500 transform hover:scale-[1.10] hover:opacity-80" />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center member z-10 max-w-[170px] h-fit max-[580px]:max-w-[156px] max-[458px]:max-w-[146px]">
          <Image className="opacity-80" src={fernando} alt={t("ferName")}></Image>
          <p className="text-[14px] font-bold text-white text-center">
            {t("ferName")}
          </p>
          <p className="text-[12px] font-normal text-[#A1A1A9] text-center">
            {t("ferPosition")}
          </p>
          <a href="https://www.linkedin.com/in/fernando-lepore-33125929/" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="mt-1.5 opacity-50 text-[20px] cursor-pointer transition duration-500 transform hover:scale-[1.10] hover:opacity-80" />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center member z-10 max-w-[170px] h-fit max-[580px]:max-w-[156px] max-[458px]:max-w-[146px]">
          <Image className="opacity-80" src={valeria} alt={t("valeName")}></Image>
          <p className="text-[14px] font-bold text-white text-center">
            {t("valeName")}
          </p>
          <p className="text-[12px] font-normal text-[#A1A1A9] text-center">
            {t("valePosition")}
          </p>
          <a href="https://www.linkedin.com/in/valeriacaracciolo/" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="mt-1.5 opacity-50 text-[20px] cursor-pointer transition duration-500 transform hover:scale-[1.10] hover:opacity-80" />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center member z-10 max-w-[170px] h-fit max-[580px]:max-w-[156px] max-[458px]:max-w-[146px]">
          <Image className="opacity-80" src={ale} alt={t("aleName")}></Image>
          <p className="text-[14px] font-bold text-white text-center">
            {t("aleName")}
          </p>
          <p className="text-[12px] font-normal text-[#A1A1A9] text-center">
            {t("alePosition")}
          </p>
          <a href="https://www.linkedin.com/in/alebustos/" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="mt-1.5 opacity-50 text-[20px] cursor-pointer transition duration-500 transform hover:scale-[1.10] hover:opacity-80" />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center member z-10 max-w-[170px] h-fit max-[580px]:max-w-[156px] max-[458px]:max-w-[146px]">
          <Image className="opacity-80" src={ayelen} alt={t("ayeName")}></Image>
          <p className="text-[14px] font-bold text-white text-center">
            {t("ayeName")}
          </p>
          <p className="text-[12px] font-normal text-[#A1A1A9] text-center">
            {t("ayePosition")}
          </p>
          <a href="https://www.linkedin.com/in/ayel%C3%A9n-vignuda-46b782132/" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="mt-1.5 opacity-50 text-[20px] cursor-pointer transition duration-500 transform hover:scale-[1.10] hover:opacity-80" />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center member z-10 max-w-[170px] h-fit max-[580px]:max-w-[156px] max-[458px]:max-w-[146px]">
          <Image className="opacity-80" src={lis} alt={t("lisName")}></Image>
          <p className="text-[14px] font-bold text-white text-center">
            {t("lisName")}
          </p>
          <p className="text-[12px] font-normal text-[#A1A1A9] text-center">
            {t("lisPosition")}
          </p>
          <a href="https://www.linkedin.com/company/infinixsoft/" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="mt-1.5 opacity-50 text-[20px] cursor-pointer transition duration-500 transform hover:scale-[1.10] hover:opacity-80" />
          </a>
        </div>

      </div>

    </section>
  );
};
export default TeamComponent;

