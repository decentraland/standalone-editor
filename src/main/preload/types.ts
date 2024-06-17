import { handleInvoke } from '../modules/ipc';

type IpcModule = {
  [k: string]: ReturnType<typeof handleInvoke>;
};

type IgnoreEvent<T extends any[]> = T extends [any, ...infer Rest]
  ? Rest
  : never;

export type IpcHandlers<T extends IpcModule> = {
  [K in keyof T]: (
    ...params: IgnoreEvent<Parameters<T[K]['handler']>>
  ) => Promise<ReturnType<T[K]['handler']>>;
};
