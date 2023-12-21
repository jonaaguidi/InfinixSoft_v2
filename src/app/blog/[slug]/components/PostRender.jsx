"use client"
import { formatDate2 } from '@/utils/formatDate';
import { getAuthorName } from '@/utils/getAuthorName';
import { getImagePost } from '@/utils/getImagePost';
import { FaArrowLeft } from "react-icons/fa6";
import { IoCalendar, IoPersonCircle, IoTime } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

const StyledRichText = ({ content }) => {
    const options = {
        renderMark: {
            [MARKS.BOLD]: (text) => <strong>{text}</strong>,
            [MARKS.ITALIC]: (text) => <em>{text}</em>,
            [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
            [MARKS.BOLD]: (text) => <strong>{text}</strong>,
            [MARKS.ITALIC]: (text) => <em>{text}</em>,
            [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
            [MARKS.CODE]: (text) => <code>{text}</code>,
            [MARKS.STRIKE_THROUGH]: (text) => <del>{text}</del>,
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <p className='text-[16px] pb-3 pt-2'>{children}</p>,
            [BLOCKS.HEADING_1]: (node, children) => <h1 className='text-2xl py-2 pt-2 font-bold leading-[120%]'>{children}</h1>,
            [BLOCKS.HEADING_2]: (node, children) => <h2 className='text-2xl py-2 font-bold leading-[120%]'>{children}</h2>,
            [BLOCKS.HEADING_3]: (node, children) => <h3 className='text-2xl py-2 font-bold leading-[120%]'>{children}</h3>,
            [BLOCKS.OL_LIST]: (node, children) => <ol className='py-2 px-4'>{children}</ol>,
            [BLOCKS.LIST_ITEM]: (node, children) => <li className='list-disc'>{children}</li>,
            [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
        },
    };

    return <div>{documentToReactComponents(content, options)}</div>;
};

const PostRender = ({ data }) => {
    return (
        <main className='w-full h-full'>
            <div className='max-w-[900px] mx-auto text-left px-16 pt-10 pb-20 flex flex-col items-start justify-center'>
                <Link className='text-[14px] text-[#a1a1a9] flex justify-center items-center gap-1.5 font-semibold' href={"/blog"}>
                    <FaArrowLeft className='scale-[0.95]' />
                    Home
                </Link>
                <div className='flex pt-5 text-[#a1a1a9] flex-wrap'>
                    <p className='text-[14px] font-semibold flex items-center justify-center mr-4'>
                        <IoPersonCircle className='scale-[1.5] mr-1.5' />
                        {getAuthorName(data?.fields?.author.sys.id)}
                    </p>
                    <p className='text-[14px] font-semibold flex items-center justify-center mr-4'>
                        <IoCalendar className='scale-[1.2] mr-1.5' />
                        {formatDate2(data?.fields?.date)}
                    </p>
                    <p className='text-[14px] font-semibold flex items-center justify-center'>
                        <IoTime className='scale-[1.22] mr-1.5' />
                        {data?.fields?.lectureTime}min.
                    </p>
                </div>

                <h1 className='text-2xl font-bold pt-4 pb-1'>{data?.fields?.titlePost}</h1>
                <p className='text-md font-normal text-[#a1a1a9]'>{data?.fields?.descriptionPost}</p>
                <Image className='py-6' width={900} height={500} src={getImagePost(data?.fields?.coverImage?.sys?.id)} alt='PostImage' />
                <StyledRichText content={data?.fields.content} />
            </div>
        </main>
    );
}

export default PostRender;

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
