import Link from "next/link";
import LocaleSwitcher from "@components/locale-switch/locale-switch";
import { cva } from "class-variance-authority";
import { getDictionary } from "@utils/getDictionary";
import type { Locale } from "@lib/i18n-config";
import { NotoSans } from "@app/fonts";

export default async function Navbar({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary(lang);

  const navigationMenuButtonStyles = cva(
    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
  );

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link
            href="#"
            className={`${NotoSans.className} flex items-center font-bold text-2xl`}
          >
            Allied<span className="font-normal">Schools</span>
          </Link>
          <nav className="hidden md:flex gap-10">
            <Link href="/" className={navigationMenuButtonStyles()}>
              {dictionary.nav.home}
            </Link>
            <Link href="/about" className={navigationMenuButtonStyles()}>
              {dictionary.nav.about}
            </Link>
            <Link href="/contact" className={navigationMenuButtonStyles()}>
              {dictionary.nav.contact}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
