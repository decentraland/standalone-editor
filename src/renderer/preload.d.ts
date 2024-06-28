import { initRendererApi } from '../main/ipc/api';

type RendererApis = ReturnType<typeof initRendererApi>;

declare global {
  interface Window extends RendererApis {}
}

export {};
