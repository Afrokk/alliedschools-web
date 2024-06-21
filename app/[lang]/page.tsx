import { getDictionary } from "@utils/getDictionary";
import { Locale } from "@lib/i18n-config";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex flex-col justify-center items-center mx-auto h-screen">
      <h1 className="font-bold">{dictionary.hero.heading}</h1>
      <p>Current locale: {lang}</p>
    </div>
  );
}
