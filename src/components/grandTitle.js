import React from "react";

const SectionTitle = ({ title, description, className = ""}) => {
  return (
    <div
      className={`${className} flex-col justify-center items-center text-center max-sm:text-start`}
    >
      <h2 className="text-white  font-bold relative text-[66px] max-sm:text-[38px] leading-[80px] max-sm:leading-[46px] mb-[21px] max-sm:mb-[16px] max-sm:w-[358px] tracking-[-1px]">
        {title}
      </h2>
      <p className=" text-white font-normal text-[18px] max-sm:text-[16px] leading-[32.004px] max-sm:leading-[26px] max-sm:w-[320px] w-[606px] inline-block relative">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
