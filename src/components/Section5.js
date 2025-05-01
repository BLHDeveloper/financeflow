"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";

const testimonials = [
  {
    text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in“",
    user: "John Carter",
    role: "Role, Company",
    image: "/images/user1.jpg",
  },
  {
    text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in“",
    user: "John Carter",
    role: "Role, Company",
    image: "/images/user1.jpg",
  },
  {
    text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in“",
    user: "John carter",
    role: "Role, Company",
    image: "/images/user1.jpg",
  },
  {
    text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in“",
    user: "John carter",
    role: "Role, Company",
    image: "/images/user1.jpg",
  },
  {
    text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in“",
    user: "John carter",
    role: "Role, Company",
    image: "/images/user1.jpg",
  },
  {
    text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in“",
    user: "John carter",
    role: "Role, Company",
    image: "/images/user1.jpg",
  },
];
const sections = [
  {
    title: "Get started today",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.",
    features: [
      {
        icon: (
          // SVG 1
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="27"
            viewBox="0 0 29 27"
            fill="none"
          >
            <g clipPath="url(#clip0_13_151)">
              <path
                opacity="0.4"
                d="M22.6319 6.7876C26.1005 6.7876 28.9238 9.70258 28.9238 13.2853V20.4069C28.9238 23.9809 26.1076 26.8886 22.6461 26.8886H6.91497C3.44495 26.8886 0.620255 23.9751 0.620255 20.3923V13.2707C0.620255 9.69674 3.43788 6.7876 6.90082 6.7876H8.23109H22.6319Z"
                fill="white"
              />
              <path
                d="M15.5449 19.1578L19.6617 14.9577C20.0862 14.5236 20.0862 13.825 19.6588 13.3924C19.2315 12.9611 18.5423 12.9626 18.1177 13.3952L15.8633 15.6951V1.10681C15.8633 0.495907 15.3751 0 14.7722 0C14.1708 0 13.684 0.495907 13.684 1.10681V15.6951L11.4282 13.3952C11.0036 12.9626 10.3144 12.9611 9.88705 13.3924C9.67335 13.6094 9.5658 13.8926 9.5658 14.1772C9.5658 14.4589 9.67335 14.7421 9.88421 14.9577L14.001 19.1578C14.2062 19.3663 14.4835 19.4841 14.7722 19.4841C15.0623 19.4841 15.3397 19.3663 15.5449 19.1578Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_13_151">
                <rect width="29" height="27" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ),
        label: "Download app",
        className: "pt-[10px] pr-[8px] pb-[9px] pl-[9px]",
        size: "w-[29px] h-[27px]",
      },
      {
        icon: (
          // SVG 2
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="31"
            viewBox="0 0 24 31"
            fill="none"
          >
            <g clipPath="url(#clip0_13_158)">
              <path
                d="M11.7719 20.1763C5.42288 20.1763 0.00219727 21.1913 0.00219727 25.2468C0.00219727 29.3007 5.38989 30.3523 11.7719 30.3523C18.1193 30.3523 23.5416 29.3373 23.5416 25.2818C23.5416 21.2263 18.1539 20.1763 11.7719 20.1763Z"
                fill="white"
              />
              <path
                opacity="0.4"
                d="M11.7719 16.3141C16.0947 16.3141 19.5598 12.8043 19.5598 8.42592C19.5598 4.04747 16.0947 0.536133 11.7719 0.536133C7.44922 0.536133 3.98413 4.04747 3.98413 8.42592C3.98413 12.8043 7.44922 16.3141 11.7719 16.3141Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_13_158">
                <rect width="24" height="31" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ),
        label: "Create a free account",
        className: "pt-[8px] pr-11px] pb-[7px] pl-[11px]",
        size: "w-[34px] h-[31px]",
      },
      {
        icon: (
          // SVG 3
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="23"
            viewBox="0 0 34 23"
            fill="none"
          >
            <g clipPath="url(#clip0_13_165)">
              <path
                d="M29.5436 3.65381H6.39514C4.186 3.65381 2.39514 5.44467 2.39514 7.65381V18.7249C2.39514 20.934 4.186 22.7249 6.39514 22.7249H29.5436C31.7528 22.7249 33.5436 20.934 33.5436 18.7249V7.65381C33.5436 5.44467 31.7528 3.65381 29.5436 3.65381Z"
                fill="white"
                fillOpacity="0.4"
              />
              <path
                d="M26.3587 0.163574H4C1.79086 0.163574 0 1.95444 0 4.16357V15.2347C0 17.4438 1.79086 19.2347 4 19.2347H26.3587C28.5678 19.2347 30.3587 17.4438 30.3587 15.2347V4.16357C30.3587 1.95444 28.5678 0.163574 26.3587 0.163574Z"
                fill="white"
              />
              <path
                d="M15.1794 13.7446C17.4137 13.7446 19.225 11.9333 19.225 9.69894C19.225 7.46461 17.4137 5.65332 15.1794 5.65332C12.9451 5.65332 11.1338 7.46461 11.1338 9.69894C11.1338 11.9333 12.9451 13.7446 15.1794 13.7446Z"
                fill="#0328EE"
              />
              <path
                d="M6.06441 8.29239C7.20455 8.29239 8.12882 7.36813 8.12882 6.22798C8.12882 5.08784 7.20455 4.16357 6.06441 4.16357C4.92427 4.16357 4 5.08784 4 6.22798C4 7.36813 4.92427 8.29239 6.06441 8.29239Z"
                fill="#0328EE"
              />
              <path
                d="M24.2943 15.2348C25.4344 15.2348 26.3587 14.3105 26.3587 13.1704C26.3587 12.0302 25.4344 11.106 24.2943 11.106C23.1542 11.106 22.2299 12.0302 22.2299 13.1704C22.2299 14.3105 23.1542 15.2348 24.2943 15.2348Z"
                fill="#0328EE"
              />
            </g>
            <defs>
              <clipPath id="clip0_13_165">
                <rect width="34" height="23" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ),
        label: "Start trading",
        className: "pt-[12px] pr-[6px] pb-[11px] pl-[6px]",
        size: "w-[34px] h-[23px]",
      },
    ],
  },
];

const Section5 = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollRef.current;
      if (!container) return;
      const scrollLeft = container.scrollLeft;
      const itemWidth = container.firstChild?.offsetWidth || 1;
      const gap = 26;
      const index = Math.round(scrollLeft / (itemWidth + gap));
      setActiveIndex(index);
    };
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div className="flex flex-col gap-[40px] ">
        <div className="flex sm:justify-between sm:items-center sm:px-[133px] max-sm:px-4  max-sm:flex-col  max-sm:gap-[22px] max-sm:w-[358px]">
          <h2 className="text-white text-[42px] max-sm:text-[28px] font-bold leading-[55.02px] max-sm:leading-[36px]">
            What our users say?
          </h2>
          <Button label="Download App" />
        </div>

        <div className="flex flex-col">
          <div
            className="flex items-start gap-[26px] max-sm:gap-[8px] overflow-x-scroll scrollbar-hide px-[133px] max-sm:px-4"
            ref={scrollRef}
          >
            {testimonials.map((t, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-start gap-[25px] p-[65px_50px_66px_50px] rounded-[40px] bg-[#010D50] max-sm:w-[343px]`}
                  style={{ opacity: isActive ? 1 : 0.3 }}
                >
                  <p
                    className={`text-[18px] font-normal leading-[32.004px] sm:w-[468px] max-sm:w-full max-sm:self-stretch ${
                      isActive ? "text-white" : "text-white/30"
                    }`}
                  >
                    {t.text}
                  </p>
                  <div className="flex items-center gap-[22px] w-[486px] ">
                    <Image
                      src={t.image}
                      alt={t.user}
                      width={58}
                      height={58}
                      className="rounded-full"
                    />
                    <div className="flex flex-col justify-center items-start gap-[6px] pr-[2px]">
                      <p
                        className={`${
                          isActive ? "text-white" : "text-white/30"
                        } text-[16px] font-bold leading-[18px] tracking-[0.8px] uppercase`}
                      >
                        {t.user}
                      </p>
                      <p
                        className={`${
                          isActive
                            ? "text-white"
                            : "text-[rgba(241,241,249,0.30)]"
                        } text-[16px] font-normal leading-[18px] tracking-[0.8px] uppercase`}
                      >
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pt-[40px] flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={testimonials.length * 28}
              height="14"
              viewBox={`0 0 ${testimonials.length * 28} 14`}
              fill="none"
            >
              {testimonials.map((_, i) => (
                <rect
                  key={i}
                  x={i * 28}
                  width="14"
                  height="14"
                  rx="7"
                  fill="white"
                  fillOpacity={activeIndex === i ? "1" : "0.4"}
                />
              ))}
            </svg>
          </div>
        </div>
      </div>
      <div className="flex sm:justify-between max-sm:flex-col sm:items-center px-[133px] pt-[159px] pb-[170px] max-sm:pt-[120px] max-sm:px-[16px] max-sm:pb-[80px]">
        <div className="sm:w-[475px] sm:h-[356px] flex-shrink-0 max-sm:inline-flex max-sm:flex-col max-sm:items-start max-sm:gap-[16px] max-sm:w-[330px]">
          <h2 className="text-white text-[42px] max-sm:text-[28px] font-bold leading-[55.02px] max-sm:leading-[32px] sm:w-[475px] sm:mb-[24px]">
            {sections[0].title}
          </h2>
          <p className="text-white text-[18px] max-sm:text-[16px] font-normal leading-[32.004px] max-sm:leading-[26px] sm:w-[470px]">
            {sections[0].description}
          </p>
          <div className="flex flex-col gap-[17px] sm:mt-[40px]">
            {sections[0].features.map((feature, idx) => (
              <div className="flex items-center gap-[17px]" key={idx}>
                <div
                  className={`flex ${feature.className} justify-center items-center rounded-[13px] bg-[#0328EE]`}
                >
                  <div className="flex items-start">
                    <div className={feature.size}>{feature.icon}</div>
                  </div>
                </div>
                <p className="text-white font-dm-sans text-lg font-normal leading-[32.004px]">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center w-[662px] h-[400px] max-sm:w-[358px] flex-shrink-0 rounded-[40px] bg-[#010D50] max-sm:mt-[40px]">
          <div className="w-[100px] h-[100px] flex-shrink-0 fill-white/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
            >
              <rect
                width="100"
                height="100"
                rx="50"
                fill="white"
                fillOpacity="0.2"
              />
              <path
                d="M40.9305 62.2345C40.9305 63.3895 42.178 64.1139 43.1812 63.5413L65.2411 50.9515C66.253 50.3741 66.253 48.9152 65.2411 48.3377L43.1812 35.7479C42.178 35.1754 40.9305 35.8998 40.9305 37.0548V62.2345Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
