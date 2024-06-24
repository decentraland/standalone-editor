import { useEffect, useState } from 'react';
// import { Loader } from 'decentraland-ui';

import { Props } from './types';
import { I18nProvider } from '../translation/utils';
import { selectTranslations } from '../translation/selectors';
import { useDispatch, useSelector } from '../../modules/common/store';
import { Locale } from '../translation/types';

export function TranslationProvider({
  children,
  locales,
  fetchTranslations,
}: Props) {
  const dispatch = useDispatch();
  const { locale, translations } = useSelector((state) =>
    selectTranslations(state, locales),
  );
  const [_locale, setLocale] = useState<Locale | undefined>();

  useEffect(() => {
    if (locale && _locale !== locale) {
      dispatch(fetchTranslations(locale));
      setLocale(locale);
    }
  }, [locale, fetchTranslations]);

  return translations && locale ? (
    <I18nProvider key={locale} locale={locale} messages={translations}>
      {children}
    </I18nProvider>
  ) : (
    'LOADING'
  );
}
