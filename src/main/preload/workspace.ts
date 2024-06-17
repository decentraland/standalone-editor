import { contextBridge, ipcRenderer } from 'electron';

import { MessageType } from '../../shared/enums';
import { initWorkspace } from '../ipc/workspace';
import { IpcHandlers } from './types';

export function initWorkspaceApi() {
  const workspaceApi: IpcHandlers<ReturnType<typeof initWorkspace>> = {
    getWorkspace(...params) {
      return ipcRenderer.invoke(MessageType.GET_WORKSPACE, ...params);
    },
  };

  contextBridge.exposeInMainWorld('workspace', workspaceApi);
  return workspaceApi;
}

export type WorkspaceApi = ReturnType<typeof initWorkspaceApi>;
