import { initRendererApi } from '../main/ipc/preload';

type RendererApis = ReturnType<typeof initRendererApi>;

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window extends RendererApis {}
}

export {};
