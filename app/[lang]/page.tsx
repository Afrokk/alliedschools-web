import { getDictionary } from "@utils/getDictionary";
import { Locale } from "@lib/i18n-config";
import HeroSection from "@components/hero-section";

export default async function IndexPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      <HeroSection />
    </div>
  );
}
