import React from "react";
import Button from "@/components/Button";
import Image from "next/image";
import Featured from "@/components/Featured";

// Constantes pour les textes et configurations
const HERO_CONFIG = {
  title: "Buy, trade, and hold 350+ cryptocurrencies",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat.",
  buttons: [
    { label: "Download App", variant: "primary" },
    { label: "View Pricing", variant: "secondary" }
  ]
};

const BackgroundCircle = () => (
  <div className="absolute w-full max-w-[680px] h-[680px] p-[0px_0px_0px_80px] right-0 bottom-0 overflow-hidden pointer-events-none ">
    <div className="w-full h-full filter blur-[48px]">
      <div className="w-full h-full shrink-0">
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
  </div>
);

const HeroContent = ({ title, description, buttons }) => (
  <div className="flex flex-col sm:items-start justify-start gap-2 sm:gap-[9px] pt-[120px] max-sm:pt-0 max-sm:px-4 sm:pl-[157px]">
    <h1 className="text-white text-4xl sm:text-[66px] font-bold leading-[46px] sm:leading-[80px] tracking-[-1px] sm:w-[738px] max-sm:w-[320px]">
      {title}
    </h1>
    <p className="text-white text-base sm:text-lg font-normal leading-[26px] sm:leading-8 max-w-[568px] max-sm:max-w-[320px]">
      {description}
    </p>
    <div className="flex max-sm:flex-col sm:items-start gap-4 sm:gap-7 pt-6 sm:pt-8">
      {buttons.map((btn, index) => (
        <Button 
          key={index} 
          label={btn.label} 
          variant={btn.variant} 
        />
      ))}
    </div>
  </div>
);

const Section1 = ({ 
  heroConfig = HERO_CONFIG,
  showBackground = true,
  showFeatured = true 
}) => {
  return (
    <div className="relative sm:h-[940px] w-full overflow-hidden">
      {/* Background decoration */}
      {showBackground && <BackgroundCircle />}

      {/* Hero section */}
      <div className="flex max-sm:flex-col pt-[86px] pb-[170px] max-sm:pb-20 max-sm:pt-12">
        <HeroContent 
          title={heroConfig.title}
          description={heroConfig.description}
          buttons={heroConfig.buttons}
        />
        
        <Image
          src="/Images/Computers.svg"
          alt="Cryptocurrency trading interface"
          width={971}
          height={585}
          className="relative max-sm:pt-10 max-sm:px-4"
          priority
        />
      </div>

      {/* Featured section */}
      {showFeatured && <Featured />}
    </div>
  );
};

export default Section1;
