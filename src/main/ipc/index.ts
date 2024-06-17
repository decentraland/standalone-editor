import { initWorkspace } from './workspace';

export function initIpc() {
  return {
    workspace: initWorkspace(),
  }
}
