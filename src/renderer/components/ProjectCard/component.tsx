import { useCallback, useEffect, useState } from 'react';
import { Confirm, Button } from 'decentraland-ui';

import { useSelector } from '../../modules/common/store';
import { t } from '../../dapps-v2/translation/utils';

import { DeploymentStatus } from '../DeploymentStatus';
import { Icon } from '../Icon';
import { OptionsDropdown } from '../OptionsDropdown';
import { SDKTag } from '../SDKTag';
import { getThumbnailUrl } from '../../modules/project';
import { isRemoteURL } from '../../modules/media';

import { selectCard } from './selectors';
import { Props } from './types';
import './styles.css';

export function ProjectCard({
  project,
  onClick,
  onDeleteProject,
  onDuplicateProject,
  onOpenModal,
  onLoadProjectScene,
}: Props) {
  const { parcels, scene, isUploading, hasError, type } = useSelector((state) =>
    selectCard(state, project),
  );
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    onLoadProjectScene(project, type);
  });

  const handleOnClick = useCallback(() => {
    if (onClick) {
      onClick(project);
    }
  }, [project, onClick]);

  const handleConfirmDeleteProject = useCallback(() => {
    setIsDeleting(true);
  }, []);

  const handleCancelDeleteProject = useCallback(() => {
    setIsDeleting(false);
  }, []);

  const handleDeleteProject = useCallback(() => {
    onDeleteProject(project);
    setIsDeleting(false);
  }, [project, onDeleteProject]);

  const handleDuplicateProject = useCallback(() => {
    onDuplicateProject(project);
  }, [project, onDuplicateProject]);

  const handleExportScene = useCallback(() => {
    onOpenModal('ExportModal', { project });
  }, [project, onOpenModal]);

  let style = {};
  let classes = 'ProjectCard';

  let thumbnailUrl = getThumbnailUrl(project, scene);
  if (thumbnailUrl) {
    // prevent caching remote images when they are updated
    if (thumbnailUrl && isRemoteURL(thumbnailUrl)) {
      thumbnailUrl += `?updated_at=${+new Date(project.updatedAt)}`;
    }
    style = { backgroundImage: `url(${thumbnailUrl})` };
    classes += ' has-thumbnail';
  }

  const dropdownOptions = [
    {
      text: t('scenes_page.project_actions.duplicate_project'),
      handler: handleDuplicateProject,
    },
    {
      text: t('scenes_page.project_actions.export_project'),
      handler: handleExportScene,
    },
    {
      text: t('scenes_page.project_actions.delete_project'),
      handler: handleConfirmDeleteProject,
    },
  ];

  const children = (
    <>
      <div className="project-thumbnail" style={style} />
      <>
        <DeploymentStatus
          projectId={project.id}
          className="deployment-status"
        />
        <div className="options-container">
          <SDKTag scene={scene} />
          <OptionsDropdown
            className="options-dropdown"
            options={dropdownOptions}
          />
        </div>
      </>
      <div className="project-data">
        <div className="title-wrapper">
          <div className="title">{project.title}</div>
          {isUploading ? (
            <Icon name="cloud-upload" className="is-uploading" />
          ) : null}
          {!isUploading && hasError ? (
            <div className="error-indicator" />
          ) : null}
        </div>
        <div className="description" title={project.description}>
          <Icon name="scene-parcel" />{' '}
          {t('public_page.parcel_count', { parcels })}
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div className={classes} onClick={handleOnClick}>
        {children}
      </div>

      <Confirm
        size="tiny"
        open={isDeleting}
        header={t('project_card.confirm_delete_header', {
          title: project.title,
        })}
        content={t('project_card.confirm_delete_content', {
          title: project.title,
        })}
        confirmButton={<Button primary>{t('global.confirm')}</Button>}
        cancelButton={<Button secondary>{t('global.cancel')}</Button>}
        onCancel={handleCancelDeleteProject}
        onConfirm={handleDeleteProject}
      />
    </>
  );
}
