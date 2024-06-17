import { ipcMain, IpcMainInvokeEvent } from 'electron';

import { IpcHandlerType } from '../../shared/enums';

// Generic stuff...
export type HandlerFn<P extends any[], K> = (
  e: IpcMainInvokeEvent,
  ...args: P
) => K;
export type Handler<T extends IpcHandlerType, P extends any[], K> = {
  type: T;
  handler: HandlerFn<P, K>;
};
export type InvokeHandler<P extends any[], K> = Handler<'INVOKE', P, K>;

// Usable stuff...
export function handleInvoke<T extends string, P extends any[], K>(
  type: T,
  handler: HandlerFn<P, K>,
): InvokeHandler<P, K> {
  ipcMain.handle(type, handler);
  return { type: 'INVOKE', handler };
}
