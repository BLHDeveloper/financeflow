import React from "react";
import Button from "@/components/Button";
import Image from "next/image";
import Featured from "@/components/Featured";

const HERO_CONFIG = {
  title: "Buy, trade, and hold 350+ cryptocurrencies",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat.",
  buttons: [
    { label: "Download App", variant: "primary" },
    { label: "View Pricing", variant: "secondary" },
  ],
};

const BackgroundCircle = () => (
  <div className="absolute w-full max-w-[680px] h-[680px] right-0 bottom-0 overflow-hidden pointer-events-none">
    <div className="w-full h-full filter blur-[48px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 681 681"
        fill="none"
        className="w-full h-full"
      >
        <circle
          cx="341"
          cy="340.5"
          r="340"
          fill="#0328EE"
          fillOpacity="0.2"
        />
      </svg>
    </div>
  </div>
);

const HeroContent = ({ title, description, buttons }) => (
  <div className="flex flex-col items-start justify-center gap-4 animate-fade-in-up">
    <h1 className="text-white text-4xl sm:text-5xl lg:text-[66px] font-bold leading-tight lg:leading-[80px] tracking-[-1px] max-w-2xl">
      {title}
    </h1>
    <p className="text-white/80 text-base sm:text-lg font-normal leading-7 sm:leading-8 max-w-xl">
      {description}
    </p>
    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 pt-4 sm:pt-6">
      {buttons.map((btn, index) => (
        <Button key={index} label={btn.label} variant={btn.variant} />
      ))}
    </div>
  </div>
);

const Section1 = ({
  heroConfig = HERO_CONFIG,
  showBackground = true,
  showFeatured = true,
}) => {
  return (
    <section className="relative w-full overflow-hidden">
      {showBackground && <BackgroundCircle />}

      {/* Hero */}
      <div className="container-main grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-4 pt-12 sm:pt-20 pb-16 sm:pb-28">
        <HeroContent
          title={heroConfig.title}
          description={heroConfig.description}
          buttons={heroConfig.buttons}
        />

        <div className="relative flex justify-center lg:justify-end">
          <Image
            src="/Images/Computers.svg"
            alt="Cryptocurrency trading interface"
            width={971}
            height={585}
            className="w-full max-w-2xl h-auto"
            priority
          />
        </div>
      </div>

      {/* Featured */}
      {showFeatured && <Featured />}
    </section>
  );
};

export default Section1;
