import React from "react";
import Image from "next/image";
import Icon1 from "../app/icon1.svg";
import Icon2 from "../app/icon2.svg";
import Icon3 from "../app/icon3.svg";
import Icon4 from "../app/icon4.svg";
import Icon5 from "../app/icon5.svg";

const Featured = ({ title = "Finance flow has been featured on" }) => {
  // Centralisation des données des icônes
  const featuredIcons = [
    { src: Icon1, alt: "Icon1" },
    { src: Icon2, alt: "Icon2" },
    { src: Icon3, alt: "Icon3" },
    { src: Icon4, alt: "Icon4" },
    { src: Icon5, alt: "Icon5", className: "max-sm:col-span-2 max-sm:mx-auto" },
  ];

  // Styles communs pour les conteneurs d'icônes
  const iconContainerStyle = "flex w-[184px] h-[33px] max-sm:w-[134px] max-sm:h-[24px] items-start flex-shrink-0";

  return (
    <div className="px-[133px] max-sm:px-[16px]">
      <div className="flex flex-col gap-[34px] px-6">
        <p className="text-white text-center font-dm-sans text-[18px] max-sm:text-[16px] font-normal leading-[32px] max-sm:leading-[26px]">
          {title}
        </p>
        <div className="flex justify-between items-start max-sm:items-center max-sm:justify-center max-sm:grid max-sm:grid-cols-2 max-sm:gap-4 max-sm:self-center">
          {featuredIcons.map((icon, index) => (
            <div 
              key={index} 
              className={`${iconContainerStyle} ${icon.className || ""}`}
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
