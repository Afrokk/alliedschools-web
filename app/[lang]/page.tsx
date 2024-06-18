import { getDictionary } from "../../utils/getDictionary";
import { Locale } from "../../i18n-config";
import LocaleSwitcher from "./components/locale-switcher";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <LocaleSwitcher />
      <h1>{dictionary.hero.heading}</h1>
      <p>Current locale: {lang}</p>
    </div>
  );
}
