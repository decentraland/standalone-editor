import { IpcMainInvokeEvent } from 'electron';

import { handleInvoke } from '../types';
import { getWorkspace } from '../../modules/workspace';

import { MessageType } from '../../../shared/enums';

export function initWorkspace() {
  function getWorkspaceHandler(_: IpcMainInvokeEvent) {
    return getWorkspace();
  }

  return {
    getWorkspace: handleInvoke(MessageType.GET_WORKSPACE, getWorkspaceHandler),
  };
}
