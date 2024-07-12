import "./globals.css";

import Navbar from "@components/navbar";
import LanguageContextProvider from "@components/language-context-provider";
import { NotoSans, NotoUrdu } from "./fonts";
import { i18n, type Locale } from "@lib/i18n-config";
import type { Metadata } from "next";
import { getDictionary } from "@utils/getDictionary";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const fontClassName =
    params.lang === "ur" ? NotoUrdu.className : NotoSans.className;
  const dictionary = await getDictionary(params.lang);
  return (
    <html lang={params.lang}>
      <body className={fontClassName}>
        <LanguageContextProvider dictionary={dictionary}>
          <Navbar dictionary={dictionary.nav} />
        </LanguageContextProvider>
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Allied Schools - Norouz Campus",
  description: "Official website of Allied Schools - Norouz Campus",
};
