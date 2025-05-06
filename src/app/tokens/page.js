"use client";
import React, { useState } from "react";
import GrandTitle from "../../components/grandTitle";

const Pricing = () => {
  const [selectedTokenIndex, setSelectedTokenIndex] = useState(0);

  const data = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      marketCap: "$252,844,036,453 USD",
      volume: "$30,504,879,301 USD",
      website: "#",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="32"
          viewBox="0 0 24 32"
          fill="none"
        >
          <g clipPath="url(#clip0_2_2157)">
            <path
              d="M23.4969 12.7778C23.9864 9.43787 21.4922 7.64229 18.0814 6.44461L19.1891 1.92055L16.4873 1.23435L15.4081 5.63943C14.6987 5.45923 13.9696 5.28805 13.2449 5.12039L14.328 0.686199L11.6288 0L10.5243 4.52228L5.07628 3.14638L4.35749 6.08819C4.35749 6.08819 6.36174 6.55655 6.31941 6.58566C7.41331 6.86425 7.61171 7.60213 7.57824 8.18748L4.54704 20.5812C4.41312 20.92 4.07392 21.428 3.30934 21.2338C3.33642 21.2739 1.34597 20.7318 1.34597 20.7318L0.00488281 23.8889L5.44503 25.2895L4.32697 29.8662L7.02488 30.5524L8.13264 26.0248C8.8711 26.2286 9.58494 26.4169 10.2846 26.5941L9.18125 31.1006L11.8826 31.7868L13.0007 27.2188C17.6071 28.1073 21.071 27.7489 22.5271 23.5042C23.7017 20.0845 22.4695 18.1117 20.0458 16.8247C21.8108 16.408 23.14 15.2249 23.4947 12.7795L23.4969 12.7778ZM17.3233 21.6022C16.4863 25.0219 10.8406 23.1739 9.0087 22.7096L10.4921 16.647C12.323 17.1128 18.1942 18.0355 17.3243 21.6017L17.3233 21.6022ZM18.1612 12.7293C17.3996 15.8416 12.6987 14.2603 11.1729 13.8723L12.516 8.3722C14.0422 8.76072 18.9533 9.48405 18.1592 12.7291"
              fill="#010725"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_2157">
              <rect
                width="24"
                height="32"
                fill="white"
                transform="translate(0.00488281)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      marketCap: "$252,844,036,453 USD",
      volume: "$30,504,879,301 USD",
      website: "#",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="32"
          viewBox="0 0 20 32"
          fill="none"
        >
          <g clipPath="url(#clip0_2_2176)">
            <path
              d="M9.93377 0L9.7168 0.724547V21.7492L9.93377 21.962L19.8675 16.1932L9.93377 0Z"
              fill="#010725"
            />
            <path
              d="M9.9347 0L0.000976562 16.1932L9.9347 21.9621V11.7574V0Z"
              fill="#010725"
            />
            <path
              d="M9.93381 23.8097L9.81152 23.9561V31.4456L9.93381 31.7965L19.8734 18.0438L9.93381 23.8097Z"
              fill="#010725"
            />
            <path
              d="M9.9342 31.7965V23.8097L0.000488281 18.0438L9.9342 31.7965Z"
              fill="#010725"
            />
            <path
              d="M9.93408 21.962L19.8676 16.1933L9.93408 11.7574V21.962Z"
              fill="#010D50"
            />
            <path
              d="M0.000488281 16.1933L9.93403 21.962V11.7574L0.000488281 16.1933Z"
              fill="#010D50"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_2176">
              <rect
                width="20"
                height="32"
                fill="white"
                transform="translate(0.000488281)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: "Litecoin",
      symbol: "LTC",
      marketCap: "$252,844,036,453 USD",
      volume: "$30,504,879,301 USD",
      website: "#",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="25"
          viewBox="0 0 18 25"
          fill="none"
        >
          <g clipPath="url(#clip0_2_2200)">
            <path
              d="M17.4359 19.7432H7.23154L9.13931 13.31L12.0675 12.4671L12.6887 10.3375L9.76045 11.2248L12.8661 0.665502V0.532401C12.8661 0.221834 12.6443 0 12.3337 0H8.38508C8.07451 0 7.80831 0.221834 7.71958 0.532401L4.0815 12.9995L1.15329 13.8868L0.487793 15.972L3.416 15.0847L0.798361 24.0024H16.3711C16.6817 24.0024 16.9479 23.7806 17.0366 23.5144L17.9239 20.4531V20.32C17.9683 19.965 17.7465 19.7432 17.4359 19.7432Z"
              fill="#010725"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_2200">
              <rect width="18" height="25" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: "TRON",
      symbol: "TRX",
      marketCap: "$252,844,036,453 USD",
      volume: "$30,504,879,301 USD",
      website: "#",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="30"
          viewBox="0 0 26 30"
          fill="none"
        >
          <g clipPath="url(#clip0_2_2219)">
            <path
              d="M25.2238 7.89418C24.0199 7.04405 22.7325 6.13773 21.4729 5.23842C21.4451 5.21734 21.4173 5.19627 21.3825 5.17519C21.2433 5.06981 21.0832 4.95739 20.8884 4.89416L20.8744 4.88713C17.5064 4.06512 14.0826 3.22203 10.7702 2.40704C7.76403 1.66934 4.76473 0.931629 1.75851 0.193926C1.68197 0.172849 1.60542 0.151772 1.52191 0.130694C1.25052 0.0534107 0.93737 -0.0308982 0.603344 0.0112564C0.50592 0.0253079 0.422413 0.0604366 0.345866 0.109617L0.26236 0.179875C0.130142 0.306339 0.0605536 0.467931 0.0257596 0.559264L0.00488281 0.615471V0.938657L0.0188003 0.987836C1.91857 6.36257 3.86704 11.8145 5.74595 17.0909C7.19335 21.1518 8.69647 25.3602 10.1648 29.4913C10.2552 29.7724 10.5128 29.9551 10.8329 29.9832H10.9024C11.2017 29.9832 11.4661 29.8356 11.5983 29.5967L17.1098 21.482C18.4528 19.5078 19.7959 17.5265 21.1389 15.5523C21.6887 14.7443 22.2384 13.9293 22.7882 13.1213C23.6928 11.7864 24.6253 10.4094 25.5508 9.06745L25.5995 8.99721V8.91289C25.6204 8.667 25.6274 8.16112 25.2238 7.89418ZM18.766 10.852C17.4716 11.5335 16.1494 12.2361 14.8203 12.9316C15.5927 12.0956 16.3721 11.2525 17.1445 10.4164C18.1118 9.36257 19.1208 8.27357 20.109 7.20562L20.1299 7.18457C20.2134 7.07212 20.3178 6.96675 20.4291 6.85436C20.5057 6.77705 20.5891 6.6998 20.6657 6.60846C21.1807 6.96675 21.7026 7.33211 22.2036 7.69039C22.5655 7.95037 22.9343 8.2103 23.3101 8.47029C21.7791 9.25714 20.2482 10.0651 18.766 10.852ZM15.4396 10.5148C14.4445 11.6038 13.4146 12.7209 12.3917 13.8239C10.4084 11.393 8.38336 8.92693 6.42094 6.5452C5.5302 5.46327 4.63252 4.37425 3.74178 3.29229L3.73483 3.28526C3.53302 3.05341 3.33817 2.80048 3.14332 2.56161C3.01807 2.40002 2.88585 2.24545 2.75363 2.08385C3.56085 2.29463 4.37504 2.49135 5.17531 2.68105C5.87818 2.84966 6.60883 3.02531 7.32558 3.20798C11.3617 4.19861 15.4048 5.18924 19.4409 6.17989C18.0979 7.62718 16.7479 9.09557 15.4396 10.5148ZM11.9393 24.208C12.0159 23.4703 12.0993 22.7115 12.169 21.9667C12.2316 21.3696 12.2942 20.7583 12.3568 20.1752C12.4543 19.2408 12.5586 18.2712 12.6422 17.3228L12.663 17.1541C12.7326 16.5499 12.8022 15.9246 12.8439 15.2993C12.9205 15.2571 13.004 15.215 13.0945 15.1799C13.1989 15.1307 13.3032 15.0886 13.4076 15.0253C15.0151 14.1752 16.6226 13.3251 18.2371 12.482C19.8446 11.6389 21.4938 10.7677 23.1291 9.90354C21.64 12.0815 20.1438 14.2806 18.6963 16.4234C17.4507 18.2571 16.1703 20.1471 14.8968 22.0089C14.3958 22.7537 13.8739 23.5124 13.3798 24.2431C12.8231 25.0581 12.2525 25.8942 11.6958 26.7302C11.7653 25.8872 11.8488 25.037 11.9393 24.208ZM2.23868 3.74194C2.14821 3.48901 2.05079 3.22906 1.96728 2.98315C3.84617 5.27355 5.739 7.578 7.58309 9.8122C8.53644 10.9714 9.48979 12.1236 10.4431 13.2899C10.631 13.5078 10.8189 13.7396 10.9999 13.9644C11.2365 14.2525 11.4731 14.5546 11.7306 14.8427C11.647 15.5663 11.5774 16.297 11.5009 16.9996C11.4522 17.4913 11.4035 17.9832 11.3478 18.482V18.489C11.3269 18.8052 11.2852 19.1213 11.2504 19.4305C11.2016 19.859 11.0903 20.8286 11.0903 20.8286L11.0834 20.8778C10.9581 22.297 10.805 23.7302 10.6589 25.1213C10.5963 25.6975 10.5406 26.2876 10.4779 26.8777C10.4431 26.7724 10.4014 26.667 10.3666 26.5686C10.2622 26.2876 10.1578 25.9925 10.0604 25.7045L9.3158 23.6178C6.95675 16.9925 4.59772 10.3743 2.23868 3.74194Z"
              fill="#010725"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_2219">
              <rect
                width="26"
                height="30"
                fill="white"
                transform="translate(0.00488281)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];

  const handlePrevToken = () => {
    setSelectedTokenIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const handleNextToken = () => {
    setSelectedTokenIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="px-[133px] max-sm:px-4 mb-[120px] max-sm:mb-[80px]">
        <GrandTitle
          title="Tokens"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat. Scelerisque"
          className="max-sm:my-[48px] mt-[40px] mb-[40px]"
        />
        <div className="text-white px-6 mt-[101] relative max-sm:hidden">
          <div className="grid grid-cols-5 border-b border-[rgba(255,255,255,0.10)] pb-4 mb-4  text-white text-base font-bold uppercase tracking-wider leading-[18px]">
            <div>NAME</div>
            <div>DESCRIPTION</div>
            <div>MARKET CAP</div>
            <div>VOLUME</div>
            <div>WEBSITE</div>
          </div>
          {data.map((coin, idx) => (
            <div
              key={idx}
              className="grid grid-cols-5 items-center py-6 border-b border-[rgba(255,255,255,0.10)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex w-[46px] p-[7px_11px] justify-center items-center rounded-full bg-white">
                  {coin.icon()}
                </div>
                <div className="text-white text-[18px] font-bold leading-[19.998px]">
                  {coin.name}
                </div>
                <span className="flex w-[41px] pt-[6.5px] pr-[8.103px] pb-[7.5px] pl-[8.303px] items-start rounded-full bg-[#010D50] text-white font-dm-sans text-[12px] font-medium uppercase tracking-[0.6px] leading-[12px]">
                  {coin.symbol}
                </span>
              </div>
              <div className="text-white text-base font-normal leading-[26px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="text-white text-base font-bold leading-[26px]">
                {coin.marketCap}
              </div>
              <div className="text-white text-base font-bold leading-[26px]">
                {coin.volume}
              </div>
              <a
                href={coin.website}
                className="text-white text-base font-normal leading-[26px] underline decoration-solid decoration-[auto] underline-offset-[auto]"
              >
                Visit Website
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start w-full max-w-[358px] sm:hidden relative">
          <div className="flex justify-between items-center w-full mb-4">
            <button
              onClick={handlePrevToken}
              className="text-white text-2xl font-bold p-2 hover:bg-[#010D50]/30 rounded-full transition"
            >
              &lt;
            </button>
            <span className="text-white text-sm">
              {selectedTokenIndex + 1} / {data.length}
            </span>
            <button
              onClick={handleNextToken}
              className="text-white text-2xl font-bold p-2 hover:bg-[#010D50]/30 rounded-full transition"
            >
              &gt;
            </button>
          </div>

          <div className="flex flex-col items-start gap-4 py-8 w-full border-b border-white/10">
            <div className="flex flex-col justify-center text-white text-[16px] font-bold leading-[18px] tracking-[0.96px] uppercase">
              Name
            </div>
            <div className="flex items-center gap-4">
              <div className="flex w-[46px] p-[7px_11px] justify-center items-center rounded-full bg-white">
                {data[selectedTokenIndex].icon()}
              </div>
              <div className="text-white text-[18px] font-bold leading-[19.998px]">
                {data[selectedTokenIndex].name}
              </div>
              <span className="flex w-[41px] pt-[6.5px] pr-[8.103px] pb-[7.5px] pl-[8.303px] items-start rounded-full bg-[#010D50] text-white font-dm-sans text-[12px] font-medium uppercase tracking-[0.6px] leading-[12px]">
                {data[selectedTokenIndex].symbol}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 py-8 w-full border-b border-white/10">
            <div className="flex flex-col justify-center text-white text-[16px] font-bold leading-[18px] tracking-[0.96px] uppercase">
              DESCRIPTION
            </div>
            <p className="text-white text-base font-normal leading-[26px] w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 py-8 w-full border-b border-white/10">
            <div className="flex flex-col justify-center text-white text-[16px] font-bold leading-[18px] tracking-[0.96px] uppercase">
              MARKET CAP
            </div>
            <p className="text-white text-base font-normal leading-[26px] w-full">
              {data[selectedTokenIndex].marketCap}
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 py-8 w-full border-b border-white/10">
            <div className="flex flex-col justify-center text-white text-[16px] font-bold leading-[18px] tracking-[0.96px] uppercase">
              VOLUME
            </div>
            <p className="text-white text-base font-normal leading-[26px] w-full">
              {data[selectedTokenIndex].volume}
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 py-8 w-full border-b border-white/10">
            <div className="flex flex-col justify-center text-white text-[16px] font-bold leading-[18px] tracking-[0.96px] uppercase">
              WEBSITE
            </div>
            <a
              href={data[selectedTokenIndex].website}
              className="text-white text-base font-normal leading-[26px] underline decoration-solid decoration-[auto] underline-offset-[auto]"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
