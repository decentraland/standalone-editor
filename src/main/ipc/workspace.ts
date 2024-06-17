import { IpcMainInvokeEvent } from 'electron';

import { isDCL } from '../modules/workspace';
import { MessageType } from '../../shared/enums';
import { handleInvoke } from '../modules/ipc';

export function initWorkspace() {
  function getWorkspace(_: IpcMainInvokeEvent) {
    return {
      isDCL: isDCL(),
    };
  }

  return {
    getWorkspace: handleInvoke(MessageType.GET_WORKSPACE, getWorkspace),
  };
}
