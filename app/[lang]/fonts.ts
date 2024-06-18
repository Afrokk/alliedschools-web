import { Noto_Sans, Noto_Nastaliq_Urdu } from 'next/font/google';

export const NotoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
});

export const NotoUrdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-noto-urdu",
});
