import { initWorkspaceApi } from './workspace';

export function initRendererApi() {
  return {
    workspace: initWorkspaceApi(),
  };
}
