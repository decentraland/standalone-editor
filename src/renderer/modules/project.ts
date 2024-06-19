import { Media } from "./media";
import { Scene } from "./scene";

export type Layout = {
  rows: number;
  cols: number;
};

export enum TemplateStatus {
  ACTIVE = 'active',
  COMING_SOON = 'coming_soon',
}

export type Project = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  isPublic: boolean;
  sceneId: string;
  ethAddress: string | null;
  createdAt: string;
  updatedAt: string;
  layout: Layout;
  isTemplate: boolean;
  video: string | null;
  templateStatus: TemplateStatus | null;
};

export function getThumbnailUrl(
  project: Project,
  scene?: Scene | null,
  media?: Media | null,
) {
  const thumbnailUrl = media ? media.preview : project.thumbnail;
  if (scene && scene.metadata?.display?.navmapThumbnail) {
    const hash = scene.mappings[scene.metadata?.display?.navmapThumbnail];
    if (hash) {
      // thumbnailUrl = getContentsStorageUrl(hash);
    }
  }
  return thumbnailUrl;
}
