import Link from "next/link";
import Image from "next/image";
import LocaleSwitcher from "@components/locale-switch/locale-switch";
import { navigationMenuButtonStyles } from "@utils/navigationMenuButtonStyles";
import { NotoSans } from "@app/fonts";
import HamburgerMenu from "@components/hamburger-menu/hamburger-menu";

import type { Dictionary } from "@customTypes/dictionary";

// TA-DO: Remove secondary nav on mobile

export default async function Navbar({
  dictionary,
  currentLocale,
}: {
  dictionary: Dictionary["nav"];
  currentLocale: string;
}) {
  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-20 items-center">
            <Link
              href="#"
              className={`${NotoSans.className} flex items-center font-bold text-3xl tracking-tight`}
            >
              <div className="flex items-center">
                <Image
                  src="/allied-school-logo.png"
                  alt="Allied Schools Logo"
                  width={64}
                  height={64}
                  className="mr-3"
                />
                <div className="flex flex-col">
                  <p>
                    Allied
                    <span className="font-light text-black">Schools</span>
                  </p>
                  <p className="text-lg font-normal text-alliedDarkBlue -mt-2">
                    Nouroz Campus
                  </p>
                </div>
              </div>
            </Link>
            <nav className="hidden md:flex gap-10">
              <Link href="/" className={navigationMenuButtonStyles()}>
                {dictionary.home}
              </Link>
              <Link href="/about" className={navigationMenuButtonStyles()}>
                {dictionary.about}
              </Link>
              <Link href="/contact" className={navigationMenuButtonStyles()}>
                {dictionary.contact}
              </Link>
            </nav>
            <div className="hidden md:flex items-center gap-4">
              <LocaleSwitcher />
            </div>
            <div className="md:hidden">
              <HamburgerMenu />
            </div>
          </div>
        </div>
      </nav>
      <div className="fixed top-20 inset-x-0 z-40">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex justify-end">
            <div
              className={`bg-alliedPurple text-white text-sm px-3 rounded-b-md shadow-md inline-flex gap-4 pointer-events-auto ${
                currentLocale === "en" ? "py-1" : "py-2"
              }`}
            >
              <a
                href={`tel:${dictionary.phone}`}
                className="hover:underline flex items-center"
              >
                <span className="hidden md:inline">{dictionary.phone}</span>
              </a>
              <span className="hidden md:inline">|</span>
              <a
                href={`mailto:${dictionary.email}`}
                className="hover:underline flex items-center"
              >
                <span className="hidden md:inline">{dictionary.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
