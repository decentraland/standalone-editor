import { ReactNode } from 'react';

import { Locale } from '../translation/types';
import { createTranslationFetcher } from '../translation/slice';

export type Props = {
  fetchTranslations: (
    locale: Locale,
  ) => ReturnType<ReturnType<typeof createTranslationFetcher>>;
  locales: Locale[];
  children?: ReactNode;
};
