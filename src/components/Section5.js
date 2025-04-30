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
    </>
  );
};

export default Section5;
