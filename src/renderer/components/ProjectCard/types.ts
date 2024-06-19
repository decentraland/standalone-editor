// import { openModal } from 'decentraland-dapps/dist/modules/modal/actions';
import { Scene } from '../../modules/scene';
import { Project } from '../../modules/project';
import { Deployment, DeploymentStatus } from '../../modules/deployment';
import { PreviewType } from '../../modules/editor';

export type Props = {
  parcels?: number;
  items?: number;
  project: Project;
  isUploading: boolean;
  hasError: boolean;
  deploymentStatus: DeploymentStatus;
  deployments: Deployment[];
  type: PreviewType;
  scene: Scene;
  onClick?: (project: Project) => void;
  onDeleteProject: (project: Project) => void;
  onDuplicateProject: (project: Project) => void;
  onOpenModal: (name: string, project: any) => void;
  onLoadProjectScene: (project: Project, type: PreviewType) => void;
};
