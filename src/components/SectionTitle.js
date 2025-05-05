import React from 'react';

const SectionTitle = ({ title, description }) => {
  return (
    <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-[16px] max-sm:items-start relative">
      <h2 className="text-white text-[42px] font-bold leading-[55.02px] max-sm:text-[28px] max-sm:leading-[36px] max-sm:w-[305px]">
        {title}
      </h2>
      <p className="text-white text-[18px] font-normal leading-[32.004px] w-[461px] max-sm:text-[16px] max-sm:leading-[26px] max-sm:w-[330px]">
        {description}
      </p>
    </div>
  );
};



export default SectionTitle;