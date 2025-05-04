import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import Button from "./Button";

const Section4 = ({
  title = "Explore endless possibilities with FinanceFlow",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.",
  image = "/Images/div.svg",
  buttonLabel = "Download App",
  buttonVariant = "outline",
  backgroundColor = "#0328EE",
}) => {
  // Styles constants pour améliorer la lisibilité
  const sectionStyles = {
    container: `flex max-sm:flex-col sm:justify-between items-center h-[513px] 
      max-sm:h-[609px] flex-shrink-0 sm:px-[133px] sm:mt-[116px] sm:mb-[200px] 
      max-sm:mb-[120px] max-sm:pt-[40px]`,
    content: `sm:w-[589px] sm:h-[293px] sm:flex-shrink-0 max-sm:inline-flex 
      max-sm:flex-col max-sm:gap-4 max-sm:text-center`,
    heading: ` text-[42px] max-sm:text-[28px] font-bold 
      leading-[55.02px] max-sm:leading-[36px] text-[#FFF] sm:mb-4 max-sm:w-[330px]`,
    paragraph: ` text-[18px] max-sm:text-[16px] font-normal 
      leading-[32.004px] max-sm:leading-[26px] text-[#FFF] w-[496px] max-sm:w-[330px] sm:mb-8`,
    image: `sm:mb-[110px] max-sm:w-[297.682px] max-sm:h-[319.774px]`,
  };

  return (
    <div className={sectionStyles.container} style={{ backgroundColor }}>
      <div className={sectionStyles.content}>
        <h2 className={sectionStyles.heading}>{title}</h2>
        <p className={sectionStyles.paragraph}>{description}</p>
        <Button label={buttonLabel} variant={buttonVariant} />
      </div>
      <Image
        src={image}
        alt="FinanceFlow app illustration"
        width={1512}
        height={500}
        className={sectionStyles.image}
        priority
      />
    </div>
  );
};

Section4.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonVariant: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Section4;
