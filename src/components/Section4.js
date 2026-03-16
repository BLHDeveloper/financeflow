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
}) => {
  return (
    <section className="bg-[#0328EE] my-16 sm:my-24 lg:my-32">
      <div className="container-main grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 py-12 sm:py-16 lg:py-20">
        {/* Content */}
        <div className="flex flex-col gap-4 max-sm:items-center max-sm:text-center">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-[42px] font-bold leading-tight lg:leading-[55px] max-w-xl">
            {title}
          </h2>
          <p className="text-white/90 text-base sm:text-lg font-normal leading-7 sm:leading-8 max-w-lg">
            {description}
          </p>
          <div className="pt-4">
            <Button label={buttonLabel} variant={buttonVariant} />
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src={image}
            alt="FinanceFlow app illustration"
            width={1512}
            height={500}
            className="w-full max-w-lg h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

Section4.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonVariant: PropTypes.string,
};

export default Section4;
