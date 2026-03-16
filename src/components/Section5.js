"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";
import IconSelector from "./icons/IconSelector";

import testimonials from "../data/testimonials.json";
import sections from "../data/sections.json";

const useScrollTracking = (scrollRef) => {
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
  }, [scrollRef]);

  return activeIndex;
};

const TestimonialCard = ({ testimonial, isActive }) => (
  <div
    className={`flex flex-col items-start gap-6 p-8 sm:p-12 rounded-[32px] bg-[#010D50] min-w-[300px] sm:min-w-[500px] flex-shrink-0 transition-opacity duration-500`}
    style={{ opacity: isActive ? 1 : 0.3 }}
  >
    <p
      className={`text-base sm:text-lg font-normal leading-7 sm:leading-8 ${
        isActive ? "text-white" : "text-white/30"
      }`}
    >
      {testimonial.text}
    </p>
    <div className="flex items-center gap-5">
      <Image
        src="/Images/user1.jpg"
        alt={testimonial.user}
        width={58}
        height={58}
        className="rounded-full"
      />
      <div className="flex flex-col justify-center items-start gap-1.5">
        <p
          className={`${
            isActive ? "text-white" : "text-white/30"
          } text-base font-bold leading-[18px] tracking-[0.8px] uppercase`}
        >
          {testimonial.user}
        </p>
        <p
          className={`${
            isActive ? "text-white/70" : "text-white/20"
          } text-sm font-normal leading-[18px] tracking-[0.8px] uppercase`}
        >
          {testimonial.role}
        </p>
      </div>
    </div>
  </div>
);

const PaginationIndicators = ({ count, activeIndex }) => (
  <div className="pt-8 flex justify-center items-center gap-3">
    {Array.from({ length: count }, (_, i) => (
      <div
        key={i}
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          activeIndex === i
            ? "bg-white scale-110"
            : "bg-white/30"
        }`}
      />
    ))}
  </div>
);

const TestimonialsSection = ({ testimonials }) => {
  const scrollRef = useRef(null);
  const activeIndex = useScrollTracking(scrollRef);

  return (
    <div className="flex flex-col gap-10">
      <div className="container-main flex sm:justify-between sm:items-center max-sm:flex-col max-sm:gap-5">
        <h2 className="text-white text-2xl sm:text-3xl lg:text-[42px] font-bold leading-tight lg:leading-[55px]">
          What our users say?
        </h2>
        <Button label="Download App" />
      </div>
      <div className="flex flex-col">
        <div
          className="flex items-start gap-6 overflow-x-auto scrollbar-hide snap-carousel pl-[var(--container-px)] pr-4"
          ref={scrollRef}
        >
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={idx}
              testimonial={testimonial}
              isActive={activeIndex === idx}
            />
          ))}
        </div>
        <PaginationIndicators
          count={testimonials.length}
          activeIndex={activeIndex}
        />
      </div>
    </div>
  );
};

const FeatureItem = ({ feature }) => (
  <div className="flex items-center gap-4">
    <div
      className={`flex ${feature.className} justify-center items-center rounded-[13px] bg-[#0328EE]`}
    >
      <div className="flex items-start">
        <div className={feature.size}>
          <IconSelector type={feature.iconType} />
        </div>
      </div>
    </div>
    <p className="text-white text-base sm:text-lg font-normal leading-8">
      {feature.label}
    </p>
  </div>
);

const GetStartedSection = ({ section }) => (
  <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-20 sm:py-28">
    {/* Content */}
    <div className="flex flex-col gap-4">
      <h2 className="text-white text-2xl sm:text-3xl lg:text-[42px] font-bold leading-tight lg:leading-[55px] max-w-lg">
        {section.title}
      </h2>
      <p className="text-white/80 text-base sm:text-lg font-normal leading-7 sm:leading-8 max-w-md">
        {section.description}
      </p>
      <div className="flex flex-col gap-4 sm:mt-6">
        {section.features.map((feature, idx) => (
          <FeatureItem key={idx} feature={feature} />
        ))}
      </div>
    </div>
    {/* Video Preview */}
    <div className="flex justify-center items-center w-full max-w-2xl h-[300px] sm:h-[400px] rounded-[32px] bg-[#010D50]">
      <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] fill-white/20">
        <IconSelector type="play" />
      </div>
    </div>
  </div>
);

const Section5 = () => {
  return (
    <>
      <TestimonialsSection testimonials={testimonials} />
      {sections && sections.length > 0 && (
        <GetStartedSection section={sections[0]} />
      )}
    </>
  );
};

export default Section5;
