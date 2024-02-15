import React from "react";
import PostRender from "./components/PostRender";

export async function generateStaticParams() {
  return [
    { slug: "customer-journey-que-es-fases-ejemplos-y-plantilla" },
    { slug: "infinix-team-arrive-dubai-land-of-future" },
    { slug: "what-is-the-difference-between-sanity-cms-and-contentful-cms" },
    { slug: "test-1" },
    { slug: "testpost2" },
    { slug: "hoy-es-7-de-febrero-y-esto-es-un-test" },
  ];
}

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

export default async function Page({ params }) {
  const finalData = await getPostData(params);
  console.log(finalData);

  return (
    <div>
      <PostRender data={finalData} />
    </div>
  );
}


