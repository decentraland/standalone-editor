import { Project } from '../../../shared/types/projects';
import { RootState } from '../../modules/common/types';
import { DeploymentStatus } from '../../modules/deployment';
import { PreviewType } from '../../modules/editor';
import { Scene } from '../../modules/scene';

export function selectCard(_: RootState, project: Project) {
  const parcels = project.layout.cols * project.layout.rows;
  const scene: Scene = { id: '1', composite: {} as any, mappings: {} };
  const type = PreviewType.POOL;

  return {
    parcels,
    scene,
    deploymentStatus: DeploymentStatus.UNPUBLISHED,
    deployments: [],
    isUploading: false,
    hasError: false,
    type,
  };
}
