"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../../../i18n-config";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div>
      <ul>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link
                className="p-2 bg-red-500 block rounded m-2 text-white"
                href={redirectedPathName(locale)}
              >
                {locale}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
