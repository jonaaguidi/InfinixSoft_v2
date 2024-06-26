"use client"
import Image from "next/image";
import logo from "../../../public/img/favicons/favicon_infinix.ico";
import Arrow from "../../../public/img/Services/Arrow_2.svg"
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";
import { getAuthorName } from "@/utils/getAuthorName";
import { I18nextProvider } from 'react-i18next';
import i18n from "../../i18n/index.js";
import { getImagePost } from "@/utils/getImagePost";
import { IoCalendar, IoPersonCircle } from "react-icons/io5";
// import { useEffect, useRef } from "react";
// import Typed from 'typed.js';


const BlogLayout = () => {
  // const typedRef = useRef(null);

  // useEffect(() => {
  //   if (typedRef.current) {
  //     const options = {
  //       strings: ['🚀 Explore the Tech World with us!','Explore the Tech World with us!','Explore the Tech World with us!','Explore the Tech World with us!'],
  //       typeSpeed: 50,
  //       loop: true,
  //     };

  //     const typed = new Typed(typedRef.current, options);

  //     return () => {
  //       typed.destroy();
  //     };
  //   }
  // }, []);

  // React Query Fetch de Datos.
  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetch(`https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}&content_type=post`).then((res) => res.json()),
  });

  // Toda la Información
  console.log(data);

  // Separo la Data de los "Posteos" (items en la API)
  const itemsArray = data?.items || [];

  // Separo la Data de los "Assets Relacionados" (includes en la API)
  const includesArray = data?.includes || [];
  console.log(includesArray);

  // Accedo y muestro la propiedad "fields" de cada Posteo.
  const fieldsArray = itemsArray.map(item => item.fields);
  console.log(fieldsArray);

  // Manejo de Estados de Carga y Error
  if (isLoading) {
    return <div className="max-w-[1300px] h-[90vh] pt-28 mx-auto flex flex-col items-center justify-start">
      <h1 className="flex justify-center items-center gap-2.5 text-[42px] leading-[120%] font-bold py-20 max-w-[666px] mx-auto text-shadow-md max-[1000px]:text-[42px] max-[680px]:text-[36px] max-[520px]:text-[32px]">
        Loading Posts
        <Image src={logo} alt="InfinixSoft" width={48} height={48} />
      </h1>
      <div
        class="inline-block h-16 w-16 animate-spin rounded-full border-8 border-solid border-[#db395796] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
      </div>
    </div>
  } else if (isError) {
    return <div>Sorry, Error</div>
  }

  return (
    <I18nextProvider i18n={i18n}>
      <main className="main pt-4 pb-32 flex flex-col justify-center items-center">

        <div className="flex flex-col items-center justify-center w-full relative">
          <div class="z-0 absolute top-0 left-0 h-[480px] w-full bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:42px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          <h1 className="z-50 text-center text-[52px] leading-[120%] font-bold pt-28 pb-5 max-w-[996px] mx-auto text-shadow-md max-[1000px]:text-[42px] max-[680px]:text-[36px] max-[520px]:text-[32px]">
            🚀 Explore the Tech World with us!
          </h1>
          <h3 className="z-50 text-[#a1a1a9] pb-5 text-[18px] leading-[140%] max-w-[530px] mx-auto text-center text-shadow-md max-[1000px]:text-[18px] max-[590px]:text-[16px] max-[520px]:text-[16px]">Welcome to our blog! Discover the latest trends in technology and stay updated with our content.</h3>
          <button
            className="z-50 btn-primary btn-hover transition duration-400 mb-20 hover:shadow-opacity flex items-center justify-center gap-2 max-w-[300px]"
          >
            Discover
            <Image className="ml-1 w-4 rotate-90" src={Arrow} alt="Arrow"></Image>
          </button>
        </div>

        {/* <!--Waves Container--> */}
        <div className="w-full">
          <svg className="waves" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use href="#gentle-wave" x="48" y="0" fill="rgba(219, 57, 87, 0.6)" />
              <use href="#gentle-wave" x="48" y="3" fill="rgba(219, 57, 87, 0.2)" />
              <use href="#gentle-wave" x="48" y="5" fill="rgba(219, 57, 87, 0.4)" />
              <use href="#gentle-wave" x="48" y="7" fill="rgba(219, 57, 87, 0.2)" />
            </g>
          </svg>
        </div>
        {/* <!--Waves end--> */}

        <div className="z-50 flex flex-wrap gap-12 justify-center items-bottom mt-20 max-w-[1440px]">
          {fieldsArray.map((item, index) => (
            <div className="max-w-[320px]" key={index}>
              <Image src={getImagePost(item.coverImage?.sys?.id)} alt="imagen" width={320} height={320} />
              <Link href={`/blog/${item.slug}`}>
                <h2 className="text-[18px] px-3 pt-3">
                  {item.titlePost}
                </h2>
              </Link>
              <p className="text-[14px] text-[#a1a1a9] px-3 pt-3">{item.descriptionPost}</p>
              <div className="flex">
                <p className="flex items-center gap-1.5 text-[14px] text-[#a1a1a9] px-3 pt-3 font-bold">
                  <IoCalendar className="scale-[1.05] mb-0.5" />
                  {formatDate(item.date)}</p>
                <p className="flex items-center gap-1.5 text-[14px] text-[#a1a1a9] px-3 pt-3 font-bold">
                  <IoPersonCircle className="scale-[1.3] mb-0.5" />
                  {getAuthorName(item.author.sys.id)}</p>
              </div>
            </div>
          ))}
        </div>

      </main>

    </I18nextProvider>
  );
};

export default BlogLayout;
