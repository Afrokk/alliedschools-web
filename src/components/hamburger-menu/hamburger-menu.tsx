"use client";

import { useState, useContext } from "react";
import Link from "next/link";
import { navigationMenuButtonStyles } from "@utils/navigationMenuButtonStyles";
import LocaleSwitcher from "@components/locale-switch/locale-switch";
import { LanguageContext } from "@components/language-context-provider";

import "./hamburger-menu.css";

export default function HamburgerMenu() {
  const dictionary = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="relative h-10 w-10 flex items-center justify-center z-20"
      >
        <svg
          className={`absolute h-8 w-8 transition-opacity duration-200 ease-in-out ${
            isMenuOpen ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
          fill="none"
          viewBox="0 0 22 22"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
        <svg
          className={`absolute h-8 w-8 transition-opacity duration-200 ease-in-out ${
            isMenuOpen ? "opacity-100 scale-105" : "opacity-0 scale-95"
          }`}
          fill="none"
          viewBox="0 0 22 22"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <nav
        className={`fixed inset-0 z-10 bg-white transition-opacity duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } nav-animate ${isMenuOpen ? "nav-open" : "nav-closed"}`}
      >
        <div
          aria-label="Navigation Links"
          className="flex flex-col gap-8 items-center justify-center h-screen mt-5 mb-14"
        >
          <Link
            href="/"
            className={navigationMenuButtonStyles({ size: "mobile" })}
          >
            {dictionary?.nav.home}
          </Link>
          <Link
            href="/about"
            className={navigationMenuButtonStyles({ size: "mobile" })}
          >
            {dictionary?.nav.about}
          </Link>
          <Link
            href="/contact"
            className={navigationMenuButtonStyles({ size: "mobile" })}
          >
            {dictionary?.nav.contact}
          </Link>
          <LocaleSwitcher />
        </div>
      </nav>
    </>
  );
}
