import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import { store } from './modules/common/store';

import { TranslationProvider } from './modules/dapps-translation-v2/TranslationProvider';
import { fetchTranslations } from './modules/translation';
import { locales } from './modules/translation/utils';

import ProjectCard from './components/ProjectCard';
import { Project, TemplateStatus } from './modules/project';

// import './App.css';
import './themes';

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
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onDeleteProject={noop}
          onDuplicateProject={noop}
          onOpenModal={noop}
          onLoadProjectScene={noop}
        />
      ))}
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
