import Link from "next/link";
import LocaleSwitcher from "@components/locale-switch/locale-switch";
import { navigationMenuButtonStyles } from "@utils/navigationMenuButtonStyles";
import { NotoSans } from "@app/fonts";
import HamburgerMenu from "@components/hamburger-menu";

import type { Dictionary } from "@customTypes/dictionary";

export default async function Navbar({
  dictionary,
}: {
  dictionary: Dictionary["nav"];
}) {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link
            href="#"
            className={`${NotoSans.className} flex items-center font-bold text-3xl text-alliedPurple`}
          >
            Allied<span className="font-normal text-black">Schools</span>
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
  );
}
