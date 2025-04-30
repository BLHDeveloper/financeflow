import React from 'react';
import Image from 'next/image';
import Button3 from './Button3';
const Section4 = () => {
    return (
      <div className="flex max-sm:flex-col sm:justify-between items-center  h-[513px] max-sm:h-[609px] flex-shrink-0 bg-[#0328EE] sm:px-[133px] sm:mt-[116px] sm:mb-[200px] max-sm:pt-[40px] ">
        <div className="sm:w-[589px] sm:h-[293px] sm:flex-shrink-0 max-sm:inline-flex max-sm:flex-col  max-sm:gap-4 max-sm:text-center">
          <h2 className="font-dm-sans text-[42px] max-sm:text-[28px] font-bold leading-[55.02px] max-sm:leading-[36px] text-[#FFF] sm:mb-4 max-sm:w-[330px]">
            Explore endless possibilities with FinanceFlow
          </h2>
          <p className="font-dm-sans text-[18px] max-sm:text-[16px] font-normal leading-[32.004px] max-sm:leading-[26px] text-[#FFF] w-[496px] max-sm:w-[330px] sm:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
          <Button3 label="Download App" />
        </div>
        <Image
          src="/Images/div.svg"
          alt="Picture of the author"
          width={1512}
          height={631}
          className="sm:mb-[110px] max-sm:w-[297.682px] max-sm:h-[319.774px]"
        />
      </div>
    );
};

export default Section4;