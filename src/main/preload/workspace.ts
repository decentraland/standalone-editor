import { contextBridge, ipcRenderer } from 'electron';

import { MessageType } from '../../shared/enums';
import { initWorkspace } from '../ipc/workspace';

type InitWorkspace = ReturnType<typeof initWorkspace>;

type IgnoreEvent<T extends any[]> = T extends [any, ...infer Rest]
  ? Rest
  : never;

type WorskpaceHandlers = {
  [K in keyof InitWorkspace]: (
    ...params: IgnoreEvent<Parameters<InitWorkspace[K]['handler']>>
  ) => Promise<ReturnType<InitWorkspace[K]['handler']>>;
};

const workspace: WorskpaceHandlers = {
  getWorkspace(...params) {
    return ipcRenderer.invoke(MessageType.GET_WORKSPACE, ...params);
  },
};

contextBridge.exposeInMainWorld('workspace', workspace);

export type Workspace = typeof workspace;
