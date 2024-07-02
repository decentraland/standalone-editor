import { useEffect } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import { store, useDispatch, useSelector } from './modules/store';
import { TranslationProvider } from './dapps-v2/TranslationProvider';
import { fetchTranslations } from './modules/store/reducers/translation';
import { locales } from './modules/store/reducers/translation/utils';
import { getWorkspace } from './modules/store/reducers/workspace/thunks';

import { ScenesPage } from './components/ScenesPage';
import { SortBy } from './components/ScenesPage/types';

import './themes';

const noop = () => undefined;

function Root() {
  const dispatch = useDispatch();
  const workspace = useSelector((state) => state.workspace);

  useEffect(() => {
    dispatch(getWorkspace());
  }, []);

  return (
    <div className="CardList">
      <ScenesPage
        projects={workspace.projects}
        sortBy={SortBy.NEWEST}
        onOpenModal={noop}
        onSort={noop}
      />
    </div>
  );
}

export function App() {
  return (
    <StoreProvider store={store}>
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
    </StoreProvider>
  );
}
