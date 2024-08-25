import { cva } from "class-variance-authority";

export const navigationMenuButtonStyles = cva(
  "group h-10 items-center justify-center rounded-md px-4 py-2 font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 hover:text-alliedDarkBlue",
  {
    variants: {
      size: {
        base: "inline-flex w-max bg-background",
        mobile: "flex w-1/4 bg-gray-50 mx-4",
      },
      shape: {
        rounded: "rounded-md",
        circle: "rounded-full",
      },
    },
    defaultVariants: {
      size: "base",
      shape: "rounded",
    },
  }
);
