import React from "react";
import Image from "next/image";
import Icon1 from "../app/icon1.svg";
import Icon2 from "../app/icon2.svg";
import Icon3 from "../app/icon3.svg";
import Icon4 from "../app/icon4.svg";
import Icon5 from "../app/icon5.svg";

const Featured = ({ title = "Finance flow has been featured on" }) => {
  const featuredIcons = [
    { src: Icon1, alt: "Icon1" },
    { src: Icon2, alt: "Icon2" },
    { src: Icon3, alt: "Icon3" },
    { src: Icon4, alt: "Icon4" },
    {
      src: Icon5,
      alt: "Icon5",
      className: "max-sm:col-span-2 max-sm:mx-auto",
    },
  ];

  return (
    <div className="container-main pb-8">
      <div className="flex flex-col gap-8">
        <p className="text-white/60 text-center text-base sm:text-lg font-normal leading-8">
          {title}
        </p>
        <div className="flex justify-between items-center max-sm:grid max-sm:grid-cols-2 max-sm:gap-6 max-sm:justify-items-center">
          {featuredIcons.map((icon, index) => (
            <div
              key={index}
              className={`flex w-[140px] sm:w-[184px] h-[24px] sm:h-[33px] items-start flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity ${
                icon.className || ""
              }`}
            >
              <Image src={icon.src} alt={icon.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
