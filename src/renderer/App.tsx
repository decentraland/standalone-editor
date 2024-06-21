import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import { store } from './modules/common/store';

import icon from '../../assets/icon.svg';
import { TranslationProvider } from './modules/dapps-translation-v2/TranslationProvider';
import { fetchTranslations } from './modules/translation';
import { locales } from './modules/translation/utils';

import './App.css';
import './themes';

function Root() {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
    </div>
  );
}

export function App() {
  useEffect(() => {
    window.workspace
      .getWorkspace()
      .then((workspace) => {
        console.log('Testing ipc: ', workspace);
        return 1;
      })
      .catch(() => {});
  }, []);

  return (
    <Provider store={store}>
      <TranslationProvider
        locales={locales}
        fetchTranslations={fetchTranslations}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Root />} />
          </Routes>
        </Router>
      </TranslationProvider>
    </Provider>
  );
}
