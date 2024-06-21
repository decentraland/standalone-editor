import { reducer as translationReducer } from '../translation';

export function createRootReducer() {
  return {
    translation: translationReducer,
  };
}
