import Marquee from "react-fast-marquee";
import { Clients1, Clients2, Clients3 } from "../constants/images"; // Data de Partners
import { useTranslation } from "react-i18next";
import Image from "next/image";

const Partners = () => {

    // Hook de Traducción
    const { t } = useTranslation();

    return (
        <section className="w-full z-max flex flex-col justify-center items-center mx-auto py-20 pb-56">
            <div className="max-w-[838px] py-20 mx-auto flex flex-col justify-center items-center max-[1024px]:py-10 max-[810px]:px-14 max-[510px]:px-7">
                <p className="badge text-center font-normal text-white mb-2 max-[1024px]:scale-[0.88]">{t("clientsBadge")}</p>
                <h2 className="max-w-[888px] text-[#FCFCFD] leading-[120%] font-bold text-[52px] text-center pb-3 max-[1024px]:text-[32px] max-[1024px]:leading-[40px] max-[455px]:leading-8">
                    {t("clientsTitle")} <br></br> {t("clientsTitle2")}
                </h2>
                <h4 className="max-w-[580px] text-[18px] text-[#A1A1A9] text-center pb-8 leading-[150%] max-[1024px]:text-[16px] max-[455px]:leading-6">
                    {t("clientsSubtitle")}
                </h4>
            </div>
            <div className="max-w-[1420px] flex flex-col gap-20 max-[1420px]:max-w-[100%] max-[800px]:scale-90">
                <Marquee
                    style={{ justifyContent: "center", alignItems: "center" }}
                    direction="right"
                    speed={45}
                    pauseOnHover={true}
                    gradient={true}
                    gradientColor={[23, 23, 24]}
                    gradientWidth={72}
                >
                    {Clients1.map((client, index) => (
                        <div key={index} className="mx-10">
                            <Image src={client.icon} alt={client.name} width={"auto"} height={"auto"} />
                        </div>
                    ))}
                </Marquee>
                <Marquee
                    direction="left"
                    speed={45}
                    pauseOnHover={true}
                    gradient={true}
                    gradientColor={[23, 23, 24]}
                    gradientWidth={72}
                    style={{ justifyContent: "center", alignItems: "center" }}
                >
                    {Clients2.map((client, index) => (
                        <div key={index} className="mx-10">
                            <Image src={client.icon} alt={client.name} width={"auto"} height={"auto"} />
                        </div>
                    ))}
                </Marquee>
                <Marquee
                    direction="right"
                    speed={45}
                    pauseOnHover={true}
                    gradient={true}
                    gradientColor={[23, 23, 24]}
                    gradientWidth={72}
                    style={{ justifyContent: "center", alignItems: "center" }}
                >
                    {Clients3.map((client, index) => (
                        <div key={index} className="mx-10">
                            <Image src={client.icon} alt={client.name} width={"auto"} height={"auto"} />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Partners;
