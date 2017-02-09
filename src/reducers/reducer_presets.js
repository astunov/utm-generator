import type { Action } from '../actions/types';
import defaultPresets from '../../data/default-presets';

type Presets = {
  list: Array<Object>,
  activePreset: string
};

export default function (presets: Presets = defaultPresets, action: Action) {
  const { type, payload } = action;
  switch (type) {
    case 'CHANGE_ACTIVE_PRESET':
      return Object.assign({}, presets, { activePreset: payload });
    default:
      return presets;
  }
}
