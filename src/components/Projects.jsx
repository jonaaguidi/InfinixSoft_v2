/* eslint-disable react/no-unescaped-entities */
import SportyFanPet from "../../public/img/Projects/SportyLogo.svg";
import SportyImage from "../../public/img/Projects/Sporty.png";
import Appa from "../../public/img/Projects/appalogo.svg";
import AppaImage from "../../public/img/Projects/AppaImage.png";
import Future from "../../public/img/Projects/Future_logo.svg";
import FutureImage from "../../public/img/Projects/image_future.png";
import Biotoken from "../../public/img/Projects/Biotoken.svg";
import BiotokenImage from "../../public/img/Projects/biotokenImage.png";
import Bombo from "../../public/img/Projects/bombologo.svg";
import BomboImage from "../../public/img/Projects/Bombo_image.png";
import iosIcon from "../../public/img/Projects/applelogo.svg";
import androidIcon from "../../public/img/Projects/Androidlogo.svg";
import webIcon from "../../public/img/Projects/weblogo.svg";
import {
  BsAndroid2,
  BsApple,
  BsFillCreditCard2BackFill,
  BsPeopleFill,
} from "react-icons/bs";
import { FaAppStoreIos, FaNodeJs, FaReact, FaRegFutbol } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SlGraph } from "react-icons/sl";
import { SiEthereum } from "react-icons/si";
import { FaEarthAmericas } from "react-icons/fa6";
import { BiLeaf, BiNetworkChart } from "react-icons/bi";
import Arrow from "../../public/img/Services/Arrow_2.svg";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "react-tooltip";

const Projects = () => {
  // Hook de Traducción
  const { t } = useTranslation();

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Verificar si estamos en el lado del cliente (navegador)
    if (typeof window !== "undefined") {
      // Acceder a window solo cuando esté disponible
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <section id="cases-study"
      className="max-w-[1220px] mx-auto py-20 pb-60 mb-10 max-[1024px]:py-10 max-[860px]:px-14 max-[480px]:px-7"
    >
      <div className="max-w-[838px] z-[100] py-20 mx-auto flex flex-col justify-center items-center max-[1024px]:py-10">
        <p className="badge w-fit font-normal mb-2"> {t("portfolioBadge")}</p>
        <h2 className="max-w-[888px] text-[#FCFCFD] leading-[120%] font-bold text-[52px] text-center pb-3 max-[1024px]:text-[32px] max-[1024px]:leading-[40px] max-[455px]:leading-8">
          {t("portfolioTitle")}
        </h2>
        <h4 className="max-w-[404px] text-[18px] font-normal text-[#A1A1A9] text-center pb-8 max-[1024px]:text-[16px] max-[455px]:text-[16px] max-[455px]:leading-6">
          {t("portfolioSubtitle")}
        </h4>
      </div>


      <div id="Biotoken"
        className="flex items-center justify-center gap-3 pt-4 max-[1210px]:scale-90 max-[1040px]:flex-col max-[1040px]:scale-100"
      >
        <div className="max-w-[546px] flex flex-col flex-end gap-10 max-[1440px]:scale-[0.90] max-[1040px]:scale-[0.85]">
          <div className="max-w-[487px]">
            <p className="badge w-fit font-normal mb-3">{t("biotokenBadge")}</p>
            <Image src={Biotoken} alt="Biotoken" className="pb-6" />
            <p className="text-[12px] text-white font-semibold uppercase pb-3">
              {t("biotokenText1")}
            </p>
            <p className="text-[16px] font-normal text-[#868687] pb-6">
              {t("biotokenText2")}
            </p>
            <a href="https://biotoken.world/" target="_blank" rel="noreferrer">
              <button className="btn-primary btn-hover transition duration-400 hover:shadow-button w-fit flex items-center justify-center gap-2">
                {t("buttonText2")}
                <Image className="ml-1 w-4" src={Arrow} alt="Arrow" />
              </button>
            </a>
          </div>

          <div className="flex flex-col gap-6 ">
            <div className="flex flex-col items-start gap-3">
              <p className="text-[12px] font-semibold">{t("projectsTitle1")}</p>
              <div className="flex gap-5 flex-wrap">
                <button className="badge flex items-center gap-2">
                  <span className="text-[18px] mb-[2px]">
                    <BiNetworkChart />
                  </span>
                  BLOCKCHAIN FOR ENVIRONMENTAL
                </button>
                <button className="badge flex items-center gap-2">
                  <span className="text-[18px] mb-[2px]">
                    <BiLeaf />
                  </span>
                  SUSTAINABLE IMPACT
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <p className="text-[12px] font-semibold">{t("projectsTitle2")}</p>
              <div className="flex gap-5 flex-wrap">
                <button className="badge flex items-center gap-2">
                  <span className="text-[18px] mb-[2px]">
                    <FaReact />
                  </span>
                  REACT
                </button>
                <button className="badge flex items-center gap-2">
                  <span className="text-[18px] mb-[2px]">
                    <BsPeopleFill />
                  </span>
                  LACCHAIN
                </button>
                <button className="badge flex items-center gap-2">
                  <span className="text-[20px] mb-[2px]">
                    <SiEthereum />
                  </span>
                  ERC20 TOKENS
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[14px] text-[#A1A1A9]">{t("projectsTitle3")}</p>
            <div className="flex gap-4 flex-wrap">
              <div className="flex justify-center items-center gap-2">
                <Image src={iosIcon} alt="iOS" />
                <p className="text-[16px] text-white font-bold">iOS</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <Image src={androidIcon} alt="android" />
                <p className="text-[16px] text-white font-bold">Android</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <Image src={webIcon} alt="web" />
                <p className="text-[16px] text-white font-bold">WebApp</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-0 flex items-center justify-center">
          <div
            className={`absolute inset-0 rounded-[999px] bg-[#7DE972] blur-[72px] opacity-80 ${
              windowWidth < 620
                ? "top-10 left-[60px] w-[140px] h-[248px]"
                : "left-[100px] top-24 w-[386px] h-[368px]"
            }`}
          ></div>
          <Image
            alt="biotoken"
            className={`scale-95 pt-5 ${
              windowWidth < 440 ? "pl-10" : "pl-16"
            } pr-10 max-[1240px]:scale-95`}
            src={BiotokenImage}
            width={562}
            height={589}
          />
        </div>
      </div>

      <div id="Future"
      className="flex items-center justify-center gap-10 pt-28 max-[1210px]:scale-90 max-[1040px]:flex-col-reverse max-[1040px]:scale-100">
        <div className="relative flex items-center justify-center">
          <div
            className={`absolute left-[80px] top-20 inset-0 rounded-[999px] bg-[#99ACC8] blur-[72px] opacity-80 ${
              windowWidth < 620 ? "w-[152px] h-[216px]" : "w-[386px] h-[368px]"
            }`}
          ></div>
          <Image
            alt="FutureImage"
            className={`scale-[1.14] ${
              windowWidth < 620 ? "pb-24 pr-10" : "pb-20 pr-20"
            }`}
            src={FutureImage}
            width={605}
            height={556}
          />
        </div>

        <div className="max-w-[546px] z-0 flex flex-col flex-end gap-10 max-[1440px]:scale-[0.90] max-[1040px]:scale-[0.85]">
          <div className="max-w-[487px]">
            <p className="badge w-fit font-normal mb-3">{t("futureBadge")}</p>
            <Image src={Future} alt="Future" className="pb-6" />
            <p className="text-[12px] text-white font-semibold uppercase pb-3">
              {t("futureText1")}
            </p>
            <p className="text-[16px] font-normal text-[#868687] pb-6">
              {t("futureText2")}
            </p>
            <a
              href="https://www.future.green/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn-primary btn-hover transition duration-400 hover:shadow-button w-fit flex items-center justify-center gap-2">
                {t("buttonText2")}
                <Image className="ml-1 w-4" src={Arrow} alt="Arrow" />
              </button>
            </a>
          </div>

          <div className="flex flex-col gap-6 ">
            <div className="flex flex-col items-start gap-3">
              <p className="text-[12px] font-semibold">{t("projectsTitle1")}</p>
              <div className="flex gap-5 flex-wrap">
                <button className="badge flex items-center gap-2">
                  <span className="text-[18px] mb-[2px]">
                    <BsFillCreditCard2BackFill />
                  </span>
                  VISA PARTNER
                </button>
                <button className="badge flex items-center gap-2">
                  <span className="text-[18px] mb-[2px]">
                    <FaEarthAmericas />
                  </span>
                  PLANET CONTRIBUTION
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <p className="text-[12px] font-semibold">{t("projectsTitle2")}</p>
              <div className="flex gap-5 flex-wrap">
                <button className="badge flex items-center gap-2">
                  <span className="text-[18px] mb-[2px]">
                    <FaReact />
                  </span>
                  REACT
                </button>
                <button className="badge flex items-center gap-2">
                  <span className="text-[18px] mb-[2px]">
                    <FaNodeJs />
                  </span>
                  NODE.JS
                </button>
                <button className="badge flex items-center gap-2">
                  <span className="text-[20px] mb-[2px]">
                    <FaAppStoreIos />
                  </span>
                  XCODE
                </button>
                <button className="badge flex items-center gap-2">
                  <span className="text-[20px] mb-[2px]">
                    <BsAndroid2 />
                  </span>
                  ANDROID STUDIO
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[14px] text-[#A1A1A9]">{t("projectsTitle3")}</p>
            <div className="flex gap-4 flex-wrap">
              <div className="flex justify-center items-center gap-2">
                <Image src={iosIcon} alt="iOS" />
                <p className="text-[16px] text-white font-bold">iOS</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <Image src={androidIcon} alt="android" />
                <p className="text-[16px] text-white font-bold">Android</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <Image src={webIcon} alt="web" />
                <p className="text-[16px] text-white font-bold">WebApp</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="Appa"
        className="flex items-center justify-center gap-3 pt-28 max-[1210px]:scale-90 max-[1040px]:pt-4 max-[1040px]:flex-col max-[1040px]:scale-100"
      >
        <div className="max-w-[546px] flex flex-col flex-end gap-10 max-[1440px]:scale-[0.90] max-[1040px]:scale-[0.85]">
          <div className="max-w-[487px]">
            <p className="badge w-fit font-normal mb-3">{t("AppaBadge")}</p>
            <Image src={Appa} alt="Appa GIFT" className="pb-6 scale-105" />
            <p className="text-[12px] text-white font-semibold uppercase pb-3">
              {t("AppaText1")}
            </p>
            <p className="text-[16px] font-normal text-[#868687] pb-6">
              {t("AppaText2")}
            </p>
            <a
              href="https://www.weareappa.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn-primary btn-hover transition duration-400 hover:shadow-button w-fit flex items-center justify-center gap-2">
                {t("buttonText2")}
                <Image className="ml-1 w-4" src={Arrow} alt="Arrow" />
              </button>
            </a>
          </div>

          <div className="flex flex-col gap-6 z-[100] ">
            <div className="flex flex-col items-start gap-3">
              <p className="text-[12px] font-semibold">{t("projectsTitle1")}</p>
              <div className="flex gap-5 flex-wrap">
                <button className="badge flex items-center gap-2">
                  <span className="text-[18px] mb-[2px]">
                    <BsApple />
                  </span>
                  +40K REVIEWS - APP STORE
                </button>
                <button className="badge flex items-center gap-2">
                  <span className="text-[18px] mb-[2px]">
                    <IoLogoGooglePlaystore />
                  </span>
                  +18K REVIEWS - PLAY STORE
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <p className="text-[12px] font-semibold">{t("projectsTitle2")}</p>
              <div className="flex gap-5 flex-wrap">
                <button className="badge flex items-center gap-2">
                  <span className="text-[18px] mb-[2px]">
                    <FaReact />
                  </span>
                  REACT
                </button>
                <button className="badge flex items-center gap-2">
                  <span className="text-[18px] mb-[2px]">
                    <FaNodeJs />
                  </span>
                  NODE.JS
                </button>
                <button className="badge flex items-center gap-2">
                  <span className="text-[20px] mb-[2px]">
                    <FaAppStoreIos />
                  </span>
                  XCODE
                </button>
                <button className="badge flex items-center gap-2">
                  <span className="text-[20px] mb-[2px]">
                    <BsAndroid2 />
                  </span>
                  ANDROID STUDIO
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[14px] text-[#A1A1A9]">{t("projectsTitle3")}</p>
            <div className="flex gap-4 flex-wrap">
              <div className="flex justify-center items-center gap-2">
                <Image src={iosIcon} alt="iOS" />
                <p className="text-[16px] text-white font-bold">iOS</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <Image src={androidIcon} alt="android" />
                <p className="text-[16px] text-white font-bold">Android</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <Image src={webIcon} alt="web" />
                <p className="text-[16px] text-white font-bold">WebApp</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className={`absolute left-[108px] inset-0 rounded-[999px] bg-[#03D9C5] blur-[70px] opacity-70 ${
              windowWidth < 620
                ? "top-3 w-[156px] h-[268px]"
                : "top-24 w-[386px] h-[368px]"
            }`}
          ></div>
          <Image
            alt="AppaImage"
            className="scale-[1.14]"
            src={AppaImage}
            width={605}
            height={556}
          />
        </div>
      </div>

      <div id="SportyFanPet"
        className="flex items-center justify-center gap-10 pt-28 max-[1210px]:scale-90 max-[1040px]:flex-col-reverse max-[1040px]:scale-100 max-[600px]:gap-0">
        <div className="relative">
          <div
            className={`absolute top-[150px] left-[68px] inset-0 rounded-[999px] bg-[#27d782] blur-[76px] opacity-60 ${
              windowWidth < 620
                ? "top-16 w-[156px] h-[268px]"
                : "top-24 w-[386px] h-[368px]"
            }`}
          ></div>
          <Image
            alt="SportyImage"
            className="scale-[0.65]"
            src={SportyImage}
            width={555}
            height={556}
          />
        </div>

        <div className="max-w-[546px] z-0 flex flex-col flex-end gap-10 max-[1440px]:scale-[0.90] max-[1040px]:scale-[0.85]">
          <div className="max-w-[487px]">
            <p className="badge w-fit font-normal mb-3">{t("AppaBadge")}</p>
            <Image
              src={SportyFanPet}
              alt="Sportylogo"
              className="pb-2"
              width={250}
              height={200}
            />
            <p className="text-[12px] text-white font-semibold uppercase pb-3">
              {t("SportyText1")}
            </p>
            <p className="text-[16px] font-normal text-[#868687] pb-6">
              {t("SportyText2")}
            </p>
            <a
              href="https://sportyfanpet.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn-primary btn-hover transition duration-400 hover:shadow-button w-fit flex items-center justify-center gap-2">
                {t("buttonText2")}
                <Image className="ml-1 w-4" src={Arrow} alt="Arrow" />
              </button>
            </a>
          </div>

          <div className="flex flex-col gap-6 ">
            <div className="flex flex-col items-start gap-3">
              <p className="text-[12px] font-semibold">{t("projectsTitle1")}</p>
              <div className="flex gap-5 flex-wrap">
                <button className="badge flex items-center gap-2">
                  <span className="text-[18px] mb-[2px]">
                  <FaRegFutbol />

                  </span>
                  PARTNER OF ARGENTINE FOOTBALL
                </button>
                <button className="badge flex items-center gap-2">
                  <span className="text-[18px] mb-[2px]">
                    <MdOutlinePets />
                  </span>
                  PET FRIENDLY APP
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <p className="text-[12px] font-semibold">{t("projectsTitle2")}</p>
              <div className="flex gap-5 flex-wrap">
                <button className="badge flex items-center gap-2">
                  <span className="text-[18px] mb-[2px]">
                    <FaReact />
                  </span>
                  REACT
                </button>
                <button className="badge flex items-center gap-2">
                  <span className="text-[18px] mb-[2px]">
                    <FaNodeJs />
                  </span>
                  NODE.JS
                </button>
                <button className="badge flex items-center gap-2">
                  <span className="text-[20px] mb-[2px]">
                    <FaAppStoreIos />
                  </span>
                  XCODE
                </button>
                <button className="badge flex items-center gap-2">
                  <span className="text-[20px] mb-[2px]">
                    <BsAndroid2 />
                  </span>
                  ANDROID STUDIO
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[14px] text-[#A1A1A9]">{t("projectsTitle3")}</p>
            <div className="flex gap-4 flex-wrap">
              <div className="flex justify-center items-center gap-2">
                <Image src={iosIcon} alt="iOS" />
                <p className="text-[16px] text-white font-bold">iOS</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <Image src={androidIcon} alt="android" />
                <p className="text-[16px] text-white font-bold">Android</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <Image src={webIcon} alt="web" />
                <p className="text-[16px] text-white font-bold">WebApp</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full flex items-center justify-center mt-28 max-[800px]:mt-20 max-[800px]:pb-12">
      <Link href="/our-projects">
        <button
          className="z-100 btn-primary btn-hover transition duration-400 hover:shadow-opacity flex items-center justify-center gap-2 max-w-[300px]"
        >
          {t("buttonText2")}
          <Image className="ml-1 w-4" src={Arrow} alt="Arrow" />
        </button>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
