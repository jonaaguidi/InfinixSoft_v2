import React from "react";
import PostRender from "./components/PostRender";

// Genero un Scope Global de itemsArray
let itemsArray; 

// Defino la URL de la solicitud
const apiUrl = `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}&content_type=post`;

// Realizo la solicitud con fetch()
fetch(apiUrl)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Error en la solicitud: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    // Toda la información
    console.log(data);
    // Separar la Data de los "Posteos" (items en la API)
    itemsArray = data?.items || [];
    console.log(itemsArray);
  })
  .catch((error) => {
    console.error('Error al realizar la solicitud:', error);
  });

  
async function getPostData(params) {
  const currentPost = itemsArray?.find((item) => item.fields.slug === params.slug);
  return currentPost;
}


export async function generateStaticParams() {
  return [
    { slug: "customer-journey-que-es-fases-ejemplos-y-plantilla" },
    { slug: "infinix-team-arrive-dubai-land-of-future" },
    { slug: "what-is-the-difference-between-sanity-cms-and-contentful-cms" },
    { slug: "test-1" },
  ];
}


export default async function Page({ params }) {
  const finalData = await getPostData(params);
  console.log(finalData);

  return (
    <div>
      <PostRender data={finalData} />
    </div>
  );
}


// "use client"
// import { getAuthorName } from '@/utils/getAuthorName';
// import { getImagePost } from '@/utils/getImagePost';
// import { useQuery } from '@tanstack/react-query';
// import Image from 'next/image';
// import React from 'react';

// const PostPage = ({ params }) => {

//   // React Query Fetch de Datos.
//   const { data } = useQuery({
//     queryKey: ["posts"],
//     queryFn: () =>
//       fetch(`https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}&content_type=post`)
//         .then((res) => res.json()),
//   });

//   // Toda la Información
//   console.log(data);

//   // Separo la Data de los "Posteos" (items en la API)
//   const itemsArray = data?.items || [];
//   console.log(itemsArray);

//   // Obtén el post específico según el slug
//   const currentPost = itemsArray.find((item) => item.fields.slug === params.slug);
//   console.log(currentPost);


//   return (
//     <div className='max-w-[1280px] mx-auto text-center px-20 flex flex-col items-center justify-center'>
//       <h1 className='text-2xl font-bold py-4'>{currentPost?.fields?.titlePost}</h1>
//       <p className='text-lg'>{currentPost?.fields?.descriptionPost}</p>
//       <Image className='pt-10 pb-2' width={500} height={500} src={getImagePost(currentPost?.fields?.coverImage?.sys?.id)} alt='asd' />
//       <p className='text-[#a1a1a9]'>Slug: {params.slug}</p>
//       <p className='text-[#a1a1a9]'>Author: {getAuthorName(currentPost?.fields?.author.sys.id)}</p>
//     </div>
//   );
// };

// export default PostPage;


