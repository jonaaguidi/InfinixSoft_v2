"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/img/favicons/favicon_infinix.ico";
import image1 from "../../../public/img/Blog/Infinixdubai.png"

const BlogLayout = () => {
  const [postTitles, setPostTitles] = useState([]);

  useEffect(() => {
    async function LoadPosts() {
      try {
        const res = await fetch("https://cdn.contentful.com/spaces/nz4tj25d223o/environments/master/entries?access_token=9B5DHZHBguZwSoqKlU6aj00Dn7zQuPott5jjHq9UJ90&content_type=post");
        const data = await res.json();
        const titles = data.items.map((item) => item.fields.titlePost);
        const slugs = data.items.map(item => item.fields.slug);
        console.log(slugs)
        setPostTitles(titles);
      } catch (error) {
        console.error("Error loading posts", error);
      }
    }
    LoadPosts();
  }, []);

  return (
    <main className="max-w-[1220px] mx-auto">
      <h1 className="flex justify-center items-center gap-2.5 text-[42px] leading-[120%] font-bold py-20 max-w-[666px] mx-auto text-shadow-md max-[1000px]:text-[42px] max-[680px]:text-[36px] max-[520px]:text-[32px]">
        Welcome to our blog
        <Image src={logo} alt="InfinixSoft" width={48} height={48} />
      </h1>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        {postTitles.map((title, index) => (
          <div className="max-w-[320px]" key={index}>
            <Image src={image1} alt="Image" width={360} height={788} />
            <h2 className="text-[18px]">{title}</h2>
          </div>
        ))}
      </div>
    </main>
  );
};

export default BlogLayout;
