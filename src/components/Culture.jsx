import Arrow from "../../public/img/Services/Arrow_2.svg"
import { useState } from "react";
import Form from "./Form";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const Culture = () => {

  // Estado para abrir y cerrar el Form
  const [showForm, setShowForm] = useState(false);

  // Función para abrir/cerrar el Form.
  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  // Hook de Traducción
  const { t } = useTranslation();

  return (
    <section id="culture" className="w-full z-[100] bg-culture py-20 px-28 flex flex-col items-start justify-center max-[1000px]:px-14 max-[425px]:px-7">

      <div className="max-w-[1220px] mx-auto">
        <div className="max-w-[820px] flex flex-col justify-center items-start">
          <p className="badge font-normal mb-1.5">{t("badgeCulture")}</p>
          <h2 className="max-w-[888px] text-[#FCFCFD] font-bold text-[52px] leading-[120%] max-[1024px]:text-[32px] max-[455px]:text-[32px] max-[455px]:leading-9">
            {t("cultureTitle")}
          </h2>
          <h4 className="max-w-[720px] text-[18px] text-[#A1A1A9] pt-3 max-[1024px]:text-[16px] max-[455px]:text-[16px] max-[455px]:leading-6">
            {t("cultureSubtitle")}
          </h4>
        </div>

        <div className="flex justify-center flex-wrap pt-20 gap-6 max-[832px]:gap-12 max-[800px]:gap-7">

          <div className="max-w-[390px] z-10 relative max-[1442px]:w-[356px] max-[500px]:w-[316px]">
            <div className="h-fit flex flex-col p-[30px] bg-cards rounded-[12px] border-2 border-[#313134] z-20 justify-start items-start max-[400px]:h-fit">
              <p className="text-[14px] font-semibold text-[#868687]">{t("cultureCardNumber")}</p>
              <h4 className="text-[#FCFCFD] text-[18px] font-bold pb-2.5 max-[400px]:p-0">{t("cultureCardText")}</h4>
              <p className="text-[#A1A1A9] text-[15px] font-normal">{t("cultureCardText2")}</p>
            </div>
          </div>

          <div className="max-w-[390px] z-10 relative max-[1442px]:w-[356px] max-[500px]:w-[316px]">
            <div className="h-fit flex flex-col p-[30px] bg-cards rounded-[12px] border-2 border-[#313134] z-20 justify-start items-start max-[400px]:h-fit">
              <p className="text-[14px] font-semibold text-[#868687]">{t("cultureCard2Number")}</p>
              <h4 className="text-[#FCFCFD] text-[18px] font-bold pb-2.5 max-[400px]:p-0">{t("cultureCard2Text")}</h4>
              <p className="text-[#A1A1A9] text-[15px] font-normal">{t("cultureCard2Text2")}</p>
            </div>
          </div>

          <div className="max-w-[390px] z-10 relative max-[1442px]:w-[356px] max-[500px]:w-[316px]">
            <div className="h-fit flex flex-col p-[30px] bg-cards rounded-[12px] border-2 border-[#313134] z-20 justify-start items-start max-[400px]:h-fit">
              <p className="text-[14px] font-semibold text-[#868687]">{t("cultureCard3Number")}</p>
              <h4 className="text-[#FCFCFD] text-[18px] font-bold pb-2.5 max-[400px]:p-0">{t("cultureCard3Text")}</h4>
              <p className="text-[#A1A1A9] text-[15px] font-normal">{t("cultureCard3Text2")}</p>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full flex flex-col gap-4 items-center justify-center py-16">
        <p className="text-[32px] text-center font-bold max-[425px]:text-[28px]">{t("callToAction")}</p>

        <button
          onClick={toggleShowForm}
          className="btn-primary btn-hover transition duration-400 hover:shadow-opacity flex items-center justify-center gap-2 max-w-[300px]"
        >
          {t("buttonText")}
          <Image className="ml-1 w-4" src={Arrow} alt="Arrow"></Image>
        </button>

      </div>

      {showForm && <Form onClose={() => setShowForm(false)} />}

    </section>
  );
}

export default Culture;

