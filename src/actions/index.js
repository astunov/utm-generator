// @flow

import type { Action } from './types';

export function changeActivePreset(newActivePreset: string): Action {
  return {
    type: 'CHANGE_ACTIVE_PRESET',
    payload: newActivePreset
  };
}
