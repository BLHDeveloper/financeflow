import React from "react";
import Image from "next/image";

const BlogCard = ({ post, onClick }) => (
  <article
    className="glass-card overflow-hidden cursor-pointer group"
    onClick={() => onClick && onClick(post)}
  >
    <div className="overflow-hidden">
      <Image
        src={post.image}
        alt="Article thumbnail"
        width={382}
        height={215}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-6">
      <div className="inline-flex px-4 py-2 rounded-full bg-[#0328EE] mb-5">
        <span className="text-white text-xs sm:text-sm font-medium leading-[18px] tracking-[0.7px] uppercase">
          {post.category}
        </span>
      </div>
      <p className="text-white text-lg sm:text-xl font-bold leading-[28px] sm:leading-[31px] mb-3">
        {post.title}
      </p>
      <p className="text-white/70 text-base font-normal leading-7 mb-6">
        {post.content}
      </p>
      <div className="w-full h-px bg-white/10 mb-5" />
      <div className="flex items-center gap-4 mb-2">
        <Image
          src={post.authorImage || "/Images/img_card.jpg"}
          alt={`Author ${post.author}`}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="flex flex-col justify-center items-start gap-1">
          <p className="text-white text-sm font-bold leading-[18px] tracking-[0.8px] uppercase">
            {post.author}
          </p>
          <p className="text-white/60 text-sm font-normal leading-[18px] tracking-[0.8px] uppercase">
            {post.date}
          </p>
        </div>
      </div>
    </div>
  </article>
);

export default BlogCard;
