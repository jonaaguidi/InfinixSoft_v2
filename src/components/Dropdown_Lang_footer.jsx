/* eslint-disable react/prop-types */
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

const Dropdown_Lang_footer = ({ setCurrentLanguage }) => {
  const { t } = useTranslation();

  // Dropdown_Lang.js
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language); // Actualiza el idioma en el estado del Header
  };



  return (
    <div className="z-50 animate-fade-up animate-duration-[650ms] animate-delay-25 w-fit absolute border-2 border-[#313134] bg-black shadow-navbar p-2 rounded-md bottom-[46px] max-[469px]:left-58">
      <div className="w-fit flex flex-col rounded-lg items-start">
        <div
          onClick={() => handleLanguageChange('en')}
          className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-black focus:bg-black hover:text-[#DB3957]">
          <p className="text-[14px] font-normal">{t('English')}<span className="ml-1">(US)</span></p>
        </div>
        <div
          onClick={() => handleLanguageChange('ar')}
          className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-black focus:bg-black hover:text-[#DB3957]">
          <p className="text-[14px] font-normal flex  items-center">
          {t('Arabic')}
          <span className="ml-1">(UAE)
          </span>
          </p>
        </div>
        <div
          onClick={() => handleLanguageChange('es')}
          className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-black focus:bg-black hover:text-[#DB3957]">
          <p className="text-[14px] font-normal">{t('Spanish')} <span className="ml-1">(ES)</span></p>
        </div>
        <div
          onClick={() => handleLanguageChange('pt')}
          className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover.bg-black focus-bg-black hover:text-[#DB3957]">
          <p className="text-[14px] font-normal">{t('Portuguese')}<span className="ml-1">(BR)</span></p>
        </div>
      </div>
    </div>
  );
};

export default Dropdown_Lang_footer;
