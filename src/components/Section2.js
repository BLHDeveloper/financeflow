import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

const Section2 = () => {
  const features = [
    {
      title: "Send & Receive",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="41"
          viewBox="0 0 42 41"
          fill="none"
        >
          <g opacity="0.84992" clipPath="url(#clip0_2_517)">
            <path
              opacity="0.4"
              d="M2.75128 8.51221H26.5485C27.6494 8.51221 28.5429 9.4052 28.5429 10.5055C28.5429 11.6057 27.6494 12.4988 26.5485 12.4988H2.75128C1.65038 12.4988 0.756882 11.6057 0.756882 10.5055C0.756882 9.4052 1.65038 8.51221 2.75128 8.51221Z"
              fill="white"
            />
            <mask
              id="mask0_2_517"
              maskUnits="userSpaceOnUse"
              x="24"
              y="0"
              width="18"
              height="22"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.4186 21.4653V0H41.5797V21.4653H24.4186Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_2_517)">
              <path
                d="M25.7655 0.183228C26.017 0.183228 26.2648 0.253226 26.4838 0.389637L40.7361 9.36584C41.1276 9.61352 41.3665 10.0425 41.3665 10.5055C41.3665 10.9686 41.1276 11.3977 40.7361 11.6453L26.4838 20.6215C26.069 20.8818 25.5446 20.898 25.1154 20.6592C24.6844 20.4223 24.4186 19.9718 24.4186 19.4818V1.52939C24.4186 1.03938 24.6844 0.58887 25.1154 0.351945C25.3183 0.238867 25.5428 0.183228 25.7655 0.183228Z"
                fill="white"
              />
            </g>
            <path
              opacity="0.4"
              d="M39.3188 32.059H15.5216C14.4206 32.059 13.5272 31.1659 13.5272 30.0657C13.5272 28.9653 14.4206 28.0724 15.5216 28.0724H39.3188C40.4197 28.0724 41.3132 28.9653 41.3132 30.0657C41.3132 31.1659 40.4197 32.059 39.3188 32.059Z"
              fill="white"
            />
            <mask
              id="mask1_2_517"
              maskUnits="userSpaceOnUse"
              x="0"
              y="19"
              width="18"
              height="22"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.5156 19.1058V40.5711H0.354431V19.1058H17.5156Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask1_2_517)">
              <path
                d="M16.1686 40.3878C15.9172 40.3878 15.6694 40.3178 15.4503 40.1815L1.19805 31.2053C0.806544 30.9575 0.567688 30.5286 0.567688 30.0655C0.567688 29.6025 0.806544 29.1734 1.19805 28.9258L15.4503 19.9496C15.8652 19.6893 16.3896 19.6732 16.8187 19.9118C17.2498 20.1488 17.5156 20.5993 17.5156 21.0893V39.0418C17.5156 39.5317 17.2498 39.9822 16.8187 40.2191C16.6158 40.3322 16.3913 40.3878 16.1686 40.3878Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_2_517">
              <rect width="42" height="41" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "100% Secure Wallet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="43"
          height="39"
          viewBox="0 0 43 39"
          fill="none"
        >
          <g opacity="0.84992" clipPath="url(#clip0_2_545)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42.0855 12.1618H33.173C29.0255 12.1691 25.6655 15.4375 25.658 19.472C25.6524 23.5156 29.0161 26.7985 33.173 26.804H42.093V27.4464C42.093 34.5 37.807 38.6709 30.5539 38.6709H11.541C4.28601 38.6709 0 34.5 0 27.4464V12.0836C0 5.02999 4.28601 0.875366 11.541 0.875366H30.5464C37.7995 0.875366 42.0855 5.02999 42.0855 12.0836V12.1618ZM9.97512 12.1454H21.8454H21.8528H21.8678C22.7565 12.1418 23.4748 11.4374 23.4711 10.5712C23.4673 9.70681 22.7414 9.00801 21.8528 9.01165H9.97512C9.09212 9.01528 8.3756 9.71227 8.37186 10.5731C8.36811 11.4374 9.0865 12.1418 9.97512 12.1454Z"
              fill="white"
            />
            <path
              opacity="0.4"
              d="M29.5438 20.3961C29.984 22.3934 31.7392 23.7986 33.7431 23.7621H40.583C41.4167 23.7621 42.0931 23.0732 42.0931 22.2216V16.906C42.0912 16.0563 41.4167 15.3656 40.583 15.3638H33.582C31.3026 15.3711 29.4616 17.2587 29.4652 19.5848C29.4652 19.8572 29.492 20.1294 29.5438 20.3961Z"
              fill="white"
            />
            <path
              d="M33.6742 21.6629C34.8365 21.6629 35.7788 20.7228 35.7788 19.5631C35.7788 18.4035 34.8365 17.4634 33.6742 17.4634C32.5118 17.4634 31.5695 18.4035 31.5695 19.5631C31.5695 20.7228 32.5118 21.6629 33.6742 21.6629Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_545">
              <rect width="43" height="39" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "Trading Charts",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
        >
          <g opacity="0.84992" clipPath="url(#clip0_2_535)">
            <path
              opacity="0.4"
              d="M30.7177 0H11.3709C4.32055 0 0.325989 3.99456 0.325989 11.0448V30.3733C0.325989 37.4237 4.32055 41.4183 11.3709 41.4183H30.7177C37.7681 41.4183 41.7442 37.4237 41.7442 30.3733V11.0448C41.7442 3.99456 37.7681 0 30.7177 0Z"
              fill="white"
            />
            <path
              d="M11.4439 15.2605C10.5051 15.2605 9.73193 16.0336 9.73193 16.9908V31.2203C9.73193 32.1591 10.5051 32.9322 11.4439 32.9322C12.4011 32.9322 13.1743 32.1591 13.1743 31.2203V16.9908C13.1743 16.0336 12.4011 15.2605 11.4439 15.2605Z"
              fill="white"
            />
            <path
              d="M21.1083 8.46765C20.1695 8.46765 19.3964 9.24079 19.3964 10.198V31.22C19.3964 32.1589 20.1695 32.9321 21.1083 32.9321C22.0655 32.9321 22.8386 32.1589 22.8386 31.22V10.198C22.8386 9.24079 22.0655 8.46765 21.1083 8.46765Z"
              fill="white"
            />
            <path
              d="M30.6438 22.771C29.6866 22.771 28.9134 23.5442 28.9134 24.5014V31.2203C28.9134 32.1592 29.6866 32.9323 30.6253 32.9323C31.5825 32.9323 32.3557 32.1592 32.3557 31.2203V24.5014C32.3557 23.5442 31.5825 22.771 30.6438 22.771Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_535">
              <rect width="42" height="42" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "Real Time Trading",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="58"
          height="47"
          viewBox="0 0 58 47"
          fill="none"
        >
          <g opacity="0.84992">
            <path
              d="M43.6973 9.50315C41.2007 6.49101 37.8316 4.31968 34.05 3.28553C30.2685 2.25139 26.2586 2.40483 22.5677 3.72491C18.877 5.04499 15.6851 7.46739 13.4278 10.6614C11.1705 13.8556 9.95794 17.6656 9.95538 21.5716V26.7537"
              stroke="white"
              strokeOpacity="0.4"
              strokeWidth="4.92496"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.0117 37.7568C18.6299 40.5201 22.0206 42.4369 25.7448 43.259C29.4691 44.0811 33.3554 43.7707 36.9005 42.368C40.4455 40.9651 43.4862 38.5346 45.6288 35.3911C47.7713 32.2475 48.9172 28.5357 48.9178 24.7361V21.286"
              stroke="white"
              strokeOpacity="0.4"
              strokeWidth="4.92496"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.5805 18.2664C18.5696 18.4742 18.5007 18.676 18.3779 18.8512L10.3067 30.2401C10.0841 30.5529 9.71758 30.7317 9.33315 30.7116C8.94873 30.6916 8.60301 30.4755 8.41441 30.1413L1.58263 17.9744C1.38463 17.6204 1.39402 17.1863 1.61085 16.8419C1.82627 16.496 2.21182 16.2958 2.61858 16.3171L17.5215 17.095C17.9283 17.1163 18.2908 17.3554 18.4687 17.7219C18.5537 17.8945 18.5902 18.0824 18.5805 18.2664Z"
              fill="white"
            />
            <path
              d="M39.8516 28.6356C39.8588 28.4304 39.9233 28.2301 40.0414 28.0553L47.8076 16.6804C48.0219 16.3679 48.3804 16.1852 48.7599 16.1984C49.1396 16.2116 49.4844 16.4187 49.6762 16.7453L56.6269 28.6321C56.8284 28.9781 56.8267 29.4065 56.6186 29.75C56.4121 30.095 56.0352 30.299 55.6335 30.285L40.9167 29.7731C40.515 29.7592 40.1532 29.5294 39.9714 29.1709C39.8845 29.0021 39.8452 28.8173 39.8516 28.6356Z"
              fill="white"
            />
          </g>
        </svg>
      ),
    },
  ];

  return (
    <>
      <div className="flex-col justify-center items-center text-center pt-[174px] max-sm:pt-[65px] pb-[80px] max-sm:pl-[16px] max-sm:text-start">
        <div className="absolute right-0 filter blur-[150px] w-[680.816px] h-[680.816px] flex-shrink-0 fill-[rgba(3,40,238,0.3)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="682"
            height="682"
            viewBox="0 0 682 682"
            fill="none"
          >
            <path
              d="M341 681.408C529.002 681.408 681.408 529.002 681.408 341C681.408 152.998 529.002 0.591797 341 0.591797C152.998 0.591797 0.591797 152.998 0.591797 341C0.591797 529.002 152.998 681.408 341 681.408Z"
              fill="#0328EE"
              fillOpacity="0.3"
            />
          </svg>
        </div>
        <div className="text-white font-dm-sans text-[42px] max-sm:text-[28px] font-bold leading-[55.02px] max-sm:leading-[36px] relative pb-[15px] max-sm:w-[273px]">
          Build your crypto portfolio
        </div>
        <div className="text-white font-dm-sans text-[18px] max-sm:text-[16px] font-normal leading-[32.004px] max-sm:leading-[26px] relative max-sm:w-[314px] w-[496px] inline-block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aene.
        </div>
      </div>
      <div className="flex flex-row max-sm:flex-col justify-center items-center sm:gap-[27px] relative">
        <div className="flex flex-col gap-8 max-sm:gap-[16px]">
          {features.slice(0, 2).map((feature, index) => (
            <div
              key={index}
              className="w-[325px] max-sm:w-[358px] h-[295px] flex-shrink-0 rounded-[40px] bg-[#010D50] pl-[23px] pt-[48px]"
            >
              <div className="inline-flex p-[14px] justify-center items-center rounded-[20px] bg-[#0328EE]">
                <div className="flex items-start opacity-[0.8499]">
                  {feature.icon}
                </div>
              </div>
              <div className="text-white font-dm-sans text-lg font-bold leading-[25.992px] tracking-[0.9px] uppercase pt-[20px]">
                {feature.title}
              </div>
              <div className="text-white font-dm-sans text-base font-normal leading-[26px] width-[279px] pr-[22px] pt-[7px]">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
        <div className="w-[477px] max-sm:w-[358px] h-[622px] flex-shrink-0 rounded-[40px] bg-[#0328EE] pt-[44px] pl-[33px] max-sm:my-[16px]">
          <div className="text-white font-dm-sans text-xl font-bold leading-[26px] tracking-[1px] uppercase pb-[22px]">
            iOS & Android App
          </div>
          <p className="text-white font-dm-sans text-base font-normal leading-[26px] w-[383px] max-sm:w-[303px] mb-[37px] max-md:mb-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In amet,
            morbi non at sed neque.
          </p>
          <Image
            src="/Images/iPhones.svg"
            alt="Picture of the author"
            width={354}
            height={724}
            className="ml-[15px] max-sm:ml-[3px] max-sm:w-[285.452px] max-sm:h-[428px]"
          />
        </div>
        <div className="flex flex-col gap-8 max-sm:gap-[16px]">
          {features.slice(2).map((feature, index) => (
            <div
              key={index}
              className="w-[325px] max-sm:w-[358px] h-[295px] flex-shrink-0 rounded-[40px] bg-[#010D50] pl-[23px] pt-[48px]"
            >
              <div className="inline-flex p-[14px] justify-center items-center rounded-[20px] bg-[#0328EE]">
                <div className="flex items-start opacity-[0.8499]">
                  {feature.icon}
                </div>
              </div>
              <div className="text-white font-dm-sans text-lg font-bold leading-[25.992px] tracking-[0.9px] uppercase pt-[20px]">
                {feature.title}
              </div>
              <div className="text-white font-dm-sans text-base font-normal leading-[26px] width-[279px] pr-[22px] pt-[7px]">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center pt-[48px] max-sm:pt-[40px]">
        <Button label="Download App" />
      </div>
    </>
  );
};

export default Section2;
