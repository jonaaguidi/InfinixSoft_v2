/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import { useTranslation } from "react-i18next";


const Testimonials = () => {

    // Hook de Traducción
    const { t } = useTranslation();

    return (
        <section className="max-w-[1220px] mx-auto bg-transparent py-20 pb-44 px-28 flex flex-col items-start justify-center max-[850px]:pb-[180px] max-[850px]:items-center max-[850px]:justify-center max-[1000px]:px-14 max-[425px]:px-7">
            <div className="flex gap-10 max-[850px]:flex-col max-[850px]:items-center">
                <div className="max-w-[820px] flex flex-col justify-center items-start max-[850px]:items-center">
                    <p className="badge font-normal mb-1.5">{t("clientsBadge")}</p>
                    <h2 className="max-w-[888px] text-[#FCFCFD] font-bold text-[42px] max-[1024px]:text-[28px] max-[850px]:text-center max-[455px]:leading-8">
                    {t("testimonialsTitle")}
                    </h2>
                    <h4 className="max-w-[720px] text-[18px] text-[#A1A1A9] pt-2 max-[850px]:text-center max-[455px]:text-[16px] max-[455px]:leading-6">
                    {t("testimonialsSubtitle")}
                    </h4>
                </div>

                <div className="max-w-[437px] h-[244px] bg-[#151517] p-8 border-2 border-[#313134] rounded-[12px] max-[1215px]:h-fit max-[850px]:w-fit">
                    <div className="flex items-center justify-start gap-3">
                        <Image src="/img/Testimonials/claudio.png" alt="Claudio Fiandesio" width={"48"} height={"48"} />
                        <div className="flex flex-col gap-1">
                            <p className="text-[14px] font-bold">Claudio Fiandesio</p>
                            <p className="text-[14px] text-[#A1A1A9]">COO at SocialSnack</p>
                        </div>
                    </div>
                    <p className="text-[15px] text-[#A1A1A9] pt-4">
                        "As the COO of Social Snack from Aleph group, I've been working with Infinix since 2013. Their performance as a technology partner has been exceptional, and I continue to recommend and use Infinix for our technological needs.”
                    </p>
                </div>

            </div>

        </section>
    )
}

export default Testimonials