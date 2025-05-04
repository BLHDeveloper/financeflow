import React from "react";
import Image from "next/image";
import FeatureIcon from "./icons/FeatureIcon";

// Composant réutilisable pour les caractéristiques
const FeatureItem = ({ icon, label, className = "p-[7px]", size = "w-[32px] h-[32px]" }) => (
  <div className="flex items-center gap-[17px]">
    <div className={`flex ${className} justify-center items-center rounded-[13px] bg-[#0328EE]`}>
      <div className="flex items-start">
        <div className={size}>
          <FeatureIcon icon={icon} />
        </div>
      </div>
    </div>
    <p className="text-white  text-lg font-normal leading-[32.004px]">
      {label}
    </p>
  </div>
);

// Composant de section réutilisable
const SectionContent = ({ data, isReversed = false }) => {
  const { title, description, image, imageProps, features } = data;
  
  const contentSection = (
    <div className="flex flex-col gap-[19px] max-sm:gap-[16px]">
      <h2 className="text-white  text-[42px] max-sm:text-[28px] font-bold leading-[55.02px] max-sm:leading-[36px] w-[475px] max-sm:w-[305px]">
        {title}
      </h2>
      <p className="text-white  text-[18px] max-sm:text-[16px] font-normal leading-[32.004px] max-sm:leading-[26px] w-[470px] max-sm:w-[330px]">
        {description}
      </p>
      <div className="flex flex-col gap-[17px] sm:mt-[13px]">
        {features.map((feature, idx) => (
          <FeatureItem 
            key={idx}
            icon={feature.iconName || `icon-${idx + 1}`}
            label={feature.label}
            className={feature.className}
            size={feature.size}
          />
        ))}
      </div>
    </div>
  );
  const imageSection = (
    <Image
      src={image}
      alt={title}
      {...imageProps}
    />
  );

  return (
    <div className={`flex max-sm:flex-col sm:justify-between sm:items-center ${isReversed ? 'sm:pl-[133px]' : 'sm:px-[133px]'} pt-[${isReversed ? '127' : '114'}px] max-sm:pt-[80px] max-sm:px-[16px] max-sm:gap-[40px] ${isReversed ? 'pb-[101px] max-sm:pb-[80px]' : ''} relative`}>
      {isReversed ? (
        <>
          {contentSection}
          {imageSection}
        </>
      ) : (
        <>
          {imageSection}
          {contentSection}
        </>
      )}
    </div>
  );
};

// Définition des données dynamiques pour chaque section avec des noms d'icônes au lieu de SVG intégrés
const sections = [
  {
    title: "Earn daily rewards on your idle tokens",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.",
    image: "/Images/Group2.svg",
    imageProps: {
      width: 501,
      height: 592,
      className:
        "max-sm:w-[324px] max-sm:h-[383px] max-sm:justify-center max-sm:items-center max-sm:mx-auto",
    },
    features: [
      {
        iconName: "chart",
        label: "Lowest fees in market",
        className: "p-[7px]",
        size: "w-[32px] h-[32px]",
      },
      {
        iconName: "bolt",
        label: "Fast and secure transactions",
        className: "pt-[5px] pr-[5px] pb-[4px] pl-[5px]",
        size: "w-[36px] h-[37px]",
      },
      {
        iconName: "lock",
        label: "256-bit secure encryption",
        className: "pt-[7px] pr-[10px] pb-[6px] pl-[11px]",
        size: "w-[25px] h-[33px]",
      },
    ],
  },
  {
    title: "Earn daily rewards on your idle tokens",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.",
    image: "/Images/Computers.svg",
    imageProps: { width: 971, height: 585 ,
       className:
        "sm:ml-[60px]",
    },
    features: [
      {
        iconName: "shield",
        label: "100% Private data",
        className: "pt-[7px] pr-[9px] pb-[6px] pl-[9px]",
        size: "w-[28px] h-[33px]",
      },
      {
        iconName: "dollar",
        label: "Fast and secure transactions",
        className: "pt-[5px] pr-[4px] pb-[4px] pl-[5px]",
        size: "w-[37px] h-[37px]",
      },
      {
        iconName: "chat",
        label: "256-bit secure encryption",
        className: "p-[7px]",
        size: "w-[32px] h-[32px]",
      },
    ],
  },
];

const Section3 = () => {
  return (
    <div className="flex flex-col justify-center relative overflow-hidden">
      <div className="absolute self-center w-[680px] h-[680px] flex-shrink-0 filter blur-[150px] fill-[#010D50]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="682"
          height="682"
          viewBox="0 0 682 682"
          fill="none"
        >
          <path
            d="M341 681.408C529.002 681.408 681.408 529.002 681.408 341C681.408 152.998 529.002 0.591797 341 0.591797C152.998 0.591797 0.591797 152.998 0.591797 341C0.591797 529.002 152.998 681.408 341 681.408Z"
            fill="#010D50"
          />
        </svg>
      </div>

      {/* Section 1 */}
      <SectionContent data={sections[0]} />

      {/* Section 2 */}
      <SectionContent data={sections[1]} isReversed={true} />
    </div>
  );
};

export default Section3;
