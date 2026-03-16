import React from "react";
import Image from "next/image";
import FeatureIcon from "./icons/FeatureIcon";

const FeatureItem = ({
  icon,
  label,
  className = "p-[7px]",
  size = "w-[32px] h-[32px]",
}) => (
  <div className="flex items-center gap-4">
    <div
      className={`flex ${className} justify-center items-center rounded-[13px] bg-[#0328EE]`}
    >
      <div className="flex items-start">
        <div className={size}>
          <FeatureIcon icon={icon} />
        </div>
      </div>
    </div>
    <p className="text-white text-base sm:text-lg font-normal leading-8">
      {label}
    </p>
  </div>
);

const SectionContent = ({ data, isReversed = false }) => {
  const { title, description, image, imageProps, features } = data;

  const contentSection = (
    <div className="flex flex-col gap-4 sm:gap-5">
      <h2 className="text-white text-2xl sm:text-3xl lg:text-[42px] font-bold leading-tight lg:leading-[55px] max-w-lg">
        {title}
      </h2>
      <p className="text-white/80 text-base sm:text-lg font-normal leading-7 sm:leading-8 max-w-md">
        {description}
      </p>
      <div className="flex flex-col gap-4 sm:mt-3">
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
    <div className="flex justify-center">
      <Image
        src={image}
        alt={title}
        {...imageProps}
        className={`w-full max-w-lg h-auto ${imageProps?.className || ""}`}
      />
    </div>
  );

  return (
    <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 sm:py-24 relative">
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

const sections = [
  {
    title: "Earn daily rewards on your idle tokens",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.",
    image: "/Images/Group2.svg",
    imageProps: {
      width: 501,
      height: 592,
      className: "max-sm:mx-auto",
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
    imageProps: {
      width: 971,
      height: 585,
      className: "",
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
      <div
        className="absolute self-center w-[680px] h-[680px] filter blur-[150px] pointer-events-none"
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
            fill="#010D50"
          />
        </svg>
      </div>

      <SectionContent data={sections[0]} />
      <SectionContent data={sections[1]} isReversed={true} />
    </div>
  );
};

export default Section3;
