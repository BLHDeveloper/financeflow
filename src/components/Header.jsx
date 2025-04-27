"use client";
import React, { useState } from "react";
import Button from "./Button";
import Logo from "./Logo";
import LogoMobile from "./LogoMobile";

const Header = () => {
  const [activeLink, setActiveLink] = useState(0);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Tokens", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <>
      {/* Version Desktop */}
      <header className="hidden md:block px-[133px] py-[33px] relative">
        <div className="flex justify-between items-center px-6">
          <div className="flex items-center gap-8">
            <Logo />
            <div className="w-px h-[66px] bg-[#010D50]"></div>
            <div className="flex items-start gap-[27px] px-[1px] py-[7px]">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => handleLinkClick(index)}
                  className={
                    activeLink === index
                      ? "text-white font-['DM_Sans'] text-[14px] font-medium leading-[16.002px] tracking-[1.4px] underline decoration-solid decoration-0 uppercase"
                      : "text-white font-['DM_Sans'] text-[14px] font-medium leading-[16.002px] tracking-[1.4px] uppercase"
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <Button label="Download App" />
          </div>
        </div>
      </header>
      {/* Version Mobile */}
      <header className="block md:hidden p-[24px]">
        <div className="flex justify-between items-center">
          <LogoMobile />
          <div className="flex w-[45px] h-[45px] px-[10px] py-[13px] justify-center items-center shrink-0 rounded-full bg-[#0328EE]">
            <div className="w-[25px] h-[20px] shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="20"
                viewBox="0 0 25 20"
                fill="none"
              >
                <rect width="25" height="2" fill="white" />
                <rect y="9" width="25" height="2" fill="white" />
                <rect y="18" width="25" height="2" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
