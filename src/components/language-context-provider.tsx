"use client";

import { createContext } from "react";
import { Dictionary } from "@customTypes/dictionary";

export const LanguageContext = createContext<Dictionary | null>(null);

export default function LanguageContextProvider({
  children,
  dictionary,
}: Readonly<{ children: React.ReactNode; dictionary: Dictionary }>) {
  return (
    <LanguageContext.Provider value={dictionary}>
      {children}
    </LanguageContext.Provider>
  );
}
