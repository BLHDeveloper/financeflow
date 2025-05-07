import React from "react";
import Image from "next/image";

const BlogCard = ({ post }) => (
  <div className="bg-[#010D50] rounded-[40px] overflow-hidden shadow-lg">
    <Image
      src={post.image}
      alt="Article thumbnail"
      width={382}
      height={215}
      className="relative"
    />
    <div className="flex-shrink-0 pl-[23px]">
      <div className="flex items-start justify-center w-[109px] px-[14.158px] py-[9px] rounded-[1000px] bg-[#0328EE] mb-[24px]">
        <span className="text-white text-[14px] font-medium leading-[18.004px] tracking-[0.7px] uppercase">
          {post.category}
        </span>
      </div>
      <p className="w-[328px] text-white text-[22px] font-bold leading-[30.998px] mb-[16px]">
        {post.title}
      </p>
      <p className="w-[329px] text-white text-[18px] font-normal leading-[32.004px] mb-[39px]">
        {post.content}
      </p>
      <div className="w-[336px] h-px flex-shrink-0 bg-white/10 mb-[23px]"></div>
      <div className="flex items-center gap-[15px] w-[486px]] mb-[34px]">
        <Image
          src={post.authorImage || "/Images/img_card.jpg"}
          alt={`Author ${post.author}`}
          width={60}
          height={60}
          className="rounded-full"
        />
        <div className="flex flex-col justify-center items-start gap-[6px] pr-[2px]">
          <p className="text-white text-[16px] font-bold leading-[18px] tracking-[0.8px] uppercase">
            {post.author}
          </p>
          <p className="text-white text-[16px] font-normal leading-[18px] tracking-[0.8px] uppercase">
            {post.date}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default BlogCard;
