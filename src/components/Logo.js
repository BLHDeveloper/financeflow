import React from "react";
import Lo from "../app/logo.svg";
import Titre from "../app/titre.svg";
import Image from "next/image";
const Logo = () => {
  return (
    <div className="flex items-center gap-3 w-[154px] h-[30px] cursor-pointer">
      <Image src={Lo} alt="Logo" />
      <Image src={Titre} alt="Titre" />
    </div>
  );
};

export default Logo;
