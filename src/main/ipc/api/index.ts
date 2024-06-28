import { contextBridge } from 'electron';

import { initWorkspaceApi } from './workspace';
import { IpcHandlers, IpcModule } from '../types';

// Q: this function is only to enforce the "IpcHandlers" type on the apis constant below,
// but is it necessary to do that?
function createApi<
  K extends IpcModule,
  T extends { [key: string]: IpcHandlers<K> },
>(apis: T) {
  return apis;
}

export function initRendererApi() {
  const apis = createApi({
    workspace: initWorkspaceApi(),
  });

  // expose all api's to renderer using key/value for the respective name/definitions
  Object.entries(apis).forEach(([apiName, api]) => {
    contextBridge.exposeInMainWorld(apiName, api);
  });

  return apis;
}
