import {
  createTranslationSlice,
  createTranslationFetcher,
} from '../dapps-translation-v2/translation/slice';
import * as languages from './languages';

export const fetchTranslations = createTranslationFetcher({
  translations: languages as any,
});

export const { reducer, actions } = createTranslationSlice({
  fetchTranslations,
});
