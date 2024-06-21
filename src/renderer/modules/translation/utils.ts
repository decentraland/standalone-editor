import { Locale } from '../dapps-translation-v2/translation/types';
import * as languages from './languages';

export const locales = Object.keys(languages) as Locale[];
