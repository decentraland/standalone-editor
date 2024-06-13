// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer } from 'electron'

import { getWorkspace } from '../main'
import { MessageType } from '../../shared/messages'

export const channel = 'workspace'

const workspace = {
  getWorkspace(): Promise<ReturnType<typeof getWorkspace>> {
    return ipcRenderer.invoke(MessageType.GET_WORKSPACE)
  },
}

contextBridge.exposeInMainWorld('workspace', workspace)

export type Workspace = typeof workspace
