"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Button from "./Button";
import Logo from "./Logo";
import LogoMobile from "./LogoMobile";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Tokens", href: "/tokens" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const NavLink = ({ href, label, isActive, onClick }) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      onClick(href);
    }}
    className={`nav-link text-white text-[13px] font-medium leading-[16px] tracking-[1.4px] uppercase transition-colors duration-200 max-sm:text-[28px] max-sm:leading-[32px] ${
      isActive ? "font-bold" : "opacity-80 hover:opacity-100"
    }`}
    aria-current={isActive ? "page" : undefined}
  >
    {label}
  </a>
);

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
      />
      <span
        className={`block absolute h-0.5 w-full bg-white top-2.5 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`block absolute h-0.5 w-full bg-white transition-transform duration-300 ease-in-out ${
          isOpen ? "-rotate-45 top-2.5" : "top-5"
        }`}
      />
    </div>
  </button>
);

const MobileMenu = ({ isOpen, links, currentPath, handleLinkClick }) => {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu-enter">
      <nav className="flex flex-col items-center gap-8 py-12">
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
    </div>
  );
};

const Header = () => {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
    router.push(href);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#020B43]/80 backdrop-blur-xl shadow-lg shadow-black/10"
          : ""
      }`}
    >
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="container-main py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-8">
              <Logo />
              <div className="w-px h-10 bg-white/10" />
              <nav aria-label="Main navigation">
                <ul className="flex items-center gap-6 lg:gap-7">
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
      </div>

      {/* Mobile */}
      <div className="block md:hidden p-6 relative">
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
