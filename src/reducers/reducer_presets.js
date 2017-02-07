import {
  CHANGE_ACTIVE_PRESET
} from '../actions/constants';

export default function(presets = {list: ['push', 'email'], activePreset: 'push'}, action) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_ACTIVE_PRESET:
      return Object.assign({}, presets, { activePreset: payload })
  }

  return presets;
}