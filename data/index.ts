import { getCurrentLocale } from '@/locales/server';
import { Data } from '@/types/data';
import { AppConfig, LocaleId } from '@/app.config';

import en from '@/data/en';
import ja from '@/data/ja';

export const getData = () => {
  const data: {
    [key in LocaleId]: Data;
  } = {
    en,
    ja,
  };

  let locale: keyof typeof data;

  try {
    locale = getCurrentLocale();
  } catch (e) {
    locale = AppConfig.defaultLocale as keyof typeof data;
  }

  return data[locale] as Data;
};
