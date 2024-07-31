export type Locale = (typeof locales)[number];

export const locales = ['es', 'en', 'it', 'pt', 'fr'] as const;
export const defaultLocale: Locale = 'es';