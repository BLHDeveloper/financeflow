import "./globals.css";
import { DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "FinanceFlow - Cryptocurrency Trading Platform",
  description:
    "Buy, trade, and hold 350+ cryptocurrencies with FinanceFlow's secure platform",
  icons: {
    icon: "/images/favicon.svg",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "FinanceFlow - Cryptocurrency Trading Platform",
    description:
      "Buy, trade, and hold 350+ cryptocurrencies with FinanceFlow's secure platform",
    url: "https://financeflow.com",
    siteName: "FinanceFlow",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FinanceFlow Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FinanceFlow - Cryptocurrency Trading Platform",
    description:
      "Buy, trade, and hold 350+ cryptocurrencies with FinanceFlow's secure platform",
    images: ["/images/twitter-image.jpg"],
  },
  keywords: ["cryptocurrency", "bitcoin", "trading", "finance", "blockchain"],
  authors: [{ name: "FinanceFlow Team" }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.className}>
      <body
        data-app="true"
        data-new-gr-c-s-check-loaded="8.929.0"
        data-gr-ext-installed=""
      >
        <div className="absolute top-0 left-0 opacity-40 shrink-0 blur-[48px] fill-[#010D50] overflow-hidden pointer-events-none ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="590"
            height="608"
            viewBox="0 0 590 608"
            fill="none"
            className="max-sm:w-min max-sm:h-min"
          >
            <path
              d="M114 607.586C376.659 607.586 589.586 394.659 589.586 132C589.586 -130.659 376.659 -343.586 114 -343.586C-148.659 -343.586 -361.586 -130.659 -361.586 132C-361.586 394.659 -148.659 607.586 114 607.586Z"
              fill="#010D50"
            />
          </svg>
        </div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
