"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";
import IconSelector from "./icons/IconSelector";

// Importation directe des données JSON
import testimonials from "../data/testimonials.json";
import sections from "../data/sections.json";

// Hooks personnalisés pour la gestion du défilement
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

// Composant réutilisable pour les témoignages
const TestimonialCard = ({ testimonial, isActive }) => (
  <div
    className={`flex flex-col items-start gap-[25px] p-[65px_50px_66px_50px] rounded-[40px] bg-[#010D50] max-sm:w-[343px]`}
    style={{ opacity: isActive ? 1 : 0.3 }}
  >
    <p
      className={`text-[18px] font-normal leading-[32.004px] sm:w-[468px] max-sm:w-full max-sm:self-stretch ${
        isActive ? "text-white" : "text-white/30"
      }`}
    >
      {testimonial.text}
    </p>
    <div className="flex items-center gap-[22px] w-[486px]">
      <Image
        src={testimonial.image}
        alt={testimonial.user}
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
          {testimonial.user}
        </p>
        <p
          className={`${
            isActive ? "text-white" : "text-[rgba(241,241,249,0.30)]"
          } text-[16px] font-normal leading-[18px] tracking-[0.8px] uppercase`}
        >
          {testimonial.role}
        </p>
      </div>
    </div>
  </div>
);

// Indicateurs de pagination pour les témoignages
const PaginationIndicators = ({ count, activeIndex }) => (
  <div className="pt-[40px] flex justify-center items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={count * 28}
      height="14"
      viewBox={`0 0 ${count * 28} 14`}
      fill="none"
    >
      {Array.from({ length: count }, (_, i) => (
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
);

// Section des témoignages
const TestimonialsSection = ({ testimonials }) => {
  const scrollRef = useRef(null);
  const activeIndex = useScrollTracking(scrollRef);

  return (
    <div className="flex flex-col gap-[40px]">
      <div className="flex sm:justify-between sm:items-center sm:px-[133px] max-sm:px-4 max-sm:flex-col max-sm:gap-[22px] max-sm:w-[358px]">
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

// Composant pour les fonctionnalités/étapes
const FeatureItem = ({ feature }) => (
  <div className="flex items-center gap-[17px]">
    <div
      className={`flex ${feature.className} justify-center items-center rounded-[13px] bg-[#0328EE]`}
    >
      <div className="flex items-start">
        <div className={feature.size}>
          <IconSelector type={feature.iconType} />
        </div>
      </div>
    </div>
    <p className="text-white  text-lg font-normal leading-[32.004px]">
      {feature.label}
    </p>
  </div>
);

// Section Get Started
const GetStartedSection = ({ section }) => (
  <div className="flex sm:justify-between max-sm:flex-col sm:items-center px-[133px] pt-[159px] pb-[170px] max-sm:pt-[120px] max-sm:px-[16px] max-sm:pb-[80px]">
    {/* Content */}
    <div className="sm:w-[475px] sm:h-[356px] flex-shrink-0 max-sm:inline-flex max-sm:flex-col max-sm:items-start max-sm:gap-[16px] max-sm:w-[330px]">
      <h2 className="text-white text-[42px] max-sm:text-[28px] font-bold leading-[55.02px] max-sm:leading-[32px] sm:w-[475px] sm:mb-[24px]">
        {section.title}
      </h2>
      <p className="text-white text-[18px] max-sm:text-[16px] font-normal leading-[32.004px] max-sm:leading-[26px] sm:w-[470px]">
        {section.description}
      </p>
      <div className="flex flex-col gap-[17px] sm:mt-[40px]">
        {section.features.map((feature, idx) => (
          <FeatureItem key={idx} feature={feature} />
        ))}
      </div>
    </div>
    {/* Video Preview */}
    <div className="flex justify-center items-center w-[662px] h-[400px] max-sm:w-[358px] flex-shrink-0 rounded-[40px] bg-[#010D50] max-sm:mt-[40px]">
      <div className="w-[100px] h-[100px] flex-shrink-0 fill-white/20">
        <IconSelector type="play" />
      </div>
    </div>
  </div>
);

// Composant principal
const Section5 = () => {
  // Utilisation directe des données JSON importées
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
