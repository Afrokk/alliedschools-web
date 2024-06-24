import { cva } from "class-variance-authority";
import { NotoSans, NotoUrdu } from "../../../app/[lang]/fonts";

export const localeButtonStyles = cva(
  "px-4 py-2 rounded-full transition-all duration-300 ease-in-out",
  {
    variants: {
      active: {
        true: "bg-white text-alliedBlue",
        false: "text-gray-500",
      },
      font: {
        sans: NotoSans.className,
        urdu: NotoUrdu.className,
      },
    },
    compoundVariants: [
      { active: true, font: "sans", className: `${NotoSans.className}` },
      { active: true, font: "urdu", className: `${NotoUrdu.className}` },
    ],
  }
);
