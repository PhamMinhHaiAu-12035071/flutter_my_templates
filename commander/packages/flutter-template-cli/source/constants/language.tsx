const enum Locale {
  en = 'en',
  vi = 'vi',
  jp = 'jp',
}
interface Language {
  id: string;
  name: string;
  locale: Locale;
}

const languages: Array<Language> = [
  {
    id: '0',
    name: 'English',
    locale: Locale.en,
  },
  {
    id: '1',
    name: 'Vietnamese',
    locale: Locale.vi,
  },
  {
    id: '2',
    name: 'Japanese',
    locale: Locale.jp,
  },
];

export { languages };

export type { Language };
