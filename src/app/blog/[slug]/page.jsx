"use client"
import { useQuery } from '@tanstack/react-query';
import React from 'react';

export async function generateStaticParams() {
    return [
      { slug: "infinix-team-arrive-dubai-land-of-future" },
      { slug: "what-is-the-difference-between-sanity-cms-and-contentful-cms" },
      { slug: "customer-journey-que-es-fases-ejemplos-y-plantilla" },
      { slug: "asd" },
    ];
  }

const PostPage = ({ params }) => {
  // React Query Fetch de Datos.
  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch(`https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}&content_type=post`)
        .then((res) => res.json()),
  });

  // Toda la Información
  console.log(data);

  // Separo la Data de los "Posteos" (items en la API)
  const itemsArray = data?.items || [];
  console.log(itemsArray);

  // Obtén el post específico según el slug
  const currentPost = itemsArray.find((item) => item.fields.slug === params.slug);
  console.log(currentPost);

  // Estados de Carga y Error
  if (isLoading) {
    return <div className="max-w-[1300px] h-[90vh] pt-40 mx-auto text-3xl font-bold text-center">Loading Post..</div>;
  }

  if (isError) {
    return <div>Sorry, Error</div>;
  }

  return (
    <div>
      <h1>{currentPost.fields.titlePost}</h1>
      <p>{currentPost.fields.descriptionPost}</p>
      {/* Renderiza el resto de la información según tus necesidades */}
    </div>
  );
};

export default PostPage;


