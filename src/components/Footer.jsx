import React, { memo } from "react";
import Logo from "./Logo";
import Button from "./Button";
import { SOCIAL_ICONS, MENU_LINKS, DOWNLOAD_OPTIONS } from "../data/footerData";

const SocialIcon = memo(({ icon }) => (
  <a
    href={`https://${icon.id}.com/financeflow`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={icon.ariaLabel}
    className="hover:opacity-80 transition-opacity"
  >
    <div className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden="true"
      >
        {icon.svgPath}
      </svg>
    </div>
  </a>
));

SocialIcon.displayName = "SocialIcon";

const FooterNavLinks = memo(({ section }) => (
  <div className="flex flex-col items-start gap-4">
    {section.links.map((link) => (
      <a
        key={link.label}
        href={link.href}
        className="nav-link text-white/80 text-sm font-medium leading-[16px] tracking-[1.4px] uppercase hover:text-white transition-colors"
      >
        {link.label}
      </a>
    ))}
  </div>
));

FooterNavLinks.displayName = "FooterNavLinks";

const DownloadButton = memo(({ option }) => (
  <Button
    label={option.label}
    leftIcon={option.svgPath}
    className="h-[70px]"
    href={`#download-${option.id}`}
  />
));

DownloadButton.displayName = "DownloadButton";

const Footer = ({
  socialIcons = SOCIAL_ICONS,
  menuLinks = MENU_LINKS,
  downloadOptions = DOWNLOAD_OPTIONS,
  copyrightText = "All rights reserved",
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#010D50]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container-main pt-12 sm:pt-14 pb-8">
        {/* Logo + social */}
        <div className="flex max-sm:flex-col max-sm:gap-6 justify-between items-center mb-16 sm:mb-20">
          <Logo />
          <div className="flex items-center gap-3">
            {socialIcons.map((icon) => (
              <SocialIcon key={icon.id} icon={icon} />
            ))}
          </div>
        </div>

        {/* Nav + Download */}
        <div className="flex max-sm:flex-col gap-12 sm:gap-8 justify-between pb-16 sm:pb-24">
          {/* Navigation */}
          <div className="flex-col">
            <div className="flex pb-6 items-center border-b border-white/20">
              <h3 className="text-white text-lg font-bold leading-[26px] tracking-[0.9px] uppercase">
                Menu
              </h3>
            </div>
            <div className="flex justify-between items-start pt-8 gap-10 sm:gap-14">
              {menuLinks.map((section) => (
                <FooterNavLinks key={section.id} section={section} />
              ))}
            </div>
          </div>

          {/* Download card */}
          <div className="px-8 py-10 rounded-[32px] bg-white/5 backdrop-blur-sm border border-white/10 max-w-xl">
            <h3 className="text-white text-lg font-bold leading-[26px] tracking-[0.9px] uppercase mb-3">
              Download our Application
            </h3>
            <p className="text-white/70 text-base sm:text-lg font-normal leading-7 sm:leading-8 max-w-md mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sed nulla integer
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {downloadOptions.map((option) => (
                <DownloadButton key={option.id} option={option} />
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="h-px bg-white/10 mb-8" />
        <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-4">
          <p className="text-white/60 text-sm sm:text-base font-normal leading-[26px]">
            © {currentYear} FinanceFlow. {copyrightText}
          </p>
          <div className="flex gap-6">
            <a
              href="/terms"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/privacy"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
