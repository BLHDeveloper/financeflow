"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Button from "./Button";
import Logo from "./Logo";
import LogoMobile from "./LogoMobile";

// Configuration des liens de navigation dans un seul endroit
const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Tokens", href: "/tokens" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

// Composant pour les liens de navigation avec accessibilité améliorée
const NavLink = ({ href, label, isActive, onClick }) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault(); // Empêcher la navigation par défaut
      onClick(href);
    }}
    className={`text-white text-[14px] font-medium leading-[16px] tracking-[1.4px] uppercase transition-all duration-200 max-sm:text-[32px] max-sm:leading-[32px] ${
      isActive
        ? "border-b-1 border-white font-bold"
        : "hover:border-b-1 hover:border-white/50"
    }`}
    aria-current={isActive ? "page" : undefined}
  >
    {label}
  </a>
);

// Composant pour le menu mobile avec accessibilité
const MobileMenuButton = ({ isOpen, toggleMenu }) => (
  <button
    className="flex w-[45px] h-[45px] p-[10px] justify-center items-center shrink-0 rounded-full bg-[#0328EE] hover:bg-[#0220c9] transition-colors"
    onClick={toggleMenu}
    aria-expanded={isOpen}
    aria-label={isOpen ? "Close menu" : "Open menu"}
  >
    <div className="w-[25px] h-[20px] relative">
      <span
        className={`block absolute h-0.5 w-full bg-white transition-transform duration-300 ease-in-out ${
          isOpen ? "rotate-45 top-2.5" : "top-0"
        }`}
      ></span>
      <span
        className={`block absolute h-0.5 w-full bg-white top-2.5 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`block absolute h-0.5 w-full bg-white transition-transform duration-300 ease-in-out ${
          isOpen ? "-rotate-45 top-2.5" : "top-5"
        }`}
      ></span>
    </div>
  </button>
);

// Menu mobile avec animation
const MobileMenu = ({ isOpen, links, currentPath, handleLinkClick }) => {
  if (!isOpen) return null;

  return (
    <>
      <nav className="flex flex-col items-center gap-10 my-[98px]">
        {links.map((link, index) => (
          <NavLink
            key={index}
            href={link.href}
            label={link.label}
            isActive={
              currentPath === link.href ||
              (link.href !== "/" && currentPath.startsWith(link.href))
            }
            onClick={(href) => handleLinkClick(href, index)}
          />
        ))}
        <Button label="Download App" />
      </nav>
    </>
  );
};

const Header = () => {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Gestion du scroll pour changer l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href, index) => {
    setIsMenuOpen(false);
    router.push(href);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Désactive le scroll quand le menu est ouvert
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#020B43]/90 backdrop-blur-md shadow-lg" : ""
      }`}
    >
      {/* Version Desktop */}
      <div className="hidden md:block px-[133px] py-[33px] relative">
        <div className="flex justify-between items-center px-6">
          <div className="flex items-center gap-8">
            <Logo />
            <div className="w-px h-[66px] bg-[#010D50]"></div>
            <nav aria-label="Main navigation">
              <ul className="flex items-start gap-[27px] px-[1px] py-[7px]">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      href={link.href}
                      label={link.label}
                      isActive={
                        pathname === link.href ||
                        (link.href !== "/" && pathname.startsWith(link.href))
                      }
                      onClick={(href) => handleLinkClick(href, index)}
                    />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <Button label="Download App" />
        </div>
      </div>

      {/* Version Mobile */}
      <div className="block md:hidden p-[24px] relative">
        <div className="flex justify-between items-center">
          <LogoMobile />
          <MobileMenuButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <MobileMenu
          isOpen={isMenuOpen}
          links={navigationLinks}
          currentPath={pathname}
          handleLinkClick={handleLinkClick}
        />
      </div>
    </header>
  );
};

export default Header;
