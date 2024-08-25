import Link from "next/link";
import Image from "next/image";
import LocaleSwitcher from "@components/locale-switch/locale-switch";
import { navigationMenuButtonStyles } from "@utils/navigationMenuButtonStyles";
import { NotoSans } from "@app/fonts";
import HamburgerMenu from "@components/hamburger-menu/hamburger-menu";

import type { Dictionary } from "@customTypes/dictionary";

export default async function Navbar({
  dictionary,
}: {
  dictionary: Dictionary["nav"];
}) {
  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
        <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex justify-between h-20 items-center z-10">
            <Link
              href="#"
              className={`${NotoSans.className} flex items-center font-bold text-3xl tracking-tight z-50`}
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
                    Norouz Campus
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
            <div className="hidden md:flex items-center gap-4 z-10">
              <LocaleSwitcher />
            </div>
            <div className="md:hidden">
              <HamburgerMenu />
            </div>
          </div>
        </div>
      </nav>
      <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
        <div className="absolute z-0 right-4 md:-top-3 top-1 transform translate-y-full mt-2 md:p-4 p-3 bg-alliedPurple text-white md:text-base text-sm rounded-lg shadow-lg md:w-66 w-54">
          <p>
            <a href="tel:123456789" className="cursor-pointer hover:underline">
              {dictionary.phone}
            </a>
          </p>
          <p>
            <a
              href="mailto:email@gmail.com"
              className="cursor-pointer hover:underline"
            >
              {dictionary.email}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
