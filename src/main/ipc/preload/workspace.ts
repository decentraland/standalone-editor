import { ipcRenderer } from 'electron';

import { MessageType } from '../../../shared/enums';
import { initWorkspace } from '../workspace';
import { IpcHandlers } from './types';

export function initWorkspaceApi() {
  const workspaceApi: IpcHandlers<ReturnType<typeof initWorkspace>> = {
    getWorkspace(...params) {
      return ipcRenderer.invoke(MessageType.GET_WORKSPACE, ...params);
    },
  };
  return workspaceApi;
}
