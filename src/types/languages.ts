import { StaticImageData } from "next/image";

export type LanguageKey = "en" | "es";

export type Langs = { key: LanguageKey; name: string; icon: StaticImageData }[];
