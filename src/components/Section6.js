import React from "react";
import Image from "next/image";
import Button from "./Button2";
const Section6 = () => {
  return (
    <>
      <div className="flex flex-col px-[133px] gap-12 mb-[120px] max-sm:px-[16px] max-sm:gap-[24px] max-sm:mb-[80px]">
        <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-[16px] max-sm:items-start">
          <h2 className="text-white text-[42px] font-bold leading-[55.02px] max-sm:text-[28px] max-sm:leading-[36px] max-sm:w-[305px]">
            Browse our latest news
          </h2>
          <p className="text-white text-[18px] font-normal leading-[32.004px] w-[461px] max-sm:text-[16px] max-sm:leading-[26px] max-sm:w-[330px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non
            neque orci amet, amet.
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-[16px]">
            {/* Card */}
            {[1, 2, 3].map((card) => (
              <div
                key={card}
                className="bg-[#010D50]  rounded-[40px] overflow-hidden shadow-lg"
              >
                <Image
                  src="/Images/card.jpg"
                  alt="Picture of the author"
                  width={382}
                  height={215}
                  className="relative"
                />
                {/* Card Content */}
                <div className="flex-shrink-0 pl-[23px]">
                  <div className="flex items-start w-[109px] px-[14.158px] py-[9px] rounded-[1000px] bg-[#0328EE] mb-[24px] ">
                    <span className="text-white text-[14px] font-medium leading-[18.004px] tracking-[0.7px] uppercase">
                      Products
                    </span>
                  </div>
                  <p className="w-[328px] text-white text-[22px] font-bold leading-[30.998px] mb-[16px]">
                    The Basics about Cryptocurrency
                  </p>
                  <p className="w-[329px] text-white text-[18px] font-normal leading-[32.004px] mb-[39px]">
                    Lorem ipsum dolor sit ametero irseo, consectetur adipiscing
                    elit. Scelerisque viverra donec diammeo.
                  </p>
                  <div className="w-[336px] h-px flex-shrink-0 bg-white/10 mb-[23px]"></div>
                  <div className="flex items-center gap-[15px] w-[486px]] mb-[34px]">
                    <Image
                      src="/Images/img_card.jpg"
                      alt=""
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="flex flex-col justify-center items-start gap-[6px] pr-[2px]">
                      <p className="text-white text-[16px] font-bold leading-[18px] tracking-[0.8px] uppercase">
                        Alex Turner
                      </p>
                      <p className="text-white text-[16px] font-normal leading-[18px] tracking-[0.8px] uppercase">
                        August 2, 2021
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View All Button */}
          <div className="flex justify-center mt-10 max-sm:mt-[16px]">
            <Button label={"View All Articles"} />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-[133px] gap-12 mb-[120px] max-sm:px-[16px] max-sm:gap-[24px] max-sm:mb-[80px]">
        <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-[16px] max-sm:items-start">
          <h2 className="text-white text-[42px] font-bold leading-[55.02px] max-sm:text-[28px] max-sm:leading-[36px] max-sm:w-[305px]">
            Download our app
          </h2>
          <p className="text-white text-[18px] font-normal leading-[32.004px] w-[461px] max-sm:text-[16px] max-sm:leading-[26px] max-sm:w-[330px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non
            neque orci amet, amet.
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[72px] max-sm:gap-4">
            <div className="w-[563px] max-sm:w-[358px] flex-shrink-0 rounded-[40px] bg-[#010D50] pl-[48px] max-sm:pl-[32px] max-sm:pt-[32px] pt-[48px]">
              <h2 className="text-white text-[42px] font-bold leading-[55.02px] mb-[16px] max-sm:text-[28px] max-sm:leading-[36px]">
                Download for iOS
              </h2>
              <p className="w-[443px] max-sm:w-[293px] text-white text-[18px] font-normal leading-[32.004px] mb-[32px] max-sm:mb-[24px] max-sm:text-[16px] max-sm:leading-[26px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sed nulla integer in pellentesque tortor semper elementum.
                Felis.
              </p>
              <div className="inline-flex h-[70px] px-[32px] py-[27px] justify-center items-center gap-[8px] flex-shrink-0 rounded-[80px] bg-[#0328EE] mb-[40px]">
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="28"
                    viewBox="0 0 23 28"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_2_793)">
                      <path
                        d="M2.89196 24.0589C3.90895 25.5229 5.29949 27.5247 7.09357 27.5247V27.5212H7.18498C7.86984 27.4777 8.53946 27.2985 9.15543 26.9938H9.17267C9.95229 26.6126 10.8069 26.4128 11.6735 26.4091C12.5034 26.4182 13.3208 26.6135 14.0664 26.9808H14.0716C14.6946 27.297 15.38 27.4686 16.0774 27.483H16.1792C17.9841 27.456 19.1378 25.9391 20.3451 24.1093C21.1739 22.9142 21.8163 21.5984 22.25 20.2076V20.2006C21.5704 19.9123 20.9494 19.5 20.4184 18.9843C19.832 18.4268 19.3666 17.7531 19.0513 17.0055C18.7361 16.2579 18.578 15.4525 18.5868 14.6403C18.6038 13.5861 18.8836 12.5531 19.4003 11.6361C19.9169 10.7192 20.654 9.94782 21.5438 9.39272C20.9766 8.57776 20.2289 7.90699 19.3599 7.43351C18.4909 6.96002 17.5245 6.6968 16.537 6.66468C16.3724 6.64991 16.2249 6.64209 16.0989 6.64209C15.0096 6.71105 13.9425 6.98387 12.9523 7.4466H12.9316C12.4223 7.69534 11.8757 7.8574 11.3139 7.92618C10.7214 7.86295 10.1448 7.6944 9.61074 7.42836H9.59177C8.73578 7.01905 7.80992 6.7787 6.86419 6.72029H6.78658C5.63538 6.75676 4.51323 7.0933 3.52964 7.69705C2.54603 8.3008 1.73459 9.15114 1.17449 10.1651C0.0454163 12.4 -0.282374 14.9595 0.246607 17.41C0.663483 19.7825 1.5618 22.0428 2.88536 24.0494L2.89196 24.0589Z"
                        fill="white"
                      />
                      <path
                        d="M11.1 6.344C11.1888 6.35197 11.278 6.35546 11.3674 6.35443C12.0994 6.31719 12.8156 6.12494 13.4691 5.79023C14.1225 5.4555 14.6986 4.98583 15.1599 4.41178C16.1821 3.18276 16.6844 1.59846 16.5586 0C15.0035 0.163702 13.5667 0.911959 12.5349 2.09555C11.5165 3.26402 11.0003 4.79218 11.1 6.344Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_793">
                        <rect width="23" height="28" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="text-white text-center text-[16px] font-bold leading-[16px] tracking-[1.6px] uppercase">
                  App Store
                </p>
              </div>
              <Image
                src="/Images/iPhone.svg"
                alt="Picture of the author"
                width={458}
                height={935}
                className="max-sm:pr-8"
              />
            </div>
            <div className="w-[563px] max-sm:w-[358px] flex-shrink-0 rounded-[40px] bg-[#010D50] sm:pl-[48px] max-sm:pl-[32px] max-sm:pt-[32px] pt-[48px]">
              <h2 className="text-white text-[42px] font-bold leading-[55.02px] mb-[16px] max-sm:text-[28px] max-sm:leading-[36px]">
                Download for Android{" "}
              </h2>
              <p className="w-[443px] max-sm:w-[293px] text-white text-[18px] font-normal leading-[32.004px] mb-[32px]  max-sm:mb-[24px] max-sm:text-[16px] max-sm:leading-[26px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sed nulla integer in pellentesque tortor semper elementum.
                Felis.
              </p>
              <div className="inline-flex h-[70px] px-[32px] py-[27px] justify-center items-center gap-[8px] flex-shrink-0 rounded-[80px] bg-[#0328EE] mb-[40px]">
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="26"
                    viewBox="0 0 23 26"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_2_804)">
                      <path
                        d="M16.5185 16.5949L13.0659 13.1357L1.64105 24.7384C1.75026 24.6972 1.85613 24.6476 1.9577 24.59L16.5185 16.5949Z"
                        fill="white"
                      />
                      <path
                        d="M0.00850522 1.94011C0.0144238 3.35543 0.107148 22.2237 0.116026 23.4134C0.0902982 23.6611 0.125802 23.9113 0.219399 24.142C0.312996 24.3725 0.4618 24.5765 0.652648 24.7357L12.5668 12.6372L0.600367 0.643555C0.393848 0.785546 0.229684 0.981195 0.125431 1.20957C0.0211803 1.43795 -0.0192362 1.69047 0.00850522 1.94011Z"
                        fill="white"
                      />
                      <path
                        d="M17.1586 8.98096L13.5612 12.6341L17.1626 16.2417L22.1126 13.5229C22.7044 13.1952 23.3338 12.3599 22.1126 11.6918L17.1586 8.98096Z"
                        fill="white"
                      />
                      <path
                        d="M1.95769 0.659347C1.79957 0.5753 1.62735 0.521278 1.44968 0.5L13.063 12.1343L16.5155 8.62869L1.95769 0.659347Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_804">
                        <rect
                          width="23"
                          height="25"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="text-white text-center text-[16px] font-bold leading-[16px] tracking-[1.6px] uppercase">
                  PLAY STORE
                </p>
              </div>
              <Image
                src="/Images/Samsung.svg"
                alt="Picture of the author"
                width={458}
                height={935}
                className="max-sm:pr-8"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section6;
