import type { Metadata } from "next";
import "./globals.css";

import { Noto_Sans } from "next/font/google";

import { i18n, type Locale } from "../../i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const NotoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <body
        className={`${NotoSans.className} flex justify-center items-center h-screen`}
      >
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Allied Schools - Norouz Campus",
  description: "Official website of Allied Schools - Norouz Campus",
};
