import React from "react";
import LoMobile from "../app/LoMobile.svg";
import TitreMobile from "../app/TitreMobile.svg";
import Image from "next/image";
const LogoMobile = () => {
  return (
    <div className="flex items-center gap-3 w-[136px] h-[48px]">
      <Image src={LoMobile} alt="LoMobile" />
      <Image src={TitreMobile} alt="TitreMobile" />
    </div>
  );
};

export default LogoMobile;
