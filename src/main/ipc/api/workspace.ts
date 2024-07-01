import { ipcRenderer } from 'electron';

import { initWorkspace } from '../handlers/workspace';
import { IpcHandlers, MessageType } from '../types';

export function initWorkspaceApi() {
  const workspaceApi: IpcHandlers<ReturnType<typeof initWorkspace>> = {
    getWorkspace(...params) {
      return ipcRenderer.invoke(MessageType.GET_WORKSPACE, ...params);
    },
  };

  return workspaceApi;
}
