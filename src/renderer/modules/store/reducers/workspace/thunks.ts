import { initThunkCreator } from '../utils';

const workspaceApi = window.api.workspace;
const createWorkspaceThunk = initThunkCreator('workspace');

export const getWorkspace = createWorkspaceThunk(workspaceApi.getWorkspace);
