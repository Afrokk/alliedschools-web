"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { NotoSans, NotoUrdu } from "@/[lang]/fonts";
import type { Locale } from "../lib/i18n-config";

export default function LocaleSwitcher() {
  const pathName = usePathname();

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
          className={`${NotoSans.className} bg-white text-blue-500 px-4 py-1 rounded-full`}
        >
          English
        </Link>
        <Link
          href={redirectedPathName("ur")}
          className={`${NotoUrdu.className} text-gray-500 px-4 py-1 rounded-full`}
        >
          اردو
        </Link>
      </div>
    </div>
  );
}
