/* eslint-disable react/prop-types */
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import Usa from "../../public/img/Flags/usa.png"
import Brazil from "../../public/img/Flags/brazil.png"
import Spain from "../../public/img/Flags/spain.png"
import Image from 'next/image';

const Dropdown_Lang = ({ setShowDropdownLang }) => {
  const { t } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
    setTimeout(() => {
      setShowDropdownLang(false);
      setRotate(rotate === 0 ? 180 : 0);
    }, 350);
  };


  return (
    <div className="z-[900] animate-fade-up animate-duration-[650ms] animate-delay-25 w-fit absolute border-2 border-[#313134] bg-[#171718] p-2 rounded-md top-[96px] right-[112px] max-[574px]:right-[82px]">
      <div className="w-fit flex flex-col gap-1 rounded-lg items-start">
        <div
          onClick={() => { handleLanguageChange('en') }}
          className="w-full flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-[#101010] focus:bg-[#101010]">
          <p className="text-[12px] font-normal">{t('English')} </p>
          <Image className='rounded-sm' src={Usa} alt='United States' width={20} />
        </div>
        <div
          onClick={() => handleLanguageChange('es')}
          className="w-full flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-[#101010] focus:bg-[#101010] ">
          <p className="text-[12px] font-normal">{t('Spanish')}</p>
          <Image className='rounded-sm' src={Spain} alt='United States' width={20} />
        </div>
        <div
          onClick={() => handleLanguageChange('pt')}
          className="w-full flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-[#101010] focus:bg-[#101010]">
          <p className="text-[12px] font-normal">{t('Portuguese')}</p>
          <Image className='rounded-sm' src={Brazil} alt='United States' width={20} />
        </div>
      </div>
    </div>
  );
};

export default Dropdown_Lang;


