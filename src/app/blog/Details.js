import React from "react";
import Image from "next/image";

const Details = ({ post }) => {
  // Utiliser les données du post si disponibles, sinon utiliser des valeurs par défaut
  const {
    title = "The Basics about Cryptocurrency",
    content = "Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.",
    author = "Alex Turner",
    date = "August 2, 2021",
    category = "",
    image = "/Images/card.jpg",
    authorImage = "/Images/img_card.jpg",
    subtitle = "Learn what you need to know before you invest in a virtual currency",
    paragraphs = [
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
    sections = [
      {
        title: "How do I know how secure is my wallet?",
        content: [
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
      },
      {
        title:
          "Learn what you need to know before you invest in a virtual currency",
        content: [
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
      },
    ],
    quote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  } = post || {};

  return (
    <div className="px-[133px] max-sm:px-4 mb-[126px] max-sm:mb-[80px]">
      <div className="flex items-center gap-[15px] w-[486px] mb-[40px] max-sm:mb-[32px]">
        <Image
          src={authorImage}
          alt={`Author ${author}`}
          width={60}
          height={60}
          className="rounded-full"
        />
        <div className="flex flex-col justify-center items-start gap-[6px] pr-[2px]">
          <p className="text-white text-[16px] font-bold leading-[18px] tracking-[0.8px] uppercase">
            {author}
          </p>
          <p className="text-white text-[16px] font-normal leading-[18px] tracking-[0.8px] uppercase">
            {date}
          </p>
        </div>
      </div>
      <div className="inline-flex flex-col items-start gap-4 max-sm:w-[358px]">
        <h1 className="text-white text-[66px] max-sm:text-[28px] font-bold leading-[79.992px] max-sm:leading-[36px] tracking-[-1px] max-sm:w-full sm:w-[945px] max-sm:self-stretch">
          {title}
        </h1>
        {category && (
          <div className="flex items-start rounded-[1000px] bg-[#0328EE] px-[14px] py-[9px] mb-2">
            <p className="text-white text-[14px] font-medium leading-[18px] tracking-[0.7px] uppercase">
              {category}
            </p>
          </div>
        )}
        <p className="text-white text-[18px] max-sm:text-[16px] font-normal leading-[32.004px] max-sm:leading-[26px] max-sm:self-stretch">
          {content}
        </p>
      </div>
      {/* problem */}
      <div className="inline-flex flex-col items-center gap-16 max-sm:gap-10 mt-10 max-sm:mt-[76px]">
        <Image
          src={image}
          alt="Article thumbnail"
          width={1198}
          height={674}
          className="relative sm:!w-full max-sm:w-[358px] max-sm:h-[300px]"
        />
        <div className="flex flex-col items-start gap-10 max-sm:w-[358px] sm:w-[784px]">
          <p className="text-white text-[42px] max-sm:text-[28px] not-italic font-bold leading-[55.02px] max-sm:leading-[36px] tracking-[-0.42px] max-sm:w-full sm:w-[759px]">
            {subtitle}
          </p>
          <div className="flex flex-col justify-center items-start gap-4 max-sm:self-stretch">
            <p className="text-white font-normal text-[18px] max-sm:text-[16px] leading-[32px] max-sm:leading-[26px]">
              {paragraphs[0]}
              <br />
              <br />
              {paragraphs[1]}
            </p>
          </div>
          <div className="flex flex-col justify-center items-start gap-6 max-sm:gap-10 max-sm:w-[358px] sm:w-[784px]">
            <p className="text-white text-[28px] font-bold leading-[29.988px] max-sm:leading-[36px] sm:tracking-[0.28px] max-sm:self-stretch">
              {sections[0].title}
            </p>
            <div className="flex flex-col justify-center items-start gap-4 max-sm:self-stretch">
              <p className="text-white font-normal text-[18px] max-sm:text-[16px] leading-[32px] max-sm:leading-[26px]">
                {sections[0].content[0]}
                <br />
                <br />
                {sections[0].content[1]}
              </p>
            </div>
          </div>
        </div>
        <div className="!mx-[100px] max-sm:!mx-[0px]">
          <Image
            src={image}
            alt="Article thumbnail"
            width={1198}
            height={500}
            className="relative max-sm:w-full"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-6 max-sm:gap-10 max-sm:w-[358px] sm:w-[784px]">
          <p className="text-white text-[28px] font-bold leading-[29.988px] max-sm:leading-[36px] sm:tracking-[0.28px] max-sm:self-stretch">
            {sections[1].title}
          </p>
          <div className="flex flex-col justify-center items-start gap-4 max-sm:self-stretch">
            <p className="text-white font-normal text-[18px] max-sm:text-[16px] leading-[32px] max-sm:leading-[26px]">
              {sections[1].content[0]}
              <br />
              <br />
              {sections[1].content[1]}
            </p>
          </div>
        </div>
        <div className="flex w-[1000px] max-sm:w-[358px] p-[80px] max-sm:p-[32px] justify-center items-center gap-1 rounded-[40px] bg-[#010D50]">
          <div className="max-sm:w-full w-[613px] flex-shrink-0 text-white text-[22px] max-sm:text-[16px] font-medium leading-[37.994px] max-sm:leading-[26px]">
            {quote}
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-6 max-sm:gap-10 max-sm:w-[358px] sm:w-[784px]">
          <p className="text-white text-[28px] font-bold leading-[29.988px] max-sm:leading-[36px] sm:tracking-[0.28px] max-sm:self-stretch">
            {sections[1].title}
          </p>
          <div className="flex flex-col justify-center items-start gap-4 max-sm:self-stretch">
            <p className="text-white font-normal text-[18px] max-sm:text-[16px] leading-[32px] max-sm:leading-[26px]">
              {sections[1].content[0]}
              <br />
              <br />
              {sections[1].content[1]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
