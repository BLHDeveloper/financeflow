import React, { memo } from "react";
import Logo from "./Logo";
import Button from "./Button";
import { SOCIAL_ICONS, MENU_LINKS, DOWNLOAD_OPTIONS } from "../data/footerData";

// Composant pour les icônes sociales réutilisables - optimisé avec memo
const SocialIcon = memo(({ icon }) => (
  <a
    href={`https://${icon.id}.com/financeflow`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={icon.ariaLabel}
    className="hover:opacity-80 transition-opacity"
  >
    <div className="w-[36px] h-[36px] rounded-full bg-white/50 hover:bg-white/60 flex items-center justify-center transition-colors">
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

SocialIcon.displayName = 'SocialIcon';

// Composant pour les liens de navigation du footer - optimisé avec memo
const FooterNavLinks = memo(({ section }) => (
  <div className="flex flex-col items-start gap-[18px]">
    {section.links.map((link) => (
      <a
        key={link.label}
        href={link.href}
        className="text-white text-[14px] font-medium leading-[16px] tracking-[1.4px] uppercase hover:text-blue-300 transition-colors"
      >
        {link.label}
      </a>
    ))}
  </div>
));

FooterNavLinks.displayName = 'FooterNavLinks';

// Composant pour les boutons de téléchargement - optimisé avec memo
const DownloadButton = memo(({ option }) => (
  <Button
    label={option.label}
    leftIcon={option.svgPath}
    className="h-[70px]"
    href={`#download-${option.id}`}
  />
));

DownloadButton.displayName = 'DownloadButton';

// Composant principal du footer avec des props pour plus de flexibilité
const Footer = ({ 
  backgroundColor = "#010D50",
  socialIcons = SOCIAL_ICONS,
  menuLinks = MENU_LINKS,
  downloadOptions = DOWNLOAD_OPTIONS,
  copyrightText = "All rights reserved"
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-[${backgroundColor}]`} aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-[133px] pt-[56px] pb-[32px] max-sm:px-6 max-sm:pt-[40px] max-sm:pb-[63px]">
        <div className="flex max-sm:flex-col max-sm:gap-6 justify-between items-center mb-[96px] max-sm:mb-[45px]">
          <Logo />
          <div className="flex items-center gap-[12px]">
            {socialIcons.map((icon) => (
              <SocialIcon key={icon.id} icon={icon} />
            ))}
          </div>
        </div>

        <div className="flex max-sm:flex-col max-sm:gap-[56px] justify-between pb-[128px] max-sm:pb-[32px]">
          {/* Navigation section */}
          <div className="flex-col">
            <div className="flex pr-[224px] pb-[31px] items-center border-b border-white max-sm:pr-0">
              <h3 className="text-white text-[18px] font-bold leading-[26px] tracking-[0.9px] uppercase">
                Menu
              </h3>
            </div>
            <div className="flex justify-between items-start pt-[35px] gap-[56px] max-sm:gap-[32px]">
              {menuLinks.map((section) => (
                <FooterNavLinks key={section.id} section={section} />
              ))}
            </div>
          </div>

          {/* Download app section */}
          <div className="px-[34px] py-[44px] max-sm:px-[34px] rounded-[40px] bg-white/10 max-w-[600px]">
            <h3 className="text-white text-[18px] font-bold leading-[26px] tracking-[0.9px] uppercase mb-[12px] max-sm:mb-[18px]">
              Download our Application
            </h3>
            <p className="text-white text-[18px] font-normal leading-[32px] max-sm:self-stretch sm:max-w-[420px] mb-[24px] max-sm:mb-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sed nulla integer
            </p>
            <div className="sm:flex sm:items-center gap-[16px] max-sm:flex max-sm:flex-col max-sm:self-stretch">
              {downloadOptions.map((option) => (
                <DownloadButton key={option.id} option={option} />
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-white/30 mb-[31px]"></div>

        <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-4">
          <p className="text-white text-[16px] font-normal leading-[26px]">
            © {currentYear} FinanceFlow. {copyrightText}
          </p>
          <div className="flex gap-6 max-sm:gap-4">
            <a
              href="/terms"
              className="text-white hover:text-blue-300 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/privacy"
              className="text-white hover:text-blue-300 transition-colors"
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
