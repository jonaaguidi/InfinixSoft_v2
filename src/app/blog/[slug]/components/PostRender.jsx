"use client"
import { getAuthorName } from '@/utils/getAuthorName';
import { getImagePost } from '@/utils/getImagePost';
import Image from 'next/image';
import React from 'react'

const PostRender = ({ data }) => {
    return (
        <div className='max-w-[1280px] mx-auto text-center px-20 flex flex-col items-center justify-center'>
            <h1 className='text-2xl font-bold py-4'>{data?.fields?.titlePost}</h1>
            <p className='text-lg'>{data?.fields?.descriptionPost}</p>
            <Image className='pt-10 pb-2' width={500} height={500} src={getImagePost(data?.fields?.coverImage?.sys?.id)} alt='asd' />
            <p className='text-[#a1a1a9]'>Author: {getAuthorName(data?.fields?.author.sys.id)}</p>
        </div>
    );
}

export default PostRender