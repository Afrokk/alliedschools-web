import { getDictionary } from "@utils/getDictionary";
import LocaleSwitcher from "@components/locale-switcher";
import { Locale } from "@lib/i18n-config";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <LocaleSwitcher />
      <h1 className="font-bold">{dictionary.hero.heading}</h1>
      <p>Current locale: {lang}</p>
    </>
  );
}
