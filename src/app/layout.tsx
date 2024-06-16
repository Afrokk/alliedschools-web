import type { Metadata } from "next";
import "./globals.css";

import { Noto_Sans } from "next/font/google";

const NotoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Allied Schools - Norouz Campus",
  description: "Official website of Allied Schools - Norouz Campus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${NotoSans.className} flex justify-center items-center h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
