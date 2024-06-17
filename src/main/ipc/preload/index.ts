import { contextBridge } from 'electron';

import { initWorkspaceApi } from './workspace';
import { IpcHandlers, IpcModule } from './types';

// Q: this type is only to enforce the "IpcHandlers" type on the apis constant below,
// but is it necessary to do that?
type Api<T extends IpcModule> = {
  [key: string]: IpcHandlers<T>;
};

export function initRendererApi() {
  const apis: Api<IpcModule> = {
    workspace: initWorkspaceApi(),
  };

  // expose all api's to renderer using key/value for the respective name/definitions
  Object.entries(apis).forEach(([apiName, api]) => {
    contextBridge.exposeInMainWorld(apiName, api);
  });

  return apis;
}
