import React from 'react';
import Button from "@/components/Button";
import Button2 from "@/components/Button2";
import Image from "next/image";
import Featured from "@/components/Featured";
const Section1 = () => {
    return (
       <div className="sm:h-[940px] sm:w-full ">
        {/* <div className="absolute top-0 left-0 opacity-40 shrink-0 blur-[48.259159088134766px] fill-[var(--dark-blue,#010D50)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="590"
            height="608"
            viewBox="0 0 590 608"
            fill="none"
          >
            <path
              d="M114 607.586C376.659 607.586 589.586 394.659 589.586 132C589.586 -130.659 376.659 -343.586 114 -343.586C-148.659 -343.586 -361.586 -130.659 -361.586 132C-361.586 394.659 -148.659 607.586 114 607.586Z"
              fill="#010D50"
            />
          </svg>
        </div> */}
        <div className="absolute w-[680.21px] h-[680.037px] p-[160px_96.844px_96.481px_160px] right-0">
          <div className="w-[680.21px] h-[680.037px] filter blur-[48.24064254760742px]">
            <div className="w-[680.21px] h-[680.037px] shrink-0 fill-[rgba(3,40,238,0.20)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="617"
                height="681"
                viewBox="0 0 617 681"
                fill="none"
              >
                <path
                  d="M341.051 680.519C528.885 680.519 681.156 528.287 681.156 340.5C681.156 152.713 528.885 0.481285 341.051 0.481285C153.216 0.481285 0.945496 152.713 0.945496 340.5C0.945496 528.287 153.216 680.519 341.051 680.519Z"
                  fill="#0328EE"
                  fillOpacity="0.2"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex max-sm:flex-col pt-[86px] pb-[170px] max-sm:pb-[80px] max-sm:pt-[48px]">
          <div className="flex  flex-col sm:items-start justify-start gap-[9px] max-sm:gap-[16px] max-sm:pt-[0px] pt-[120px] max-sm:pl-[16px] pl-[157px] pr-0">
            <h1 className="text-white font-['DM_Sans'] text-[66px] max-sm:text-[36px] font-bold leading-[79.992px] max-sm:leading-[46px] tracking-[-1px] w-[738px] max-sm:w-[300px] relative">
              Buy, trade, and hold 350+ cryptocurrencies
            </h1>
            <p className="text-white font-['DM_Sans'] text-[18px] max-sm:text-[16px] font-normal leading-[32.004px] max-sm:leading-[26px] w-[568px] max-sm:w-[320px] relative">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              nulla suspendisse tortor aenean dis placerat.
            </p>
            <div className="flex max-sm:flex-col sm:items-start gap-[28px] max-sm:gap-[16px] pt-[33px] max-sm:pt-[24px]  max-sm:px-[16px] relative">
              <Button label="Download App" />
              <Button2 label="view pricing" />
            </div>
          </div>
          <Image
            src="/Images/Computers.svg"
            alt="Picture of the author"
            width={971}
            height={585}
            className="relative max-sm:pt-[40px] max-sm:px-[16px]"
          />
        </div>
        <Featured />
      </div>
    );
};

export default Section1;