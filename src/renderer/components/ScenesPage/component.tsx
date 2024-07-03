import React, { useCallback } from 'react';
import classNames from 'classnames';
import {
  Container,
  Button,
  Dropdown,
  DropdownProps,
  Row,
  Header,
  Section,
  Column,
} from 'decentraland-ui';

import { t } from '../../dapps-v2/translation/utils';

import { SceneCreationSelector } from '../SceneCreationSelector';
import { ProjectCard } from '../ProjectCard';

import { Props, SortBy } from './types';

import './styles.css';

function NoScenesAnchor(content: string) {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href="https://docs.decentraland.org/creator/development-guide/sdk-101/"
    >
      {content}
    </a>
  );
}

export function ScenesPage({ projects, sortBy, onOpenModal, onSort }: Props) {
  const handleOpenImportModal = useCallback(() => {
    onOpenModal('ImportModal');
  }, [onOpenModal]);

  const handleOpenCreateModal = useCallback(() => {
    onOpenModal('SceneCreationModal');
  }, [onOpenModal]);

  const renderImportButton = () => {
    return (
      <Button inverted className="import-scene" onClick={handleOpenImportModal}>
        {t('scenes_page.upload_scene')}
      </Button>
    );
  };

  const renderCreateButton = () => {
    return (
      <Button primary className="create-scene" onClick={handleOpenCreateModal}>
        {t('scenes_page.create_scene')}
      </Button>
    );
  };

  const sort = useCallback(
    (_sortBy: SortBy) => {
      onSort(_sortBy);
    },
    [sortBy, onSort],
  );

  const handleDropdownChange = useCallback(
    (
      _event: React.SyntheticEvent<HTMLElement, Event>,
      { value }: DropdownProps,
    ) => sort(value as SortBy),
    [sort],
  );

  const renderSortDropdown = () => {
    return (
      <Dropdown
        direction="left"
        value={sortBy}
        options={[
          { value: SortBy.NEWEST, text: t('scenes_page.sort.newest') },
          { value: SortBy.NAME, text: t('scenes_page.sort.name') },
          { value: SortBy.SIZE, text: t('scenes_page.sort.size') },
        ]}
        onChange={handleDropdownChange}
      />
    );
  };

  const noop = () => undefined;

  const renderProjects = () => {
    if (projects.length > 0) {
      return (
        <div className="CardList">
          {projects.map((project) => (
            <ProjectCard
              key={project.path}
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

    return (
      <div className="no-scenes-container">
        <h3 className="no-scenes-title">{t('scenes_page.no_scenes.title')}</h3>
        <span className="no-scenes-description">
          {t('scenes_page.no_scenes.description', { a: NoScenesAnchor })}
        </span>
        <SceneCreationSelector onOpenModal={handleOpenCreateModal} />
      </div>
    );
  };

  return (
    <div className="ScenesPage">
      <Container>
        <Section className="projects-menu">
          <Row>
            <Column>
              <Header>{t('scenes_page.my_scenes')}</Header>
            </Column>
            <Column align="right">
              <div className="actions">
                {renderImportButton()}
                {renderCreateButton()}
              </div>
            </Column>
          </Row>
          <Row className="actions">
            <Column>
              <div className="items-count">
                {t('scenes_page.results', { count: projects.length })}
              </div>
            </Column>
            <Column align="right">
              {projects.length > 1 ? renderSortDropdown() : null}
            </Column>
          </Row>
        </Section>
        <Section className={classNames('project-cards')}>
          {renderProjects()}
        </Section>
      </Container>
    </div>
  );
}
