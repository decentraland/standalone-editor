import { ipcMain, IpcMainInvokeEvent } from 'electron';

import { Tail as IgnoreEvent } from '../../shared/types';
import { IpcHandlerType, MessageType } from '../../shared/enums';

// Main
export type HandlerFn<P extends any[], K> = (
  e: IpcMainInvokeEvent,
  ...args: P
) => K;
export type Handler<T extends IpcHandlerType, P extends any[], K> = {
  type: T;
  handler: HandlerFn<P, K>;
};
export type InvokeHandler<P extends any[], K> = Handler<'INVOKE', P, K>;

export function handleInvoke<T extends MessageType, P extends any[], K>(
  type: T,
  handler: HandlerFn<P, K>,
): InvokeHandler<P, K> {
  ipcMain.handle(type, handler);
  return { type: 'INVOKE', handler };
}

// Renderer
export type IpcModule = {
  [k: string]: ReturnType<typeof handleInvoke>;
};

export type IpcHandlers<T extends IpcModule> = {
  [K in keyof T]: (
    ...params: IgnoreEvent<Parameters<T[K]['handler']>>
  ) => Promise<ReturnType<T[K]['handler']>>;
};
