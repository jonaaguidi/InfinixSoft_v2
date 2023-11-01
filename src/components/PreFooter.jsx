import { useState, useEffect } from "react";
import Arrow from "../../public/img/Services/Arrow_2.svg";
import Form from "./Form";
import { BannerLogos2 } from "../constants/images";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const PreFooter = () => {
  const [showForm, setShowForm] = useState(false);

  // Hook de Traducción
  const { t } = useTranslation();

  const handleShowForm = () => {
    setShowForm(true);
  };

  const getWindowWidth = () => {
    return window.innerWidth;
  };

  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWindowWidth());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const absoluteElementClasses = `absolute z-10 rounded-[999px] bg-[#DB3957] top-36 ${windowWidth <= 820
      ? "w-[136px] h-[311px] blur-[96px]"
      : "w-[600px] h-[311px] blur-[160px]"
    } transition-all duration-500 opacity-30`;

  return (
    <footer id="footer" className="w-full h-fit flex flex-col items-center justify-center bg-[#171718] max-[970px]:px-14 max-[560px]:px-7">
      <div className="w-fit mt-16 max-w-[693px] flex flex-col gap-8 z-20">
        <div className="flex items-center gap-14 text-center max-[620px]:gap-7 max-[510px]:gap-4 max-[430px]:gap-2 max-[455px]:flex-wrap max-[455px]:justify-center">
          <div className="flex flex-col gap-3 max-[790px]:scale-90">
            <p className="font-bold text-5xl max-[520px]:text-3xl">
              650<span className="text-[#DB3957]">+</span>
            </p>
            <p className="text-lg font-normal">
              {t("prefooterText1")}
            </p>
          </div>
          <div className="flex flex-col gap-3 max-[790px]:scale-90 max-[425px]:mr-4">
            <p className="font-bold text-5xl max-[520px]:text-3xl">
              120<span className="text-[#DB3957]">+</span>
            </p>
            <p className="text-lg font-normal"> {t("prefooterText2")}</p>
          </div>
          <div className="flex flex-col gap-3 max-[790px]:scale-90 max-[425px]:mt-4 max-[425px]:ml-4">
            <p className="font-bold text-5xl text-center max-[520px]:text-3xl">4</p>
            <p className="text-lg font-normal"> {t("prefooterText3")}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-16 py-20 pb-60 max-[1300px]:gap-10 max-[610px]:scale-90 max-sm:pb-32">
        {BannerLogos2.map((logo) => (
          <Image
            key={logo.name}
            src={logo.icon}
            alt={logo.name}
            className="w-fit h-fit mx-4"
          />
        ))}
      </div>
      <div id="contact" className="relative pt-20 pb-40 flex flex-col items-center justify-center gap-4 text-center">
        <h4 className="w-[548px] z-20 text-[32px] font-bold max-[555px]:text-[28px] max-[555px]:w-[335px]">{t("callToAction2")}</h4>
        <button onClick={handleShowForm} className="btn-primary btn-hover z-20 flex items-center justify-center gap-2 transition duration-400 hover:shadow-button">
          {t("buttonText4")}
          <Image src={Arrow} alt="Arrow" />
        </button>
        <div className={absoluteElementClasses}></div>
      </div>
      {showForm && <Form onClose={() => setShowForm(false)} />}
    </footer>
  );
};

export default PreFooter;
