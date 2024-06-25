import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import { store } from './modules/common/store';

import { TranslationProvider } from './dapps-v2/TranslationProvider';
import { fetchTranslations } from './modules/translation';
import { locales } from './modules/translation/utils';

import { ScenesPage } from './components/ScenesPage';
import { Project, TemplateStatus } from './modules/project';

import './themes';
import { SortBy } from './components/ScenesPage/types';

const projects: Project[] = [
  {
    id: '1',
    title: 'some-title',
    description: 'some long long description',
    thumbnail: '',
    isPublic: true,
    sceneId: 'some-scene-id',
    ethAddress: null,
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
    layout: { rows: 5, cols: 5 },
    isTemplate: false,
    video: null,
    templateStatus: TemplateStatus.ACTIVE,
  },
  {
    id: '2',
    title: 'some-title',
    description: 'some long long description',
    thumbnail: '',
    isPublic: true,
    sceneId: 'some-scene-id',
    ethAddress: null,
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
    layout: { rows: 3, cols: 3 },
    isTemplate: false,
    video: null,
    templateStatus: TemplateStatus.COMING_SOON,
  },
];

const noop = () => undefined;

function Root() {
  return (
    <div className="CardList">
      <ScenesPage
        projects={projects}
        sortBy={SortBy.NEWEST}
        onOpenModal={noop}
        onSort={noop}
      />
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
