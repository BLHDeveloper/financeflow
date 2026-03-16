import React from "react";

const SectionTitle = ({ title, description, className = "" }) => {
  return (
    <div
      className={`${className} flex-col justify-center items-center text-center max-sm:text-start`}
    >
      <h2 className="text-white font-bold relative text-4xl sm:text-5xl lg:text-[66px] leading-tight lg:leading-[80px] mb-4 sm:mb-5 max-w-3xl mx-auto max-sm:mx-0 tracking-[-1px]">
        {title}
      </h2>
      <p className="text-white/80 font-normal text-base sm:text-lg leading-7 sm:leading-8 max-w-xl mx-auto max-sm:mx-0 inline-block relative">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
