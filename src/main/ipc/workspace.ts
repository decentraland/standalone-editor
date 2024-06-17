import { IpcMainInvokeEvent } from 'electron';

import { isDCL } from '../modules/workspace';
import { Channel, MessageType } from '../../shared/enums';
import { handleInvoke } from '../modules/ipc';

export const channel: Channel = 'workspace';

export function initWorkspace() {
  function getWorkspace(_: IpcMainInvokeEvent, asd: string) {
    console.log('getWorkspace', asd);
    return {
      isDCL: isDCL(),
    };
  }

  return {
    getWorkspace: handleInvoke(MessageType.GET_WORKSPACE, getWorkspace),
  };
}
