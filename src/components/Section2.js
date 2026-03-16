import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { PortfolioData } from "../data/portfolioData";

const TEXT_STYLES = {
  title:
    "text-white text-lg font-bold leading-[26px] tracking-[0.9px] uppercase",
  description: "text-white/80 text-base font-normal leading-[26px]",
  sectionTitle: "text-white font-bold relative",
};

const FeatureCard = ({ feature: { title, description, icon, className } }) => (
  <div className="glass-card w-full p-6 pt-10 sm:p-6 sm:pt-12 min-h-[240px]">
    <div
      className={`inline-flex ${className} justify-center items-center rounded-[20px] bg-[#0328EE]`}
      aria-hidden="true"
    >
      <div className="flex items-start opacity-[0.85]">{icon}</div>
    </div>
    <h3 className={`${TEXT_STYLES.title} pt-5`}>{title}</h3>
    <p className={`${TEXT_STYLES.description} pt-2 max-w-[280px]`}>
      {description}
    </p>
  </div>
);

const MobileAppPromo = ({
  title = "iOS & Android App",
  description,
}) => (
  <div className="w-full rounded-[40px] bg-[#0328EE] pt-10 pl-8 overflow-hidden">
    <h3
      className={`${TEXT_STYLES.title} text-xl tracking-[1px] pb-5`}
    >
      {title}
    </h3>
    <p
      className={`${TEXT_STYLES.description} max-w-sm mb-8`}
    >
      {description}
    </p>
    <Image
      src="/Images/iPhones.svg"
      alt="Mobile app interface"
      width={354}
      height={724}
      className="ml-4 w-auto max-h-[420px] sm:max-h-[500px]"
    />
  </div>
);

const Section2 = () => {
  const LOREM_TEXT =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.";

  return (
    <section className="pb-16 sm:pb-20">
      {/* Header */}
      <div className="container-main text-center sm:text-center max-sm:text-start pt-20 sm:pt-32 pb-12 sm:pb-20 relative">
        <div
          className="absolute right-0 top-0 filter blur-[150px] w-[500px] h-[500px] pointer-events-none"
          aria-hidden="true"
        >
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
        <h2
          className={`${TEXT_STYLES.sectionTitle} text-3xl sm:text-[42px] leading-tight sm:leading-[55px] pb-4 max-w-lg mx-auto max-sm:mx-0`}
        >
          Build your crypto portfolio
        </h2>
        <p
          className={`${TEXT_STYLES.description} text-base sm:text-lg leading-7 sm:leading-[32px] max-w-lg mx-auto max-sm:mx-0 relative`}
        >
          {LOREM_TEXT}
        </p>
      </div>

      {/* Cards grid */}
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch relative">
          {/* Left column: 2 small cards */}
          <div className="flex flex-col gap-6">
            {PortfolioData.slice(0, 2).map((feature, index) => (
              <FeatureCard key={`feature-left-${index}`} feature={feature} />
            ))}
          </div>

          {/* Center: Mobile app promo */}
          <MobileAppPromo description={LOREM_TEXT} />

          {/* Right column: 2 small cards */}
          <div className="flex flex-col gap-6">
            {PortfolioData.slice(2).map((feature, index) => (
              <FeatureCard key={`feature-right-${index}`} feature={feature} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center pt-10 sm:pt-12">
        <Button label="Download App" />
      </div>
    </section>
  );
};

export default Section2;
