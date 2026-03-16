import React from "react";

const SectionTitle = ({ title, description }) => {
  return (
    <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-4 max-sm:items-start relative">
      <h2 className="text-white text-2xl sm:text-3xl lg:text-[42px] font-bold leading-tight lg:leading-[55px] max-w-lg">
        {title}
      </h2>
      <p className="text-white/70 text-base sm:text-lg font-normal leading-7 sm:leading-8 max-w-md">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;