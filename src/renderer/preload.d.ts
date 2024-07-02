import { initRendererApi } from '../main/ipc/api';

type RendererApis = ReturnType<typeof initRendererApi>;

declare global {
  interface Window {
    api: RendererApis;
  }
}

export {};
