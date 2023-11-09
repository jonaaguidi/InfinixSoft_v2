import Arrow from "../../public/img/Culture/Arrow_2.svg"
import ImageDubai from "../../public/img/Blog/Infinixdubai.png"
import { useTranslation } from "react-i18next";
import avatar from "../../public/img/Blog/usuario.png"
import Image from "next/image";
import Link from "next/link";


const Blog = () => {

    // Hook de Traducción
    const { t } = useTranslation();

    return (
        <section className="max-w-[1220px] mx-auto py-20 pb-60 max-[1360px]:px-28 max-[840px]:py-10 max-[880px]:px-14 max-[680px]:px-7">

            <div className="h-auto flex flex-col justify-center items-center pb-20 max-[840px]:flex-wrap max-[367px]:gap-1">
                <div className="max-w-[550px] pb-6 max-[500px]:scale-90">
                    <h3 className="text-[42px] leading-[120%] text-center font-bold pb-3 max-[1360px]:text-[32px]">{t("blogText")}</h3>
                    <p className="text-[#A1A1A9] text-center text-[18px] font-normal leading-[150%]">{t("blogText2")}</p>
                </div>
            </div>

            <div className="flex justify-center items-center pt-16 pb-20 gap-24 max-[1360px]:gap-16 max-[1080px]:flex-wrap max-[1080px]:gap-12 max-[1080px]:justify-center max-[500px]:scale-90">
                <Image className="z-10 opacity-100 max-[1360px]:scale-[0.85] max-[1080px]:scale-100 max-[840px]:w-[501px]" src={ImageDubai} alt="BlogImage" width={524} height={348}></Image>
                <div className="flex flex-col gap-4">
                    <button className="badge w-fit font-normal flex items-center gap-2 shadow-none">
                        {t("blogBadge")}
                    </button>
                    <div className="max-w-[520px]">
                        <div className="max-w-[469px]">
                            <a href="/blog/infinix-soft-heading-to-dubai/">
                                <h4 className="text-[32px] font-bold pb-3 transition duration-400 hover:text-[#DB3957] cursor-pointer max-[1360px]:text-[24px]">{t("blogTitle")}</h4>
                            </a>
                            <p className="text-[#A1A1A9] max-[1360px]:text-[16px]">{t("blogSubtitle")} </p>
                        </div>
                        <div className="flex gap-3 items-center pt-6">
                            <Image className="opacity-75" src={avatar} alt="Avatar" />
                            <p className="text-[14px] font-bold">
                                Ale Doellinger
                            </p>
                            <p className="text-[14px] text-[#A1A1A9]">16 Oct</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link href="/blog" target="_self" rel="noreferrer">
                <button className="btn-primary btn-hover transition duration-400 hover:shadow-opacity flex items-center justify-center gap-2 max-w-[300px]">
                    {t("buttonText3")}
                    <Image className="ml-1 w-4" src={Arrow} alt="Arrow" />
                </button>
            </Link>
        </section>
    )
}

export default Blog;