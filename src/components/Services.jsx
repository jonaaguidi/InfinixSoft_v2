import Form from "./Form";
import Wave from "./Wave";
import Arrow from "../../public/img/Services/Arrow_2.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";

// SERVICES IMAGES
import service1 from "../../public/img/Services/service_1.svg"
import service2 from "../../public/img/Services/service_2.svg"
import service3 from "../../public/img/Services/service_3.svg"
import service4 from "../../public/img/Services/service_4.svg"
import service5 from "../../public/img/Services/service_5.svg"
import service6 from "../../public/img/Services/service_6.svg"
import service7 from "../../public/img/Services/service_7.svg"
import service8 from "../../public/img/Services/service_8.svg"
import Image from "next/image";


const Services = () => {

  // Hook de Traducción
  const { t } = useTranslation();

  // Estado para abrir y cerrar el Form
  const [showForm, setShowForm] = useState(false);

  // Función para abrir/cerrar el Form.
  const toggleShowForm = () => {
    setShowForm(!showForm);
  };



  return (
    <>
      <Wave />
      <div id="our-services" className="w-full bg-[#242427]">
        <section className="max-w-[1220px] relative bg-[#242427] py-20 mx-auto flex flex-col items-center max-[1350px]:px-14 max-[520px]:px-7">
          <div className="max-w-[538px] flex flex-col self-start">
            <p className="badge w-fit z-10 font-normal mb-1 pb-2">{t("servicesBadge")}</p>
            <h2 className="text-[52px] text-[#F4F5F6] font-bold pb-2 max-[458px]:text-[32px]">
              {t("servicesTitle")}
            </h2>
            <h4 className="text-[#A1A1A9] text-[18px] font-normal max-[580px]:text-[16px]">
              {t("servicesSubtitle")}
            </h4>
          </div>
          <div className="max-w-[1220px]  flex justify-start  flex-wrap pt-20 gap-6 max-[1350px]:gap-4 max-[1163px]:justify-center max-[1163px]:gap-6">
            <div className="max-w-[390px] z-10 relative max-[1350px]:w-[340px] max-[1163px]:w-[390px] max-[916px]:w-[340px] max-[816px]:w-[396px] max-[440px]:w-[320px]">
              <div className="flex flex-col justify-center p-10 bg-cards h-[316px] rounded-[12px] border-2 border-[#313134] z-20 max-[1350px]:h-[352px] max-[916px]:h-[364px] max-[440px]:h-[348px]">
                <Image className="pb-6" src={service1} width={42} height={42} alt={t("service1Title")} />
                <h4 className="text-[#F4F5F6] text-[21px] font-bold pb-3">{t("service1Title")}</h4>
                <p className="text-[#A1A1A9] text-[16px] font-normal">{t("service1Subtitle")}</p>
              </div>
            </div>
            <div className="max-w-[390px] z-10 relative max-[1350px]:w-[340px] max-[1163px]:w-[390px] max-[916px]:w-[340px] max-[816px]:w-[396px] max-[440px]:w-[320px]">
              <div className="flex flex-col justify-center p-10 bg-cards h-[316px] rounded-[12px] border-2 border-[#313134] z-20 max-[1350px]:h-[352px] max-[916px]:h-[364px] max-[440px]:h-[348px]">
                <Image className="pb-6" src={service2} width={42} height={42} alt={t("service2Title")} />
                <h4 className="text-[#F4F5F6] text-[21px] font-bold pb-3">{t("service2Title")}</h4>
                <p className="text-[#A1A1A9] text-[16px] font-normal">{t("service2Subtitle")}</p>
              </div>
            </div>
            <div className="max-w-[390px] z-10 relative max-[1350px]:w-[340px] max-[1163px]:w-[390px] max-[916px]:w-[340px] max-[816px]:w-[396px] max-[440px]:w-[320px]">
              <div className="flex flex-col justify-center p-10 bg-cards h-[316px] rounded-[12px] border-2 border-[#313134] z-20 max-[1350px]:h-[352px] max-[916px]:h-[364px] max-[440px]:h-[348px]">
                <Image className="pb-6" src={service3} width={42} height={42} alt={t("service3Title")} />
                <h4 className="text-[#F4F5F6] text-[21px] font-bold pb-3">{t("service3Title")}</h4>
                <p className="text-[#A1A1A9] text-[16px] font-normal">{t("service3Subtitle")}</p>
              </div>
            </div>
            <div className="max-w-[390px] z-10 relative max-[1350px]:w-[340px] max-[1163px]:w-[390px] max-[916px]:w-[340px] max-[816px]:w-[396px] max-[440px]:w-[320px]">
              <div className="flex flex-col justify-center p-10 bg-cards h-[316px] rounded-[12px] border-2 border-[#313134] z-20 max-[1350px]:h-[352px] max-[916px]:h-[364px] max-[440px]:h-[348px]">
                <Image className="pb-6" src={service4} width={42} height={42} alt={t("service4Title")} />
                <h4 className="text-[#F4F5F6] text-[21px] font-bold pb-3">{t("service4Title")}</h4>
                <p className="text-[#A1A1A9] text-[16px] font-normal">{t("service4Subtitle")}</p>
              </div>
            </div>
            <div className="max-w-[390px] z-10 relative max-[1350px]:w-[340px] max-[1163px]:w-[390px] max-[916px]:w-[340px] max-[816px]:w-[396px] max-[440px]:w-[320px]">
              <div className="flex flex-col justify-center p-10 bg-cards h-[316px] rounded-[12px] border-2 border-[#313134] z-20 max-[1350px]:h-[352px] max-[916px]:h-[364px] max-[440px]:h-[348px]">
                <Image className="pb-6" src={service5} width={42} height={42} alt={t("service5Title")} />
                <h4 className="text-[#F4F5F6] text-[21px] font-bold pb-3">{t("service5Title")}</h4>
                <p className="text-[#A1A1A9] text-[16px] font-normal">{t("service5Subtitle")}</p>
              </div>
            </div>
            <div className="max-w-[390px] z-10 relative max-[1350px]:w-[340px] max-[1163px]:w-[390px] max-[916px]:w-[340px] max-[816px]:w-[396px] max-[440px]:w-[320px]">
              <div className="flex flex-col justify-center p-10 bg-cards h-[316px] rounded-[12px] border-2 border-[#313134] z-20 max-[1350px]:h-[352px] max-[916px]:h-[364px] max-[440px]:h-[348px]">
                <Image className="pb-6" src={service6} width={42} height={42} alt={t("service6Title")} />
                <h4 className="text-[#F4F5F6] text-[21px] font-bold pb-3">{t("service6Title")}</h4>
                <p className="text-[#A1A1A9] text-[16px] font-normal">{t("service6Subtitle")}</p>
              </div>
            </div>
            <div className="max-w-[390px] z-10 relative max-[1350px]:w-[340px] max-[1163px]:w-[390px] max-[916px]:w-[340px] max-[816px]:w-[396px] max-[440px]:w-[320px]">
              <div className="flex flex-col justify-center p-10 bg-cards h-[316px] rounded-[12px] border-2 border-[#313134] z-20 max-[1350px]:h-[352px] max-[916px]:h-[364px] max-[440px]:h-[348px]">
                <Image className="pb-6" src={service7} width={42} height={42} alt={t("service7Title")} />
                <h4 className="text-[#F4F5F6] text-[21px] font-bold pb-3">{t("service7Title")}</h4>
                <p className="text-[#A1A1A9] text-[16px] font-normal">{t("service7Subtitle")}</p>
              </div>
            </div>
            <div className="max-w-[390px] z-10 relative max-[1350px]:w-[340px] max-[1163px]:w-[390px] max-[916px]:w-[340px] max-[816px]:w-[396px] max-[440px]:w-[320px]">
              <div className="flex flex-col justify-center p-10 bg-cards h-[316px] rounded-[12px] border-2 border-[#313134] z-20 max-[1350px]:h-[352px] max-[916px]:h-[364px] max-[440px]:h-[348px]">
                <Image className="pb-6" src={service8} width={42} height={42} alt={t("service8Title")} />
                <h4 className="text-[#F4F5F6] text-[21px] font-bold pb-3">{t("service8Title")}</h4>
                <p className="text-[#A1A1A9] text-[16px] font-normal">{t("service8Subtitle")}</p>
              </div>
            </div>
            <div className="max-w-[390px] z-10 relative max-[1350px]:w-[340px] max-[1163px]:w-[390px] max-[916px]:w-[340px] max-[816px]:w-[396px] max-[440px]:w-[320px]">
              <div className="flex flex-col justify-center p-10 bg-cards h-[316px] rounded-[12px] border-2 border-[#313134] z-20 max-[1350px]:h-[352px] max-[916px]:h-[364px] max-[440px]:h-[348px]">
                <Image className="pb-6" src={service4} width={42} height={42} alt={t("service9Title")} />
                <h4 className="text-[#F4F5F6] text-[21px] font-bold pb-3">{t("service9Title")}</h4>
                <p className="text-[#A1A1A9] text-[16px] font-normal">{t("service9Subtitle")}</p>
              </div>
            </div>
          </div>

          <div className="w-full mt-20 z-10 flex flex-col gap-4 items-center justify-center py-20">
            <p className="text-[32px] text-center font-bold max-[425px]:text-[28px]">{t("callToAction")}</p>
            <button onClick={toggleShowForm} className="btn-primary btn-hover transition duration-400 hover:shadow-opacity flex items-center justify-center gap-2 max-w-[300px]">
            {t("buttonText")}
              <Image className="ml-1 w-4" src={Arrow} alt="Arrow" />
            </button>
          </div>

          {/* Degrade */}
          <div>
            <div className="absolute z-0 top-[1100px] left-[175px] inset-0">
              <div className="rounded-[999px] bg-[#DB3957] blur-[200px] opacity-30 w-[700px] h-[311px] max-[845px]:hidden"></div>
            </div>
          </div>
        </section>
      </div>
      {showForm && <Form onClose={() => setShowForm(false)} />}
    </>
  );
};

export default Services;
