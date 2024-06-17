import { WorkspaceApi } from '../main/preload/workspace';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    workspace: WorkspaceApi;
  }
}

export {};
