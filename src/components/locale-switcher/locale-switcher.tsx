"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Locale } from "@lib/i18n-config";
import { localeButtonStyles } from "./styles";

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const activeLocale = (locale: Locale) => pathName.split("/")[1] === locale;

  function redirectedPathName(locale: Locale) {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  }

  return (
    <div className="flex items-center space-x-2">
      <div className="flex bg-gray-200 rounded-full p-1">
        <Link
          href={redirectedPathName("en")}
          className={localeButtonStyles({
            active: activeLocale("en"),
            font: "sans",
          })}
        >
          English
        </Link>
        <Link
          href={redirectedPathName("ur")}
          className={localeButtonStyles({
            active: activeLocale("ur"),
            font: "urdu",
          })}
        >
          اردو
        </Link>
      </div>
    </div>
  );
}
