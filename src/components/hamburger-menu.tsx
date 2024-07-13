"use client";

import { useState, useContext } from "react";
import Link from "next/link";
import { navigationMenuButtonStyles } from "@utils/navigationMenuButtonStyles";
import LocaleSwitcher from "@components/locale-switch/locale-switch";
import { LanguageContext } from "@components/language-context-provider";

export default function HamburgerMenu() {
  const dictionary = useContext(LanguageContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <nav
        className={`absolute top-full left-0 w-full bg-white shadow-md md:shadow-none md:bg-transparent md:relative md:w-auto md:flex gap-10 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link href="/" className={navigationMenuButtonStyles()}>
          {dictionary?.nav.home}
        </Link>
        <Link href="/about" className={navigationMenuButtonStyles()}>
          {dictionary?.nav.about}
        </Link>
        <Link href="/contact" className={navigationMenuButtonStyles()}>
          {dictionary?.nav.contact}
        </Link>
        <div className="flex items-center gap-4 p-4 md:p-0">
          <LocaleSwitcher />
        </div>
      </nav>
    </>
  );
}
