import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import {PortfolioData} from "../data/portfolioData";

// Constantes pour les styles communs
const TEXT_STYLES = {
  title: "text-white  text-lg font-bold leading-[26px] tracking-[0.9px] uppercase",
  description: "text-white  text-base font-normal leading-[26px]",
  sectionTitle: "text-white  font-bold relative",
};

// Composant pour une carte de fonctionnalité
const FeatureCard = ({ feature: { title, description, icon, className } }) => (
  <div className="w-[325px] max-sm:w-[358px] h-[295px] flex-shrink-0 rounded-[40px] bg-[#010D50] pl-[23px] pt-[48px]">
    <div
      className={`inline-flex ${className} justify-center items-center rounded-[20px] bg-[#0328EE]`}
      aria-hidden="true"
    >
      <div className="flex items-start opacity-[0.8499]">{icon}</div>
    </div>
    <h3 className={`${TEXT_STYLES.title} pt-[20px]`}>{title}</h3>
    <p className={`${TEXT_STYLES.description} pr-[22px] pt-[7px] max-w-[279px]`}>
      {description}
    </p>
  </div>
);

// Composant pour l'application mobile
const MobileAppPromo = ({ title = "iOS & Android App", description }) => (
  <div className="w-[477px] max-sm:w-[358px] h-[622px] flex-shrink-0 rounded-[40px] bg-[#0328EE] pt-[44px] pl-[33px] max-sm:my-[16px]">
    <h3 className={`${TEXT_STYLES.title} text-xl tracking-[1px] pb-[22px]`}>
      {title}
    </h3>
    <p className={`${TEXT_STYLES.description} w-[383px] max-sm:w-[303px] mb-[37px] max-md:mb-[24px]`}>
      {description}
    </p>
    <Image
      src="/Images/iPhones.svg"
      alt="Mobile app interface"
      width={354}
      height={724}
      className="ml-[15px] max-sm:ml-[3px] max-sm:w-[285.452px] max-sm:h-[428px]"
    />
  </div>
);

const Section2 = () => {
  const LOREM_TEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.";
  
  return (
    <section className="portfolio-section pb-[80px]">
      <div className="flex-col justify-center items-center text-center pt-[174px] max-sm:pt-[65px] pb-[80px] max-sm:pl-[16px] max-sm:text-start">
        <div
          className="absolute right-0 filter blur-[150px] w-[680.816px] h-[680.816px] flex-shrink-0 fill-[rgba(3,40,238,0.3)]"
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
          className={`${TEXT_STYLES.sectionTitle} text-[42px] max-sm:text-[28px] leading-[55.02px] max-sm:leading-[36px] pb-[15px] max-sm:w-[273px]`}
        >
          Build your crypto portfolio
        </h2>
        <p
          className={`${TEXT_STYLES.description} text-[18px] max-sm:text-[16px] leading-[32.004px] max-sm:leading-[26px] max-sm:w-[314px] w-[496px] inline-block relative`}
        >
          {LOREM_TEXT}
        </p>
      </div>

      <div className="flex flex-row max-sm:flex-col justify-center items-center sm:gap-[27px] relative">
        <div className="flex flex-col gap-8 max-sm:gap-[16px]">
          {PortfolioData.slice(0, 2).map((feature, index) => (
            <FeatureCard key={`feature-left-${index}`} feature={feature} />
          ))}
        </div>

        <MobileAppPromo description={LOREM_TEXT} />

        <div className="flex flex-col gap-8 max-sm:gap-[16px]">
          {PortfolioData.slice(2).map((feature, index) => (
            <FeatureCard key={`feature-right-${index}`} feature={feature} />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center pt-[48px] max-sm:pt-[40px]">
        <Button label="Download App" />
      </div>
    </section>
  );
};

export default Section2;
