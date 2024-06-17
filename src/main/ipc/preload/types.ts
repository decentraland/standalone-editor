import { Tail as IgnoreEvent } from '../../../shared/types';
import { handleInvoke } from '../../modules/ipc';

export type IpcModule = {
  [k: string]: ReturnType<typeof handleInvoke>;
};

export type IpcHandlers<T extends IpcModule> = {
  [K in keyof T]: (
    ...params: IgnoreEvent<Parameters<T[K]['handler']>>
  ) => Promise<ReturnType<T[K]['handler']>>;
};
