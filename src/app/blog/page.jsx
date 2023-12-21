"use client"
import Image from "next/image";
import logo from "../../../public/img/favicons/favicon_infinix.ico";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";
import { getAuthorName } from "@/utils/getAuthorName";
import { I18nextProvider } from 'react-i18next';
import i18n from "../../i18n/index.js";
import { getImagePost } from "@/utils/getImagePost";
import { IoCalendar, IoPersonCircle } from "react-icons/io5";


const BlogLayout = () => {

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
    return <div className="max-w-[1300px] h-[90vh] pt-20 mx-auto flex flex-col items-center justify-start">
      <h1 className="flex justify-center items-center gap-2.5 text-[42px] leading-[120%] font-bold py-20 max-w-[666px] mx-auto text-shadow-md max-[1000px]:text-[42px] max-[680px]:text-[36px] max-[520px]:text-[32px]">
        Loading Posts
        <Image src={logo} alt="InfinixSoft" width={48} height={48} />
      </h1>
      <div
        class="inline-block h-16 w-16 animate-spin rounded-full border-8 border-solid border-[#db3957] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
      </div>
    </div>
  } else if (isError) {
    return <div>Sorry, Error</div>
  }

  return (
    <I18nextProvider i18n={i18n}>

      <main className="main max-w-[1640px] px-12 pt-4 pb-32 mx-auto">
        <h1 className="flex justify-center items-center gap-2.5 text-[42px] leading-[120%] font-bold pt-20 pb-4 max-w-[666px] mx-auto text-shadow-md max-[1000px]:text-[42px] max-[680px]:text-[36px] max-[520px]:text-[32px]">
          Welcome to Our Blog
          <Image src={logo} alt="InfinixSoft" width={48} height={48} />
        </h1>
        <h3 className="text-[#a1a1a9] pb-20 text-[16px] leading-[150%] max-w-[530px] mx-auto text-center text-shadow-md max-[1000px]:text-[18px] max-[590px]:text-[16px] max-[520px]:text-[16px]">Welcome to Our Blog, here we talk about more diferrents toppics like Tecnology, Innovation, Marketing, StartUps, SAAS, Business Developments, and more..</h3>
        <div className="flex flex-wrap gap-12 justify-center items-bottom">
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
