// @flow
import type { Action } from '../actions/types';

type Presets = {
  list: Array<string>,
  activePreset: string
}
const defaultPresets = { list: ['push', 'email'], activePreset: 'push' };

export default function (presets: Presets = defaultPresets, action: Action) {
  const { type, payload } = action;
  switch (type) {
    case 'CHANGE_ACTIVE_PRESET':
      return Object.assign({}, presets, { activePreset: payload });
    default:
      return presets;
  }
}
