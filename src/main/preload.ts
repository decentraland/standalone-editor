import { contextBridge } from 'electron';
import { initRendererApi } from './ipc/api';

initRendererApi();

// to fix https://github.com/decentraland/ui-env/blob/master/src/env.ts#L122...
contextBridge.exposeInMainWorld('process', {
  env: {},
});
