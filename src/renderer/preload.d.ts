import { Ipc } from '../main/preload/ipc';
import { Workspace } from '../main/preload/workspace';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    ipc: Ipc
    workspace: Workspace
  }
}

export {};
