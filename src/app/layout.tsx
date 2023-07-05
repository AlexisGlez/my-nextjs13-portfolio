import "./globals.css";
import Script from "next/script";
import { Montserrat } from "next/font/google";
import type { Metadata } from "next";

import { NavBar } from "./(components)/NavBar";
import { Footer } from "./(components)/Footer";

const APP_NAME = "AG NextJS Portfolio";
const APP_DEFAULT_TITLE = "AlexisGlez NextJS Portfolio";
const APP_TITLE_TEMPLATE = "%s - AG NextJS Portfolio";
const APP_DESCRIPTION =
  "Alexis Glez Portfolio app made with NextJS 13.4, Tailwind, and Framer Motion.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  themeColor: "#FFC81E",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark`}
      >
        <Script id="tailwind-dark-theme" strategy="beforeInteractive">
          {`
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
            `}
        </Script>

        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
