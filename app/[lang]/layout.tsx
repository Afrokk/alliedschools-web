import "./globals.css";

import { NotoSans, NotoUrdu } from "./fonts";
import Navbar from "@components/navbar";
import { i18n, type Locale } from "@lib/i18n-config";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const fontClassName =
    params.lang === "ur" ? NotoUrdu.className : NotoSans.className;
  return (
    <html lang={params.lang}>
      <body className={fontClassName}>
        <Navbar lang={params.lang} />
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Allied Schools - Norouz Campus",
  description: "Official website of Allied Schools - Norouz Campus",
};
